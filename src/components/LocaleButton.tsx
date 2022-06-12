import { useRouter } from "next/router";

const LocaleButton = () => {
  const router = useRouter();

  return (
    <button
      // change to flex when show
      className="hidden rounded-full  transition ease-in-out duration-300 p-3 border-2 border-gray-600/20 hover:border-gray-600 dark:border-gray-200/20 dark:hover:border-gray-200  overflow-hidden w-12 h-12  justify-center items-center hover:bg-gray-700/20 dark:hover:bg-gray-200/20"
      onClick={() =>
        router.push(router.asPath, router.asPath, {
          locale:
            router.locale == "en" ? "zh" : router.locale == "zh" ? "ja" : "en",
        })
      }
    >
      <p
        className="select-none dark:text-gray-200 text-gray-700 font-semibold"
        data-aos="fade-down"
      >
        {router.locale}
      </p>
    </button>
  );
};

export default LocaleButton;
