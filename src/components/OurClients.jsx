import { Fade } from "react-awesome-reveal";

function OurClients() {
  return (
    // Out clients section with some image in a row
    <section className="section has-background-white pt-1 " id="our-clients">
      <div className="container pb-4">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="has-text-black has-text-centered py-6">
              OUR CLIENTS
            </h2>
          </div>
          <Fade triggerOnce={true} fraction={0.5}>
          <div className="column is-12">
            <div className="columns is-mobile is-multiline has-text-centered is-centered">
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/1.png" alt="King Abdullah Financial District" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/11.png" alt="Moli by Shi" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/5.svg" alt="EMAAR" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/13.png" alt="House of Hype" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/4.png" alt="PAPA Dubai" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/9.png" alt="Automobili Lamborghini" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/2.svg" alt="Diriyah Gate Development Authority" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/3.png" alt="Abu Dhabi Global Market" width={100} loading="lazy" />
              </div>
              
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/6.png" alt="Huawei" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/7.png" alt="Crescent Enterprise" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/8.png" alt="Agora" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/10.png" alt="Al Qana" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/12.png" alt="Tutus Kurniati" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/14.png" alt="AYA Universe" width={100} loading="lazy" />
              </div>
              <div className="column is-4 is-5-desktop ">
                <img src="assets/clients/15.svg" alt="BE" width={100} loading="lazy" />
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
