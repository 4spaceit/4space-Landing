import React, { useState } from "react";
import LandingProjects from "./components/Projects";
import Figuers from "./components/Figuers";
import InstantQuote from "./components/InstantQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Form from "./components/Form";
import Awards from "./components/AwardsLanding";

import Logo from "./svg/logo_black.svg?react";
import Menu from "./svg/menu0.svg?react";

import "bulma/css/bulma.css";
import "./styles/index.scss";
import "./style.css";

export default function App() {
  const [open, setOpen] = useState(false);

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
      <header className=" is-active " id="header">
        <div className="container ">
          <nav
            className="navbar is-fixed-top is-dark py-3 mobile-padding"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Logo />

              <button
                onClick={() => setOpen((v) => !v)}
                className={`navbar-burger burger link-touch ${
                  open ? "is-active" : ""
                }`}
                aria-label="Menu"
              >
                <Menu />
              </button>
            </div>
            <div
              className={`navbar-menu link-touch ${open ? "is-active" : ""}`}
            >
              <div className="navbar-end">
                <a href="#projects" className="navbar-item">
                  Projects
                </a>
                <a href="#about" className="navbar-item">
                  About
                </a>
                <a href="#awards" className="navbar-item">
                  Awards
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="has-navbar-fixed-top">
        {/* <SEO
          title="Landing page"
          description="4Space is a multi-award winning interior design and architecture firm in Dubai. We work with local residents and global companies to create beautiful spaces."
          keywords="4Space, 4Space Interior Design, 4Space Interior Design Dubai, 4Space Interior Design UAE, 4Space Interior Design Company, 4Space Interior Design Company Dubai, 4Space Interior Design Company UAE, 4Space Interior Design Company in Dubai, 4Space Interior Design Company in UAE, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai, 4Space Interior Design Company in Dubai UAE, 4Space Interior Design Company in UAE Dubai"
          lang={"en"}
          pathname={"/landing"}
          translated
        /> */}
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
                  4Space is a multi-award winning interior design and
                  architecture firm in Dubai. We work with local residents and
                  global companies to create beautiful spaces.
                </p>
                <p>
                  We are a team of architects and interior designers with a
                  passion to create, driven by attention to detail and a focus
                  on delivering unique design solutions.
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
      </div>
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
