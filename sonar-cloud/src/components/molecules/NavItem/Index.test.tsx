import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NavItem from "./Index";
describe("NavItem component", () => {
  const label = "Home";
  const iconSrc = "./assests/Images/home-2.svg";
  const mockOnClick = jest.fn();

  it("renders the NavItem correctly", () => {
    render(
      <NavItem
        label={label}
        iconSrc={iconSrc}
        onClick={mockOnClick}
        isActive={false}
        data-testid="nav-item-home"
      />
    );

    // Check if label and icon are rendered
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByAltText(label)).toBeInTheDocument();
  });

  it("applies active styling when isActive is true", () => {
    render(
      <NavItem
        label={label}
        iconSrc={iconSrc}
        onClick={mockOnClick}
        isActive={true}
        data-testid="nav-item-home"
      />
    );

    const navItem = screen.getByTestId("nav-item-home");
    expect(navItem).toHaveStyle("background-color: rgb(68, 68, 68)");
  });

  it("calls onClick when clicked", () => {
    render(
      <NavItem
        label={label}
        iconSrc={iconSrc}
        onClick={mockOnClick}
        isActive={false}
        data-testid="nav-item-home"
      />
    );

    const navItem = screen.getByTestId("nav-item-home");
    fireEvent.click(navItem);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("changes background on hover", () => {
    render(
      <NavItem
        label={label}
        iconSrc={iconSrc}
        onClick={mockOnClick}
        isActive={false}
        data-testid="nav-item-home"
      />
    );

    const navItem = screen.getByTestId("nav-item-home");
    fireEvent.mouseOver(navItem);
    expect(navItem).toHaveStyle("background-color: #444");
  });
});
