import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
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
