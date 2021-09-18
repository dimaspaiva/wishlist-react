import React from "react";

import PageContainer from "../../components/PageContainer";
import Product from "../../components/Product";
import { useWishlist } from "../../Providers/wishlist";

const HomePage = () => {
  const { wishlist, setWishList } = useWishlist();

  const removeWish = (id: number) => {
    setWishList(wishlist.filter((product) => product.id !== id));
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

export default HomePage;
