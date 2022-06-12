import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import userConfig from "../../i18next.config.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedback } from "../zodSchema/feedback";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HomeHero></HomeHero>
      {/* form */}
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
