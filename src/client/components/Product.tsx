import React from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="product__wish-tag clearfix">
        <img
          className="product__wish-tag-icon"
          src="./icons/heart.svg"
          alt=""
        />
      </div>
      <div className="product-container">
        <div className="product-content">
          <img
            className="product-image"
            src="https://f.i.uol.com.br/fotografia/2021/01/25/1611607387600f2d5bbbb86_1611607387_3x2_md.jpg"
            alt="product"
          />

          <h3 className="product-name">Teste</h3>
          <h2 className="product-price">R$ 4,00</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
