import React from "react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime.js";
import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Wishlist from ".";

const testingProducts = [
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
  {
    id: 2,
    image: "#",
    price: 99.99,
    avaibleSizes: { G: 1 },
    description: "testing product 2",
    style: "test 2",
    title: "Test Product 2",
    isWish: true,
  },
];

jest.mock("../../providers/wishlist", () => ({
  useWishlist: () => ({
    wishlist: testingProducts,
    setWishlist: () => jest.fn(),
  }),
}));

const product1 = testingProducts[0];
const product2 = testingProducts[1];

describe("Wishlist page", () => {
  it("Should render the wishlist page", () => {
    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(getByText(product1.title)).toBeTruthy();
    expect(getByText(`R$ ${product1.price}`)).toBeTruthy();
    expect(getByText(product2.title)).toBeTruthy();
    expect(getByText(`R$ ${product2.price}`)).toBeTruthy();

    expect(getAllByText("Heart - #CF251F")).toHaveLength(2);
  });

  it("Should render wishlist and remove a product", async () => {
    const { getByText, getAllByText, getByTestId, queryByText } = render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(getByText(product1.title)).toBeTruthy();
    expect(getByText(product2.title)).toBeTruthy();
    expect(getAllByText("Heart - #eaeaea")).toHaveLength(1);
    expect(getAllByText("Heart - #CF251F")).toHaveLength(2);
    const product1WishButton = getByTestId(`wish-button${product1.id}`);

    act(() => product1WishButton.click());
  });
});
