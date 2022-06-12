import GoToButton from "../GoToButton";

const MusicHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-24 mt-24 mx-[12vw] place-items-center">
      <div>
        <p className="text-4xl xl:text-5xl text-gray-900 ">
          Music is an important part of my life.
        </p>
        <p className="text-4xl xl:text-5xl text-gray-500 mb-10">
          I listen to many genres of music and I want to introduce them to you.
        </p>
        <GoToButton
          direction="down"
          href=""
          text="Go to playlists"
        ></GoToButton>
      </div>
      <div className="w-[300px] aspect-1 rounded-full md:w-[350px] lg:w-[400px] bg-gray-200 flex items-center justify-center">
        some image of music and you
      </div>
    </div>
  );
};

export default MusicHero;
