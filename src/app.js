import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login, News, Profile } from "./Modules";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/news"
        element={
          <>
            <header>
              <h1 className="text-bg-success m-0 p-3">News</h1>
              <nav className="navbar navbar-dark bg-success bg-opacity-75 px-3 mb-2">
                <Link to="/news" className="nav-link nav-item">
                  Home
                </Link>
                <Link to="/news/news" className="nav-link nav-item">
                  News
                </Link>
                <Link to="/news/profile" className="nav-link nav-item">
                  Profile
                </Link>
              </nav>
            </header>
            <Outlet />
          </>
        }
      >
        <Route index element={<h2 className="mx-3">Home</h2>} />
        <Route path="news" element={<News />} />
        <Route
          path="profile"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/news/login" />
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
