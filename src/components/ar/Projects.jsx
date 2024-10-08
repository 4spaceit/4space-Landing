import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Fade } from "react-awesome-reveal";
import leftIcon from "../../svg/arrow-left.svg";
import rightIcon from "../../svg/arrow-right.svg";
import plusIcon from "../../svg/magnifying-glass-plus.svg"
import minusIcon from "../../svg/magnifying-glass-minus.svg"

const LandingProjects = ({ data }) => {
  const [isHeight, setIsHeight] = useState(500);

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
        <h2 className="has-text-centered py-6 is-size-3">مشاريعنا</h2>
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
                      />
                    </div>
                    <div
                      className={`column is-half`}
                      style={{ direction: "rtl" }}
                    >
                      <h2 className="has-text-weight-semibold is-size-4">
                        {" "}
                        {item.client === "آيا يونيفيرس" ? "" : item.client}
                      </h2>
                      <h2 className="mb-4 is-size-6 has-text-weight-normal">
                        {item.place}
                      </h2>
                      <p className="mb-2 has-text-right is-size-6-mobile ">
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
