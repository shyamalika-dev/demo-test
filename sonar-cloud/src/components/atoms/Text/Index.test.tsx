import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Index"; // Adjust the import path as necessary

describe("Text Component", () => {
  it("renders the text correctly", () => {
    const sampleText = "Hello, World!";
    render(<Text text={sampleText} />);

    const textElement = screen.getByText(sampleText);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle(`color: #fff`);
    expect(textElement).toHaveStyle(`font-size: 16px`);
    expect(textElement).toHaveStyle(`font-family: Gilroy,sans-serif`);
  });

  it("applies the provided color and font size", () => {
    const sampleText = "Custom Text";
    const customColor = "#dc004e";
    const customFontSize = "20px";

    render(
      <Text text={sampleText} color={customColor} fontSize={customFontSize} />
    );

    const textElement = screen.getByText(sampleText);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle(`color: ${customColor}`);
    expect(textElement).toHaveStyle(`font-size: ${customFontSize}`);
  });
});
