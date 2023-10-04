import QuoteL from "../svg/quoteL.svg?react";
import QuoteR from "../svg/quoteR.svg?react";


export default function Testimonial() {
  return (
    <section className="section page testimonial">
      <h2 className="center mb-6 ">WHAT PEOPLE SAY ABOUT US</h2>
      <div className="columns is-centered">
        <div className="box column is-one-quarter testimonial-box">
          <p className="has-text-black">
            <QuoteL/>
            <span>&nbsp;
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself &nbsp;
            </span>

            <QuoteR/>
          </p>
          <div className="is-flex is-align-items-center is-justify-content-start mt-4">
            <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
              <span className="font-semibold has-text-weight-bold">
                Reviewee
              </span>
              <span className="is-size-7 is-flex has-text-black is-align-items-center">
                Position
              </span>
            </div>
          </div>
        </div>
        <div className="box column is-one-quarter testimonial-box">
          <p className="has-text-black">
            <QuoteL/>
            <span>&nbsp;
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself &nbsp;
            </span>

            <QuoteR/>
          </p>
          <div className="is-flex is-align-items-center is-justify-content-start mt-4">
            <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
              <span className="font-semibold has-text-weight-bold">
                Reviewee
              </span>
              <span className="is-size-7 is-flex has-text-black is-align-items-center">
                Position
              </span>
            </div>
          </div>
        </div>
        <div className="box column is-one-quarter testimonial-box">
          <p className="has-text-black">
            <QuoteL/>
            <span>&nbsp;
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself &nbsp;
            </span>

            <QuoteR/>
          </p>
          <div className="is-flex is-align-items-center is-justify-content-start mt-4">
            <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
              <span className="font-semibold has-text-weight-bold">
                Reviewee
              </span>
              <span className="is-size-7 is-flex has-text-black is-align-items-center">
                Position
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
