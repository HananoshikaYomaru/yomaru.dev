import React, { useContext } from "react";
import { Work } from "../utils/contentful/work";

const workContext = React.createContext({} as { works: Work[] });

export const useWork = () => useContext(workContext);

export const WorkProvider = ({
  children,
  works,
}: {
  children: React.ReactNode;
  works: Work[];
}) => {
  return (
    <workContext.Provider
      value={{
        works,
      }}
    >
      {children}
    </workContext.Provider>
  );
};
