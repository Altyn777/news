// import "./app.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="news">News</Link>
        <Link to="profile">Profile</Link>
        <Link to="login">Login</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
