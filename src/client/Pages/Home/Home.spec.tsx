import React from "react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime.js";
import { render, act, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Home from ".";

const testingProducts = [
  {
    id: 0,
    image: "#",
    price: 199.99,
    avaibleSizes: { G: 1 },
    description: "testing product",
    style: "test",
    title: "Test Product",
    isWish: false,
  },
  {
    id: 2,
    image: "#",
    price: 99.99,
    avaibleSizes: { G: 1 },
    description: "testing product 2",
    style: "test 2",
    title: "Test Product 2",
    isWish: false,
  },
];

jest.mock("../../services/api", () => ({
  requestData: () => ({
    products: testingProducts,
  }),
}));

jest.mock("../../providers/wishlist", () => ({
  useWishlist: () => ({
    wishlist: [
      {
        id: 0,
        image: "#",
        price: 199.99,
        avaibleSizes: { G: 1 },
        description: "testing product",
        style: "test",
        title: "Test Product",
        isWish: true,
      },
    ],
    setWishlist: () => jest.fn(),
  }),
}));

const product1 = testingProducts[0];
const product2 = testingProducts[1];

describe("Home page", () => {
  it("should render the home page", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Carregando...")).toBeTruthy();

    await waitForElementToBeRemoved(() => getByText("Carregando..."));

    expect(getByText(product1.title)).toBeTruthy();
    expect(getByText(`R$ ${product1.price}`)).toBeTruthy();
    expect(getByText(product2.title)).toBeTruthy();
    expect(getByText(`R$ ${product2.price}`)).toBeTruthy();
  });

  it("should render the home page and select a product as wish", async () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Carregando...")).toBeTruthy();

    await waitForElementToBeRemoved(() => getByText("Carregando..."));

    expect(getByText(product1.title)).toBeTruthy();
    expect(getByText(`R$ ${product1.price}`)).toBeTruthy();
    expect(getByText(product2.title)).toBeTruthy();
    expect(getByText(`R$ ${product2.price}`)).toBeTruthy();

    const wishButtonProduct1 = getByTestId(`wish-button${product1.id}`);

    act(() => wishButtonProduct1.click());
  });
});
