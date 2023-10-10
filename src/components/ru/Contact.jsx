import Form from "./Form";

export default function Contact() {
  return (
    <section className=" page about" id="contact">
      <div className="columns is-multiline about">
        <div className="section container column is-full is-centered">
          <h2 className="center py-6">Расскажите о вашем проекте  </h2>
          <Form id="form-footer" />
        </div>
      </div>
    </section>
  );
}
