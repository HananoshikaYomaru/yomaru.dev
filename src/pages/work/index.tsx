import Layout from "../../components/Layout";
import WorkCards from "../../components/work/WordCards";
import WorkHero from "../../components/work/WorkHero";

const Home = () => {
  return (
    <Layout>
      <WorkHero></WorkHero>
      <WorkCards></WorkCards>
    </Layout>
  );
};

export default Home;
