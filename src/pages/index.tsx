import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import userConfig from "../../i18next.config.js";
import Layout from "../components/Layout";
import HomeHero from "../components/index/HomeHero";
import CurrentFocus from "../components/index/CurrentFocus";
import TechStack from "../components/index/TechStack";
import Obsidian from "../components/index/Obsidian";
import Work from "../components/index/Work";
import GoToButton from "../components/GoToButton";
import { createSSGHelpers } from "@trpc/react/ssg";
import { workRouter } from "../server/routers/work";
import { createContext } from "../server/context";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HomeHero></HomeHero>
      <CurrentFocus></CurrentFocus>
      {/* <SkillGraph></SkillGraph> */}
      <TechStack></TechStack>
      <Obsidian></Obsidian>
      <Work></Work>
      <div className="mx-[12vw] mt-24 xl:mt-36 flex items-center justify-center">
        <GoToButton
          text="Learn more about yomaru"
          direction="right"
          href="/about"
        ></GoToButton>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  // Call an external API endpoint to get posts.
 // You can use any data fetching library
 const ssg =  createSSGHelpers( { 
  router : workRouter, 
  ctx : await createContext()  , 
})

  // prefetch `work.byId`
  await ssg.fetchQuery('getAllWorkWithSlug' , {
    limit: 3 
  });

 // By returning { props: { posts } }, the Blog component
 // will receive `posts` as a prop at build time
 return {
   props: {
    trpcState: ssg.dehydrate( )  , 
    ...(await serverSideTranslations(locale, ["common"], userConfig)),
   },

   revalidate : 1 , 
 }
}

export default Home;
