import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

import ResturantVideo from "/assets/Restaurant/Restaurant.mp4"
import ResturantVideoM from "/assets/Restaurant/RestaurantMobile.mp4"
 
import RetailVideo from "/assets/Retail/Retail.mp4"
import ResidentialVideo from "/assets/Residential/Residential.mp4"
import CommercialVideo from "/assets/Commercial/Commercial.mp4"
import BrandingVideo from "/assets/Branding/Branding.mp4"


import dataRestaurantRu from "./data/ru/dataRestaurant.json";
import dataRetailRu from "./data/ru/dataRetail.json";
import dataResidentialRu from "./data/ru/dataResidential.json";
import dataCommercialRu from "./data/ru/dataCommercial.json";
import dataBrandingRu from "./data/ru/dataBranding.json";


import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
import LandingRu from "./pages/Landing-ru.jsx";

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
    <BrowserRouter>
      <Routes>
        <Route index path="/en/restaurant" element={<App data={dataRestaurantEn} video={ResturantVideo} videoM={ResturantVideoM} bg={"https://4spacewp.com/wp-content/uploads/2017/10/KHOFO-Dubai-Restaurant-06-scaled.jpg"} />} />
        <Route path="/en/retail" element={<App data={dataRetailEn} video={RetailVideo} bg={"https://4spacewp.com/wp-content/uploads/2018/03/VR-Park-5-scaled.jpg"} />} />
        <Route path="/en/residential" element={<App data={dataResidentialEn} video={ResidentialVideo} bg={"https://4spacewp.com/wp-content/uploads/2019/05/Residential-Villa-in-Saudi-Arabia-by-4SPACE-001-scaled.jpg"} />} />
        <Route path="/en/commercial" element={<App data={dataCommercialEn} video={CommercialVideo} bg={"https://4spacewp.com/wp-content/uploads/2021/02/4space-office-01-2.jpg"} />} />
        <Route path="/en/branding" element={<App data={dataBrandingEn} video={BrandingVideo} bg={"./images/first.jpg"} />} />

        <Route path="/ar/resturant" element={<LandingAr data={dataRestaurantAr} video={ResturantVideo} bg={"./images/first.jpg"} />} />
        <Route path="/ar/retail" element={<LandingAr data={dataRetailAr} video={RetailVideo} bg={"https://4spacewp.com/wp-content/uploads/2018/03/VR-Park-5-scaled.jpg"} />} />
        <Route path="/ar/residential" element={<LandingAr data={dataResidentialAr} video={ResidentialVideo} bg={"https://4spacewp.com/wp-content/uploads/2019/05/Residential-Villa-in-Saudi-Arabia-by-4SPACE-001-scaled.jpg"} />} />
        <Route path="/ar/commercial" element={<LandingAr data={dataCommercialAr} video={CommercialVideo} bg={"https://4spacewp.com/wp-content/uploads/2021/02/4space-office-01-2.jpg"} />} />
        <Route path="/ar/branding" element={<LandingAr data={dataBrandingAr} video={BrandingVideo} bg={"./images/first.jpg"} />} />


        <Route path="/ru/resturant" element={<LandingRu data={dataRestaurantRu} video={ResturantVideo} videoM={ResturantVideoM} bg={"https://4spacewp.com/wp-content/uploads/2017/10/KHOFO-Dubai-Restaurant-06-scaled.jpg"} />} />
        <Route path="/ru/retail" element={<LandingRu data={dataRetailRu} video={RetailVideo} bg={"https://4spacewp.com/wp-content/uploads/2018/03/VR-Park-5-scaled.jpg"} />} />
        <Route path="/ru/residential" element={<LandingRu data={dataResidentialRu} video={ResidentialVideo} bg={"https://4spacewp.com/wp-content/uploads/2019/05/Residential-Villa-in-Saudi-Arabia-by-4SPACE-001-scaled.jpg"} />} />
        <Route path="/ru/commercial" element={<LandingRu data={dataCommercialRu}  video={CommercialVideo} bg={"https://4spacewp.com/wp-content/uploads/2021/02/4space-office-01-2.jpg"} />} />
        <Route path="/ru/branding" element={<LandingRu data={dataBrandingRu} video={BrandingVideo} bg={"./images/first.jpg"} />} />

        
        <Route path="*" element={<Navigate to="/en/restaurant" replace  />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
