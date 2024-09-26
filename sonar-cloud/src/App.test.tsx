import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App"; // Adjust the path as necessary

describe("App Component", () => {
  it("renders SidebarPage component", () => {
    render(<App />);

    // Check if the SidebarPage is rendered
    const sidebarPageElement = screen.getByTestId("sidebar-page"); // Adjust this according to your SidebarPage test ID if necessary
    expect(sidebarPageElement).toBeInTheDocument();
  });
});
