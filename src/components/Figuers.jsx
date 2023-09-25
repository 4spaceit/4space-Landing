import React from "react";
import CountUp from 'react-countup';

function Figuers() {
  return (
    <section className="section page our-figures">
      <div className="container">
        <div className="columns is-multiline is-centered is-8 is-variable">
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-white is-size-2"><CountUp end={15} enableScrollSpy={true}  duration={4}/></h2>
              <p className="subtitle is-size-5 has-text-white">Years of experince</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <h2 className="has-text-white is-size-2">+ <CountUp end={1500} enableScrollSpy={true} duration={4} /></h2>
              <p className="subtitle is-size-5 has-text-white">Projects</p>
            </div>
          </div>
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-white is-size-2"><CountUp end={100} enableScrollSpy={true} duration={4} /></h2>
              <p className="subtitle is-size-5 has-text-white">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figuers;
