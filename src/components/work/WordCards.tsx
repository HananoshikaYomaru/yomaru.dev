type CardProps = {
  period: string;
  title: string;
  type: string;
};

const WorkCard = ({ period, title, type }: CardProps) => {
  return (
    <div className="col-span-4">
      <a className="focus:outline-none w-full flex flex-col ">
        <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
        <p className="mt-8 text-xl font-medium ">{period}</p>
        <p className="text-2xl font-medium md:text-3xl text-black dark:text-white ">
          {title}
        </p>
        <p className="bg-blue-200 px-3 rounded-lg py-1 w-min">{type}</p>
      </a>
    </div>
  );
};

const WorkCards = () => {
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className="text-4xl xl:text-5xl">All my previous work</p>
      <div className="relative grid grid-cols-4 gap-x-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 mx-auto max-w-7xl gap-y-16 mt-16">
        {new Array(5).fill(0).map((value, index) => {
          return (
            <WorkCard
              key={index}
              title="This is a testing title"
              period="September 2021 - May 2022"
              type="Project"
            ></WorkCard>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCards;
