import Form from "./Form";

export default function Contact() {
  return (
    <section className=" page about" id="contact">
      <div className="columns is-multiline about">
        <div className="section container column is-full">
          <h2 className="center py-4">تواصل معنا</h2>

          <Form id="form-footer" />
        </div>
      </div>
    </section>
  );
}
