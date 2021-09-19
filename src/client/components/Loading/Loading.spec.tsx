import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loading from ".";

describe("Loading", () => {
  it("should render a loading", () => {
    const { getByText } = render(<Loading />);

    expect(getByText("Carregando...")).toBeTruthy();
  });
});
