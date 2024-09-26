import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Index";
jest.mock("../../molecules/FooterItem/Index", () => {
  return function MockedFooterItem() {
    return <div>Footer Item</div>;
  };
});

describe("Footer Component", () => {
  it("renders FooterItem", () => {
    render(<Footer />);
    const footerItemElement = screen.getByText("Footer Item");
    expect(footerItemElement).toBeInTheDocument();
  });

  it("renders the footer element", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
