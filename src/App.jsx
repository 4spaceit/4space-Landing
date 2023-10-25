import LandingProjects from "./components/Projects";
import InstantQuote from "./components/InstantQuote";
import Form from "./components/Form";
import Awards from "./components/AwardsLanding";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Figuers from "./components/Figuers";
import OurClients from "./components/OurClients";
import ReactGA from "react-ga4";

import "bulma/css/bulma.css";
import "./styles/index.scss";
import "./style.css";
import { Link } from "react-scroll";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Crossfade from "./Crossfade";

ReactGA.initialize("GTM-56C3PS8");
ReactGA.initialize("AW-11096146138");
ReactGA.initialize("G-408N0QHNVQ");
ReactGA.send("pageview");

export default function App({ data, images }) {
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
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-56C3PS8"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* Google Tag Manager */}
      <script>
        {(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-56C3PS8")}
      </script>
      {/* End Google Tag Manager */}
      <Header />
      <main>
        <InstantQuote openQuote={false} />
        <section className="section page" id="home">
          <Crossfade images={images} />
          <div className="title is-1 has-text-white is-centered is-size-4-mobile p-2">
            <h1 className="has-text-white has-text-centered has-text-weight-bold head-text">
              Transforming Spaces, <br />
              Crafting Experiences
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
          <div
            className="column has-text-centered has-text-weight-bold has-text-white is-clickable"
            onClick={() => {
              document.getElementById("modal").classList.add("is-active");
            }}
          >
            GET IN TOUCH
          </div>
          <div className="column has-background-black has-text-white has-text-centered has-text-weight-bold ">
            <a href="tel:+971589344000">
              CALL US
              <span className="has-text-white is-size-6 has-text-centered has-text-weight-bold">
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
    </>
  );
}
