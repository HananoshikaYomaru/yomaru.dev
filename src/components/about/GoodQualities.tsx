import { createContext, useContext, useEffect, useRef } from "react";
import styles from "../../css/slideshow.module.css";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useBoolean } from "ahooks";
import { useHover } from "usehooks-ts";

const Bubble = ({ children }: { children: React.ReactNode }) => {
  const { setHover } = useSlidingContext();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  useEffect(() => {
    setHover(isHover);
  }, [isHover]);
  return (
    <div className={styles.bubble} ref={hoverRef}>
      {children}
    </div>
  );
};

const Section1 = () => {
  return (
    <div className={styles.slidepane}>
      <Bubble>Pure heart and kind to others</Bubble>
      <Bubble>Have clear goals and huge determination</Bubble>
      <Bubble>Use tons of tools to make life easier</Bubble>
      <Bubble>Creative and have a lot of ideas</Bubble>
      <Bubble>Well planned and organized</Bubble>
      <Bubble>A good communicator and good story teller</Bubble>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.slidepane}>
      <Bubble>Situational Leadership</Bubble>
      <Bubble>Adventurous and pioneering, willing to try new things</Bubble>
      <Bubble>Extremely fast learner with a wide range of knowledge</Bubble>
      <Bubble>Responsible team player</Bubble>
      <Bubble>Always passionate and have high hope</Bubble>
      <Bubble>Extreme concentration when learning and working</Bubble>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={styles.slidepane}>
      <Bubble>Have a lot of interests and hobbies</Bubble>
      <Bubble>Easy going</Bubble>
      <Bubble>Spiritual and philosophical thinking</Bubble>
      <Bubble>Logical and systematic thinking</Bubble>
      <Bubble>Visionary, predict problems before actaully happens</Bubble>
      <Bubble>Humble, ask questions, not shyly</Bubble>
    </div>
  );
};

type SlidingState = {
  hover: boolean;
  setHover: (value: boolean) => void;
};

const slidingContext = createContext({} as SlidingState);
const useSlidingContext = () => useContext(slidingContext);

const GoodQualities = () => {
  const bp = useBreakpoint();
  const [hover, { set: setHover }] = useBoolean(false);
  return (
    <slidingContext.Provider
      value={{
        hover,
        setHover,
      }}
    >
      <div className="mx-[12vw] mt-12 lg:mt-36">
        <p className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Some of my strength and good characters that others and I recognise.
        </p>
      </div>
      <div className={`${styles.slideshow} h-72 md:h-96 mt-16 w-screen`}>
        <div
          className={`${styles.images} h-72 md:h-96 flex flex-row`}
          style={{
            animationDuration: bp == "lg" || bp == "xl" ? "70s" : "50s",
            animationPlayState: hover ? "paused" : "running",
          }}
        >
          <Section1></Section1>
          <Section2></Section2>
          <Section3></Section3>
          <Section1></Section1>
        </div>
      </div>
    </slidingContext.Provider>
  );
};

export default GoodQualities;
