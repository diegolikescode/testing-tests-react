import { useCallback, useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClick = useCallback(() => {
    onSubmit(username, password);
  }, [username, password, onSubmit]);

  return (
    <form>
      <input
        id="username-input"
        data-testid="username-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        id="password-input"
        data-testid="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        id="login-button"
        data-testid="login-button"
        type="submit"
        // onClick={onClick} // this works in the 2th test-case
        onSubmit={onClick} // this one doesn't because it should be a formin the 2th test-case
      >
        Submit
      </button>
    </form>
  );
}
