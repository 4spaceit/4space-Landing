import { Fade } from "react-awesome-reveal";

export default function Awards() {
  return (
    <section className="page awards section awards-grid" id="awards">
      <div className="container">
        <Fade triggerOnce={true} fraction={0.5}>
          <h1 className="has-text-black has-text-centered">Awards</h1>
          <div className="columns is-multiline is-mobile is-6-desktop is-variable grid is-centered">
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/2.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/5.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/3.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/4.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/6.jpg"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>

            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/1.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/7.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
            <div className="column is-half-mobile is-3-tablet">
              <img
                src="/assets/awards/8.png"
                width={200}
                loading="lazy"
                alt="award image"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
