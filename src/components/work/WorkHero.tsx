const WorkHero = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2  gap-x-32 mx-[12vw]  place-items-center gap-y-20 mt-12 lg:mt-24">
      <div className="col-span-full lg:col-span-1 ">
        <p className="text-4xl text-gray-900 ">
          The ability to create and to build is a gift to Human. I am glad that
          I can create softwares with brillant people.
        </p>
      </div>
      <div className="col-span-full lg:col-span-1 ">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200 rounded-full flex justify-center items-center">
          your happy face with colleagues and teammates
        </div>
      </div>
    </div>
  );
};

export default WorkHero;
