import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-success bg-opacity-75 px-3 mb-2">
      <ul className="collapse navbar-collapse navbar-nav">
        <li className="nav-item">
          <Link to="/news" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news/news" className="nav-link">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news/profile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
