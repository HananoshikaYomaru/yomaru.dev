import Layout from "../../components/Layout";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { workRouter } from "../../server/routers/work";
import { createSSGHelpers } from "@trpc/react/ssg";
import { trpc } from "../../utils/trpc";
import { getAllSlugs } from "../../utils/contentful/work";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import CloudinaryImg, { extractPublicId } from "../../components/CloudinaryImg";
import { DateTime } from "luxon";
import styles from "../../css/markdown.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  let { work } = props;
  // const query = trpc.useQuery(["work.getWorkBySlug", { slug: work.slug }]);
  // if (query.status != "success") {
  //   return <>Loading...</>;
  // }
  // if (!work) {
  //   work = query.data;
  // }
  const publishAt = DateTime.fromISO(work.sys.firstPublishedAt);
  return (
    <Layout>
      <div className="mx-[5vw]  lg:mx-[22vw] mt-12 md:mt-24 ">
        <Link href="/work">
          <a className="flex flex-row items-center space-x-3 w-fit">
            <ArrowLeftIcon className="w-6 h-6"></ArrowLeftIcon>
            <span className="text-lg ">Back to overview</span>
          </a>
        </Link>
        <div className="mt-12 lg:mt-24">
          <p className="text-2xl md:text-4xl">{work.title}</p>
          <p>
            {publishAt.monthLong} {publishAt.day}, {publishAt.year} -{" "}
            {work.timeRead} read
          </p>
        </div>
      </div>
      <div className="mx-[5vw] lg:mx-[12vw] mt-12 lg:mt-24 bg-gray-200 aspect-[4/3] lg:aspect-[6/3] rounded-lg overflow-hidden">
        <CloudinaryImg
          publicId={extractPublicId(work.bannerImage[0].url)}
        ></CloudinaryImg>
      </div>
      <div
        className={`${styles.markdown} mx-[12vw] xl:mx-[24vw] max-w-6xl mt-12 md:mt-24`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline ? (
                <SyntaxHighlighter
                  language={match ? match[1] : undefined}
                  //@ts-ignore
                  style={
                    document.body.classList.contains("dark") ? okaidia : prism
                  }
                  PreTag="div"
                  showLineNumbers
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {work.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const ssg = createSSGHelpers({
    router: workRouter,
    ctx: {},
  });

  const slug = context.params?.slug as string;

  // prefetch `work.byId`
  const work = await ssg.fetchQuery("getWorkBySlug", {
    slug,
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      trpcState: ssg.dehydrate(),
      work,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: "blocking",
  };
};

export default Home;
