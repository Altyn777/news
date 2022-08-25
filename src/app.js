import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

import "./app.css";

import { Login, News } from "./Modules";

function App() {
  let user;

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
          element={user ? <>profile</> : <Navigate to="/news/login" />}
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
