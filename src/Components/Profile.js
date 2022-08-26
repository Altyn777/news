import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { users } from "../data";

export const Profile = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const user = users[0];

  return isAuthenticated ? (
    <div className="mx-3">
      <h2>Profile</h2>
      <dl>
        <dt>Login</dt>
        <dd>{user.login}</dd>

        <dt>ID</dt>
        <dd>{user.id}</dd>
      </dl>
    </div>
  ) : (
    <Navigate to="/news/login" />
  );
};
