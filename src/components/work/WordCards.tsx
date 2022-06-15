import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { DateTime } from "luxon";
import hoverring from "../Index/hoverring.module.css";

import { Work } from "../../utils/contentful/work";

import CloudinaryImg, { extractPublicId } from "../CloudinaryImg";

type CardProps = {
  hiddenSm?: boolean;
} & Work;

export const WorkCard = ({ hiddenSm = false, ...work }: CardProps) => {
  const { title, slug, bannerImage } = work;
  const startTime = DateTime.fromISO(work.startTime);
  const endTime = DateTime.fromISO(work.endTime);
  const period = `${startTime.monthLong} ${startTime.year} - ${endTime.monthLong} ${endTime.year}`;
  return (
    <a
      className={`focus:outline-none col-span-4  flex-col cursor-pointer ${
        hoverring.root
      } ${hiddenSm ? " hidden lg:flex " : "flex"}`}
      href={`/work/${slug}`}
    >
      <div
        className={`aspect-[3/4] rounded-lg bg-gray-200  ${hoverring.target} border overflow-hidden`}
      >
        <CloudinaryImg
          publicId={extractPublicId(bannerImage[0].url)}
          width={600}
          height={800}
        />
      </div>
      <p className="mt-8 text-xl font-medium ">{period}</p>
      <p className="text-2xl font-medium lg:text-3xl text-black dark:text-white ">
        {title}
      </p>
      {/* <p className="bg-blue-200 px-3 rounded-lg py-1 w-min">{type}</p> */}
    </a>
  );
};

const WorkCards = () => {
  const query = trpc.useQuery(["work.getAllWorkWithSlug", {}]);
  if (query.status != "success") {
    return <>Loading...</>;
  }
  const { data: works } = query;
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className="text-4xl xl:text-5xl">All my previous work</p>
      <p className="text-lg xl:text-xl">
        I list all my project and work experience here. They can come from any
        context, including course work, personal project, or and a real job.
        Each article provides an overview of my tasks and learning from these
        experiences so they are not supposed to dive deep in technical details.
        If you want to see my learning journey, go to{" "}
        <Link href="/blog">
          <a className="underline">blog</a>
        </Link>
        .
      </p>
      <div className="relative grid grid-cols-4 gap-x-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 mx-auto max-w-7xl gap-y-16 mt-16">
        {works?.map((work, index) => {
          return <WorkCard key={work.slug} {...work}></WorkCard>;
        })}
      </div>
    </div>
  );
};

export default WorkCards;
