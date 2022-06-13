const TechStack = () => {
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className="text-4xl">My favourite Techstack</p>
      <p className="text-lg lg:text-xl mb-12">
        My tech stack is my swiss knife to help me complete complicated tasks.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">react</div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">nextjs</div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          tailwind
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">css</div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          typescript
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          graphql
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          postgres
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">docker</div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">remix</div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          go lang
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">
          AWS Amplify
        </div>
        <div className="bg-gray-200 rounded-lg aspect-[3/4] shadow">nhost</div>
      </div>
    </div>
  );
};

export default TechStack;
