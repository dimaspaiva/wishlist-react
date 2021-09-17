import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Product from "../../components/Product";
import { requestData } from "../../services/api";

import { ProductType } from "./Home";

const SearchPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    requestData().then((data: { products: ProductType[] }) => {
      setLoading(false);
      setProducts(data.products);
    });
  }, []);

  console.log(products);

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">Home</h1>
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <Product key={`${product.id}`} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
