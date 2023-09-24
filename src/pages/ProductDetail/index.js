import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailWrapper from "./style";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

import { productApi, cartApi } from "../../api/mohoApi";
import { star, starFill, heartIcon } from "../../assets/imgs/svgs";
import { formatCurrency } from "../../ultils";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPr = async () => {
      window.scrollTo(0, 0);
      const res = await productApi.getProductById(id);
      setProduct(res);
      setLoading(false);
    };
    getPr();
  }, [id]);

  return (
    <ProductDetailWrapper>
      <Layout>
        <Loading loading={loading}></Loading>
        {product && <Gallery product={product}></Gallery>}
      </Layout>
    </ProductDetailWrapper>
  );
};

export const Gallery = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.productImagesResult[0]);
  const [curentImage, setCurentImage] = useState(
    `${process.env.REACT_APP_SERVER_URL}${color.productColorImage[0]}`
  );
  useEffect(() => {
    setCurentImage(
      `${process.env.REACT_APP_SERVER_URL}${color.productColorImage[0]}`
    );
  }, [color]);
  return (
    <div className="container detail-main">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-6 gallery">
          <div className="image-sider">
            {color &&
              color.productColorImage.map((img) => {
                return (
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}${img}`}
                    onClick={() => {
                      setCurentImage(
                        `${process.env.REACT_APP_SERVER_URL}${img}`
                      );
                    }}
                    alt=""
                  ></img>
                );
              })}
          </div>
          <div className="current-image">
            <img src={curentImage}></img>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-6 detail">
          <div className="name">{product.name}</div>
          <div className="rate-sold">
            <div className="rate">
              {Array(product.rate)
                .fill("rated")
                .concat(Array(5 - product.rate).fill("no-rate"))
                .map((rate) => {
                  let src;
                  if (rate === "rated") {
                    src = starFill;
                  } else src = star;
                  return src;
                })}
            </div>
            <div>Đã bán: {product.sold_amount}</div>
          </div>
          <hr />
          <div className="discount-price">
            <div className="discount">-{product.discout_rate}%</div>
            <div className="price">{formatCurrency(product.new_price)}đ</div>
            <div className="old-price">
              <i>{formatCurrency(product.old_price)}đ</i>
            </div>
          </div>
          <hr />
          <div className="colors">
            <span className="title">Màu sắc: </span>
            {product.productImagesResult.map((color) => {
              return (
                <div
                  className="color"
                  style={{ backgroundColor: `${color.colorCode}` }}
                  onClick={() => {
                    setColor(color);
                  }}
                ></div>
              );
            })}
          </div>
          <hr />
          <div className="description">
            <div className="size">
              <div className="title">Kích thước: </div>
              <span>
                Chiều dài: {product.size.length}, Chiều rộng:{" "}
                {product.size.width}, Chiều cao: {product.size.height}{" "}
              </span>
            </div>
            <div className="material">
              <div className="title">Chất liệu: </div>
              <span>Sản phẩm được làm từ {product.material_id}</span>
            </div>
            <div>
              <i>
                (*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm
                bảo gỗ không độc hại, an toàn cho sức khỏe <br />
                Chống thấm, cong vênh, trầy xước, mối mọt
              </i>
            </div>
            <div className="quantity">
              <div
                className="minus"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                -
              </div>
              <div className="current">{quantity}</div>
              <div
                className="plus"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </div>
            </div>
            <div className="buttons">
              <button
                className="add-to-card"
                onClick={() => cartApi.addToCart(product.category_id, quantity)}
              >
                Thêm vào giỏ
              </button>
              <button className="buy-now">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
