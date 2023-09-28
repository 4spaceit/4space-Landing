import Form from "./Form";

export default function Contact() {
  return (
    <section className=" page about" id="contact">
      <div className="columns is-multiline about">
        <div className="section container column is-full is-centered">
          <h1 className="center ">أتصل بنا</h1>
          <Form id="form-footer" />
        </div>
      </div>
    </section>
  );
}
