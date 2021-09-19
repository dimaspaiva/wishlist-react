import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BreadCrumb from ".";

describe("Breadcrumb", () => {
  it("Should render a breadcrumb", () => {
    const { getByText } = render(<BreadCrumb path="home" />);

    expect(getByText("home")).toBeTruthy();
  });

  it("Should render a breadcrumb with more than one path", () => {
    const { getByText } = render(<BreadCrumb path="home/breadcrumb" />);

    expect(getByText("breadcrumb")).toBeTruthy();
    expect(getByText("home")).toBeTruthy();
  });
});
