import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Phone from "../svg/phone.svg?react"
import Email from "../svg/envelope.svg?react"

export default function Footer() {
  return (
    <>
      <h3 className="has-text-centered py-2">Copyright © 4SPACE Design</h3>
      <footer className=" has-navbar-fixed-top is-hidden-desktop">
        <div className="footer-items">
          <div className="left-footer" onClick={() => {
              document.getElementById("modal").classList.add("is-active");
            }}>
            <p className="is-size-6">  <Email /> GET IN TOUCH</p> 
          </div>
        
          <div className="right-2-footer ">
            <svg>
              <a rel="nofollow" href="rel:+971 4 438 5537">
                <Phone />
              </a>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}
