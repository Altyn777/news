import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { Login, News, Profile, Navbar, Heading } from "./components";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/news"
            element={
              <>
                <header>
                  <Heading />
                  <Navbar />
                </header>
                <Outlet />
              </>
            }
          >
            <Route index element={<h2 className="mx-3">Home</h2>} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
