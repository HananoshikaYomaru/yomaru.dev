import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUp } from "tabler-icons-react";
import useLayout from "../contexts/layout";

/**
 * the layout that contains the header and footer
 */
const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { showMenu } = useLayout();
  return (
    <div className="min-h-screen pt-1 text-gray-700 bg-white min-w-screen dark:bg-gray-900 dark:text-gray-200">
      <div></div>
      <button
        className={`text-gray-400 hover:text-gray-600 hover:bg-gray-100 ${
          showMenu ? "hidden" : "fixed"
        } bottom-0 right-0 p-3 mb-10 mr-10 transition ease-in-out bg-white border border-gray-200 rounded-full duration-[600ms] dark:bg-gray-700 hover:shadow-lg dark:shadow-white/10`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUp className="w-8 h-8 md:w-12 md:h-12 "></ArrowUp>
      </button>
      <Header />
      {/* the content  */}
      <div className={`min-h-screen ${showMenu ? "hidden" : ""}`}>
        {children}
      </div>
      {/* footer */}
      <div className={`min-h-screen mt-36 ${showMenu ? "hidden" : ""}`}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
