import { ArrowDownIcon } from "@heroicons/react/solid";

const StayUpToDate = () => {
  return (
    <div className=" row-span-2 row-start-3 col-span-full md:col-span-5 md:row-start-2 md:col-start-1 xl:row-start-1 xl:col-span-4 xl:col-start-9 xl:block">
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
            <p role="alert" id="5-email-error" className="text-sm text-red-500">
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
            <p role="alert" id="5-email-error" className="text-sm text-red-500">
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
  );
};

export default StayUpToDate;
