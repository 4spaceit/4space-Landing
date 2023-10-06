
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function OurClients() {
  return (
    // Out clients section with some image in a row
    <section className="section has-background-white py-0 " id="our-clients">
      <div className="container py-6">
          <Swiper
          speed={600}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={6}
            slidesPerGroup={1}
            longSwipes={false}
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
                slidesPerGroup: 1,
              },
            }}
          >
            <div className="column is-12">

              <SwiperSlide ><div>
                <img src="assets/clients/1.png" alt="King Abdullah Financial District" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/11.png" alt="Moli by Shi" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/5.svg" alt="EMAAR" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/13.png" alt="House of Hype" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/4.png" alt="PAPA Dubai" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/9.png" alt="Automobili Lamborghini" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/2.svg" alt="Diriyah Gate Development Authority" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/3.png" alt="Abu Dhabi Global Market" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/6.png" alt="Huawei" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/7.png" alt="Crescent Enterprise" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/8.png" alt="Agora" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/10.png" alt="Al Qana" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/12.png" alt="Tutus Kurniati" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/14.png" alt="AYA Universe" width={50} loading="lazy" />
              </div> </SwiperSlide>
              <SwiperSlide ><div>
                <img src="assets/clients/15.svg" alt="BE" width={50} loading="lazy" />
              </div> </SwiperSlide>
            </div>
          </Swiper>
      </div>
    </section>
  );
}

export default OurClients;
