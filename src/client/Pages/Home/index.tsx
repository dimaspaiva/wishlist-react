import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading";
import PageContainer from "../../components/PageContainer";
import Product from "../../components/Product";
import { useWishlist } from "../../Providers/wishlist";
import { requestData } from "../../services/api";

import { FetchedData, ProductType } from "./Home";

const SearchPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const { wishlist, setWishList } = useWishlist();

  const mergeFetchedWithWishlist = (newProducts: ProductType[]) => {
    const wishedProducts = wishlist.map((product) => product.id);
    return newProducts.map((product) => ({
      ...product,
      isWish: wishedProducts.includes(product.id),
    }));
  };

  const updateProducts = ({ products: newProducts }: FetchedData) => {
    const updatedProducts = mergeFetchedWithWishlist(newProducts);
    setProducts(updatedProducts);
  };

  const handleFetchData = async () => {
    const data = (await requestData()) as FetchedData;
    updateProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
      handleFetchData();
    }
  }, [wishlist]);

  const updateProductsState = (id: number) => {
    setProducts((productsState) =>
      productsState.map((product) =>
        product.id === id
          ? { ...product, isWish: !product.isWish }
          : product
      )
    );
  };

  const updateWishlistState = (id: number) => {
    const wishProductsIds = wishlist.map((product) => product.id);
    if (wishProductsIds.includes(id)) {
      return setWishList(wishlist.filter((product) => product.id !== id));
    }
    setWishList([
      ...wishlist,
      {
        ...products.filter((product) => product.id === id)[0],
        isWish: true,
      },
    ]);
  };

  const handleDefineWish = (id: number) => {
    updateProductsState(id);
    updateWishlistState(id);
  };

  return (
    <PageContainer title="Home">
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
    </PageContainer>
  );
};

export default SearchPage;
