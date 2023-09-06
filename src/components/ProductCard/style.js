import styled from "styled-components";
const ProductCardWrapper = styled.div`
  width: 100%;
  padding: 8px;
  position: relative;
  .photo {
    width: 100%;
  }
  img {
    width: 100%;
    position: relative;
  }
  .bestseller {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 3px 5px;
    background-color: #f0683a;
    color: white;
    text-align: center;
    font-size: 10px;
    display: none;
  }
  .discount {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    text-align: center;
    font-size: 12px;
  }
  .infor {
    margin-top: 12px;
  }
  .price {
    display: flex;
    .newprice {
      color: red;
    }
    .oldprice {
      margin-left: 12px;
      text-decoration-line: line-through;
      color: gray;
    }
  }
  .rate {
    color: orange;
    svg {
      width: 16px;
    }
  }
  .saled {
    text-align: end;
  }
  .colors {
    margin-top: 8px;
    display: flex;
    div {
      border: 2px #ededed solid;
      margin-right: 4px;
    }
  }
  .heart {
    margin-top: 8px;
    color: red;
    text-align: end;
  }
`;
export default ProductCardWrapper;
