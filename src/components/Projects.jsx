import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import leftIcon from "../svg/arrow-left.svg";
import rightIcon from "../svg/arrow-right.svg";
import plusIcon from "../svg/magnifying-glass-plus.svg";
import minusIcon from "../svg/magnifying-glass-minus.svg";
import { useLocation } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const description = {
  "/en/restaurant":
    "4SPACE is an award-winning luxury interior and design firm that specializes in creating distinctive, future-focused solutions for restaurants. Our designs stand out due to their innovative concepts, cutting-edge technology integration, and cultural relevance, making each project a landmark in its own right.",
  "/en/general":
    "4SPACE is an award-winning luxury interior and design firm that delivers distinctive, future-focused architectural and interior solutions. Our designs stand out due to their innovative concepts, cutting-edge technology integration, and cultural relevance, making each project a landmark in its own right.",
  "/en/retail":
    "4SPACE is an award-winning luxury interior and design firm that specializes in creating distinctive, future-focused solutions for retail and commercial spaces. Our designs stand out due to their innovative concepts, cutting-edge technology integration, and cultural relevance, making each project a landmark in its own right.",
};

const LandingProjects = ({ data }) => {
  const [isHeight, setIsHeight] = useState(500);
  const location = useLocation();
  
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsHeight(300);
    }
  }, []);

  const leftArrow = (<img src={leftIcon} alt="left arrow" style={{ width: "30px", height: "30px", margin: "0px 10px", filter: "drop-shadow(3px 5px 3px black)" }} />);

  const rightArrow = (<img src={rightIcon} alt="right arrow" style={{ width: "30px", height: "30px", margin: "0px 10px", filter: "drop-shadow(3px 5px 3px black)" }} />);

  const magnify = (<img src={plusIcon} alt="magnifying glass plus" style={{ width: "30px", height: "30px", margin: "10px", filter: "drop-shadow(3px 5px 3px black)" }} />);

  const demagnify = (<img src={minusIcon} alt="magnifying glass minus" style={{ width: "30px", height: "30px", margin: "10px", filter: "drop-shadow(3px 5px 3px black)" }} />);

  return (
    <section className="section page projects" id="projects">
      <div className="container projects">
        <h2 className="has-text-centered  is-size-3">OUR EXPERTISE</h2>
        <p className="is-size-6-mobile py-6 is-justify" style={{ textAlign: "center" }}>
          {description[location.pathname]}
        </p>

        <div>
          <div className="container">
            <div className="columns is-multiline">
              {data.map((item, index) => (
                <Fade
                  className="fix-index"
                  key={index}
                  direction={index % 2 === 1 ? "left" : "right"}
                  triggerOnce={true}
                  fraction={0.5}
                >
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
                        hasMediaButton={false}
                        objectFit={"cover"}
                        leftIcon={leftArrow}
                        rightIcon={rightArrow}
                        maxIcon={magnify}
                        minIcon={demagnify}
                      ></Carousel>
                    </div>
                    <div className={`column is-half `}>
                      <h3 className="has-text-weight-semibold is-size-4 py-4">
                        {" "}
                        {item.client === "AYA Universe"?"":item.client}
                      </h3>
                      <h3 className="mb-4 is-size-6 has-text-weight-normal">
                        {" "}
                        {item.place}{" "}
                      </h3>
                      <p className="mb-2 is-justify is-size-6-mobile ">
                        {" "}
                        {item.descr}{" "}
                      </p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProjects;
