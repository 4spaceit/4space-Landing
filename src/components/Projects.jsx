import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const LandingProjects = ({ data }) => {
  const [isHeight, setIsHeight] = useState(500);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsHeight(300);
    }
  }, []);

  return (
    <section className="section page projects" id="projects">
      <div className="container projects">
        <h2 className="has-text-centered py-6 is-size-3">OUR EXPERTISE</h2>
        <div>
          <div className="container">
            <div className="columns is-multiline">
              <Fade className="fix-index" triggerOnce={true} fraction={0.5}>
                {data.map((item, index) => (
                  <div
                    className={`column is-full is-multiline columns ${
                      index % 2 === 1 ? "odd" : ""
                    }`}
                    key={index}
                  >
                    <div className={`column is-6 is-half`}>
                      <Carousel
                        images={item.images}
                        style={{ height: isHeight }}
                        hasThumbnails={false}
                        hasDotButtons={"bottom"}
                        hasIndexBoard={false}
                        hasm
                        shouldMaximizeOnClick={true}
                        shouldMinimizeOnClick={true}
                        // show size button only on mobile
                        hasSizeButton={false}
                        hasMediaButton={false}
                        objectFit={"cover"}
                        // hasLeftButton={false}
                        // hasRightButton={false}
                      >
                        <div className="next-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            fill="#fff"
                            viewBox="0 0 320 512"
                          >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </div>

                        <div className="prev-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            height="1.5em"
                            viewBox="0 0 320 512"
                          >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                          </svg>
                        </div>
                      </Carousel>
                    </div>

                    <div className={`column is-half has-text-centered-touch`}>
                      <h3 className="has-text-weight-semibold is-size-4">
                        {item.client}
                      </h3>
                      <h3 className="mb-4 is-size-6 has-text-weight-normal">
                        {item.place}
                      </h3>

                      <p className="mb-2 has-text-left is-size-5 has-text-centered-touch">
                        {item.descr}
                      </p>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProjects;
