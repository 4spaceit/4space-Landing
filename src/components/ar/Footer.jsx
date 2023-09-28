import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
    <h1 className="has-text-centered py-2">
    Copyright © 4SPACE Design
    </h1>
    <footer className=" has-navbar-fixed-top is-hidden-desktop">
      <div className="footer-items">
        <div className="left-footer">
          <p className="has-text-black is-size-6"> تحدث معنا</p>
        </div>
        <div
          className="right-1-footer"
          onClick={() => {
            document.getElementById("modal").classList.add("is-active");
          }}
        >
          <svg>
            <a rel="nofollow">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </svg>
        </div>
        <div className="right-2-footer">
          <svg>
            <a rel="nofollow">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>
          </svg>
        </div>
      </div>
    </footer>
    </>
  );
}
