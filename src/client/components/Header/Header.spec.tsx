import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Header from ".";
import { MemoryRouter, Router } from "react-router";

describe("Header", () => {
  it("should render a header", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByText("MagaNets")).toBeTruthy();
    expect(getByText("Cidade: São Paulo")).toBeTruthy();
    expect(getByText("Central de atendimento")).toBeTruthy();
    expect(getByText("Lista de desejos")).toBeTruthy();
  });
});
