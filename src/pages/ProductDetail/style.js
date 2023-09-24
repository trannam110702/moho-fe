import styled from "styled-components";
const ProductDetailWrapper = styled.div`
  .detail-main {
    margin-top: 36px;
    .rate {
      color: orange;
      svg {
        width: 16px;
      }
    }
    .name {
      font-size: 20px;
      font-weight: 700;
      line-height: initial;
      margin-bottom: 12px;
    }
    .detail {
      max-width: 500px;
    }
  }
  .gallery {
    display: flex;
    margin-bottom: 20px;
    .image-sider {
      flex: 1 0 60px;
      margin-right: 20px;
      img {
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
  img {
    width: 100%;
  }
  .rate-sold {
    display: flex;
    justify-content: space-between;
  }
  .discount-price {
    display: flex;
    div {
      padding: 5px 12px;
      font-size: 16px;
      font-weight: 700;
    }
    .discount {
      background-color: #ededed;
      color: #f94c43;
    }
    .price {
      margin-left: 12px;
      color: #d76841;
    }
    .old-price {
      text-decoration: line-through;
      font-weight: 100;
    }
  }
  .colors {
    .color {
      height: 20px;
      width: 20px;
      border-radius: 16px;
      padding: 0;
      border: 2px #ededed solid;
      margin-right: 4px;
      margin-top: 5px;
      cursor: pointer;
    }
  }
  .description {
    font-size: 16px;
    line-height: 30px;
  }
  .title {
    font-weight: 700;
  }
  .quantity {
    cursor: pointer;
    display: flex;
    div {
      padding: 5px 20px;
    }
    .plus,
    .minus {
      background-color: #f5f5f5;
    }
  }
  .buttons {
    margin-top: 10px;
    button {
      text-transform: uppercase;
      font-weight: 700;
      display: block;
      width: 100%;
      border: none;
      margin-bottom: 10px;
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
export default ProductDetailWrapper;
