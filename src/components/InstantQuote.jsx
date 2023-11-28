import { useEffect, useState } from "react";
import { parseUTMParameters } from "../utmParser";

export default function InstantQuote({ openQuote, onCloseQuote }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const scrollableContainer = document.querySelector(".scrollable-container");

    const preventScrolling = (e) => {
      e.preventDefault();
    };

    scrollableContainer.addEventListener("touchmove", preventScrolling);

    return () => {
      // Remove event listeners when the component unmounts
      scrollableContainer.removeEventListener("touchmove", preventScrolling);
    };
  }, []);

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const utmData = parseUTMParameters();

    const formData = new FormData();
    formData.append("applicant", e.target.elements.name.value);
    formData.append("email", e.target.elements.email.value);
    formData.append("mobile", e.target.elements.mobile.value);
    formData.append("message", e.target.elements.message.value);
    formData.append("location", e.target.elements.location.value);
    formData.append("size", e.target.elements.size.value);
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
        window.location = "https://4space.ae/thank-you/";
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
    <div
      className={`modal ${openQuote ? "is-active" : ""} scrollable-container`}
      id="modal"
    >
      <div className="modal-background"></div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          document?.getElementById("modal")?.classList?.remove("is-active");
        }}
      ></button>
      <div className="modal-content scrollable-content">
        <form onSubmit={submit} id="form-modal">
          <h2 className="center">TELL US ABOUT YOUR PROJECT</h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" required />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" name="email" required />
            </div>
          </div>

          <div className="field">
            <label className="label">Mobile</label>
            <div className="control">
              <input className="input" type="text" name="mobile" />
            </div>
          </div>

          <h3 className="float-left mt-4 has-text-left"> About The Project</h3>

          <div className="field field-new mt-5">
            <label className="label has-text-left" htmlFor="location">
              Project location
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="location"
                name="location"
                required
              />
            </div>
          </div>

          <div className="field field-new mt-5">
            <label className="label has-text-left" htmlFor="size">
              Project size (sqft)
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="size"
                name="size"
                required
              />
            </div>
          </div>

          <div className="field field-new mt-5 mb-0">
            <label className="label has-text-left" htmlFor="message">
            Description
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
              We couldnt submit the form, can you try again.
            </div>
          )}

          <div className="field is-grouped is-align-items-flex-end ">
            <div className="control">
              <button
                className="button buttonOutlined button-fix"
                type="submit"
                disabled={loading}
                aria-label="submit"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
        {success && (
          <div className="notification is-success">
            Thanks!, we will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}
