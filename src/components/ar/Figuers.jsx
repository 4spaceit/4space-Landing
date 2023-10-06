import CountUp from 'react-countup';

function Figuers() {
  return (
    <section className="has-background-white page our-figures py-6">
      <div className="container">
        <div className="columns is-multiline is-centered is-8 figure-fix">
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-black is-size-2"><CountUp end={25}  enableScrollSpy={true} scrollSpyOnce={true}  duration={2}/></h2>
              <p className="subtitle is-size-5 has-text-black">عام من الخبرة</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <h2 className="has-text-black is-size-2"> <CountUp end={200} start={120} enableScrollSpy={true} scrollSpyOnce={true} duration={2} /></h2>
              <p className="subtitle is-size-5 has-text-black">مشروع تم إنجازه </p>
            </div>
          </div>
          <div className="column is-4">
            <div className=" has-text-centered">
              <h2 className="has-text-black is-size-2"><CountUp end={50} start={10} enableScrollSpy={true} scrollSpyOnce={true} duration={3} /></h2>
              <p className="subtitle is-size-5 has-text-black">الجوائز و التكريمات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figuers;
