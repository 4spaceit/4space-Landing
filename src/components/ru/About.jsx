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
        {/* <Parallax
          bgImage="assets/about.PNG"
          bgImageAlt="4SPACE-team"
          strength={200}
          className="about-image column is-full" // Adjust height as needed
        >
          <div className="Para-placeholder"></div>
        </Parallax> */}
        <div className="section column is-full py-4">
          <h2 className="center m-6 has-text-black">О нас</h2>
          <div className="columns is-multiline">
            <div className="column container has-text-justified	">
              <p>
                Основатели 4space,&nbsp;
                <span className="has-text-weight-bold">Фирас Альсахин</span>
                &nbsp;и&nbsp;
                <span className="has-text-weight-bold">Амджад Хуриех</span>,
                переехали в Дубай много лет назад и открыли перспективный бизнес
                в уже тогда процветающей индустрии интерьерного дизайна. 4Space
                Design всегда ставит качество работы на первое место, уделяет
                внимание проектам, которые требуют эксклюзивного подхода, и
                инвестирует в долгосрочные отношениям с клиентами. Инновационный
                и креативный подход в работе стал визитной карточкой компании на
                рынке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
