import QuoteL from "../svg/quoteL.svg?react";
import QuoteR from "../svg/quoteR.svg?react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination  } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Testimonial() {
  return (
    <section className="section page testimonial mb-6">
      <h2 className="center m-6 ">WHAT PEOPLE SAY ABOUT US</h2>
      <div className="is-centered">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerGroup={1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="box  testimonial-box">
              <p className="has-text-black">
                <QuoteL />
                <span>
                  &nbsp; To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself &nbsp;
                </span>

                <QuoteR />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="box  testimonial-box">
              <p className="has-text-black">
                <QuoteL />
                <span>
                  &nbsp; To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself &nbsp;
                </span>

                <QuoteR />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="box  testimonial-box">
              <p className="has-text-black">
                <QuoteL />
                <span>
                  &nbsp; To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself &nbsp;
                </span>

                <QuoteR />
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
