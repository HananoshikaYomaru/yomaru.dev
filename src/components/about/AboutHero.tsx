const AboutHero = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2  gap-x-32 mx-[12vw]  place-items-center gap-y-20 mt-10">
      <p className="col-span-full text-4xl md:text-4xl text-gray-900 font-bold w-[76vw] lg:text-center">
        More than just a developer porfolio...
      </p>
      <div className="col-span-full lg:col-span-1 ">
        <p className="text-4xl text-gray-900 ">Hi! I am Hananoshika Yomaru.</p>
        <p className="text-4xl text-gray-500 ">
          I build quality softwares and provide technical solutions to people as
          a software engineer.
        </p>
      </div>
      <div className="col-span-full lg:col-span-1 ">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200 rounded-full flex justify-center items-center">
          your happy face
        </div>
      </div>
    </div>
  );
};

export default AboutHero;