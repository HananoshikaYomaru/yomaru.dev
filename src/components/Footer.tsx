import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { Rss } from "tabler-icons-react";

const Footer = () => {
  const sitemap = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/work",
      text: "Work",
    },
    {
      href: "/photos",
      text: "Photos",
    },
    {
      href: "/hobbies",
      text: "Hobbies",
    },
    {
      href: "/about",
      text: "About",
    },
  ];
  return (
    <div className="min-w-screen border-t-2 border-gray-200 py-20 px-[10vw]">
      <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
        <div className="col-span-full md:col-span-3 xl:row-span-2 ">
          <p className="text-4xl font-semibold mb-5 ">Yomaru Hananoshika</p>
          <p className="text-3xl text-gray-500 mb-10">
            Software Engineer creating great products
          </p>
          <div className="flex flex-row space-x-5">
            <InstagramLogoIcon className="w-8 h-8" />
            <TwitterLogoIcon className="w-8 h-8"></TwitterLogoIcon>
            <GitHubLogoIcon className="w-8 h-8"></GitHubLogoIcon>
            <LinkedInLogoIcon className="w-8 h-8"></LinkedInLogoIcon>
            <Rss className="w-8 h-8"></Rss>
          </div>
        </div>
        <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
          <p className="text-xl font-medium text-black dark:text-white">
            Contact
          </p>
          <ul className="mt-4">
            <li className="py-1">
              <a
                href=""
                className="animate-underline-left hover:text-gray-900 text-xl whitespace-nowrap focus:outline-none "
              >
                Email Yomaru
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-full  md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
          <div>
            <div className="text-xl font-medium text-black dark:text-white ">
              Sitemap
            </div>
            <ul className="mt-4">
              {sitemap.map((site) => {
                return (
                  <li className="py-1" key={site.href}>
                    <a
                      className="underlined focus:outline-none inline-block whitespace-nowrap text-xl animate-underline-left hover:text-gray-900 capitalize-first"
                      href={site.href}
                    >
                      {site.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-full row-start-2 xl:col-span-4 xl:col-start-9 row-span-2  mt-0  xl:block">
          <p className="text-xl font-medium text-black dark:text-white ">
            Stay up to date
          </p>
          <div className="mt-4 max-w-md">
            <p className="max-w-full text-xl ">
              Subscribe to the newsletter to stay up to date with articles!
            </p>
            <a
              className="animate-underline-left text-xl hover:text-gray-900"
              href="/subscribe"
            >
              Learn more
              <ArrowDownIcon className="inline-block transform -rotate-135 w-[32px] h-[32px]"></ArrowDownIcon>
            </a>
          </div>
          <form action="" className="mt-8 space-y-4">
            <div className="mb-8">
              <div className="mb-4 flex items-baseline justify-between gap-2">
                <label
                  htmlFor="4-firstName"
                  className="inline-block text-lg text-gray-500 dark:text-blueGray-500"
                >
                  First name
                </label>
                <p
                  role="alert"
                  id="5-email-error"
                  className="text-sm text-red-500"
                >
                  Name is required
                </p>
              </div>
              <input
                autoComplete="firstName"
                name="firstName"
                required
                className="border-none placeholder-gray-500 dark:disabled:text-blueGray-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
              />
            </div>
            <div className="mb-8">
              <div className="mb-4 flex items-baseline justify-between gap-2">
                <label className="inline-block text-lg text-gray-500 dark:text-blueGray-500">
                  Email
                </label>
                <p
                  role="alert"
                  id="5-email-error"
                  className="text-sm text-red-500"
                >
                  That&lsquo;s not an email
                </p>
              </div>
              <input
                autoComplete="email"
                name="email"
                required
                className="border-none placeholder-gray-500 dark:disabled:text-blueGray-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
              />
            </div>
            <div className="flex flex-row items-center space-x-10">
              <p className="text-xl">Sign me up</p>
              <button className="p-3 rounded-full border-gray-200 border-2 hover:border-gray-600 hover:bg-gray-100 transition ease-in-out ">
                <ArrowDownIcon className="-rotate-90 w-8 h-8"></ArrowDownIcon>
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-full mt-12 text-lg text-gray-500 dark:text-blueGray-500 md:mt-24">
          <span>All rights reserved </span>
          <span className="block md:inline">
            © Yomaru Hananoshika {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
