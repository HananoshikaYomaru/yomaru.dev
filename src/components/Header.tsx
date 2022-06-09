import { useRouter } from "next/router";
import Link from "next/link";
import LocaleButton from "./LocaleButton";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const router = useRouter();
  return (
    <div className="px-[5vw] flex flex-row items-center justify-between my-10">
      <Link href="/">
        <a className="capitalize font-bold text-3xl animate-underline-left">
          Yomaru Hananoshika
        </a>
      </Link>
      {/* main routes */}
      <div className="flex flex-row font-semibold capitalize space-x-10 text-xl text-gray-500 transition ease-in-out ">
        <Link href="/blog" className="animate-underline-left">
          <a className="hover:text-gray-700 dark:hover:text-gray-200 animate-underline-left">
            Blog
          </a>
        </Link>
        <Link href="/work" className="animate-underline-left">
          <a className="hover:text-gray-700 dark:hover:text-gray-200  animate-underline-left">
            Work
          </a>
        </Link>{" "}
        <Link href="/photos" className="animate-underline-left">
          <a className="hover:text-gray-700 dark:hover:text-gray-200 animate-underline-left">
            Photos
          </a>
        </Link>{" "}
        <Link href="/hobbies" className="animate-underline-left">
          <a className="hover:text-gray-700 dark:hover:text-gray-200 animate-underline-left">
            Hobbies
          </a>
        </Link>{" "}
        <Link href="/about" className="animate-underline-left">
          <a className="hover:text-gray-700 dark:hover:text-gray-200 animate-underline-left">
            About
          </a>
        </Link>
      </div>
      {/* button control */}
      <div className="flex flex-row space-x-3">
        <ThemeButton />
        <LocaleButton></LocaleButton>
      </div>
    </div>
  );
};

export default Header;
