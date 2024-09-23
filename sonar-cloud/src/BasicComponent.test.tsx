import React from "react";
import { render, screen } from "@testing-library/react";
import BasicComponent from "./BasicComponent";
test("renders BasicComponent with correct name", () => {
  const name = "Shyamalika";
  render(<BasicComponent name={name} />);
  const textElement = screen.getByText(/hello, iam shyamalika/i);
  expect(textElement).toBeInTheDocument();
});
