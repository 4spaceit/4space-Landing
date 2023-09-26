import LandingProjects from "./components/Projects";
import Figuers from "./components/Figuers";
import InstantQuote from "./components/InstantQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Form from "./components/Form";
import Awards from "./components/AwardsLanding";
import Header from "./components/Header";

import "bulma/css/bulma.css";
import "./styles/index.scss";
import "./style.css";

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
  return (
    <>
      <Header />
      <main className="has-navbar-fixed-top">
        <InstantQuote openQuote={false} />
        <section className="section page" id="home">
          <Form />
        </section>

        <div className="container has-text-centered"></div>
        <Figuers />

        <section className="section page projects" id="projects">
          <LandingProjects />
        </section>

        <section className="section page about" id="about">
          <div className="container">
            <h1 className="center">About</h1>
            <div className="columns is-multiline">
              <div className="column has-text-centered">
                <p>
                  Firas Alsahin and Amjad Hourieh, the founders, relocated their
                  practice to Dubai to be near the heart of this thriving
                  market. The emirate's rapid growth in the commercial sector
                  provided an impetus for the firm to investigate all
                  opportunities in the design industry. Overcoming an uphill
                  battle, 4Space Design has gone on to create noteworthy
                  projects in the UAE. Eschewing quantity for quality, profile
                  of the project, and relationship with clients, the studio
                  credits its people’s distinct ideas for strategic business
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <OurClients /> */}
        <section className="page awards" id="awards">
          <Awards />
        </section>

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
      </main>
      <footer className=" has-navbar-fixed-top is-hidden-desktop">
        <div className="footer-items">
          <div className="left-footer">
            <p className="has-text-black is-size-6"> TALK TO US</p>
          </div>
          <div className="right-1-footer">
            <svg>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  document.getElementById("modal").classList.add("is-active");
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </svg>
          </div>
          <div className="right-2-footer">
            <svg>
              <a href="">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </a>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}
