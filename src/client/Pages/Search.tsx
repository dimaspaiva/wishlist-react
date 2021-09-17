import React from "react";

import Header from "../components/Header";
import Product from "../components/Product";

const SearchPage = () => {
  const products = Array(5)
    .fill(0)
    .map((item, index) => index);

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">Home</h1>
        {products.map((item) => (
          <Product key={`${item}`} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
