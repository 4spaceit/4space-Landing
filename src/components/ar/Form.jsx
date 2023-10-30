import { useState } from "react";
import { parseUTMParameters } from "../../utmParser";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // eslint-disable-next-line react/prop-types
  const { id } = props;

  const utmData = parseUTMParameters();

  let navigate = useNavigate();

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("applicant", e.target.elements.name.value);
    formData.append("email", e.target.elements.email.value);
    formData.append("mobile", e.target.elements.mobile.value);
    formData.append("message", e.target.elements.message.value);
    formData.append("utm_source", utmData.utm_source);
    formData.append("utm_medium", utmData.utm_medium);
    formData.append("utm_campaign", utmData.utm_campaign);
    formData.append("utm_term", utmData.utm_term);
    formData.append("utm_content", utmData.utm_content);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://www.4spacewp.com/wp-json/contact-form-7/v1/contact-forms/10551/feedback",
        requestOptions
      );

      if (response.ok) {
        setSuccess(true);
        window.location = "https://4space.ae/ar/thank-you/"
        document.getElementById("form-mobile").hidden = true;
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error("Error:", error);
    }

    setLoading(false);
  };
  return (
    <div className=" mt-3" id={id}>
      <form className="form" onSubmit={submit} id="form-mobile">
        <div className="field">
          <label className="label has-text-right" htmlFor="name">
            الأسم
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label has-text-right" htmlFor="email">
            البريد الإلكتروني
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          {/*<p className="help is-danger">This email is invalid</p>*/}
        </div>

        <div className="field">
          <label className="label has-text-right" htmlFor="mobile">
            رقم الهاتف
          </label>
          <div className="control">
            <input
              className="input"
              type="tel"
              id="mobile"
              name="mobile"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-left" htmlFor="message">
            عن المشروع
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
        </div>

        {error && (
          <div className="notification is-warning">
            لم نتمكن من إرسال النموذج ، هل يمكنك المحاولة مرة أخرى.
          </div>
        )}
        <div className="field">
          <div className="control is-align-items-flex-center	">
            <button
              className="button buttonOutlined is-centered"
              type="submit"
              disabled={loading}
              aria-label="submit"
              style={{ fontFamily: "NotoNaskhArabic-Regular" }}
            >
              {loading ? "جاري الإرسال..." : "إرسال"}
            </button>
          </div>
        </div>
      </form>
      {success && (
        <div className="notification is-success">
          شكرا! ، سنعود إليك قريبًا.
        </div>
      )}
    </div>
  );
}
