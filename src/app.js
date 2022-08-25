import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login, News, Profile } from "./Modules";
import Navbar from "./Components/Navbar";

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
              <Navbar />
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
