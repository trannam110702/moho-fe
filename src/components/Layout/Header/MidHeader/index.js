import React from "react";
import MidHeaderWrapper, { SearchBar, UtilityBar } from "./style";

import Logo from "../../../../assets/imgs/logo.webp";
import { accountIcon, cartIcon, heartIcon } from "../../../../assets/imgs/svgs";

const MidHeader = () => {
  return (
    <MidHeaderWrapper className="container">
      <a href="https://www.facebook.com/profile.php?id=100010648657847">
        <img src={Logo} id="header-logo"></img>
      </a>
      <SearchBar>
        <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
        <button>Tìm</button>
      </SearchBar>
      <UtilityBar>
        <div>{accountIcon}</div>
        <div>{cartIcon}</div>
        <div>{heartIcon}</div>
      </UtilityBar>
    </MidHeaderWrapper>
  );
};

export default MidHeader;
