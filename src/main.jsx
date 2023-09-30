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

// import dataRestaurantRu from "./data/ru/dataRestaurant.json";
// import dataRetailRu from "./data/ru/dataRetail.json";
// import dataResidentialRu from "./data/ru/dataResidential.json";
// import dataCommercialRu from "./data/ru/dataCommercial.json";
// import dataBrandingRu from "./data/ru/dataBranding.json";


import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
// import LandingRu from "./pages/Landing-ru.jsx";

function saveOrUpdateUTMParameters() {
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search);

    // Define an array to store UTM parameters
    const utmParams = [];

    if (queryParams.has("utm_source")) {
      utmParams.push({ key: "utm_source", value: queryParams.get("utm_source") });
    }
    if (queryParams.has("utm_medium")) {
      utmParams.push({ key: "utm_medium", value: queryParams.get("utm_medium") });
    }
    if (queryParams.has("utm_campaign")) {
      utmParams.push({ key: "utm_campaign", value: queryParams.get("utm_campaign") });
    }
    if (queryParams.has("utm_term")) {
      utmParams.push({ key: "utm_term", value: queryParams.get("utm_term") });
    }
    if (queryParams.has("utm_content")) {
      utmParams.push({ key: "utm_content", value: queryParams.get("utm_content") });
    }

    // Loop through the UTM parameters and save each one in a separate cookie
    utmParams.forEach(param => {
      setCookie(`${param.key}`, param.value, 30);
    });
  }
}

// Call the function to save or update UTM parameters
saveOrUpdateUTMParameters();

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookie; // Set the cookie in the browser environment
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/resturant" element={<App data={dataRestaurantEn} />} />
        <Route path="/retail" element={<App data={dataRetailEn} />} />
        <Route path="/residential" element={<App data={dataResidentialEn} />} />
        <Route path="/commercial" element={<App data={dataCommercialEn} />} />
        <Route path="/branding" element={<App data={dataBrandingEn} />} />

        <Route path="/ar/resturant" element={<LandingAr data={dataRestaurantAr} />} />
        <Route path="/ar/retail" element={<LandingAr data={dataRetailAr} />} />
        <Route path="/ar/residential" element={<LandingAr data={dataResidentialAr} />} />
        <Route path="/ar/commercial" element={<LandingAr data={dataCommercialAr} />} />
        <Route path="/ar/branding" element={<LandingAr data={dataBrandingAr} />} />

        {/* <Route path="/ru/resturant" element={<LandingRu data={dataRestaurantRu} />} />
        <Route path="/ru/retail" element={<LandingRu data={dataRetailRu} />} />
        <Route path="/ru/residential" element={<LandingRu data={dataResidentialRu} />} />
        <Route path="/ru/commercial" element={<LandingRu data={dataCommercialRu} />} />
        <Route path="/ru/branding" element={<LandingRu data={dataBrandingRu} />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
