import Link from "next/link";
import { trpc } from "../utils/trpc";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import userConfig from "../../i18next.config";
import {
  InstantSearch,
  useHits,
  useSearchBox,
} from "react-instantsearch-hooks";
import { searchClient } from "../utils/algolia";
import { useEffect, useState } from "react";
import React from "react";
import Layout from "../components/Layout";

const CustomSearchBox = () => {
  const [value, setValue] = useState("");
  const { refine, query } = useSearchBox();
  useEffect(() => {
    console.log(query);
  }, [value]);
  return (
    <input
      value={value}
      className="border w-96"
      onChange={(e) => {
        setValue(e.currentTarget.value);
        refine(e.currentTarget.value);
      }}
    ></input>
  );
};

const CustomHits = () => {
  const { hits } = useHits();
  useEffect(() => {
    console.log(hits);
  }, [hits]);
  return (
    <ol className="flex flex-col space-y-2">
      {hits.map((hit) => (
        <li
          key={hit.objectID}
          className="p-2 rounded-lg shadow-md hover:bg-gray-50 "
        >
          {/* @ts-ignore */}
          <p>{hit.fields.title["en-US"]}</p>
          {/* @ts-ignore */}
          <p>{hit.fields.excerpt["en-US"]}</p>
          {/* @ts-ignore */}
          <pre>{hit.fields.content["en-US"]}</pre>
          {/* @ts-ignore */}
          <p>{hit.sys.createdAt}</p>
          <div className="flex flex-row space-x-1">
            {/* @ts-ignore */}
            {hit.metadata.tags.map((t) => (
              <p key={t.sys.id} className="rounded-md bg-blue-200 px-2 text-xs">
                {t.sys.id}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};

const Home = () => {
  // const posts = trpc.useQuery(["blogpost.all"], {
  //   onSuccess: () => {
  //     console.log("successfully fetch posts ");
  //   },
  // });
  const { t } = useTranslation("common");
  return (
    <Layout>
      {/* <InstantSearch indexName="posts" searchClient={searchClient}>
          <CustomSearchBox></CustomSearchBox>

          <CustomHits></CustomHits>
        </InstantSearch> */}
      {/* {posts.data ? (
      <div className="grid grid-cols-2 gap-5 my-10 mx-5">
        {posts.data.map((post) => {
          return (
            <div
              key={post.slug}
              id={post.slug}
              className="rounded-md border shadow p-2"
            >
              <p id="title" className="text-3xl font-bold">
                {post.title}
              </p>
              <img src={post.coverImage.url} alt="cover image" />
              <div id="author">
                <img
                  src={post.author.picture.url}
                  alt="author image"
                  className="w-10 h-10 rounded-full"
                />
                <p id="name">{post.author.name}</p>
                <p id="description">{post.author.description}</p>
              </div>
              <p id="date">{post.date}</p>
              <p id="excerpt">{post.excerpt}</p>
              <p id="content">{post.content}</p>
            </div>
          );
        })}
      </div>
    ) : (
      <div>still fetching....</div>
    )} */}
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
