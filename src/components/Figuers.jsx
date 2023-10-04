import CountUp from 'react-countup';

function Figuers() {
  return (
    <section className="has-background-white page our-figures pb-6">
      <div className="container">
        <div className="columns is-multiline is-centered is-8 figure-fix">
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-black is-size-2"><CountUp end={22}  enableScrollSpy={true} scrollSpyOnce={true}  duration={2}/></h2>
              <p className="subtitle is-size-5 has-text-black">Years of experience</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <h2 className="has-text-black is-size-2"> <CountUp end={50} start={20} enableScrollSpy={true} scrollSpyOnce={true} duration={2} /></h2>
              <p className="subtitle is-size-5 has-text-black">Completed projects</p>
            </div>
          </div>
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-black is-size-2"><CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} duration={3} /></h2>
              <p className="subtitle is-size-5 has-text-black">Number of awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figuers;
