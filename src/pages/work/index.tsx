import Layout from "../../components/Layout";
import WorkCards from "../../components/work/WordCards";
import WorkHero from "../../components/work/WorkHero";
import { createSSGHelpers } from "@trpc/react/ssg";
import { workRouter } from "../../server/routers/work";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../../../i18next.config";
import { createContext } from "../../server/context";
import { WorkProvider } from "../../contexts/work";
import type { InferGetStaticPropsType } from "next";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  let { works } = props;
  return (
    <Layout>
      <WorkProvider works={works}>
        <WorkHero></WorkHero>
        <WorkCards></WorkCards>
      </WorkProvider>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const ssg = createSSGHelpers({
    router: workRouter,
    ctx: await createContext(),
  });

  const works = await ssg.fetchQuery("getAllWorkWithSlug", {});

  return {
    props: {
      trpcState: ssg.dehydrate(),
      works: works,
      ...(await serverSideTranslations(locale, ["common"], userConfig)),
    },

    revalidate: 1,
  };
}

export default Home;
