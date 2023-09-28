import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import dataRestaurant from "./data/dataRestaurant.json";

import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
import LandingRu from "./pages/Landing-ru.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App data={dataRestaurant} />} />
        <Route path="/ar" element={<LandingAr data={dataRestaurant} />} />
        <Route path="/ru" element={<LandingRu data={dataRestaurant}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
