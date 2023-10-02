import { useState } from "react";
import { parseUTMParameters } from "../../utmParser";

export default function InstantQuote({ openQuote, onCloseQuote }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

 

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const utmData = parseUTMParameters();

    const formData = new FormData();
    formData.append("applicant", e.target.elements.name.value);
    formData.append("email", e.target.elements.email.value);
    formData.append("mobile", e.target.elements.mobile.value);
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
        document.getElementById("form-modal").hidden = true;
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
    <div className={`modal ${openQuote ? "is-active" : ""}`} id="modal">
      <div className="modal-background"></div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          document?.getElementById("modal")?.classList?.remove("is-active");
        }}
      ></button>
      <div className="modal-content">
        <form onSubmit={submit} id="form-modal">
          <h1 className="center">اتصل بنا</h1>
          <div className="field">
            <label className="label">الأسم</label>
            <div className="control">
              <input className="input" type="text" name="name" required />
            </div>
          </div>

          <div className="field">
            <label className="label">البريد الإلكتروني</label>
            <div className="control">
              <input className="input" type="email" name="email" required />
            </div>
            {/*<p className="help is-danger">This email is invalid</p>*/}
          </div>

          <div className="field">
            <label className="label" >رقم الهاتف</label>
            <div className="control">
              <input className="input" type="text" name="mobile" />
            </div>
          </div>

          {error && (
            <div className="notification is-warning">
              حدث خطأ ما. يرجى المحاولة مرة أخرى.
            </div>
          )}

          <div className="field is-grouped is-align-items-flex-end">
            <div className="control">
              <button
                className="button buttonOutlined"
                type="submit"
                disabled={loading}
                aria-label="submit"
                style={{fontFamily:"Montserrat-Arabic"}}
              >
                {loading ? "جاري الإرسال..." : "إرسال"}
              </button>
            </div>
          </div>
        </form>
        {success && (
          <div className="notification is-success">
            تم إرسال النموذج بنجاح. شكرا لك.
          </div>
        )}
      </div>
    </div>
  );
}
