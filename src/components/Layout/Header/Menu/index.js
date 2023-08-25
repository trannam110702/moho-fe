import React from "react";
import MenuWrapper, { MenuItemWrapper } from "./style";
const menuData = [
  {
    name: "Sản phẩm",
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
        return <MenuItem>{item.name}</MenuItem>;
      })}
    </MenuWrapper>
  );
};
const MenuItem = (props) => {
  console.log(props);
  return <MenuItemWrapper>{props.children}</MenuItemWrapper>;
};
export default Menu;
