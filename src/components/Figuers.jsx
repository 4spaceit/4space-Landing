import React from "react";
import CountUp from 'react-countup';

function Figuers() {
  return (
    <section className="section page our-figures">
      <div className="container">
        <div className="columns is-multiline is-centered is-8">
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-white is-size-2"><CountUp end={500} enableScrollSpy={true} scrollSpyOnce={true}  duration={1}/></h2>
              <p className="subtitle is-size-5 has-text-white">Artworks</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <h2 className="has-text-white is-size-2"> <CountUp end={15} enableScrollSpy={true} scrollSpyOnce={true} duration={1} /></h2>
              <p className="subtitle is-size-5 has-text-white">15 Satisfied Clients</p>
            </div>
          </div>
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-white is-size-2"><CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} duration={1} /></h2>
              <p className="subtitle is-size-5 has-text-white">Award-winnings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figuers;
