import CloudinaryImg from "../CloudinaryImg";
import square from "./square.module.css";

type CardProps = {
  title: string;

  description: string;
  publicId: string;
};

const Card = ({ title, description, publicId }: CardProps) => {
  return (
    <div className="bg-gray-200 rounded-lg h-56 md:h-72 lg:h-96  xl:aspect-[5/3]  w-full  grid grid-cols-8 gap-4 p-3 md:p-5 lg:p-8 place-items-center ">
      <div
        className={`col-span-4  md:col-span-3 place-self-stretch ${square.root} `}
      >
        <div>
          <div className="rounded-full overflow-hidden">
            <CloudinaryImg
              publicId={publicId}
              width={1000}
              height={1000}
            ></CloudinaryImg>
          </div>
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
    publicId: "yomaru.dev/personal/IMG_2564_l8kckx.heic",
    title: "I am a backpack enthusiast.",
    description:
      "Since I like outdoor activities, I have backpacks for different functionalities such as for camping, trail-running, EDC, photography etc. I have high requirement on the design, materials and build quality. I wish I could create my own backpack.",
  },
  {
    publicId: "yomaru.dev/personal/IMG_1295_nm0qzh.webp",
    title: "I am a Japanese culture enthusiast.",
    description:
      "I like Japanese culture a lot. I self taught Japanese and passed the JLPT N1 exam during the university. I have also self-traveled in Japan for a month. I even studied the aesthetic captured in Japanese culture.",
  },
  {
    publicId: "v1655184927/yomaru.dev/personal/IMG_9891_hzcacb.webp",
    title: "I ran 100km in 33 hours.",
    description:
      "I like hiking and trail running. I participated in the 100km Oxfam Trailwalker 2021 and completed it in 33 hours. Although I regard myself as healthy, this was still a huge challenge to me. But I can complete it faster next time.",
  },
  {
    publicId:
      "v1655198544/yomaru.dev/personal/CleanShot_2022-06-14_at_17.21.30_eu6pqk.png",
    title: "I am an expert of knowledge management.",
    description:
      "I have high requirement on my knowledge retention and management. I use graphical linkages and backlinks to connect my knowledge. I am an expert user of Obsidian.md and Memex. I created my own scripts and plugins and contribute to the community.",
  },
  {
    publicId:
      "v1655198718/yomaru.dev/personal/CleanShot_2022-06-14_at_17.24.44_lc87q6.png",
    title: "I open 300 tabs per day on average.",
    description:
      "I have high reading speed. On average I open 300 tabs per day, reading docs, immersing myself in the developer communities like GitHub and StackOverflow, and learning new skills from sites like YouTube.",
  },
  {
    publicId:
      "v1655198813/yomaru.dev/unsplash/pan-yunbo-EgL0EtzL0Wc-unsplash_nrj0ac.jpg",
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">
        {facts.map((fact) => {
          return <Card key={fact.title} {...fact}></Card>;
        })}
      </div>
      <div className=""></div>
    </div>
  );
};

export default FunFacts;
