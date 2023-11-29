import { useState } from "react";
import { parseUTMParameters } from "../utmParser";

export default function Form(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // eslint-disable-next-line react/prop-types
  const { id } = props;

  const utmData = parseUTMParameters();

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

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
        window.location = "https://4space.ae/thank-you/";
        setSuccess(true);
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
      <form className=" form" onSubmit={submit} id="form-mobile">
        <div className="field">
          <label className="label has-text-left" htmlFor="name">
            Name
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
          <label className="label has-text-left" htmlFor="email">
            Email
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
          <label className="label has-text-left" htmlFor="mobile">
            Mobile
          </label>
          <div className="control">
            <input className="input" type="tel" id="mobile" name="mobile" />
          </div>
        </div>

        <h3 className="float-left mt-4 has-text-left"> About The Project</h3>

        <div className="field field-double mt-3">
          <div className="location">
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
          <div className="size">
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
        </div>

        <div className="field field-new">
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
        <div className="field is-align-items-flex-center ">
          <div className="control ">
            <button
              className="button buttonOutlined"
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
  );
}
