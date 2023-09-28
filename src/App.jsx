import LandingProjects from "./components/Projects";
import InstantQuote from "./components/InstantQuote";
import Form from "./components/Form";
import Awards from "./components/AwardsLanding";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "bulma/css/bulma.css";
import "./styles/index.scss";
import "./style.css";
import { Link } from "react-scroll";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
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
        document.getElementById("formButton").classList.remove("is-invisible");
      } else {
        topButton.classList.add("is-hidden");
        document.getElementById("formButton").classList.add("is-invisible");
      }
    }
  });
  return (
    <>
      <Header />
      <main className="has-navbar-fixed-top">
        <InstantQuote openQuote={false} />
        <section className="section page" id="home">
          {/* <Form id="form-desktop" /> */}
          <h1 className="title is-1 has-text-white is-size-3-mobile">
            Transforming Spaces <br />
            <br /> Framing Experiences
          </h1>
        </section>
        <LandingProjects />
        <About />
        {/* <OurClients /> */}
        <Awards />
        <div className="cta is-hidden-touch columns is-align-items-center	">
          <div className="column ">
            <p className="has-text-black is-size-7 has-text-centered">
              WE ARE IN TOUCH!
            </p>
            <p className="has-text-black is-size-6 has-text-centered has-text-weight-bold">
              Write to 4Space
            </p>
          </div>
          <div className="column has-background-black ">
            <p className="has-text-white is-size-6 has-text-centered">
              Call Us <br /> +971 4 438 5537
            </p>
          </div>
        </div>
        <div className="topButton is-hidden" id="topButton">
          <Link rel="nofollow" to="home" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faChevronUp} />
          </Link>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
