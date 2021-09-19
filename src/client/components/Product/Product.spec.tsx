import React from "react";
import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";

import Product from ".";
import { ProductType } from "../../Pages/Home/Home";

const fakeDefineWish = jest.fn();

const testProduct: ProductType = {
  id: 0,
  image: "#",
  price: 199.99,
  avaibleSizes: { G: 1 },
  description: "testing product",
  style: "test",
  title: "Test Product",
  isWish: false,
};

describe("Product", () => {
  it("should render a product", () => {
    const { getByText, getByAltText } = render(
      <Product defineWish={fakeDefineWish} product={testProduct} />
    );

    expect(getByText(testProduct.title)).toBeTruthy();
    expect(getByText(`R$ ${testProduct.price}`)).toBeTruthy();
    expect(getByAltText("product")).toBeTruthy();
    expect(getByText("Heart - #eaeaea")).toBeTruthy();
  });

  it("should select a product as a wish and unselect", () => {
    const { getByTestId, getByText } = render(
      <Product defineWish={fakeDefineWish} product={testProduct} />
    );

    expect(getByText("Heart - #eaeaea")).toBeTruthy();
    const wishButton = getByTestId(`wish-button${testProduct.id}`);

    act(() => wishButton.click());

    expect(fakeDefineWish.mock.calls).toHaveLength(1);

    act(() => wishButton.click());

    expect(fakeDefineWish.mock.calls).toHaveLength(2);
  });

  it("should render a product as a wish", () => {
    const { getByTestId, getByText } = render(
      <Product
        defineWish={fakeDefineWish}
        product={{ ...testProduct, isWish: true }}
      />
    );

    expect(getByText("Heart - #CF251F")).toBeTruthy();
  });
});
