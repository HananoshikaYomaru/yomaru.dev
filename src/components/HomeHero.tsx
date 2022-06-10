import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";

const HomeHero = () => {
  return (
    <div className="mx-[10vw] relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6  max-w-7xl  mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64 gap-y-10">
      <div className="col-span-full lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
        <p className="text-4xl md:text-5xl w-[320px] md:w-[480px] mb-5 leading-tight font-light">
          Always passionate in what I am doing. Keep learning and growing in all
          aspects.
        </p>
        <p className="mb-10">
          I am a software engineer, full stack + UI/UX developer, open source
          advocate, documentary photographer, Japanese learner, anime lover,
          christian...
        </p>
        <div className="flex flex-col space-y-5">
          <Link href="/blog">
            <button className="focus-ring w-min whitespace-nowrap font-bold bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200  dark:text-gray-800 rounded-full text-lg text-white px-10 py-5 transition ease-in-out">
              Read the blog
            </button>
          </Link>
          <div className="flex flex-row items-center">
            <span>Follow me on</span>
            <span className="ml-5 flex flex-row space-x-3">
              <button className="rounded-full border-gray-200 border p-3 hover:bg-gray-100 hover:border-gray-600 transition ease-in-out ">
                <TwitterLogoIcon />
              </button>
              <button className="rounded-full border-gray-200 border p-3 hover:bg-gray-100 hover:border-gray-600 transition ease-in-out ">
                <InstagramLogoIcon />
              </button>
              <button className="rounded-full border-gray-200 border p-3 hover:bg-gray-100 hover:border-gray-600 transition ease-in-out ">
                <GitHubLogoIcon />
              </button>
              <button className="rounded-full border-gray-200 border p-3 hover:bg-gray-100 hover:border-gray-600 transition ease-in-out ">
                <LinkedInLogoIcon />
              </button>
            </span>
          </div>
        </div>

        <Link href="">
          <a className="flex flex-row space-x-10 items-center mt-10  animate-bouncing w-fit">
            <button className="rounded-full p-3 border border-gray-200">
              <ArrowDownIcon className="w-6 h-6 "></ArrowDownIcon>
            </button>
            <p className="text-xl font-semi-bold hover:text-gray-900">
              Learn more about Yomaru
            </p>
          </a>
        </Link>
      </div>
      <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
        <img
          src="/icon-512x512.png"
          className="animate-bounceIn rounded-full shadow-lg shadow-black/50 mb-3 w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
        ></img>
      </div>
    </div>
  );
};

export default HomeHero;
