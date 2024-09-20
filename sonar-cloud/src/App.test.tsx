import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//test('renders learn react link', () => {
//render(<App />);
//const linkElement = screen.getByText(/learn react/i);
//expect(linkElement).toBeInTheDocument();
//});
test("renders hello text", () => {
  render(<App />);
  const textElement = screen.getByText(/hello iam shyamalika/i);
  expect(textElement).toBeInTheDocument();
});
