import React from "react";
import { render, screen } from "@testing-library/react";
import BasicComponent from "./BasicComponent";
test("renders BasicComponent with correct name", () => {
  render(<BasicComponent name="shyamalika" />);
  const textElement = screen.getByText(/hello, iam shyamalika/i);
  expect(textElement).toBeInTheDocument();
});
