import React, { useState, useEffect, useRef } from "react";
import { parseUTMParameters } from "../utmParser";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const utmData = parseUTMParameters();

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

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
    <div className="has-background-black form is-hidden-touch">
      <h1 className="center">Leave a message</h1>
      <form onSubmit={submit}>
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
          {/*<p className="help is-danger">This email is invalid</p>*/}
        </div>

        <div className="field">
          <label className="label">Mobile</label>
          <div className="control">
            <input className="input" type="text" name="mobile" />
          </div>
        </div>

        {error && (
          <div className="notification is-warning">
            We couldnt submit the form, can you try again.
          </div>
        )}

        {success && (
          <div className="notification is-success">
            Thanks!, we will get back to you soon.
          </div>
        )}

        <div className="field is-grouped is-align-items-flex-end">
          <div className="control">
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
    </div>
  );
}
