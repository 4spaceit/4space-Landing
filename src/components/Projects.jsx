import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

const LandingProjects = () => {
  return (
    <>
      <div className="container projects">
        <h1 className="has-text-centered pb-6">OUR EXPERTISE</h1>
        <div>
          <div className="container">
            <div className="columns is-hidden-touch is-multiline">
              <div className={`column is-6`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  zoom={true}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <Zoom>
                      <div className="swiper-image">
                        <img
                          alt="Landing Image"
                          loading="lazy"
                          width={800}
                          height={600}
                          src="assets/1/4SPACE_Aya-01.jpg"
                        />
                      </div>
                    </Zoom>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Zoom>
                      <div className="swiper-image">
                        <img
                          alt="Landing Image"
                          loading="lazy"
                          width={800}
                          height={600}
                          src="assets/1/4SPACE_Aya-02.jpg"
                        />
                      </div>
                    </Zoom>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Zoom>
                      <div className="swiper-image">
                        <img
                          alt="Landing Image"
                          loading="lazy"
                          width={800}
                          height={600}
                          src="assets/1/4SPACE_Aya-03.jpg"
                        />
                      </div>
                    </Zoom>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={`column is-6`}>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra ultrices sem eu molestie. Donec lacinia enim et
                  aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat orci
                  odio, vitae luctus ante faucibus quis. Aliquam erat volutpat.
                  Duis tortor nunc, porttitor id sem et, ultricies maximus
                  mauris. Quisque tortor lacus, pellentesque sit amet malesuada
                  a, pretium et nulla. Vivamus odio justo, imperdiet quis congue
                  a, iaculis nec sapien.
                </p>
              </div>
              <div className={`column is-6`}>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra ultrices sem eu molestie. Donec lacinia enim et
                  aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat orci
                  odio, vitae luctus ante faucibus quis. Aliquam erat volutpat.
                  Duis tortor nunc, porttitor id sem et, ultricies maximus
                  mauris. Quisque tortor lacus, pellentesque sit amet malesuada
                  a, pretium et nulla. Vivamus odio justo, imperdiet quis congue
                  a, iaculis nec sapien.
                </p>
              </div>
              <div className={`column is-6`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-01-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-02-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-03-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={`column is-6`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/1/4SPACE_Aya-01.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/1/4SPACE_Aya-02.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src=" assets/1/4SPACE_Aya-03.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={`column is-6`}>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra ultrices sem eu molestie. Donec lacinia enim et
                  aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat orci
                  odio, vitae luctus ante faucibus quis. Aliquam erat volutpat.
                  Duis tortor nunc, porttitor id sem et, ultricies maximus
                  mauris. Quisque tortor lacus, pellentesque sit amet malesuada
                  a, pretium et nulla. Vivamus odio justo, imperdiet quis congue
                  a, iaculis nec sapien.
                </p>
              </div>
              <div className={`column is-6`}>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra ultrices sem eu molestie. Donec lacinia enim et
                  aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat orci
                  odio, vitae luctus ante faucibus quis. Aliquam erat volutpat.
                  Duis tortor nunc, porttitor id sem et, ultricies maximus
                  mauris. Quisque tortor lacus, pellentesque sit amet malesuada
                  a, pretium et nulla. Vivamus odio justo, imperdiet quis congue
                  a, iaculis nec sapien.
                </p>
              </div>
              <div className={`column is-6`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-01-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-02-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-03-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="columns is-hidden-desktop is-multiline">
              <div className={`column is-full has-text-centered`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <Zoom>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-01-2.jpg"
                      />
                    </div></Zoom>
                  </SwiperSlide>
                  <SwiperSlide> <Zoom>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-02-2.jpg"
                      />
                    </div> </Zoom>
                  </SwiperSlide>
                  <SwiperSlide> <Zoom>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-03-2.jpg"
                      />
                    </div> </Zoom>
                  </SwiperSlide>
                </Swiper>
                <div className={` pt-6`}>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra ultrices sem eu molestie. Donec lacinia enim
                    et aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat
                    orci odio, vitae luctus ante faucibus quis. Aliquam erat
                    volutpat. Duis tortor nunc, porttitor id sem et, ultricies
                    maximus mauris. Quisque tortor lacus, pellentesque sit amet
                    malesuada a, pretium et nulla. Vivamus odio justo, imperdiet
                    quis congue a, iaculis nec sapien.
                  </p>
                </div>
              </div>

              <div className={`column is-full has-text-centered`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-01-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-02-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-03-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className={` pt-6`}>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra ultrices sem eu molestie. Donec lacinia enim
                    et aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat
                    orci odio, vitae luctus ante faucibus quis. Aliquam erat
                    volutpat. Duis tortor nunc, porttitor id sem et, ultricies
                    maximus mauris. Quisque tortor lacus, pellentesque sit amet
                    malesuada a, pretium et nulla. Vivamus odio justo, imperdiet
                    quis congue a, iaculis nec sapien.
                  </p>
                </div>
              </div>

              <div className={`column is-full has-text-centered`}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-01-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-02-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-image">
                      <img
                        alt="Landing Image"
                        loading="lazy"
                        width={800}
                        height={600}
                        src="assets/2/PAPA-03-2.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className={`  pt-6`}>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra ultrices sem eu molestie. Donec lacinia enim
                    et aliquam vestibulum. Nullam id nunc nibh. Vivamus placerat
                    orci odio, vitae luctus ante faucibus quis. Aliquam erat
                    volutpat. Duis tortor nunc, porttitor id sem et, ultricies
                    maximus mauris. Quisque tortor lacus, pellentesque sit amet
                    malesuada a, pretium et nulla. Vivamus odio justo, imperdiet
                    quis congue a, iaculis nec sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingProjects;
