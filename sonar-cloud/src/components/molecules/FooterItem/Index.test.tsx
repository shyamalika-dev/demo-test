import React from "react";
import { render, screen } from "@testing-library/react";
import FooterItem from "./Index";
jest.mock("../../atoms/Logo/Index", () => {
  return function MockedLogo(props: { src: string; alt: string }) {
    return <img src={props.src} alt={props.alt} />;
  };
});
jest.mock("../../atoms/Text/Index", () => {
  return function MockedText(props: { text: string; fontSize?: string }) {
    return <p style={{ fontSize: props.fontSize }}>{props.text}</p>;
  };
});

describe("FooterItem Component", () => {
  it("renders the Logo and Text components", () => {
    render(<FooterItem />);
    const logoElement = screen.getByAltText("watch how to");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "/assests/Images/flash.svg");
    const textElement = screen.getByText("watch how to");
    expect(textElement).toBeInTheDocument();
  });

  it("has the correct styles", () => {
    render(<FooterItem />);
    const footerItem = screen.getByTestId("footer");
    expect(footerItem).toHaveStyle("position: absolute");
    expect(footerItem).toHaveStyle("bottom: 20px");
    expect(footerItem).toHaveStyle("left: 40px");
    expect(footerItem).toHaveStyle("color: #fff");
  });
});
