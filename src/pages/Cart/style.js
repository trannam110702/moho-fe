import styled from "styled-components";
const CartWrapper = styled.div`
  .main {
    margin-top: 36px;
  }
`;
export const CartDetailWrapper = styled.div`
  .title {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 36px;
  }
  .cart-product {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: 12px 0;
  }
  img {
    width: 100px;
  }
  .buttons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 16px;
    button {
      text-transform: uppercase;
      font-weight: 700;
      display: block;
      width: 100%;
      max-width: 200px;
      border: none;
      margin-bottom: 10px;
      margin-top: 24px;
      padding: 10px;
      color: white;
    }
    .add-to-card {
      background-color: #27678f;
    }
    .buy-now {
      background-color: #ef683a;
    }
  }
`;
export default CartWrapper;
