import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUp, AlertOctagon } from "tabler-icons-react";
import useLayout from "../contexts/layout";
import useBreakpoint from "../hooks/useBreakpoint";

/**
 * the layout that contains the header and footer
 */
const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { showMenu, realShowMenu } = useLayout();
  return (
    <div className="min-h-screen text-gray-700 bg-white min-w-screen dark:bg-gray-900 dark:text-gray-200">
      <div className="bg-blue-200  w-full px-5 md:px-10 py-4 text-center">
        <AlertOctagon className="w-6 h-6 inline-block"></AlertOctagon>
        <span className="ml-4">My blog is comming soon.</span>
      </div>
      {/* affix scroll up button  */}
      <button
        className={`text-gray-400 hover:text-gray-600 hover:bg-gray-100 ${
          realShowMenu ? "hidden" : "fixed"
        } z-[1] bottom-0 right-0 p-3 mb-5 mr-5 md:mb-10 md:mr-10 transition ease-in-out bg-white border border-gray-200 rounded-full duration-[600ms] dark:bg-gray-700 hover:shadow-lg dark:shadow-white/10`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUp className="w-8 h-8 md:w-12 md:h-12 "></ArrowUp>
      </button>
      <Header />
      {/* the content  */}
      <div className={`min-h-screen ${realShowMenu ? "hidden" : ""}`}>
        {children}
      </div>
      {/* footer */}
      <div className={` mt-36 ${realShowMenu ? "hidden" : ""}`}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
