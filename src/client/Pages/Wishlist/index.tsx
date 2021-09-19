import React, { useMemo, useState } from "react";

import PageContainer from "../../components/PageContainer";
import Product from "../../components/Product";
import { useWishlist } from "../../providers/wishlist";

const Wishlist = () => {
  const { wishlist, setWishlist } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");

  const removeWish = (id: number) => {
    setWishlist(wishlist.filter((product) => product.id !== id));
  };

  const searchProducts = useMemo(() => {
    if (!searchTerm) {
      return wishlist;
    }
    return wishlist.filter((product) =>
      product.title.toUpperCase().match(searchTerm.toUpperCase())
    );
  }, [searchTerm, wishlist]);

  return (
    <PageContainer path="Home/Lista de desejos" setSearchTerm={setSearchTerm}>
      {searchProducts.map((product) => (
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
