import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import userConfig from "../../i18next.config.js";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Link href="/">
          <button className="bg-blue-200">{t("go-back")}</button>
        </Link>
        <p className="font-bold text-3xl ">Music</p>
        <iframe
          src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
          className="w-96 h-96 rounded-lg"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *"
          className="rounded-lg h-[450px]"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/hk/playlist/smokey/pl.u-d2b0MmZsd4D6Za?l=en"
        ></iframe>
        <p className="font-bold text-3xl ">Books</p>
        <p className="font-bold text-3xl ">Movies</p>
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
