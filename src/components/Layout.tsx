import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * the layout that contains the header and footer
 */
const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen dark:bg-gray-900 bg-white text-gray-700 dark:text-gray-200 pt-1">
      <div></div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
