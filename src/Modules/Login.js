import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ login: "", password: "" });

  const [error] = useState(false);

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login:</label>
        <input
          id="login"
          placeholder="Enter a login"
          type="text"
          required
          onChange={handleInput}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          placeholder="Enter a password"
          type="password"
          required
          onChange={handleInput}
        />
        <button type="submit">Login</button>
        {error && (
          <span>The username or password you entered is incorrect</span>
        )}
      </form>
    </div>
  );
};

export default Login;
