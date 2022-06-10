import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { Rss } from "tabler-icons-react";
import { sitemap } from "./Header";

const Footer = () => {
  return (
    <div className={`min-w-screen border-t-2 border-gray-200 py-20 px-[10vw] `}>
      <div className="grid grid-cols-12 mx-auto max-w-7xl gap-x-4 xl:gap-x-6 gap-y-12">
        <div className="col-start-1 row-start-1 col-span-full md:col-span-5 md:row-start-1 md:col-start-1 xl:col-span-4 xl:col-start-1 xl:row-start-1">
          <p className="mb-5 text-4xl font-semibold ">Hananoshika Yomaru</p>
          <p className="mb-10 text-3xl text-gray-500">
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
        <div className="col-span-6 col-start-1 row-start-2 md:col-span-3 md:col-start-8 md:row-start-1 xl:col-span-2 xl:col-start-5 xl:row-start-1">
          <p className="text-xl font-medium text-black dark:text-white">
            Contact
          </p>
          <ul className="mt-4">
            <li className="py-1">
              <a
                href=""
                className="text-xl animate-underline-left hover:text-gray-900 whitespace-nowrap focus:outline-none "
              >
                Email Yomaru
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 col-start-7 row-start-2 md:col-start-8 md:col-span-3 md:row-start-2 xl:col-span-2 xl:col-start-7 xl:row-start-1 ">
          <div>
            <div className="text-xl font-medium text-black dark:text-white ">
              Sitemap
            </div>
            <ul className="mt-4">
              {sitemap.map((site) => {
                return (
                  <li className="py-1" key={site.href}>
                    <a
                      className="inline-block text-xl underlined focus:outline-none whitespace-nowrap animate-underline-left hover:text-gray-900 capitalize-first"
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
        <div className="row-span-2 row-start-3 col-span-full md:col-span-5 md:row-start-2 md:col-start-1 xl:row-start-1 xl:col-span-4 xl:col-start-9 xl:block">
          <p className="text-xl font-medium text-black dark:text-white ">
            Stay up to date
          </p>
          <div className="max-w-md mt-4">
            <p className="max-w-full text-xl ">
              Subscribe to the newsletter to stay up to date with articles!
            </p>
            <a
              className="text-xl animate-underline-left hover:text-gray-900"
              href="/subscribe"
            >
              Learn more
              <ArrowDownIcon className="inline-block transform -rotate-135 w-[32px] h-[32px]"></ArrowDownIcon>
            </a>
          </div>
          <form action="" className="mt-8 space-y-4">
            <div className="mb-8">
              <div className="flex items-baseline justify-between gap-2 mb-4">
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
                className="w-full py-8 text-lg font-medium text-black placeholder-gray-500 bg-gray-100 border-none rounded-lg dark:disabled:text-blueGray-500 focus-ring px-11 disabled:text-gray-400 dark:text-white dark:bg-gray-800"
              />
            </div>
            <div className="mb-8">
              <div className="flex items-baseline justify-between gap-2 mb-4">
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
                className="w-full py-8 text-lg font-medium text-black placeholder-gray-500 bg-gray-100 border-none rounded-lg dark:disabled:text-blueGray-500 focus-ring px-11 disabled:text-gray-400 dark:text-white dark:bg-gray-800"
              />
            </div>
            <div className="flex flex-row items-center space-x-10">
              <p className="text-xl whitespace-nowrap">Sign me up</p>
              <button className="p-3 transition ease-in-out border-2 border-gray-200 rounded-full hover:border-gray-600 hover:bg-gray-100 ">
                <ArrowDownIcon className="w-8 h-8 -rotate-90"></ArrowDownIcon>
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 text-gray-500 text-md md:text-lg col-span-full md:mt-24">
          <span>All rights reserved </span>
          <span className="block md:inline">
            © Hananoshika Yomaru {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
