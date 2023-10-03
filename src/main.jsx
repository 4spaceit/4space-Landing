import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import dataRestaurantEn from "./data/dataRestaurant.json";
import dataRetailEn from "./data/dataRetail.json";
import dataResidentialEn from "./data/dataResidential.json";
import dataCommercialEn from "./data/dataCommercial.json";
import dataBrandingEn from "./data/dataBranding.json";
import text from "./data/text.json";

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

let RsEn =
  "Welcome to the 4Space luxury design company! Here is our portfolio of best cases in restaurant interiors! We're firm believers that design goes far beyond aesthetics. It's the very heart and soul of a brand, a vivid expression of its values, and a powerful driver of success. With our commitment to innovation and passion for pushing creative limits, we've become the ultimate destination for those who crave designs that are not just unique, but absolutely mesmerizing.";

import App from "./App.jsx";
import LandingAr from "./pages/Landing-ar.jsx";
// import LandingRu from "./pages/Landing-ru.jsx";

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
        <Route
          path="/resturant"
          element={<App data={dataRestaurantEn} txt={text.Restaurant} />}
        />
        <Route
          path="/retail"
          element={
            <App
              data={dataRetailEn}
              txt={text.Retail}
              bg={
                "https://4spacewp.com/wp-content/uploads/2018/03/VR-Park-5-scaled.jpg"
              }
            />
          }
        />
        <Route
          path="/residential"
          element={
            <App
              data={dataResidentialEn}
              txt={text.Residential}
              bg={
                "https://4spacewp.com/wp-content/uploads/2019/05/Residential-Villa-in-Saudi-Arabia-by-4SPACE-001-scaled.jpg"
              }
            />
          }
        />
        <Route
          path="/commercial"
          element={
            <App
              data={dataCommercialEn}
              txt={text.Commercial}
              bg={
                "https://4spacewp.com/wp-content/uploads/2021/02/4space-office-01-2.jpg"
              }
            />
          }
        />
        <Route path="/branding" element={<App data={dataBrandingEn} />} />

        <Route
          path="/ar/resturant"
          element={
            <LandingAr
              data={dataRestaurantAr}
              bg={
                "https://4spacewp.com/wp-content/uploads/2017/10/KHOFO-Dubai-Restaurant-02-scaled.jpg"
              }
            />
          }
        />
        <Route
          path="/ar/retail"
          element={
            <LandingAr
              data={dataRetailAr}
              bg={
                "https://4spacewp.com/wp-content/uploads/2018/03/VR-Park-5-scaled.jpg"
              }
            />
          }
        />
        <Route
          path="/ar/residential"
          element={
            <LandingAr
              data={dataResidentialAr}
              bg={
                "https://4spacewp.com/wp-content/uploads/2019/05/Residential-Villa-in-Saudi-Arabia-by-4SPACE-001-scaled.jpg"
              }
            />
          }
        />
        <Route
          path="/ar/commercial"
          element={
            <LandingAr
              data={dataCommercialAr}
              bg={
                "https://4spacewp.com/wp-content/uploads/2021/02/4space-office-01-2.jpg"
              }
            />
          }
        />
        <Route
          path="/ar/branding"
          element={<LandingAr data={dataBrandingAr} />}
        />

        {/* <Route path="/ru/resturant" element={<LandingRu data={dataRestaurantRu} />} />
        <Route path="/ru/retail" element={<LandingRu data={dataRetailRu} />} />
        <Route path="/ru/residential" element={<LandingRu data={dataResidentialRu} />} />
        <Route path="/ru/commercial" element={<LandingRu data={dataCommercialRu} />} />
        <Route path="/ru/branding" element={<LandingRu data={dataBrandingRu} />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
