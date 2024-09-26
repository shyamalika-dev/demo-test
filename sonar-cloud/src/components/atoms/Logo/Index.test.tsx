import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Index";
describe("Logo Component", () => {
  test("renders the logo image with correct src and alt attributes", () => {
    const src = "/assests/Images/icon.svg";
    const alt = "seeder Logo";
    render(<Logo src={src} alt={alt} />);
    const imgElement = screen.getByAltText(alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", src);
  });
  test("has the correct styles", () => {
    const src = "/assests/Images/icon.svg";
    const alt = "seeder Logo";
    render(<Logo src={src} alt={alt} />);
    const imgElement = screen.getByAltText(alt);
    expect(imgElement).toHaveStyle("width: 24px");
    expect(imgElement).toHaveStyle("height: 24px");
    expect(imgElement).toHaveStyle("border-radius: 8px");
  });
});
