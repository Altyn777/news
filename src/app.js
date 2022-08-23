// import "./app.css";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

import Login from "./Modules";

function App() {
  let user;

  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      >
        <Route index element={<>Home</>} />
        <Route path="news" element={<>news</>} />
        <Route
          path="profile"
          element={user ? <>profile</> : <Navigate to="/login" />}
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
