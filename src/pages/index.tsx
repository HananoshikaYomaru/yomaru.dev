import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import userConfig from "../../i18next.config.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedback } from "../zodSchema/feedback";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

type FormInput = {
  name: string;
  text: string;
};

const Home: NextPage = () => {
  const { invalidateQueries } = trpc.useContext();
  // const hello = trpc.useQuery(["hello", { text: "client" }]);
  const addFeedback = trpc.useMutation("feedback.add", {
    onSuccess: () => {
      invalidateQueries(["hello"]);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(feedback),
  });
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  const [data, setData] = useState<any>();
  useEffect(() => {
    const pusher = new Pusher(
      process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
      {
        cluster: "ap3",
      }
    );
    const channel = pusher.subscribe("feedback");
    channel.bind("create-event", (data: any) => {
      setFeedbacks((feedbacks) => [...feedbacks, data]);
    });
    return () => {
      pusher.unsubscribe("feedback");
    };
  }, []);

  const { t } = useTranslation("common");

  return (
    <Layout>
      <HomeHero></HomeHero>
      {/* form */}
      <form
        onSubmit={handleSubmit(async (data) => {
          setData(data);
          const response = await addFeedback.mutateAsync(data);
          setData({
            ...data,
            response: response,
          });
          // setData(response);
        })}
        className="flex flex-col"
      >
        <p className="text-3xl font-bold capitalize">
          Leave a comment on the board
        </p>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          className="w-96 rounded-md"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name?.message}</p>
        )}
        <label htmlFor="text">Comment</label>
        <textarea
          id="text"
          className="border rounded-md w-96 h-56"
          {...register("text")}
        ></textarea>
        <button
          type="submit"
          disabled={addFeedback.isLoading}
          className="bg-blue-200 rounded shadow mt-3 hover:bg-blue-300"
        >
          submit
        </button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <div className="flex flex-col mt-5 space-y-2">
        {feedbacks.map((f) => {
          return (
            <pre key={f.name} className="p-2 bg-gray-100 rounded-md">
              {JSON.stringify(f, null, 2)}
            </pre>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], userConfig)),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
