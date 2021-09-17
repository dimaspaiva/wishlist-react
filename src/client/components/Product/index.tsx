import React from "react";
import { ProductProps } from "./Product";

import {
  ProductContent,
  ProductContainer,
  ProductImageContainer,
  WishTag,
} from "./styles";

const Product = (props: ProductProps) => {
  const { product } = props;
  return (
    <ProductContainer>
      <WishTag className="clearfix">
        <img
          className="product__wish-tag-icon"
          src="./icons/heart.svg"
          alt=""
        />
      </WishTag>
      <ProductContent>
        <ProductImageContainer>
          <img
            className="product-image"
            src={product.image}
            alt="product"
          />
        </ProductImageContainer>

        <h3 className="product-name">{product.title}</h3>
        <h2 className="product-price">R$ {product.price}</h2>
      </ProductContent>
    </ProductContainer>
  );
};

export default Product;
