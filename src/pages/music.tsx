import Layout from "../components/Layout";
import MusicHero from "../components/music/MusicHero";
import MusicPassion from "../components/music/MusicPassion";
import Playlist from "../components/music/Playlist";
import ThisIsMusic from "../components/music/ThisIsMusic";

const Home = () => {
  return (
    <Layout>
      <MusicHero></MusicHero>
      <MusicPassion></MusicPassion>
      <ThisIsMusic></ThisIsMusic>
      <Playlist></Playlist>
    </Layout>
  );
};

export default Home;
