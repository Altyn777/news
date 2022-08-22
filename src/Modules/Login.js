const Login = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" placeholder="Enter a username" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" placeholder="Enter a password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
