import React from "react";
import { Link } from "react-router-dom";
import ProductCardWrapper from "./style";
import { star, starFill, heartIcon } from "../../assets/imgs/svgs";
const ProductCard = ({ product }) => {
  const { name, price, rate, saled, colors, img, discount, bestseller } =
    product;

  return (
    <ProductCardWrapper>
      <Link to="/product">
        <div className="photo">
          <img src={img}></img>
          <div className="discount">-{discount}%</div>
          <div
            className="bestseller"
            style={{ display: bestseller ? "block" : "none" }}
          >
            BEST SELLER
          </div>
        </div>
      </Link>
      <div className="infor">
        <span className="name">{name}</span>
        <div className="price">
          <p className="newprice">{price}đ</p>
          <p className="oldprice">{price}đ</p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="rate">
              {Array(rate)
                .fill("rated")
                .concat(Array(5 - rate).fill("no-rate"))
                .map((rate) => {
                  let src;
                  if (rate === "rated") {
                    src = starFill;
                  } else src = star;
                  return src;
                })}
            </div>
          </div>
          <div className="col-6 saled">Đã bán {saled}</div>
        </div>
        <div className="row">
          <div className="col-6 colors">
            {colors.map((color) => {
              return (
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "16px",
                    padding: 0,
                    backgroundColor: `${color}`,
                  }}
                ></div>
              );
            })}
          </div>
          <div className="col-6 heart">{heartIcon}</div>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
