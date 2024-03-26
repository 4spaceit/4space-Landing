import {  Parallax } from "react-parallax";
import HeroImage from "../../public/assets/Hero photo 01.jpg";

export default function About() {
  return (
    <section
      className=" page about has-background-white has-text-black"
      id="about"
    >
      {/* <Parallax
          bgImage="assets/Hero photo 01.jpg"
          bgImageAlt="4SPACE-team"
          strength={-100}
          className="about-image column is-full"
        >
          <div className="Para-placeholder"></div>
        </Parallax> */}
      {/* <Parallax strength={300}>
        <Background className="custom-bg">
          <img src="assets/Hero photo 01.jpg" alt="fill murray" />
        </Background>
      </Parallax> */}

      <Parallax
        bgImage={HeroImage}
        strength={200}
        className="Para-placeholder"
        style={{
          overflow: "hidden",
          backgroundPosition: "center",
        }}
      ></Parallax>
      {/* <Parallax
        bgImage={HeroImage}
        bgImageAlt="4SPACE-team"
        strength={-100}
        className="custom-parallax"
      >
      
      </Parallax> */}

      <div className="columns is-multiline about">
        <div className="section column is-full py-4">
          <h2 className="center m-6 has-text-black">ABOUT</h2>
          <div className="columns is-multiline">
            <div className="column container has-text-justified	">
              <p>
                Meet the founders,&nbsp;
                <span className="has-text-weight-bold">Firas Alsahin</span>
                &nbsp;and&nbsp;
                <span className="has-text-weight-bold">Amjad Hourieh</span>, who
                relocated to Dubai to embark on their journey to success in a
                thriving market. In a rapidly growing commercial landscape,
                4Space Design prioritizes quality over quantity, focusing on
                unique projects and strong client relationships. Their
                innovative approach has solidified their position in the market,
                showcasing their success to clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
