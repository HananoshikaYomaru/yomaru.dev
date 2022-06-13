import { ArrowRightIcon } from "@heroicons/react/solid";

type Interest = {
  title: string;
};

const Interest = ({ title }: Interest) => {
  return (
    <div className="bg-gray-200 aspect-[3/4] rounded-lg  hover:ring ring-offset-4 ring-black transition p-4 lg:p-6">
      <div className=" flex flex-row items-center justify-between w-full">
        <p className="text-xl lg:text-2xl ">{title} </p>
        <ArrowRightIcon className="w-6 h-6 text-white"></ArrowRightIcon>
      </div>
    </div>
  );
};

const CurrentInterest = () => {
  return (
    <div className="mx-[12vw] mt-12 lg:mt-24 ">
      <p className="text-4xl">My current interest</p>
      <p className="text-lg md:text-xl mb-12">
        The new things that I am interested in and learning. Click to learn
        more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <Interest title="Web annotation"></Interest>
        <Interest title="Block Chain and Web 3"></Interest>
        <Interest title="CSS animation"></Interest>
      </div>
    </div>
  );
};

export default CurrentInterest;
