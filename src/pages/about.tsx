import Layout from "../components/Layout";
import CloudinaryImg from "../components/CloudinaryImg";

import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import moment from "moment";
import styles from "../css/slideshow.module.css";
import GoToButton from "../components/GoToButton";
const Home = () => {
  return (
    <Layout>
      <div className="grid grid-col-1 md:grid-cols-2  gap-x-32 mx-[10vw]  place-items-center gap-y-20 ">
        <p className="col-span-full text-4xl text-gray-900 font-bold mt-10">
          More than just a developer porfolio...
        </p>
        <div className="col-span-full lg:col-span-1 ">
          <p className="text-4xl text-gray-900 ">
            Hi! I am Hananoshika Yomaru.
          </p>
          <p className="text-4xl text-gray-500 ">
            I build quality softwares and provide technical solutions to people
            as a software engineer.
          </p>
          <Link href="">
            <a
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-row items-center mt-10 space-x-10 animate-bouncing w-fit"
            >
              <button className="p-3 border border-gray-200 rounded-full">
                <ArrowDownIcon className="w-6 h-6 "></ArrowDownIcon>
              </button>
              <p className="text-xl font-semi-bold hover:text-gray-900">
                Get to know more about me
              </p>
            </a>
          </Link>
        </div>
        <div className="col-span-full lg:col-span-1 ">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200 rounded-full flex justify-center items-center">
            your happy face
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 mt-24 lg:mt-[200px] gap-x-12 mx-[12vw] ">
        <div className="mb-10 col-span-full lg:col-span-3 text-gray-900 font-semi-bold text-lg">
          Some background about me
        </div>
        {/* <div className="rounded bg-gray-200 col-span-full lg:col-span-3 lg:row-start-2 lg:col-start-1 m-10 shadow-lg"></div> */}
        <div className=" text-lg prose  max-w-none col-span-full row-start-2 lg:col-span-5 lg:col-start-4 lg:row-start-1 text-justify lg:row-span-2">
          <p>
            I am a {moment().diff(moment("1999-08-27"), "years")} year old
            software engineer based in Hong Kong. I had two bachelor degrees,
            one BEng degree and one BBA degree. Both of them are from HKUST.
            During my university life, I found my passion in computer science
            and I like exploring new trends and new technologies in this field.
            I am also good at learning by experience. Therefore I have created
            many little personal projects. Soon I found myself knowing a bit of
            everything and I can develop some fullstack software by myself. I
            developed programs not only for myself, but also for friends and
            companies. I also gained a lot of reputation as being a “tech guy”
            among my friends. I often provide technical advice and solutions for
            people I know.
          </p>

          <p>
            Another big identity of mine is being a Christian. I got baptized on
            17 June 2018. I have been faithful since then, keep learning and
            growing with the spiritual values that the bible teaches me. When I
            was younger, I used to be a bit self-centered and often made
            personal judgments on other people (within my heart of course).
            Although I get along with many people and people seem to like me, it
            does not make me feel truly connected with the world. The Bible
            taught me to love and care for my surroundings such that I am truly
            connected with others, and with Jesus. I changed to become a more
            cooperative and open-minded person. My change in personality makes
            me thrive in all aspects. And yes, I am happier than before. This
            impressed my family. My mother also started going to church in 2022.
            I hope I can spread my faith using my different strengths so I made
            websites and podcasts for my church.
          </p>

          <p>
            Besides the two identities above, I am often regarded as a fast
            learner, good communicator, Japanese culture enthusiast, creative
            thinker, philosophical thinker, person with millions of ideas and
            high executive power etc. I am really grateful for all these good
            comments from my friends, family, and colleagues. I am an
            instinctive learner, which means I can see what I truly need,
            develop a detailed plan and then go to them with passion somehow
            instinctively. As Steve Jobs said, I am already naked, there is no
            reason not to follow my heart. I am not stopping because I believe
            there is a much bigger mission for me to fulfill. I will continue
            learning and growing into a better person and help create a world
            for people that I love.
          </p>
        </div>
      </div>
      <div className="mt-36 mx-[12vw] grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* image */}
        <div className="col-span-full row-start-1 lg:col-span-1 lg:col-start-2 bg-gray-200  rounded-lg aspect-[3/4] mb-12 lg:mb-0 w-[88%] place-self-center flex justify-center items-center">
          your happy face
        </div>

        {/* text  */}
        <div className="col-span-full row-start-2 lg:col-span-1 lg:row-start-1 lg:col-start-1">
          <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white mb-10">
            Here are some of the values I live by.
          </p>
          <p className="text-lg font-medium text-black dark:text-white mb-4">
            Kindness
          </p>
          <p className="max-w-full text-lg  mb-12 prose prose-light dark:prose-dark">
            You can be the smartest and most skilled software engineer in the
            world, but if you&apos;re not kind to those with whom you interact,
            you&apos;ll never reach your full potential and you&apos;ll always
            be chasing the next thing to bring you happiness in life. Be kind.
          </p>
          <p className="text-lg font-medium text-black dark:text-white mb-4">
            Share knowledge
          </p>
          <p className="max-w-full text-lg  mb-12 prose prose-light dark:prose-dark">
            One of the biggest things that has helped me learn is by committing
            myself to sharing what I know with others. Between podcasts, blog
            posts, talks, and workshops, I force myself into situations where I
            have to be accountable to those I&apos;m teaching to really know my
            stuff. And as a result, a lot of people have learned from me as
            well.
          </p>
          <p className="text-lg font-medium text-black dark:text-white mb-4">
            Collaborate with others
          </p>
          <p className="max-w-full text-lg  mb-12 prose prose-light dark:prose-dark">
            I&apos;ve worked with a ton of developers in my role as a team
            member at companies I&apos;ve worked at as well as in the open
            source community. I&apos;ve found it to be invaluable to collaborate
            well with others. I value giving credit where it is due and
            celebrating the successes of others with them. We can accomplish
            much more together than separately.
          </p>
        </div>
      </div>

      <div className="mx-[12vw] mt-36">
        <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Some of my strength and good characters that others and I recognise.
        </p>
      </div>
      <div className={`${styles.slideshow} h-96 mt-16`}>
        <div className={`${styles.images} h-96 flex flex-row`}>
          <div className="h-96 w-[100%] ">
            <div className=" grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-cols-5 h-full ">
              <div className="col-span-2 row-start-1 col-start-1 bg-gray-500  rounded m-5"></div>
              <div className="col-span-2 row-start-2 col-start-2 bg-gray-500  rounded  m-5"></div>
              <div className="col-span-2 row-start-1 col-start-3 bg-gray-500  rounded  m-5"></div>
              <div className="col-span-2 row-start-2 col-start-4 bg-gray-500  rounded  m-5"></div>
              <div className="col-span-1 row-start-2 col-start-1 bg-red-500  rounded m-5"></div>
              <div className="col-span-1 row-start-1 col-start-5 bg-red-500  rounded m-5"></div>
            </div>
          </div>
          <div className="h-96 w-[100%] ">
            <div className=" grid grid-rows-2 grid-cols-5 h-full ">
              <div className="col-span-2 row-start-1 col-start-1 bg-red-500 m-5 rounded "></div>
              <div className="col-span-2 row-start-2 col-start-2 bg-red-500 m-5 rounded "></div>
              <div className="col-span-2 row-start-1 col-start-3 bg-red-500 m-5 rounded "></div>
              <div className="col-span-2 row-start-2 col-start-4 bg-red-500 m-5 rounded "></div>
              <div className="col-span-1 row-start-2 col-start-1 bg-gray-500 m-5 rounded"></div>
              <div className="col-span-1 row-start-1 col-start-5 bg-gray-500 m-5 rounded"></div>
            </div>
          </div>
          <div className="h-96 w-[100%] ">
            <div className="h-96 w-[100%] ">
              <div className="  grid grid-rows-2 grid-cols-5 h-full ">
                <div className="col-span-2 row-start-1 col-start-1 bg-gray-500 m-5 rounded "></div>
                <div className="col-span-2 row-start-2 col-start-2 bg-gray-500 m-5 rounded "></div>
                <div className="col-span-2 row-start-1 col-start-3 bg-gray-500 m-5 rounded "></div>
                <div className="col-span-2 row-start-2 col-start-4 bg-gray-500 m-5 rounded "></div>
                <div className="col-span-1 row-start-2 col-start-1 bg-red-500 m-5 rounded"></div>
                <div className="col-span-1 row-start-1 col-start-5 bg-red-500 m-5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fun facts */}
      <div className="mx-[12vw] mt-36">
        <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Here are some random fun facts.
        </p>
        <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-blueGray-500">
          Some unique things about me.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I have a lot of backpacks
          </div>
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I passed Japanese N1 by self-study
          </div>
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I ran 100km
          </div>
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I wrote learning notes and books
          </div>
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I opened 300 tabs per day on average
          </div>
          <div className="bg-gray-200 rounded-lg lg:aspect-[5/3] h-56 lg:h-auto w-full">
            I can concentrate for a whole day without eating and sleeping
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mx-[12vw] mt-36">
        <div className="col-span-full flex flex-col space-y-10 lg:flex-row items-start lg:justify-between lg:space-y-0 ">
          <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
            Have a look at my writing.
          </p>
          <GoToButton text="See my full blog" href="/blog"></GoToButton>
        </div>
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16 mt-16">
          <div className="col-span-4">
            <a className="focus:outline-none w-full flex flex-col ">
              <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
              <p className="mt-8 text-xl font-medium ">
                September 24th, 2018 - 12 min read
              </p>
              <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
                This is some title
              </p>
            </a>
          </div>
          <div className="col-span-4">
            <a className="focus:outline-none w-full flex flex-col ">
              <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
              <p className="mt-8 text-xl font-medium ">
                September 24th, 2018 - 12 min read
              </p>
              <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
                This is some title
              </p>
            </a>
          </div>
          <div className="col-span-4 hidden lg:block">
            <a className="focus:outline-none w-full flex flex-col ">
              <div className="aspect-[3/4] rounded-lg bg-gray-200 hover:ring-2 hover:ring-offset-4 hover:ring-black transition"></div>
              <p className="mt-8 text-xl font-medium ">
                September 24th, 2018 - 12 min read
              </p>
              <p className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">
                This is some title
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* <CloudinaryImg publicId="yomaru.dev/A62C9231-1362-41C9-9B5D-C557AFD637FB_gdwcn2"></CloudinaryImg> */}
    </Layout>
  );
};

export default Home;
