import React from "react";

import Header from "../../components/Header";
import Product from "../../components/Product";
import { useWishlist } from "../../Providers/wishlist";

const HomePage = () => {
  const { wishlist, setWishList } = useWishlist();

  const removeWish = (id: number) => {
    setWishList(wishlist.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">Wishlist</h1>

        {wishlist.map((product) => (
          <Product
            key={`${product.id}`}
            product={product}
            defineWish={() => removeWish(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
