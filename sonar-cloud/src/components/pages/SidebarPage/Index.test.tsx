import React from "react";
import { render, screen } from "@testing-library/react";
import SidebarPage from "./Index";

describe("SidebarPage component", () => {
  it("renders Sidebar with Brand, Navigation, and Footer components", () => {
    render(<SidebarPage />);
    expect(screen.getByTestId("brand")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
