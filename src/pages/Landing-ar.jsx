


import LandingProjects from "../components/ar/Projects";
import InstantQuote from "../components/ar/InstantQuote";
import Awards from "../components/ar/AwardsLanding";
import Header from "../components/ar/Header";
import Footer from "../components/ar/Footer";

import "bulma/css/bulma.css";
import "../styles/index.scss";
import "../style.css";
import { Link } from "react-scroll";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "../components/ar/About";
import Contact from "../components/ar/Contact";

export default function LandingAr({ data }) {
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
  return (
    <div style={{ direction: "rtl" }} >
      <Header />
      <main className="has-navbar-fixed-top">
        <InstantQuote openQuote={false} />
        <section className="section page" id="home">
          {/* <Form id="form-desktop" /> */}
          <div className="title is-1 has-text-white is-size-4-mobile p-2">
            <h1 className="has-text-white has-text-weight-bold head-text">
            تحويل المساحات <br/>و هيكلة التجارب
            </h1>
            <p className="mt-4 has-text-weight-normal has-text-right ">
            نحن نعتقد أن التصميم هو أكثر من مجرد الجماليات؛ إنه تجسيد لجوهر
              العلامة التجارية، وتعبير عن قيمها، ودافع للنجاح. من خلال اهتمامنا
              بالابتكار وشغفنا في الفوز على التحديات، لقد وضعنا أنفسنا كوجهة
              مفضلة لأولئك الذين يبحثون عن تصاميم فريدة وجذابة حقًا.
            </p>
          </div>
        </section>
        <LandingProjects data={data} />
        <About />
        {/* <OurClients /> */}
        <Awards />
        <div className="cta is-hidden-touch columns is-align-items-center	">
          <div className="column has-text-centered has-text-weight-bold has-text-black">
          نحن معك
            <span className="has-text-black is-size-6 has-text-centered has-text-weight-bold">
            تواصل معنا
            </span>
          </div>
          <div className="column has-background-black has-text-white has-text-centered has-text-weight-bold ">
          اتصل بنا على 
            <span className="has-text-white is-size-6 has-text-centered has-text-weight-bold" style={{direction: 'ltr'}}>
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
    </div >
  );
}

