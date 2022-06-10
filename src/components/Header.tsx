import { useRouter } from "next/router";
import Link from "next/link";
import LocaleButton from "./LocaleButton";
import ThemeButton from "./ThemeButton";
import MenuBurger from "./MenuBurger";
import useLayout from "../contexts/layout";
import { Fragment } from "react";

export const sitemap = [
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
    href: "/gallery",
    text: "Gallery",
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

const Header = () => {
  const { showMenu } = useLayout();
  return (
    <>
      <div className="px-[5vw] flex flex-row items-center justify-between my-10">
        <Link href="/">
          <a className="text-3xl font-bold capitalize animate-underline-left w-min md:whitespace-nowrap">
            Hananoshika Yomaru
          </a>
        </Link>
        {/* main routes */}
        <div className=" hidden lg:flex lg:flex-row space-x-6 xl:space-x-10 text-xl font-semibold text-gray-500 capitalize transition ease-in-out  ">
          {sitemap.map((site, index) => {
            if (index == 0) return <Fragment key={site.href}></Fragment>;
            return (
              <Link
                href={site.href}
                className="animate-underline-left"
                key={site.href}
              >
                <a className="hover:text-gray-700 dark:hover:text-gray-200 animate-underline-left">
                  {site.text}
                </a>
              </Link>
            );
          })}
        </div>
        {/* button control */}
        <div className="flex flex-row space-x-3">
          <MenuBurger></MenuBurger>
          <ThemeButton />
          <LocaleButton></LocaleButton>
        </div>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } border-t border-gray-200 flex-col items-center`}
      >
        {sitemap.map((site) => {
          return (
            <Link key={site.href} href={site.href}>
              <a className="text-3xl border-b w-full h-20 hover:bg-gray-100 flex items-center justify-center">
                {site.text}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Header;
