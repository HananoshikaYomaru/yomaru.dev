import Twemoji from "react-twemoji";

type CardProps = {
  title: string;
  emoji: string;
  description: string;
};

const Card = ({ title, emoji, description }: CardProps) => {
  return (
    <div className="bg-gray-200 rounded-lg h-56 md:h-72 lg:h-96  xl:aspect-[5/3]  w-full  grid grid-cols-8 gap-4 p-3 md:p-5 lg:p-8 place-items-center">
      <div className="col-span-4  md:col-span-3 place-self-stretch flex-center">
        <div className="w-full aspect-1 rounded-full bg-red-200 flex-center">
          some image
        </div>
      </div>
      <div className="col-span-4 md:col-span-5  flex flex-col ">
        <p className="text-xl font-semibold lg:text-xl xl:text-3xl md:mb-3">
          {title}
        </p>
        <p className="hidden md:block lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

const facts: CardProps[] = [
  {
    emoji: "🎒",
    title: "I am a backpack enthusiast.",
    description:
      "Since I like outdoor activities, I have backpacks for different functionalities such as for camping, trail-running, EDC, photography etc. I have high requirement on the design, materials and build quality. I wish I could create my own backpack.",
  },
  {
    emoji: "🇯🇵",
    title: "I am a Japanese culture enthusiast.",
    description:
      "I like Japanese culture a lot. I self taught Japanese and passed the JLPT N1 exam during the university. I have also self-traveled in Japan for a month. I even studied the aesthetic captured in Japanese culture.",
  },
  {
    emoji: "🏃🏻",
    title: "I ran 100km in 33 hours.",
    description:
      "I like hiking and trail running. I participated in the 100km Oxfam Trailwalker 2021 and completed it in 33 hours. Although I regard myself as healthy, this was still a huge challenge to me. But I can complete it faster next time.",
  },
  {
    emoji: "",
    title: "I wrote learning notes and books.",
    description:
      "I have high requirement on my knowledge retention and management. I use graphical linkages and backlinks to connect my knowledge. I am an expert user of Obsidian.md. I created my own scripts and plugins and contribute to the community.",
  },
  {
    emoji: "",
    title: "I open 300 tabs per day on average.",
    description:
      "I have high reading speed. On average I open 300 tabs per day. I immersed myself to the Github community and keep with up-to-date with latest technology trends. I also learn new skills from sites like YouTube.",
  },
  {
    emoji: "",
    title: "I can concentrate for a whole day without eating and sleeping.",
    description:
      "My friends often worry about my health because I can work day and night. I rarely multitask because focusing increases my productivity. Finishing tasks one by one gives me the satisfaction. Sleeping feels more comfortable after high productivity.",
  },
];

const FunFacts = () => {
  return (
    <div className="mx-[12vw] mt-24 lg:mt-36">
      <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
        Here are some random fun facts.
      </p>
      <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-blueGray-500">
        Some unique things about me.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {facts.map((fact) => {
          return <Card key={fact.title} {...fact}></Card>;
        })}
      </div>
      <div className=""></div>
    </div>
  );
};

export default FunFacts;
