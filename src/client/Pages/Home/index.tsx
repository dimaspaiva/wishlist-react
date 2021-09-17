import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Product from "../../components/Product";
import { useWishlist } from "../../Providers/wishlist";
import { requestData } from "../../services/api";

import { ProductType } from "./Home";

const SearchPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const { wishlist, setWishList } = useWishlist();

  const updateProducts = (newProducts: ProductType[]) => {
    const wishedProducts = wishlist.map((product) => product.id);
    return newProducts.map((product) => ({
      ...product,
      isWish: wishedProducts.includes(product.id),
    }));
  };

  useEffect(() => {
    setLoading(true);
    requestData().then((data: { products: ProductType[] }) => {
      setLoading(false);
      const updatedProducts = updateProducts(data.products);
      setProducts(updatedProducts);
    });
  }, []);

  const handleDefineWish = (id: number) => {
    setProducts((productsState) =>
      productsState.map((product) =>
        product.id === id
          ? { ...product, isWish: !product.isWish }
          : product
      )
    );
  };

  useEffect(() => {
    setWishList(products.filter((product) => product.isWish));
  }, [products]);

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">Home</h1>
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <Product
              key={`${product.id}`}
              product={product}
              defineWish={handleDefineWish}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
