import Phone from "../../svg/phone.svg?react";
import Email from "../../svg/envelope.svg?react";

export default function Footer() {
  return (
    <>
      <h3 className="has-text-centered py-2">Copyright © 4SPACE Design</h3>
      <footer className=" has-navbar-fixed-top is-hidden-desktop" >
        <div className="footer-items">
          <div
            className="left-footer"
            onClick={() => {
              document.getElementById("modal").classList.add("is-active");
            }}
          >
            <p className="is-size-6" style={{borderRight:"none", borderLeft:"1px solid #858181"}}>  استفسر عن مشروع <Email /> </p>
          </div>

          <div className="right-2-footer ">
            <a rel="nofollow" href="tel:+971589344000">
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
