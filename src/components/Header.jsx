import { useState } from "react";
import Logo from "../svg/logo_black.svg?react";
import Menu from "../svg/menu0.svg?react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" is-active " id="header">
      <div className="container ">
        <nav
          className="navbar is-fixed-top is-dark py-1 mobile-padding"
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
          <div className={`navbar-menu link-touch ${open ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link
                rel="nofollow"
                to="projects"
                spy={true}
                offset={-70}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                rel="nofollow"
                to="about"
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                rel="nofollow"
                to="awards"
                spy={true}
                smooth={true}
                className="navbar-item"
                onClick={() => setOpen(false)}
              >
                Awards
              </Link>
              <button
                className="button is-primary is-outlined is-invisible "
                id="formButton"
              >
                <Link
                  rel="nofollow"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    document.getElementById("modal").classList.add("is-active");
                  }}
                  
                >
                  Project Inquiry
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
