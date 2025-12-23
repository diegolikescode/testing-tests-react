import { render, screen } from "@testing-library/react";
import LoginForm from "../src/App";

test.skip("renders Vite + React text", () => {
  render(
    <LoginForm
      onSubmit={() => {
        console.log("check");
      }}
    />,
  );
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});
