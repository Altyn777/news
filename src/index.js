import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<>Home</>} />
          <Route path="login" element={<>login</>} />
          <Route path="news" element={<>news</>} />
          <Route path="profile" element={<>profile</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
