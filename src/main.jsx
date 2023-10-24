import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import dataRestaurantEn from "./data/dataRestaurant.json";
import dataRetailEn from "./data/dataRetail.json";
import dataResidentialEn from "./data/dataResidential.json";
import dataGeneralEn from "./data/dataGeneral.json";

import dataRestaurantAr from "./data/ar/dataRestaurant.json";
import dataRetailAr from "./data/ar/dataRetail.json";
import dataResidentialAr from "./data/ar/dataResidential.json";
import dataGeneralAr from "./data/ar/dataGeneral.json";


import dataRestaurantRu from "./data/ru/dataRestaurant.json";
import dataRetailRu from "./data/ru/dataRetail.json";
import dataResidentialRu from "./data/ru/dataResidential.json";
import dataGeneralRu from "./data/ru/dataGeneral.json";


import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
import LandingRu from "./pages/Landing-ru.jsx";

// Make arrya of pictures sources
const restaurantImages = [
  "assets/Restaurant/images/1.jpg",
  "assets/Restaurant/images/2.jpg",
  "assets/Restaurant/images/3.jpg",
  "assets/Restaurant/images/4.jpg",
  "assets/Restaurant/images/5.jpg",
  "assets/Restaurant/images/6.jpg",
  "assets/Restaurant/images/7.jpg",
];

const retailImages = [
  "assets/Retail/images/1.jpg",
  "assets/Retail/images/2.jpg",
  "assets/Retail/images/3.jpg",
  "assets/Retail/images/4.jpg",
  "assets/Retail/images/5.jpg",
  "assets/Retail/images/6.jpg",
  "assets/Retail/images/7.jpg",
];

const residentialImages = [
  "assets/Residential/images/1.jpg",
  "assets/Residential/images/2.jpg",
  "assets/Residential/images/3.jpg",
  "assets/Residential/images/4.jpg",
  "assets/Residential/images/5.jpg",
];

// const commercialImages = [
//   "assets/Commercial/images/1.jpg",
//   "assets/Commercial/images/2.jpg",
//   "assets/Commercial/images/3.jpg",
//   "assets/Commercial/images/4.jpg",
//   "assets/Commercial/images/5.jpg",
//   "assets/Commercial/images/6.jpg",
// ];

// const brandingImages = [
//   "assets/Branding/images/1.jpg",
//   "assets/Branding/images/2.jpg",
//   "assets/Branding/images/3.jpg",
//   "assets/Branding/images/4.jpg",
//   "assets/Branding/images/5.jpg",
// ];

const generalImage =[
  "assets/Commercial/images/4.jpg",
  "assets/Branding/images/1.jpg",
  "assets/Commercial/images/5.jpg",
  "assets/Branding/images/2.jpg",
  "assets/Commercial/images/6.jpg",
  "assets/Branding/images/3.jpg",
]

// Function to save or update UTM parameters

function saveOrUpdateUTMParameters() {
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search);

    // Define an array to store UTM parameters
    const utmParams = [];

    if (queryParams.has("utm_source")) {
      utmParams.push({
        key: "utm_source",
        value: queryParams.get("utm_source"),
      });
    }
    if (queryParams.has("utm_medium")) {
      utmParams.push({
        key: "utm_medium",
        value: queryParams.get("utm_medium"),
      });
    }
    if (queryParams.has("utm_campaign")) {
      utmParams.push({
        key: "utm_campaign",
        value: queryParams.get("utm_campaign"),
      });
    }
    if (queryParams.has("utm_term")) {
      utmParams.push({ key: "utm_term", value: queryParams.get("utm_term") });
    }
    if (queryParams.has("utm_content")) {
      utmParams.push({
        key: "utm_content",
        value: queryParams.get("utm_content"),
      });
    }

    // Loop through the UTM parameters and save each one in a separate cookie
    utmParams.forEach((param) => {
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          index
          path="/en/restaurant"
          element={<App data={dataRestaurantEn} images={restaurantImages} />}
        />
        <Route
          path="/en/retail"
          element={<App data={dataRetailEn} images={retailImages} />}
        />
        <Route
          path="/en/residential"
          element={<App data={dataResidentialEn} images={residentialImages} />}
        />
        <Route
          path="/en/general"
          element={<App data={dataGeneralEn} images={generalImage} />}
        />
        {/* <Route
          path="/en/branding"
          element={<App data={dataBrandingEn} images={brandingImages} />}
        /> */}

        <Route
          path="/ar/restaurant"
          element={
            <LandingAr data={dataRestaurantAr} images={restaurantImages} />
          }
        />
        <Route
          path="/ar/retail"
          element={<LandingAr data={dataRetailAr} images={retailImages} />}
        />
        <Route
          path="/ar/residential"
          element={
            <LandingAr data={dataResidentialAr} images={residentialImages} />
          }
        />
        {/* <Route
          path="/ar/commercial"
          element={
            <LandingAr data={dataCommercialAr} images={commercialImages} />
          }
        />
        <Route
          path="/ar/branding"
          element={<LandingAr data={dataBrandingAr} images={brandingImages} />}
        /> */}
                <Route
          path="/ar/general"
          element={<LandingAr data={dataGeneralAr} images={generalImage} />}
        />

        <Route
          path="/ru/restaurant"
          element={
            <LandingRu data={dataRestaurantRu} images={restaurantImages} />
          }
        />
        <Route
          path="/ru/retail"
          element={<LandingRu data={dataRetailRu} images={retailImages} />}
        />
        <Route
          path="/ru/residential"
          element={
            <LandingRu data={dataResidentialRu} images={residentialImages} />
          }
        />
        {/* <Route
          path="/ru/commercial"
          element={
            <LandingRu data={dataCommercialRu} images={commercialImages} />
          }
        />
        <Route
          path="/ru/branding"
          element={<LandingRu data={dataBrandingRu} images={brandingImages} />}
        /> */}
                <Route
          path="/ru/general"
          element={<LandingRu data={dataGeneralRu} images={generalImage} />}
        />

        <Route path="*" element={<Navigate to="/en/general" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
