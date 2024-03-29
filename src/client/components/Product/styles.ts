import styled from "styled-components";

export const ProductContainer = styled.div`
  display: inline-block;
  margin: 1.271%;
  width: 22.4576%;
`;

export const ProductContent = styled.div`
  border: solid 2px #d8d8d8;
  width: 100%;
  min-height: 400px;
  border-radius: 8px;
  padding: 16px;
  text-align: center;

  .product-image {
    width: 94%;
    height: auto;
    resize: horizontal;
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .product-name {
    font-size: 18px;
    color: #363636;
    margin-bottom: 40px;
  }

  .product-price {
    font-size: 18px;
    color: #edcb20;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

export const WishTag = styled.div`
  position: relative;
  float: left;
  top: -4px;
  left: 8px;
  width: 36px;
  height: 36px;
  background: #363636;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  :hover {
    cursor: pointer;
  }

  ::before {
    content: "";
    display: block;
    position: relative;
    top: 23.5px;
    left: 6px;
    background-color: #363636;
    width: 25.45px;
    height: 25.45px;

    transform: rotate(45deg);
  }

  .product__wish-tag-icon {
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
`;

export const WishIconContainer = styled.div`
  margin-left: 6px;
  position: relative;
  top: -12px;
`;
