import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Fade } from "react-awesome-reveal";

const LandingProjects = ({data}) => {
  const [isHeight, setIsHeight] = useState(500);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsHeight(300);
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
                <Fade  key={index} direction={index % 2 === 1 ? "left" : "right"}  triggerOnce={true} fraction={0.5} >
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
                    />
                  </div>
                  <div className={`column is-half has-text-centered-touch`}>
                    <h2 className="mb-2 is-size-4">{item.client}</h2>
                    <h2 className="mb-4 is-size-7">{item.place}</h2>
                    <h2 className="mb-4 is-size-7">
                      ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                    </h2>
                    <p className="mb-2 has-text-justified is-size-5 has-text-centered-touch">
                      {item.descr}
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
