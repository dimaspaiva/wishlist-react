import React from "react";

import {
  ProductContent,
  ProductContainer,
  ProductImageContainer,
  WishTag,
} from "./styles";

const Product = () => {
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
            src="https://f.i.uol.com.br/fotografia/2021/01/25/1611607387600f2d5bbbb86_1611607387_3x2_md.jpg"
            alt="product"
          />
        </ProductImageContainer>

        <h3 className="product-name">Teste</h3>
        <h2 className="product-price">R$ 4,00</h2>
      </ProductContent>
    </ProductContainer>
  );
};

export default Product;
