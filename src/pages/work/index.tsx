import Layout from "../../components/Layout";
import WorkCards from "../../components/work/WordCards";
import WorkHero from "../../components/work/WorkHero";
import { createSSGHelpers } from "@trpc/react/ssg";
import { workRouter } from "../../server/routers/work";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../../../i18next.config";
import { createContext } from "../../server/context";

const Home = () => {
  return (
    <Layout>
      <WorkHero></WorkHero>
      <WorkCards></WorkCards>
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

  await ssg.fetchQuery("getAllWorkWithSlug", {});

  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...(await serverSideTranslations(locale, ["common"], userConfig)),
    },

    revalidate: 1,
  };
}

export default Home;
