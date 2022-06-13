import GoToButton from "../GoToButton";

const Work = () => {
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className="text-4xl text-black mb-6">
        Projects and Work. Always aim for production.
      </p>
      <p className="text-lg lg:text-xl mb-6">
        When I was still studying in the University, I already helped companies
        create software applications by taking freelance, part time and
        internship. I learn by experience. Sometimes I can discover new area and
        see if that area is suitable for me. Although usually I work in small
        teams, I always aim for production level so that I can make the most out
        it. I also made a lot of good relationships.
      </p>
      <GoToButton
        direction="right"
        text="See all previous work"
        href="/work"
      ></GoToButton>
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16 mt-16">
        <div className="col-span-4">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">
              September 2021 - April 2022
            </p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white ">
              Cnails - Cloud IDE for HKUST CSE
            </p>
            <p className="bg-blue-200 px-3 rounded-lg py-1 w-min">Project</p>
          </a>
        </div>
        <div className="col-span-4">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">
              September 2020 - March 2021
            </p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white ">
              Unity development in BFA HK
            </p>
            <p className="bg-blue-200 px-3 rounded-lg py-1 w-min">Freelance</p>
          </a>
        </div>
        <div className="col-span-4 hidden lg:block">
          <a className="focus:outline-none w-full flex flex-col ">
            <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
            <p className="mt-8 text-xl font-medium ">June 2020 - Augest 2020</p>
            <p className="text-2xl font-medium md:text-3xl text-black dark:text-white ">
              Software engineering Internship in HKUST ITSC
            </p>
            <p className="bg-blue-200 px-3 rounded-lg py-1 w-min">Work</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
