import React from "react";
import { Link } from "react-router-dom";
import MenuWrapper, { MenuItemWrapper } from "./style";
const menuData = [
  {
    name: "Sản phẩm",
    path: "/product",
    children: [],
  },
  { name: "Tủ bếp" },
  { name: "New Lines" },
  { name: "Ưu đãi" },
  { name: "Dịch vụ" },
  { name: "Blog" },
  { name: "About Us" },
];
const Menu = () => {
  return (
    <MenuWrapper className="container">
      {menuData.map((item) => {
        return <MenuItem path={item.path}>{item.name}</MenuItem>;
      })}
    </MenuWrapper>
  );
};
const MenuItem = (props) => {
  return (
    <MenuItemWrapper>
      <Link to={props.path}>{props.children}</Link>
    </MenuItemWrapper>
  );
};
export default Menu;
