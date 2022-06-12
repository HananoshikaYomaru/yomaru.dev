import GoToButton from "../GoToButton";

const Poems = () => {
  return (
    <div className="mx-[12vw] lg:mt-24">
      <div className="mb-12">
        <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white ">
          I read literature and write my own poems and articles.
        </p>
        <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-blueGray-500 mb-6">
          Writing helps me calm down my soul and tidy my thoughts. May the words
          guide you as well.
        </p>
        <GoToButton text="Read my mind" href="/poems"></GoToButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="aspect-[3/4] bg-black rounded-lg flex items-center justify-center text-white hover:ring ring-offset-4 ring-black transition">
          Here is some text
        </div>
        <div className="aspect-[3/4] bg-black rounded-lg flex items-center justify-center text-white hover:ring ring-offset-4 ring-black transition">
          Here is some text
        </div>
        <div className="aspect-[3/4] bg-black rounded-lg hidden  lg:flex items-center justify-center text-white hover:ring ring-offset-4 ring-black transition">
          Here is some text
        </div>
      </div>
    </div>
  );
};

export default Poems;
