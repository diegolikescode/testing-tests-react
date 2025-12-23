import { render, screen } from "@testing-library/react";
import LoginForm from "../src/App";

test.skip("just checking the setup", () => {
  render(
    <LoginForm
      onSubmit={() => {
        console.log("check");
      }}
    />,
  );
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});
