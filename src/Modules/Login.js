import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";

import { users } from "../data";

const Login = () => {
  const [data, setData] = useState({ login: "", password: "" });

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInput = (e) => {
    let newInput = { [e.target.id]: e.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      dispatch(loginStart());
      try {
        const user = users[0];
        if (user.login === data.login && user.password === data.password) {
          dispatch(loginSuccess(data.login));
          navigate("/news/profile");
        } else {
          throw new Error("The username or password you entered is incorrect");
        }
      } catch (error) {
        dispatch(loginFailure());
        setError(error.message);
      }
    };

    login();
  };

  return (
    <div>
      <h2 className="text-center">Sign in</h2>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ width: "300px" }}
      >
        <label htmlFor="login" className="form-label">
          Login:
        </label>
        <input
          id="login"
          placeholder="Enter a login"
          type="text"
          required
          onChange={handleInput}
          className="form-control mb-3"
        />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          id="password"
          placeholder="Enter a password"
          type="password"
          required
          onChange={handleInput}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success">
          Login
        </button>
        {error && <div className="text-danger mt-3">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
