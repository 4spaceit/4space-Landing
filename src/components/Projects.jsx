import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import leftIcon from "../svg/arrow-left.svg";
import rightIcon from "../svg/arrow-right.svg";
import plusIcon from "../svg/magnifying-glass-plus.svg";
import minusIcon from "../svg/magnifying-glass-minus.svg";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const LandingProjects = ({ data }) => {
  const [isHeight, setIsHeight] = useState(500);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsHeight(300);
    }
  }, []);

  const leftArrow = (
    <img
      src={leftIcon}
      alt="left arrow"
      style={{ width: "30px", height: "30px", margin: "0px 10px" }}
    />
  );

  const rightArrow = (
    <img
      src={rightIcon}
      alt="right arrow"
      style={{ width: "30px", height: "30px", margin: "0px 10px" }}
    />
  );

  const magnify = (
    <img
      src={plusIcon}
      className="is-hidden-touch"
      alt="magnifying glass plus"
      style={{ width: "30px", height: "30px", margin: "10px" }}
    />
  );

  const demagnify = (
    <img
      src={minusIcon}
      className="is-hidden-touch"
      alt="magnifying glass minus"
      style={{ width: "30px", height: "30px", margin: "10px" }}
    />
  );

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
                        hasMediaButton={false}
                        objectFit={"cover"}
                        leftIcon={leftArrow}
                        rightIcon={rightArrow}
                        maxIcon={magnify}
                        minIcon={demagnify}

                        // hasLeftButton={false}
                        // hasRightButton={false}
                      ></Carousel>
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
