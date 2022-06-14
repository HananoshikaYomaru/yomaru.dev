import Layout from "../components/Layout";

import GoodQualities from "../components/about/GoodQualities";
import FunFacts from "../components/about/FunFacts";
import MyValues from "../components/about/MyValues";
import SomeBackground from "../components/about/SomeBackground";
import AboutHero from "../components/about/AboutHero";
import CloudinaryImg from "../components/CloudinaryImg";

const Home = () => {
  return (
    <Layout>
      <AboutHero></AboutHero>

      <SomeBackground></SomeBackground>
      {/* my values */}
      <MyValues></MyValues>
      <div className=" mx-[12vw] lg:hidden ">
        <div className="rounded-lg bg-gray-200 w-full aspect-[4/3] overflow-hidden">
          <CloudinaryImg
            publicId="yomaru.dev/personal/IMG_0725_ot7wlv.webp"
            width={1200}
            height={900}
          ></CloudinaryImg>
        </div>
      </div>
      {/* good qualities */}
      <GoodQualities></GoodQualities>

      {/* fun facts */}
      <FunFacts></FunFacts>

      {/* see my blog */}
      {/* <SeeBlog></SeeBlog> */}

      {/* <CloudinaryImg publicId="yomaru.dev/A62C9231-1362-41C9-9B5D-C557AFD637FB_gdwcn2"></CloudinaryImg> */}
    </Layout>
  );
};

export default Home;
