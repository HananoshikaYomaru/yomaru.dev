import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import userConfig from "../../i18next.config.js";
import Layout from "../components/Layout";
import HomeHero from "../components/Index/HomeHero";
import CurrentFocus from "../components/Index/CurrentFocus";
import TechStack from "../components/Index/TechStack";
import Obsidian from "../components/Index/Obsidian";
import Work from "../components/Index/Work";
import GoToButton from "../components/GoToButton";

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
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], userConfig)),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
