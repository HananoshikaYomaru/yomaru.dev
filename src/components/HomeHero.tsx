import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import GoToButton from "./GoToButton";

const HomeHero = () => {
  return (
    <div className="mx-[10vw] relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6  max-w-7xl  mb-24 h-auto md:pt-12 xl:pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64 gap-y-10">
      <div className="col-span-full lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
        <p
          className="text-3xl md:text-4xl xl:text-5xl w-[320px] md:w-[480px] mb-5 leading-tight font-light"
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
          <Link href="/blog">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="px-6 py-3 d:px-10 md:py-5 text-md md:text-lg font-bold text-white transition ease-in-out bg-black rounded-full focus-ring w-min whitespace-nowrap hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-800"
            >
              Read the blog
            </button>
          </Link>
          <Link href="/about">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="px-6 py-3 d:px-10 md:py-5 text-md md:text-lg  font-bold text-white transition ease-in-out bg-black rounded-full focus-ring w-min whitespace-nowrap hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-800"
            >
              Learn more about me
            </button>
          </Link>
          <div className="flex flex-col flex-start md:flex-row md:items-center ">
            <span>Follow me on</span>
            <span className="flex flex-row mt-3 md:ml-5 space-x-3">
              <button className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 ">
                <TwitterLogoIcon />
              </button>
              <button className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 ">
                <InstagramLogoIcon />
              </button>
              <button className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 ">
                <GitHubLogoIcon />
              </button>
              <button className="p-3 transition ease-in-out border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-600 ">
                <LinkedInLogoIcon />
              </button>
            </span>
          </div>
        </div>

        {/* <GoToButton
          href=""
          text="Learn more about Yomaru"
          direction="down"
        ></GoToButton> */}
      </div>
      <div className="flex items-center justify-center mb-12 col-span-full lg:mb-0 lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
        <img
          data-aos="fade"
          src="/icon-512x512.png"
          className="animate-bounceIn rounded-full shadow-lg shadow-black/50 mb-3 w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
        ></img>
      </div>
    </div>
  );
};

export default HomeHero;
