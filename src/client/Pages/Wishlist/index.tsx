import React from "react";

import PageContainer from "../../components/PageContainer";
import Product from "../../components/Product";
import { useWishlist } from "../../providers/wishlist";

const Wishlist = () => {
  const { wishlist, setWishlist } = useWishlist();

  const removeWish = (id: number) => {
    setWishlist(wishlist.filter((product) => product.id !== id));
  };

  return (
    <PageContainer path="Home/Lista de desejos">
      {wishlist.map((product) => (
        <Product
          key={`${product.id}`}
          product={product}
          defineWish={() => removeWish(product.id)}
        />
      ))}
    </PageContainer>
  );
};

export default Wishlist;
