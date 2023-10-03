import { Parallax } from "react-parallax";
import Figuers from "./Figuers";

export default function About() {
  return (
    <section className=" page about" id="about">
      <div className="columns is-multiline about">
        <Parallax
          bgImage="assets/4SPACE-team.jpg"
          bgImageAlt="4SPACE-team"
          strength={-100}
          className="about-image column is-full"
        >
          <div className="Para-placeholder"></div>
        </Parallax>
        {/* <div className="about-image column is-full">
          <img src="assets/4SPACE-team.jpg" alt="" />
        </div> */}
        <div className="section container column is-full py-6">
          <h1 className="center mb-6">عن 4SPACE</h1>
          <div className="columns is-multiline">
            <div className="column has-text-right">
              <p>
                تعرف على المؤسسين،&nbsp;
                <span className="has-text-weight-bold">
                  فراس الساهين وأمجد حورية
                </span>
                ، اللذين انتقلا إلى دبي لبدء رحلتهما نحو النجاح في سوق مزدهر.
                <br />
                <br />
                في المشهد التجاري سريع النمو، تعطي شركة 4Space Design الأولوية
                للجودة على الكمية، مع التركيز على المشاريع الفريدة والعلاقات
                القوية مع العملاء. لقد عزز نهجهم المبتكر مكانتهم في السوق،
                واظهر نجاحهم للعملاء.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Figuers />
    </section>
  );
}
