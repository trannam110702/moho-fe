import React from "react";
import { Link } from "react-router-dom";
import ProductCardWrapper from "./style";
import { star, starFill, heartIcon } from "../../assets/imgs/svgs";
const ProductCard = ({ product }) => {
  const colors = product.productImagesResult.map((item) => item.colorCode);
  const imgs = product.productImagesResult.map(
    (item) => process.env.REACT_APP_SERVER_URL + item.productColorImage[0]
  );
  const {
    name,
    new_price,
    old_price,
    rate,
    sold_amount,
    discout_rate,
    bestseller,
  } = product;
  return (
    <ProductCardWrapper>
      <Link to={`/product/${product.product_id}`}>
        <div className="photo">
          <img src={imgs[0]}></img>
          <div className="discount">-{discout_rate}%</div>
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
          <p className="newprice">{new_price}đ</p>
          <p className="oldprice">{old_price}đ</p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="rate">
              {Array(rate ? rate : 5)
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
          <div className="col-6 saled">Đã bán {sold_amount}</div>
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
