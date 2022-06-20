import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CloudinaryImg from "../CloudinaryImg";
import hoverring from "./hoverring.module.css";
import text from "../../css/text.module.css";

type Interest = {
  title: string;
  href: string;
  publicId: string;
};

const Interest = ({ title, href, publicId }: Interest) => {
  return (
    <a
      className={`focus:outline-none w-full flex flex-col cursor-pointer ${hoverring.root}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <div
        className={`aspect-[3/4] rounded-lg bg-gray-200  ${hoverring.target} border overflow-hidden`}
      >
        <CloudinaryImg publicId={publicId} width={600} height={800} />
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <p className="text-2xl font-medium md:text-3xl  dark:text-white ">
          {title}
        </p>
        <ArrowRightIcon className="w-8 h-8"></ArrowRightIcon>
      </div>
    </a>
  );
};

const CurrentInterest = () => {
  return (
    <div className="mx-[12vw] mt-12 lg:mt-24 ">
      <p className={`${text.h1}`}>My current interest</p>
      <p className="text-lg md:text-xl mb-12">
        The new things that I am interested in and learning. Click to learn
        more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <Interest
          title="Web annotation"
          href="https://web.hypothes.is/blog/annotation-is-now-a-web-standard/"
          publicId="yomaru.dev/Screen-Shot-2017-02-27-at-7.26.06-AM_r7fv0f.png"
        ></Interest>
        <Interest
          title="Block Chain and Web 3"
          publicId="yomaru.dev/unsplash/tezos-cJgb-y17rKM-unsplash_cvclng.jpg"
          href="https://www.youtube.com/watch?v=OEJGQD1OuKA&ab_channel=WallStreetJournal"
        ></Interest>
        <Interest
          title="CSS animation"
          publicId="yomaru.dev/unsplash/jean-philippe-delberghe-75xPHEQBmvA-unsplash_vzmird.jpg"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
        ></Interest>
      </div>
    </div>
  );
};

export default CurrentInterest;
