import React from "react";
import { Heart } from "react-feather";
import { ProductProps } from "./Product";

import {
  ProductContent,
  ProductContainer,
  ProductImageContainer,
  WishTag,
  WishIconContainer,
} from "./styles";

const Product = (props: ProductProps) => {
  const { product, defineWish } = props;

  return (
    <ProductContainer>
      <WishTag
        data-testid={`wish-button${product.id}`}
        onClick={() => defineWish(product.id)}
      >
        <WishIconContainer>
          <Heart color="none" fill={product.isWish ? "#CF251F" : "#eaeaea"} />
        </WishIconContainer>
      </WishTag>
      <ProductContent>
        <ProductImageContainer>
          <img className="product-image" src={product.image} alt="product" />
        </ProductImageContainer>

        <h3 className="product-name">{product.title}</h3>
        <h2 className="product-price">R$ {product.price}</h2>
      </ProductContent>
    </ProductContainer>
  );
};

export default Product;
