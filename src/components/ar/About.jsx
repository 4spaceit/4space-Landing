import { Parallax } from "react-parallax";
import HeroImage from "../../../public/assets/Hero photo 01.jpg";

export default function About() {
  return (
    <section
      className=" page about has-background-white has-text-black"
      id="about"
      >
      <Parallax
        bgImage={HeroImage}
        strength={200}
        className="Para-placeholder"
        style={{
          overflow: "hidden",
          backgroundPosition: "center",
        }}
      ></Parallax>
      <div className="columns is-multiline about">
        {/* <Parallax bgImage="assets/Hero photo 01.jpg" bgImageAlt="4SPACE-team" strength={-100} className="about-image column is-full" >
          <div className="Para-placeholder"></div>
        </Parallax> */}
        <div className="section column is-full py-4">
          <h1 className="center m-6 has-text-black">عن 4SPACE</h1>
          <div className="columns is-multiline">
            <div className="column container has-text-justified">
              <p>
                تعرف على المؤسسين،&nbsp;
                <span className="has-text-weight-bold">فراس الساهين</span>
                &nbsp;و&nbsp;
                <span className="has-text-weight-bold">أمجد حورية</span>، اللذين
                انتقلا إلى دبي لبدء رحلتهما نحو النجاح في سوق مزدهر. في المشهد
                التجاري سريع النمو، تعطي شركة 4Space Design الأولوية للجودة على
                الكم، مع التركيز على المشاريع الفريدة والعلاقات القوية مع
                العملاء. لقد عزز نهجهم المبتكر مكانتهم في السوق،
                واظهر نجاحهم للعملاء.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
