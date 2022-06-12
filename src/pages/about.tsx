import Layout from "../components/Layout";

import GoodQualities from "../components/about/GoodQualities";
import FunFacts from "../components/about/FunFacts";
import MyValues from "../components/about/MyValues";
import SomeBackground from "../components/about/SomeBackground";
import AboutHero from "../components/about/AboutHero";
import SeeBlog from "../components/about/SeeBlog";
const Home = () => {
  return (
    <Layout>
      <AboutHero></AboutHero>

      <SomeBackground></SomeBackground>
      {/* my values */}
      <MyValues></MyValues>

      {/* good qualities */}
      <GoodQualities></GoodQualities>

      {/* fun facts */}
      <FunFacts></FunFacts>

      {/* see my blog */}
      <SeeBlog></SeeBlog>

      {/* <CloudinaryImg publicId="yomaru.dev/A62C9231-1362-41C9-9B5D-C557AFD637FB_gdwcn2"></CloudinaryImg> */}
    </Layout>
  );
};

export default Home;
