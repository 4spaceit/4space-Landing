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
      <h2 className="center m-6 ">أراء عملائنا</h2>
      <div className="is-centered" style={{ direction: "ltr" }}>
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
            <div className="box  testimonial-box box-arabic">
              <p className="has-text-black">
                <QuoteL style={{ transform: "scale(-1,1)" }} />
                <span>
                  &nbsp;لقد أحببنا الإبداع والتفاني والمهنية التي أظهرها فريق
                  4Space. تمكنت 4Space من تنفيذ المهمة قبل الموعد النهائي المتفق
                  عليه وبرضانا التام. لقد قامت أيضاً بعمل رائع كمدير للمشروع
                  وضمنت تنسيقاً سلساً جداً بين مقاولنا الرئيسي ومقاولنا الداخلي
                  وجميع البائعين الآخرين&nbsp;
                </span>

                <QuoteR style={{ transform: "scale(-1,1)" }} />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-right">
                    المدير التنفيذي لشركة Better Experience DMCC
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box  testimonial-box box-arabic">
              <p className="has-text-black">
                <QuoteL style={{ transform: "scale(-1,1)" }} />
                <span>
                  &nbsp;نكتب لنعرب عن خالص تقديرنا لجهودكم في إكمال مشروع مخبز
                  المؤسسة الدولية للتنمية في دبي. كان لجودة العمل المقدم
                  والالتزام بالجدول الزمني تأثير محوري على الانتهاء من مخبز
                  المؤسسة الدولية للتنمية وتشغيله في الوقت المناسب. بشكل عام،
                  نحن سعداء بالتعاون، والاضافات الإيجابية، والتعامل المهني مع
                  هذا المشروع من قبل جميع الأطراف.&nbsp;
                </span>

                <QuoteR style={{ transform: "scale(-1,1)" }} />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-right">
                    عبد الحكيم الدويك
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    مدير المشاريع في رايبال
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box  testimonial-box box-arabic">
              <p className="has-text-black">
                <QuoteL style={{ transform: "scale(-1,1)" }} />
                <span>
                  &nbsp; لقد كانت تجربة مثيرة للاهتمام. إنهم مبدعون وعصريون
                  للغاية؛ عملهم دقيق ولقد قاموا بخلق ذاك الانسجام بين شخصياتنا
                  وروح منزلنا. أهم شيء هو التزامهم بالمواعيد التي أقدرها &nbsp;
                </span>

                <QuoteR style={{ transform: "scale(-1,1)" }} />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-right">
                    طلال الصفدي
                  </span>
                  <span className="is-size-7 is-flex has-text-black is-align-items-center">
                    كبير مسؤولي التخطيط في مجموعة IKK
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box  testimonial-box box-arabic">
              <p className="has-text-black">
                <QuoteL style={{ transform: "scale(-1,1)" }} />
                <span>
                  &nbsp; شكراً لكم جميعاً على جميع الخدمات المثالية التي
                  قدمتموها في الأشهر القليلة الماضية، بما في ذلك التصميم
                  والإشراف والاقتراحات وغيرها، والتي كانت مساعدة كبيرة لمنزلنا
                  الجميل. على وجه الخصوص، السيدة ميس إنها واعية ومسؤولة جداً،
                  كما أنها حساسة للألوان والحالات المزاجية، ويمكن لتصميمها
                  وأفكارها المثالية أن ترسم دائماً أفكاري الغامضة &nbsp;
                </span>

                <QuoteR style={{ transform: "scale(-1,1)" }} />
              </p>
              <div className="is-flex is-align-items-center is-justify-content-start mt-4">
                <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                  <span className="font-semibold has-text-weight-bold has-text-right">
                    ايريس وانغ
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
