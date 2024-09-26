import React from "react";
import { render, screen } from "@testing-library/react";
import Brand from "./Index";
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

describe("Brand Component", () => {
  it("renders the Logo and Text components", () => {
    render(<Brand />);
    const logoElement = screen.getByAltText("Seeder Logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "/assests/Images/icon.svg");
    const textElement = screen.getByText("Seeder");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle("font-size: 24px");
  });
});
