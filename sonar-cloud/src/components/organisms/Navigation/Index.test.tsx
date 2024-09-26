import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navigation from "./Index";

describe("Navigation component", () => {
  it("renders NavItem components correctly", () => {
    render(<Navigation />);
    expect(screen.getByTestId("nav-item-home")).toBeInTheDocument();
    expect(screen.getByTestId("nav-item-acceleration")).toBeInTheDocument();
  });

  it("activates the correct NavItem on click", () => {
    render(<Navigation />);
    const homeNavItem = screen.getByTestId("nav-item-home");
    fireEvent.click(homeNavItem);
    expect(homeNavItem).toHaveStyle("background-color: rgb(68, 68, 68)");
    const accelerationNavItem = screen.getByTestId("nav-item-acceleration");
    fireEvent.click(accelerationNavItem);
    expect(accelerationNavItem).toHaveStyle(
      "background-color: rgb(68, 68, 68)"
    );
    expect(homeNavItem).toHaveStyle("background-color: rgb(68, 68, 68)");
  });
});
