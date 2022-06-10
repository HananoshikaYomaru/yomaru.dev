import { createContext, useContext, useEffect } from "react";
import { useBoolean } from "ahooks";
import { useRouter } from "next/router";

type LayoutContextState = {
  showMenu: boolean;
  toggleShowMenu: () => void;
};

const layoutContext = createContext({} as LayoutContextState);

const useLayout = () => useContext(layoutContext);

type Props = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const router = useRouter();
  const [showMenu, { toggle: toggleShowMenu }] = useBoolean(false);
  useEffect(() => {
    if (showMenu) toggleShowMenu();
  }, [router.asPath]);
  return (
    <layoutContext.Provider
      value={{
        showMenu,
        toggleShowMenu,
      }}
    >
      {children}
    </layoutContext.Provider>
  );
};

export default useLayout;
