import { useState } from "react";
import Logo from "../svg/logo_black.svg?react";
import Menu from "../svg/menu0.svg?react";
import { Link } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="is-active" id="header">
      <div className="container ">
        <nav
          className="navbar is-dark py-1 is-fixed-top mobile-padding is-expanded"
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
              {" "}
              <Menu />{" "}
            </button>
          </div>
          <div className={`navbar-menu link-touch ${open ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link
                rel="nofollow"
                to="projects"
                spy={true}
                offset={-50}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                {" "}
                Projects{" "}
              </Link>
              <Link
                rel="nofollow"
                to="about"
                offset={-50}
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                {" "}
                About{" "}
              </Link>
              <Link
                rel="nofollow"
                to="our-clients"
                offset={-50}
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                {" "}
                Our Clients{" "}
              </Link>
              <Link
                rel="nofollow"
                to="testimonial"
                offset={-50}
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                {" "}
                Testimonial{" "}
              </Link>
              <Link
                rel="nofollow"
                to="awards"
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                {" "}
                Awards{" "}
              </Link>
              <button
                className="py-2 px-4 "
                id="formButton"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize:"1rem"
                }}
              >
                <Link
                  rel="nofollow"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    document.getElementById("modal").classList.add("is-active");
                  }}
                  style={{ color: "#000000" }}
                >
                  {" "}
                  PROJECT INQUIRY{" "}
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
