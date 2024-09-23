// import React from "react";
// import { render, screen } from "@testing-library/react";
// import BasicComponent from "./BasicComponent";
// test("renders BasicComponent with correct name", () => {
//   render(<BasicComponent name="shyamalika" />);
//   const textElement = screen.getByText(/hello, iam shyamalika/i);
//   expect(textElement).toBeInTheDocument();
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import BasicComponent from "./BasicComponent";

test("renders BasicComponent with correct name", () => {
  const name = "Shyamalika";

  // Render the component
  render(<BasicComponent name={name} />);

  // Assert the rendered text
  const textElement = screen.getByText(/Hello, Iam Shyamalika/i);
  expect(textElement).toBeInTheDocument();
});
