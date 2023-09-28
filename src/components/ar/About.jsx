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
          <h1 className="center mb-4">عن 4SPACE</h1>
          <div className="columns is-multiline">
            <div className="column has-text-centered">
              <p className="has-text-justified">
              فيراس الساحين وأمجد حورية، المؤسسان، قاما بنقل ممارستهما إلى دبي ليكونوا قرب قلب هذا السوق النابض بالحياة. نمو الإمارة السريع في القطاع التجاري قدم دافعًا للشركة لاستكشاف جميع الفرص في صناعة التصميم. عبر تجاوز معركة صعبة، استطاعت 4Space Design أن تقوم بإنشاء مشاريع ملحوظة في الإمارات العربية المتحدة. ومن خلال التركيز على الجودة بدلاً من الكمية، وتوجه المشروع، والعلاقة مع العملاء، يعزى الاستوديو نجاحه لأفكار فريقه المتميزة في تطوير الأعمال بشكل استراتيجي.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Figuers/>
    </section>
  );
}
