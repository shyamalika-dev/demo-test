import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders welcome message and BasicComponent", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/welcome to my app/i);
  expect(welcomeMessage).toBeInTheDocument();
  const basicComponentText = screen.getByText(/hello, iam shyamalika/i);
  expect(basicComponentText).toBeInTheDocument();
});
