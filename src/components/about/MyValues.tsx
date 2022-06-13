const MyValues = () => {
  return (
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
          you&apos;ll never reach your full potential. Having good relationship
          in a team makes things run smoother, knowledges become more shareable,
          which make your products even better. Having bad relationship in a
          work environment is always the fastest way to ruin a team. Also, in
          the end of the day, you will find that the most important things in
          your life are not your skills, but the relationship that you have
          created along the journey. Be kind.
        </p>
        <p className="text-lg font-medium text-black dark:text-white mb-4">
          Collaborate with others
        </p>
        <p className="max-w-full text-lg  mb-12 prose prose-light dark:prose-dark">
          I have cooperated with many developers in my university, workspace and
          as well as in the open source community. I&apos;ve found it to be
          invaluable to collaborate well with others because one can never
          achieve something great without the help of others. This wisdom is
          more obvious in the technology areas. A good product requires high
          build quality, quick and accurate go-to-market strategies and endless
          maintanence to be successful. Without a good team, nothing great can
          be achieved. Learn from each other, grow with each other, cheer with
          each other.
        </p>
        <p className="text-lg font-medium text-black dark:text-white mb-4">
          Follow your heart
        </p>
        <p className="max-w-full text-lg  mb-12 prose prose-light dark:prose-dark">
          Steve Jobs said, &quot;Death is very likely the single best invention
          of Life. It is Life&apos;s change agent.&quot; Because of death, we
          know what we truly want in our life and we strive for them. At that
          moment, our lives become meaningful and we got the courage to follow
          our heart. After all the hard times and suffering, You will eventually
          become a much better person, which is closer to your ideal.
        </p>
      </div>
    </div>
  );
};

export default MyValues;
