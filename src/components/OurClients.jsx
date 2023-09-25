import React from "react";

function OurClients() {
  return (
    // Out clients section with some image in a row

    <section className="section" id="figuers">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h1 className="center is-size-2">Our Clients</h1>
          </div>
          <div className="column is-12">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-2 ">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
              <div className="column is-2">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
              <div className="column is-2">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
              <div className="column is-2">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
              <div className="column is-2">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
              <div className="column is-2">
                <img
                  src="../../media/svg/logo_black.svg"
                  alt="Placeholder"
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
