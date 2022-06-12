import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const ThisIsMusic = () => {
  const [year, setYear] = useState(new Date().getFullYear() - 1);
  return (
    <div className="mx-[12vw] mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-4xl xl:text-5xl mb-6">That's what I call music!</p>
          <p className="lg:text-lg mb-6">
            I short list my favourite songs among my recent playlists every
            week. The idea is come from{" "}
            <span className="cursor-pointer">
              <a
                className="underline"
                href="http://www.nowthatsmusic.com/"
                target="_blank"
              >
                Now That's What I Call Music
              </a>
            </span>
            . But instead of only focusing on western stream, my shortlisted
            songs can come from a variety of genres and a variety of location,
            including Chinese and Japanese songs. I picked the songs based on
            several criteria:
          </p>
          <ul>
            <li>
              <p className="font-bold mb-3">Composition</p>
            </li>
            <li>
              <p className="font-bold mb-3">Segmentaion</p>
            </li>
            <li>
              <p className="font-bold mb-3">Fluency</p>
            </li>
            <li>
              <p className="font-bold mb-3">Melody</p>
            </li>
            <li>
              <p className="font-bold mb-3">Signature</p>
            </li>
            <li>
              <p className="font-bold mb-3">Difficulty</p>
            </li>
          </ul>
        </div>
        <div className="h-[400px] lg:h-auto lg:aspect-[3/4] w-full flex flex-col items-center">
          <div className="flex flex-row items-center space-x-5 mb-4">
            <button
              onClick={() => {
                setYear(year - 1);
              }}
            >
              <ChevronLeftIcon className="w-6 h-6"></ChevronLeftIcon>
            </button>
            <p className="text-lg">{year}</p>
            <button
              onClick={() => {
                setYear(year + 1);
              }}
            >
              <ChevronRightIcon className="w-6 h-6 "></ChevronRightIcon>
            </button>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/5uOkKJCnr1HjzAsov2DH2F?utm_source=generator"
            className="rounded-lg hover:ring ring-offset-4 ring-black transition w-full grow"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ThisIsMusic;
