import LandingProjects from "../components/ar/Projects";
import InstantQuote from "../components/ar/InstantQuote";
import Awards from "../components/ar/AwardsLanding";
import Header from "../components/ar/Header";
import Footer from "../components/ar/Footer";
import Figuers from "../components/ar/Figuers";

import "bulma/css/bulma.css";
import "../styles/index.scss";
import "../style.css";
import "../style-rtl.css";
import { Link } from "react-scroll";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "../components/ar/About";
import Contact from "../components/ar/Contact";
import Testimonial from "../components/ar/Testimonial";
import OurClients from "../components/ar/OurClients";
import Crossfade from "../Crossfade";

export default function LandingAr({ data, images }) {
  function saveUTMParameters() {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const utmParams = {};

      if (queryParams.has("utm_source")) {
        utmParams.utm_source = queryParams.get("utm_source");
      }
      if (queryParams.has("utm_medium")) {
        utmParams.utm_medium = queryParams.get("utm_medium");
      }
      if (queryParams.has("utm_campaign")) {
        utmParams.utm_campaign = queryParams.get("utm_campaign");
      }
      if (queryParams.has("utm_term")) {
        utmParams.utm_term = queryParams.get("utm_term");
      }
      if (queryParams.has("utm_content")) {
        utmParams.utm_content = queryParams.get("utm_content");
      }

      // Save UTM parameters in local storage
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }
  }

  function updateUTMParameters() {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const utmParams = {};

      if (queryParams.has("utm_source")) {
        utmParams.utm_source = queryParams.get("utm_source");
      }
      if (queryParams.has("utm_medium")) {
        utmParams.utm_medium = queryParams.get("utm_medium");
      }
      if (queryParams.has("utm_campaign")) {
        utmParams.utm_campaign = queryParams.get("utm_campaign");
      }
      if (queryParams.has("utm_term")) {
        utmParams.utm_term = queryParams.get("utm_term");
      }
      if (queryParams.has("utm_content")) {
        utmParams.utm_content = queryParams.get("utm_content");
      }

      // Save UTM parameters in local storage
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }
  }

  saveUTMParameters();

  updateUTMParameters();

  addEventListener("scroll", () => {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      if (window.scrollY > 500) {
        topButton.classList.remove("is-hidden");
      } else {
        topButton.classList.add("is-hidden");
      }
    }
  });

  //Check if mobile
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div style={{ direction: "rtl", fontFamily: "NotoNaskhArabic-Regular" }}>
      <Header />
      <main className="has-navbar-fixed-top">
        <InstantQuote openQuote={false} />
        <section className="section page" id="home">
          <Crossfade images={images} />
          <div className="title is-1 has-text-white has-text-centered is-size-4-mobile p-2">
            <h1 className="has-text-white has-text-weight-bold head-text">
              تحويل المساحات،
              <br />
              لإعادة صياغة التجارب
            </h1>
          </div>
        </section>
        <LandingProjects data={data} />
        <About />
        <Figuers />
        <OurClients />
        <Testimonial />
        <Awards />
        <div className="cta is-hidden-touch columns is-align-items-center	">
          <div className="column has-text-centered has-text-weight-bold has-text-black">
            <span
              className="has-text-white is-size-6 has-text-centered has-text-weight-bold is-clickable"
              onClick={() => {
                document.getElementById("modal").classList.add("is-active");
              }}
            >
              {" "}
              تواصل معنا{" "}
            </span>
          </div>
          <div className="column has-background-black has-text-white has-text-centered has-text-weight-bold ">
            <a href="tel:+971589344000">
              أتصل بنا على
              <span
                className="has-text-white is-size-6 has-text-centered has-text-weight-bold pt-1"
                style={{ direction: "ltr" }}
              >
                +971 58 934 4000
              </span>
            </a>
          </div>
        </div>
        <div className="topButton is-hidden" id="topButton">
          <Link rel="nofollow" to="home" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faChevronUp} fill="white" />
          </Link>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
