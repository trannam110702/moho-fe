import React from "react";
import ProductListWrapper from "./style";
import ProductCard from "../ProductCard";
const ProductList = ({ products, title }) => {
  return (
    <ProductListWrapper className="container">
      <div className="title">{title}</div>
      <div className="row gy-3">
        {products.map((product) => {
          return (
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <ProductCard product={product}></ProductCard>
            </div>
          );
        })}
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
