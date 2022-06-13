import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type BreakPoint = "xl" | "lg" | "md" | "sm" | undefined;
/**
 * @param onChange callback which has the current breakpoint as params
 * @returns
 */
const useBreakpoint = (onChange?: (bp: BreakPoint) => void) => {
  const [bp, setBp] = useState<BreakPoint>(undefined);
  const xl = useMediaQuery({
    minWidth: 1500,
  });
  const lg = useMediaQuery({ minWidth: 1024, maxWidth: 1499 });
  const md = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const sm = useMediaQuery({ minWidth: 480, maxWidth: 639 });

  useEffect(() => {
    if (window.innerWidth < 480) setBp(undefined);
    else if (window.innerWidth < 640) setBp("sm");
    else if (window.innerWidth < 1024) setBp("md");
    else if (window.innerWidth < 1500) setBp("lg");
    else setBp("xl");
    if (onChange) {
      if (window.innerWidth < 480) onChange(undefined);
      else if (window.innerWidth < 640) onChange("sm");
      else if (window.innerWidth < 1024) onChange("md");
      else if (window.innerWidth < 1500) onChange("lg");
      else onChange("xl");
    }
  }, [xl, lg, md, sm]);

  return bp;
};

export default useBreakpoint;
