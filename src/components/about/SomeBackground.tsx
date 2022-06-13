import moment from "moment";

const SomeBackground = () => {
  return (
    <div className="grid grid-cols-8 mt-24 lg:mt-[200px] gap-x-12 mx-[12vw] ">
      <div className="mb-10 col-span-full lg:col-span-3 text-gray-900 font-semi-bold text-lg">
        Some background about me
      </div>
      {/* <div className="rounded bg-gray-200 col-span-full lg:col-span-3 lg:row-start-2 lg:col-start-1 m-10 shadow-lg"></div> */}
      <div className="text-lg  w-[76vw] md:w-auto  prose md:max-w-none col-span-full row-start-2 lg:col-span-5 lg:col-start-4 lg:row-start-1  lg:row-span-2">
        <p>
          I am a {moment().diff(moment("1999-08-27"), "years")} year old
          software engineer based in Hong Kong. I had two bachelor degrees, one
          BEng degree and one BBA degree. Both of them are from HKUST. During my
          university life, I found my passion in computer science and I like
          exploring new trends and new technologies in this field. I am also
          good at learning by experience. Therefore I have created many little
          personal projects. Soon I found myself knowing a bit of everything and
          I can develop some fullstack software by myself. I developed programs
          not only for myself, but also for friends and companies. I also gained
          a lot of reputation as being a “tech guy” among my friends. I often
          provide technical advice and solutions for people I know.
        </p>

        <p>
          Another big identity of mine is being a Christian. I got baptized on
          17 June 2018. I have been faithful since then, keep learning and
          growing with the spiritual values that the bible teaches me. When I
          was younger, I used to be a bit self-centered and often made personal
          judgments on other people (within my heart of course). Although I get
          along with many people and people seem to like me, it does not make me
          feel truly connected with the world. The Bible taught me to love and
          care for my surroundings such that I am truly connected with others,
          and with Jesus. I changed to become a more cooperative and open-minded
          person. My change in personality makes me thrive in all aspects. And
          yes, I am happier than before. This impressed my family. My mother
          also started going to church in 2022. I hope I can spread my faith
          using my different strengths so I made websites and podcasts for my
          church.
        </p>

        <p>
          Besides the two identities above, I am often regarded as a fast
          learner, good communicator, Japanese culture enthusiast, creative
          thinker, philosophical thinker, person with millions of ideas and high
          executive power etc. I am really grateful for all these good comments
          from my friends, family, and colleagues. I am an instinctive learner,
          which means I can see what I truly need, develop a detailed plan and
          then go for them with passion somehow instinctively. As Steve Jobs
          said, I am already naked, there is no reason not to follow my heart. I
          am not stopping because I believe there is a much bigger mission for
          me to fulfill. I will continue learning and growing into a better
          person and help create a better world for people I love.
        </p>
      </div>
    </div>
  );
};

export default SomeBackground;
