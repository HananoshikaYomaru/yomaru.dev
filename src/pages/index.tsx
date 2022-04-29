import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import userConfig from "../../i18next.config.js";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedback } from "../zodSchema/feedback";
import { useState } from "react";

type FormInput = {
  name: string;
  text: string;
};

const Home: NextPage = () => {
  const { invalidateQueries } = trpc.useContext();
  const hello = trpc.useQuery(["hello", { text: "client" }]);
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

  const [data, setData] = useState<any>();

  const { t } = useTranslation("common");

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <Image
        src="/icon-512x512.png"
        width="200"
        height="200"
        className="animate-bounceIn rounded-lg shadow-lg"
      ></Image>
      <p>{hello.data.greeting}</p>
      <p>{t("hello")}</p>
      <Link href="/" locale={"en"}>
        <button className="m-2 bg-blue-200">change locale (en)</button>
      </Link>
      <Link href="/" locale={"ja"}>
        <button className="m-2 bg-blue-200">change locale (ja)</button>
      </Link>
      <Link href="/" locale={"zh"}>
        <button className="m-2 bg-blue-200">change locale (zh)</button>
      </Link>
      <form
        onSubmit={handleSubmit(async (data) => {
          const response = await addFeedback.mutateAsync(data);
          setData(response);
        })}
        className="flex flex-col"
      >
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
    </div>
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
