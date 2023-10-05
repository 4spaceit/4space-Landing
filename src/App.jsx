import LandingProjects from "./components/Projects";
import InstantQuote from "./components/InstantQuote";
import Form from "./components/Form";
import Awards from "./components/AwardsLanding";
import Header from "./components/Header";
import Footer from "./components/Footer";
import video from "/bg1.mp4?react";
import Figuers from "./components/Figuers";


import "bulma/css/bulma.css";
import "./styles/index.scss";
import "./style.css";
import { Link } from "react-scroll";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

export default function App({ data, bg }) {
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

  console.log(video);

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
  return (
    <>
      <Header />
      <main >
        <InstantQuote openQuote={false} />
        <section className="section page" id="home" style={bg ? { backgroundImage: `url(${bg})` } : {}} >
          <video autoPlay muted loop id="bg-video" src={video} playsInline  />
          <div className="title is-1 has-text-white is-centered is-size-4-mobile p-2">
            <h1 className="has-text-white has-text-centered has-text-weight-bold head-text">
              Transforming Spaces, <br />
              Framing Experiences
            </h1>
          </div>
        </section>
        <LandingProjects data={data} />
        <About />
        <Figuers />

        <Testimonial />
        {/* <OurClients /> */}
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
            CALL US
            <span className="has-text-white is-size-6 has-text-centered has-text-weight-bold">
              +971 4 438 5537
            </span>
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
