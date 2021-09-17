import React from "react";

import Header from "../components/Header";
import Product from "../components/Product";

const SearchPage = () => {
  const products = Array(5).fill(Math.random);

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">Home</h1>
        {products.map((item) => {
          console.log(item);
          return <Product key={`${item}`} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
