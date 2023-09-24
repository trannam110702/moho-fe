import React from "react";
import MidHeaderWrapper, { SearchBar, UtilityBar } from "./style";

import Logo from "../../../../assets/imgs/logo.webp";
import { accountIcon, cartIcon, heartIcon } from "../../../../assets/imgs/svgs";
import { Link } from "react-router-dom";

const MidHeader = () => {
  return (
    <MidHeaderWrapper className="container">
      <a href="/">
        <img src={Logo} id="header-logo"></img>
      </a>
      <SearchBar>
        <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
        <button>Tìm</button>
      </SearchBar>
      <UtilityBar>
        <Link>{accountIcon}</Link>
        <Link to="/cart">{cartIcon}</Link>
        <Link>{heartIcon}</Link>
      </UtilityBar>
    </MidHeaderWrapper>
  );
};

export default MidHeader;
