import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet Component positive", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toBeInTheDocument();
  });

  it("renders guest", () => {
    render(<Greet />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toHaveTextContent("Hello Guest");
  });
});

describe("Greet Component negative test", () => {
  it("renders name correctly", () => {
    render(<Greet name="vasanth" />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toHaveTextContent("Hello vasanth");
  }, 1);
});
