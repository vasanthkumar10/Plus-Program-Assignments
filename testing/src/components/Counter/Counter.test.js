import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter Component", () => {
  test("renders properly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders zero by default", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(0);
  });

  test("render 1 after clicking increment button", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    user.click(buttonElement);
    user.click(buttonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(2);
  });

  test.skip("render 100 after setting input", () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    user.type(inputElement, "100");

    const setButtonElement = screen.getByRole("button", {
      name: "set",
    });

    user.click(setButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(100);
  });
});
