import { Parallax } from "react-parallax";

export default function About() {
  return (
    <section className=" page about has-background-white has-text-black" id="about">
      <div className="columns is-multiline about">
        <Parallax bgImage="assets/4SPACE-team.jpg" bgImageAlt="4SPACE-team" strength={-100} className="about-image column is-full" >
          <div className="Para-placeholder"></div>
        </Parallax>
        {/* <div className="about-image column is-full">
          <img src="assets/4SPACE-team.jpg" alt="" />
        </div> */}
        <div className="section column is-full py-4">
          <h1 className="center m-6 has-text-black">عن 4SPACE</h1>
          <div className="columns is-multiline">
            <div className="column container has-text-justified">
              <p>
                تعرف على المؤسسين،&nbsp;
                <span className="has-text-weight-bold">
                  فراس الساهين وأمجد حورية
                </span>
                ، اللذين انتقلا إلى دبي لبدء رحلتهما نحو النجاح في سوق مزدهر.
                في المشهد التجاري سريع النمو، تعطي شركة 4Space Design الأولوية
                للجودة على الكمية، مع التركيز على المشاريع الفريدة والعلاقات
                القوية مع العملاء. لقد عزز نهجهم المبتكر مكانتهم في السوق،
                واظهر نجاحهم للعملاء.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
