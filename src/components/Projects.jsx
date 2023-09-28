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
                        hasSizeButtonAtMax={true}
                        hasMediaButton={false}
                        objectFit={"cover"}
                        // hasLeftButton={false}
                        // hasRightButton={false}
                      />
                    </div>
                    <div className={`column is-half has-text-centered-touch`}>
                      <h3 className="has-text-weight-semibold is-size-4">{item.client}</h3>
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
