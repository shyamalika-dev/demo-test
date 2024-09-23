// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";
// test("renders welcome message and BasicComponent", () => {
//   render(<App />);
//   const welcomeMessage = screen.getByText(/welcome to my app/i);
//   expect(welcomeMessage).toBeInTheDocument();
//   const basicComponentText = screen.getByText(/hello, iam shyamalika/i);
//   expect(basicComponentText).toBeInTheDocument();
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message and BasicComponent", () => {
  render(<App />);

  // Check if the heading is in the document
  const headingElement = screen.getByText(/welcome to my app/i);
  expect(headingElement).toBeInTheDocument();

  // Check if BasicComponent is rendered correctly
  const basicComponentElement = screen.getByText(/Hello, Iam Shyamalika/i);
  expect(basicComponentElement).toBeInTheDocument();
});
