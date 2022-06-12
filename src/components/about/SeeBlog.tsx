import GoToButton from "../GoToButton";

const SeeBlog = () => {
  return (
    <div className="hidden mx-[12vw] mt-24 lg:mt-36">
      <div className="col-span-full flex flex-col  lg:flex-row items-start lg:justify-between ">
        <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white mb-5 lg:mb-0">
          Have a look at my writing.
        </p>
        <GoToButton text="See my full blog" href="/blog"></GoToButton>
      </div>
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16 mt-16">
        <div className="col-span-4">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">
              September 24th, 2018 - 12 min read
            </p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
              This is some title
            </p>
          </a>
        </div>
        <div className="col-span-4">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">
              September 24th, 2018 - 12 min read
            </p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
              This is some title
            </p>
          </a>
        </div>
        <div className="col-span-4 hidden lg:block">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">
              September 24th, 2018 - 12 min read
            </p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
              This is some title
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeeBlog;
