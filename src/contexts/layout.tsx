import { createContext, useContext, useEffect } from "react";
import { useBoolean } from "ahooks";
import { useRouter } from "next/router";
import useBreakpoint, { BreakPoint } from "../hooks/useBreakpoint";

type LayoutContextState = {
  showMenu: boolean;
  realShowMenu: boolean;
  bp: BreakPoint;
  toggleShowMenu: () => void;
  setShowMenu: (value: boolean) => void;
};

const layoutContext = createContext({} as LayoutContextState);

const useLayout = () => useContext(layoutContext);

type Props = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const router = useRouter();
  const bp = useBreakpoint();
  const [showMenu, { toggle: toggleShowMenu, set: setShowMenu }] =
    useBoolean(false);
  const realShowMenu = showMenu && bp != "xl" && bp != "lg";

  /**
   * when change page, close the menu
   */
  useEffect(() => {
    if (showMenu) toggleShowMenu();
  }, [router.asPath]);

  /**
   * when page widen, close the menu
   */
  useBreakpoint((bp) => {
    if (bp == "lg" || bp == "xl") setShowMenu(false);
  });
  return (
    <layoutContext.Provider
      value={{
        showMenu,
        realShowMenu,
        bp,
        toggleShowMenu,
        setShowMenu,
      }}
    >
      {children}
    </layoutContext.Provider>
  );
};

export default useLayout;
