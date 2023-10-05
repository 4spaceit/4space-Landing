import Phone from "../../svg/phone.svg?react";
import Email from "../../svg/envelope.svg?react";

export default function Footer() {
  return (
    <>
      <h3 className="has-text-centered py-2">Copyright © 4SPACE Design</h3>
      <footer className=" has-navbar-fixed-top is-hidden-desktop" style={{ direction: "ltr" }} >
        <div className="footer-items">
          <div
            className="left-footer"
            onClick={() => {
              document.getElementById("modal").classList.add("is-active");
            }}
          >
            <p className="is-size-6"> تحدث معنا <Email /> </p>
          </div>

          <div className="right-2-footer ">
            <a rel="nofollow" href="tel:+97144385537">
              <svg>
                <Phone />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
