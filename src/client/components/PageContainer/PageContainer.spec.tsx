import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import PageContainer from ".";
import { MemoryRouter } from "react-router";

const testPageContent = "Testing page";

describe("Page container", () => {
  it("should render a simple page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageContainer path="home">
          <p>{testPageContent}</p>
        </PageContainer>
      </MemoryRouter>
    );

    expect(getByText("home")).toBeTruthy();
    expect(getByText(testPageContent)).toBeTruthy();
  });
});
