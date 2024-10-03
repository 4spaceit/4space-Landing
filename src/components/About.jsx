import { Parallax } from "react-parallax";
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
              <p className="center">
                Introducing <span className="has-text-weight-bold">Firas Alsahin</span> &nbsp;and&nbsp; <span className="has-text-weight-bold">Amjad Hourieh</span>, the visionary founders of 4Space Design, a distinguished luxury design firm in Dubai's vibrant market. In a rapidly evolving commercial landscape, 4Space Design excels by prioritizing quality over quantity, focusing on unique, future-focused architectural and interior solutions.<br/><br/>
                Their innovative designs, characterized by cutting-edge technology and cultural relevance, transform each project into a landmark. This commitment not only enhances their market presence but also attracts a discerning clientele who value exceptional creativity.<br/><br/>
                By fostering strong client relationships and dedicating themselves to distinctive projects, Firas and Amjad have established 4Space Design as a leader in the industry. Their approach redefines luxury design, showcasing a dedication to excellence and innovation that sets them apart in a competitive environment. As they continue to expand their influence, 4Space Design remains committed to delivering outstanding results that resonate with their clients and the broader community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
