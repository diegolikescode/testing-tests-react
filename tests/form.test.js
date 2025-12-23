import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../src/App";
import RealForm from "../src/Form";

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("FAILS: expects onSubmit to be called automatically", () => {
    const onSubmit = jest.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    expect(onSubmit).toHaveBeenCalled();
  });

  test("WORKS: calls onSubmit with username and password on submit", () => {
    const onSubmit = jest.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "diego" },
    });

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith("diego", "1234");
  });

  test("WORKS: now it uses a form with onSubmit", () => {
    const onSubmit = jest.fn();

    render(<RealForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "diego" },
    });

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "1234" },
    });

    fireEvent.submit(screen.getByTestId("login-button"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith("diego", "1234");
  });
});
