import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./app.css";

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
              <h1>News</h1>
              <nav>
                <Link to="/news">Home</Link>
                <Link to="/news/news">News</Link>
                <Link to="/news/profile">Profile</Link>
              </nav>
            </header>
            <Outlet />
          </>
        }
      >
        <Route index element={<>Home</>} />
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
