import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Index"; // Adjust the path as needed

describe("Sidebar component", () => {
  const mockBrandComponent = <div data-testid="brand">Brand</div>;
  const mockNavigationComponent = (
    <div data-testid="navigation">Navigation</div>
  );
  const mockFooterComponent = <div data-testid="footer">Footer</div>;

  it("renders the brand component", () => {
    render(
      <Sidebar
        brandComponent={mockBrandComponent}
        navigationComponent={mockNavigationComponent}
        footerComponent={mockFooterComponent}
      />
    );

    expect(screen.getByTestId("brand")).toBeInTheDocument();
  });

  it("renders the navigation component", () => {
    render(
      <Sidebar
        brandComponent={mockBrandComponent}
        navigationComponent={mockNavigationComponent}
        footerComponent={mockFooterComponent}
      />
    );

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("renders the footer component", () => {
    render(
      <Sidebar
        brandComponent={mockBrandComponent}
        navigationComponent={mockNavigationComponent}
        footerComponent={mockFooterComponent}
      />
    );

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders all components correctly", () => {
    render(
      <Sidebar
        brandComponent={mockBrandComponent}
        navigationComponent={mockNavigationComponent}
        footerComponent={mockFooterComponent}
      />
    );

    expect(screen.getByTestId("brand")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
