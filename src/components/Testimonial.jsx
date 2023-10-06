import QuoteL from "../svg/quoteL.svg?react";
import QuoteR from "../svg/quoteR.svg?react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Testimonial() {
  return (
    <section className="section page testimonial mb-6" id="testimonial">
      <h2 className="center m-6 ">WHAT PEOPLE SAY ABOUT US</h2>
      <div className="is-centered">
        <Swiper
        speed={600}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerGroup={1}
          longSwipes={false}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="box  testimonial-box">
              <p className="has-text-black">
                <QuoteL />
                <span>
                  &nbsp; We loved the creativity, dedication, and
                  professionalism shown by your team. 4Space was able to execute
                  the task before the agreed deadline and to our complete
                  satisfaction. You also did a fantastic job as a project
                  manager and ensured very smooth coordination between our main
                  contractor, sub-contractor, and all other vendors. &nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    CEO, Better Experience DMCC
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
                  &nbsp; We are writing to express our sincere appreciation for
                  your efforts in completing the IDA Bakery Project in Dubai.
                  The quality of work delivered and adherence to the timeline
                  had a pivotal impact on the timely completion and operation of
                  IDA Bakery. Overall, we are pleased with the collaboration,
                  positive input, and professional handling of this project by
                  all parties.&nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Abdul Hakim Dwaik
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    Projects Director at Raibal
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
                  &nbsp; It was a very interesting experience. They are very
                  creative and trendy; their work is very meticulous and they
                  create harmony between our personalities and the spirit of our
                  home. The most important thing is their punctuality, which I
                  appreciate. &nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Talal Al safadi
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    Chief Planning Officer at IKK Group
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box testimonial-box">
              <p className="has-text-black ">
                <QuoteL />
                <span>
                  &nbsp; Thank you, everyone, for all the perfect services you
                  have provided in the past few months, including design,
                  supervision, suggestions, and so on, which have been a great
                  help to our beautiful home. In particular, Ms.Mais is so
                  conscientious and responsible; she is sensitive to colors and
                  moods, and her perfect design and ideas can always draw out my
                  very vague thoughts. &nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Iris Wang
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
