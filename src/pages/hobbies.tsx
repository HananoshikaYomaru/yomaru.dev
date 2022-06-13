import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import userConfig from "../../i18next.config.js";
import Layout from "../components/Layout";
import Music from "../components/hobbies/Music";
import Sport from "../components/hobbies/Sport";
import Poems from "../components/hobbies/Poems";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Poems></Poems>
      <Music></Music>
      <Sport></Sport>
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
