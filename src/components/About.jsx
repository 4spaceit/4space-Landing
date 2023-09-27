import { Parallax } from "react-parallax";
import Figuers from "./Figuers";

export default function About() {
  return (
    <section className=" page about" id="about">
      <div className="columns is-multiline about">
        <Parallax
          bgImage="assets/4SPACE-team.jpg"
          bgImageAlt="the cat"
          strength={-100}
          className="about-image column is-full"
        >
          <div className="Para-placeholder"></div>
        </Parallax>
        {/* <div className="about-image column is-full">
          <img src="assets/4SPACE-team.jpg" alt="" />
        </div> */}
        <div className="section container column is-full py-6">
          <h1 className="center mb-4">About</h1>
          <div className="columns is-multiline">
            <div className="column has-text-centered">
              <p className="has-text-justified">
                Firas Alsahin and Amjad Hourieh, the founders, relocated their
                practice to Dubai to be near the heart of this thriving market.
                The emirate's rapid growth in the commercial sector provided an
                impetus for the firm to investigate all opportunities in the
                design industry. Overcoming an uphill battle, 4Space Design has
                gone on to create noteworthy projects in the UAE. Eschewing
                quantity for quality, profile of the project, and relationship
                with clients, the studio credits its people’s distinct ideas for
                strategic business development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Figuers/>
    </section>
  );
}
