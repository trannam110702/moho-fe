import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartWrapper, { CartDetailWrapper } from "./style";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

import { productApi, cartApi } from "../../api/mohoApi";
import { star, starFill, heartIcon } from "../../assets/imgs/svgs";
import { formatCurrency } from "../../ultils";
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCart = async () => {
      const cartData = await cartApi.getAll();
      setCartData(cartData);
      setLoading(false);
    };
    getCart();
  }, []);
  return (
    <CartWrapper>
      <Layout>
        <div className="container main">
          <Loading loading={loading}></Loading>
          {cartData && <CartDetail cart={cartData} />}
        </div>
      </Layout>
    </CartWrapper>
  );
};

const CartDetail = ({ cart }) => {
  console.log(cart);
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const cartWithProductData = await Promise.all(
        cart.map(async (item) => {
          const product = await productApi.getProductById(item.productId);
          return { key: item.productId, ...product, quantity: item.quantity };
        })
      );
      setCartData(cartWithProductData);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <CartDetailWrapper>
      <div className="title">Giỏ hàng</div>
      {cartData ? (
        <div>
          {cartData.map((item) => {
            console.log(item);
            return (
              <div key={item.productId} className="cart-product">
                <img
                  className="image"
                  src={`${process.env.REACT_APP_SERVER_URL}${item.productImagesResult[0].productColorImage[0]}`}
                />
                <div>
                  <span>{item.name}</span>
                  <div>Số lượng: {item.quantity}</div>
                </div>
              </div>
            );
          })}
          <div className="buttons">
            <button className="add-to-card">Thanh toán</button>
            <button className="buy-now">Hủy bỏ</button>
          </div>
        </div>
      ) : (
        <Loading loading={loading}></Loading>
      )}
    </CartDetailWrapper>
  );
};

export default Cart;
