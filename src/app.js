// import "./app.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>News</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="news">News</Link>
          <Link to="profile">Profile</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
