const Sport = () => {
  return (
    <div className="mx-[12vw] mt-24">
      <div className="mb-24">
        <div className="mb-12">
          <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white ">
            I love sport!
          </p>
          <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-blueGray-500 mb-6">
            Sports make me healthy and help me make new friends.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="bg-gray-200 h-[180px] lg:h-[400px] rounded-lg">
            hiking,{" "}
          </div>
          <div className="bg-gray-200 h-[180px] lg:h-[400px] rounded-lg">
            swimming,{" "}
          </div>
          <div className="bg-gray-200 h-[180px] lg:h-[400px] rounded-lg">
            skiing, snowboarding
          </div>
          <div className="bg-gray-200 h-[180px] lg:h-[400px]  rounded-lg">
            basketball
          </div>
          <div className="bg-gray-200 h-[180px] lg:h-[400px]  rounded-lg">
            badminton
          </div>
          <div className="bg-gray-200 h-[180px] lg:h-[400px]  rounded-lg">
            squish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
