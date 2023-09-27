import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import data from "./data.json";

const LandingProjects = () => {
  const [isMobile, setIsMobile] = useState("");
  const [isHeight, setIsHeight] = useState(500);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(false);
      setIsHeight(300);
    } else {
      setIsMobile("topRight");
    }
  }, []);

  return (
    <section className="section page projects" id="projects">
      <div className="container projects">
        <h1 className="has-text-centered pb-6">OUR EXPERTISE</h1>
        <div>
          <div className="container">
            <div className="columns is-multiline">
              {data.map((item, index) => (
                <div
                  className={`column is-full is-multiline columns ${index % 2 === 1 ? "odd" : ""}`}
                  key={index}
                >
                  <div className={`column is-6 is-half`}>
                    <Carousel
                      images={item.images}
                      style={{ height: isHeight }}
                      hasThumbnails={false}
                      hasDotButtons={"bottom"}
                      hasIndexBoard={false}
                      shouldMaximizeOnClick={true}
                      shouldMinimizeOnClick={true}
                      // show size button only on mobile
                      hasSizeButton={isMobile}
                      hasMediaButton={false}
                      objectFit={"cover"}
                    />
                  </div>
                  <div
                    className={`column is-6 is-half has-text-centered-touch`}
                  >
                    <h2 className="mb-2">{item.client}</h2>
                    <h2 className="mb-2">{item.place}</h2>
                    <p className="mb-2 has-text-justified">{item.descr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProjects;
