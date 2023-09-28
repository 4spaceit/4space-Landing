import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import dataRestaurantEn from "./data/dataRestaurant.json";
import dataRetailEn from "./data/dataRetail.json";
import dataResidentialEn from "./data/dataResidential.json";
import dataCommercialEn from "./data/dataCommercial.json";
import dataBrandingEn from "./data/dataBranding.json";

import dataRestaurantAr from "./data/ar/dataRestaurant.json";
import dataRetailAr from "./data/ar/dataRetail.json";
import dataResidentialAr from "./data/ar/dataResidential.json";
import dataCommercialAr from "./data/ar/dataCommercial.json";
import dataBrandingAr from "./data/ar/dataBranding.json";

import dataRestaurantRu from "./data/ru/dataRestaurant.json";
import dataRetailRu from "./data/ru/dataRetail.json";
import dataResidentialRu from "./data/ru/dataResidential.json";
import dataCommercialRu from "./data/ru/dataCommercial.json";
import dataBrandingRu from "./data/ru/dataBranding.json";


import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
import LandingRu from "./pages/Landing-ru.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App data={dataRestaurantEn} />} />
        <Route path="/retail" element={<App data={dataRetailEn} />} />
        <Route path="/residential" element={<App data={dataResidentialEn} />} />
        <Route path="/commercial" element={<App data={dataCommercialEn} />} />
        <Route path="/branding" element={<App data={dataBrandingEn} />} />

        <Route path="/ar/" element={<LandingAr data={dataRestaurantAr} />} />
        <Route path="/ar/retail" element={<LandingAr data={dataRetailAr} />} />
        <Route path="/ar/residential" element={<LandingAr data={dataResidentialAr} />} />
        <Route path="/ar/commercial" element={<LandingAr data={dataCommercialAr} />} />
        <Route path="/ar/branding" element={<LandingAr data={dataBrandingAr} />} />

        <Route path="/ru/" element={<LandingRu data={dataRestaurantRu} />} />
        <Route path="/ru/retail" element={<LandingRu data={dataRetailRu} />} />
        <Route path="/ru/residential" element={<LandingRu data={dataResidentialRu} />} />
        <Route path="/ru/commercial" element={<LandingRu data={dataCommercialRu} />} />
        <Route path="/ru/branding" element={<LandingRu data={dataBrandingRu} />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
