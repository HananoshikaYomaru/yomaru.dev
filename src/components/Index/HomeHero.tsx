import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import CloudinaryImg from "../CloudinaryImg";
import {
  github,
  instagram,
  linkedIn,
  twitter,
} from "../../utils/externalLinks";

const HomeHero = () => {
  return (
    <div className="mx-[10vw] xl:mx-auto max-w-7xl relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 h-auto md:pt-12 xl:pt-24 lg:min-h-[40rem]   gap-y-10">
      <div className="col-span-full lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5 ">
        <p
          className="text-3xl md:text-4xl xl:text-5xl  leading-tight  mb-5 font-light  "
          data-aos="fade-up"
        >
          Always passionate in what I am doing. Keep learning and growing in all
          aspects.
        </p>
        <p className="mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="200">
          I am a software engineer, full stack + UI/UX developer, open source
          advocate, documentary photographer, Japanese learner, anime lover,
          christian...
        </p>
        <div className="flex flex-col space-y-5 mb-5">
          {/* <Link href="/blog">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="px-6 py-3 d:px-10 md:py-5 text-md md:text-lg font-bold text-white transition ease-in-out bg-black rounded-full focus-ring w-min whitespace-nowrap hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-800"
            >
              Read the blog
            </button>
          </Link> */}
          <Link href="/about">
            <button className="px-6 py-3 d:px-10 md:py-5 text-md md:text-lg  font-bold text-white transition ease-in-out bg-black rounded-full focus-ring w-min whitespace-nowrap hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-800 ">
              Learn more about me
            </button>
          </Link>
          <div className="flex flex-col flex-start md:flex-row md:items-center ">
            <span>Follow me on</span>
            <span className="flex flex-row mt-3 md:mt-0 md:ml-5 space-x-3">
              <a
                className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 "
                href={twitter}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterLogoIcon />
              </a>
              <a
                className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 "
                href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogoIcon />
              </a>
              <a
                className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 "
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogoIcon />
              </a>
              <a
                className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 "
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInLogoIcon />
              </a>
            </span>
          </div>
        </div>

        {/* <GoToButton
          href=""
          text="Learn more about Yomaru"
          direction="down"
        ></GoToButton> */}
      </div>
      <div className="relative col-span-full lg:mb-0 lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0  h-[300px] md:h-[500px] lg:h-auto">
        <div className="absolute bg-gray-200 rounded-full w-[280px]  md:w-[400px] xl:w-[500px] aspect-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
          <CloudinaryImg
            publicId="yomaru.dev/personal/IMG_4787_i61vlk.webp"
            width={2123}
            height={2123}
          ></CloudinaryImg>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
