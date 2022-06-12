import GoToButton from "../GoToButton";

const Music = () => {
  return (
    <div className="mt-24 mx-[12vw]">
      <div className="mb-24 ">
        <div className=" mb-12 flex flex-col lg:flex-row items-start lg:items-end justify-between">
          <div className="mb-6 lg:mb-0">
            <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white ">
              That's what I call music.
            </p>
            <p className="text-lg">
              I shortlisted 20 songs of the {new Date().getFullYear() - 1}.
            </p>
          </div>
          <GoToButton
            text="See past years record"
            href="/music"
            direction="right"
          ></GoToButton>
        </div>

        <iframe
          src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
          className="rounded-lg h-[450px] w-full hover:ring ring-offset-4 ring-black transition"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-between items-start lg:items-end mb-12">
        <div>
          <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-blueGray-500 ">
            I create a music playlist every 3 months.
          </p>
          <p className="text-lg text-gray-600 mb-6 lg:mb-0">
            These are the songs I have been listening to in last 3 months.
          </p>
        </div>
        <GoToButton text="See all my playlists" href={"/music"}></GoToButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
        <iframe
          src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
          className="rounded-lg h-[450px] hover:ring ring-offset-4 ring-black transition"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
          className="rounded-lg h-[450px] hover:ring ring-offset-4 ring-black transition "
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
          className="rounded-lg h-[450px] hover:ring ring-offset-4 ring-black transition hidden lg:block"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        {/* <iframe
          allow="autoplay *; encrypted-media *; fullscreen *"
          className="rounded-lg h-[450px]"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/hk/playlist/smokey/pl.u-d2b0MmZsd4D6Za?l=en"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Music;
