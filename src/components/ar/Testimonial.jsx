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
      <h2 className="center m-6 ">WHAT PEOPLE SAY ABOUT US</h2>
      <div className="is-centered" style={{ direction: "ltr" }}>
        <Swiper
          autoHeight={true}
          slidesPerView={"auto"}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerGroup={1}
          initialSlide={4}
          longSwipes={false}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="box  testimonial-box box-arabic">
              <p className="has-text-black">
                <QuoteL />
                <span>
                  &nbsp; كانت شركة 4Space هي المصممة لمشروع تجهيز المكاتب في
                  المجموعة الأولى لدينا، أبراج بحيرات جميرا. لقد أحببنا الإبداع
                  والتفاني والاحترافية التي أظهرها فريق 4Space. تمكنت 4Space من
                  تنفيذ المهمة قبل الموعد النهائي المتفق عليه ونالت رضانا
                  الكامل. لقد قامت أيضًا بعمل رائع كمدير للمشروع وضمنت التنسيق
                  السلس بين المقاول الرئيسي والمقاول الداخلي وجميع البائعين
                  الآخرين. نحن نوصي بشدة بشركة 4Space، لأنها تنجز الأمور بطريقة
                  إبداعية في الوقت المحدد! ماذا يمكن للمرء أن يتوقع من المصمم
                  الداخلي أكثر من ذلك؟ &nbsp;
                </span>

                <QuoteR />
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
                <QuoteL />
                <span>
                  &nbsp; نكتب إليكم للتعبير عن تقديرنا الصادق لجهودكم في استكمال
                  مشروع مخبز IDA في دبي. كان لجودة العمل المنجز والالتزام
                  بالجدول الزمني تأثير محوري على استكمال وتشغيل مخبز IDA في
                  الوقت المناسب. بشكل عام، نحن سعداء بالتعاون والمساهمة
                  الإيجابية والتعامل الاحترافي مع 4Space من قبل جميع الأطراف.
                  ونحن نعتمد على تعاونكم ودعمكم المستمر. يرجى تقديم شكرنا
                  لفرقكم. &nbsp;
                </span>

                <QuoteR />
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
                <QuoteL />
                <span>
                  &nbsp; لقد كانت تجربة مثيرة للاهتمام مع 4Space، فهم مبدعون
                  للغاية وعصريون، وعملهم دقيق ويجعلون الانسجام بين شخصياتنا وروح
                  منزلنا ممكناً، أهم شيء هو التزامهم بالمواعيد وهو ما أقدره
                  بشدة. &nbsp;
                </span>

                <QuoteR />
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
                <QuoteL />
                <span>
                  &nbsp; شكرًا لكم جميعًا على جميع الخدمات المثالية التي
                  قدمتموها في الأشهر القليلة الماضية، بما في ذلك التصميم
                  والإشراف والاقتراحات وغير ذلك، والتي كانت بمثابة مساعدة كبيرة
                  لمنزلنا الجميل. على وجه الخصوص، تتمتع السيدة ميس بالضمير
                  والمسؤولية؛ إنها حساسة للألوان والحالات المزاجية، ويمكن
                  لتصميمها وأفكارها المثالية دائمًا أن تجذب أفكاري الغامضة
                  للغاية. &nbsp;
                </span>

                <QuoteR />
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
