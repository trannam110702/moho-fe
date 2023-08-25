import React from "react";
import HeaderWrapper from "./style";
import TopBar from "./TopBar";
import MidHeader from "./MidHeader";
import Menu from "./Menu";
const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar></TopBar>
      <MidHeader></MidHeader>
      <Menu></Menu>
    </HeaderWrapper>
  );
};

export default Header;
