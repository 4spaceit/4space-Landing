import QuoteL from "../../svg/quoteL.svg?react";
import QuoteR from "../../svg/quoteR.svg?react";

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
      <h2 className="center m-6 ">Отзывы клиентов</h2>
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
              slidesPerView: 2,
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
                  &nbsp; Мы восхищены творчеством и профессионализмом вашей
                  команды. 4Space смогли качественно завершить проект в
                  запланированный срок. Мы высоко оценили навыки ваших
                  специалистов как проектных менеджеров и благодарны вам за
                  бесшовную коммуникацию между всеми сторонами, вовлеченными в
                  процесс. &nbsp;
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
                  &nbsp; Мы выражаем нашу искреннюю благодарность за вашу работу
                  над проектом IDA Bakery в Дубае. Качество выполненной работы и
                  соблюдение сроков имели ключевое значение для своевременного
                  завершения и функционирования проекта. Мы оценили ваш
                  профессиональный подход к работе!&nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Абдул Хаким Двейк
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    Raibal
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
                  &nbsp; Это был очень интересный и ценный опыт. 4space
                  креативны и всегда в тренде всех новшеств индустрии дизайна.
                  Через свою работу они создают гармоничную связь между нашими
                  личностями и жилыми пространствами. Самое важное для нас - это
                  пунктуальность 4space, за которую мы очень благодарны! &nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Таляль аль Сафади
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    IKK Group
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
                  &nbsp; Спасибо вашей команде за идеально выполненные услуги,
                  которые включали дизайн пространства, менеджмент проекта,
                  профессиональные рекомендации. Хотим выразить особую
                  благодарность мисс Мэйс. Она может идеально подобрать цветовую
                  гамму, а ее идеи всегда четкие, ценные и системные. &nbsp;
                </span>

                <QuoteR />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-left">
                    Ирис Ванг
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
