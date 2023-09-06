import React from "react";
import LayoutWrapper from "./style";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Header />
      {props.children}
      <Footer />
    </LayoutWrapper>
  );
};
export default Layout;
