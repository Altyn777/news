import { users } from "../data";

const Profile = () => {
  const user = users[0];

  return (
    <div className="mx-3">
      <h2>Profile</h2>
      <dl>
        <dt>Login</dt>
        <dd>{user.login}</dd>

        <dt>ID</dt>
        <dd>{user.id}</dd>
      </dl>
    </div>
  );
};

export default Profile;
