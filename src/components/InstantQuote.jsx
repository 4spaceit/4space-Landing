import {  useState } from "react";
import { parseUTMParameters } from "../utmParser";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";


export default function InstantQuote({ openQuote, onCloseQuote }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
  const [country, setCountry] = useState();
    const [countryCode, setCountryCode] = useState();


  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const utmData = parseUTMParameters();

    const formData = new FormData();
    formData.append("applicant", e.target.elements.name.value);
    formData.append("email", e.target.elements.email.value);
    // formData.append("mobile", e.target.elements.mobile.value);
    formData.append("mobile","+"+countryCode+" "+phone);
    formData.append("message", e.target.elements.message.value);
    formData.append("location", e.target.elements.location.value);
    formData.append("size", e.target.elements.size.value);
    formData.append("industry", e.target.elements.industry.value);
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

    const dataCrm = {
      properties: {
        firstname: e.target.elements.name.value,
        phone: "+" + countryCode + " " + phone,
        email: e.target.elements.email.value,
        project_description: e.target.elements.message.value,
        country: country,
        industry: e.target.elements.industry.value,
        project_size: e.target.elements.size.value,
        project_location: e.target.elements.location.value,
        hs_lead_status: "NEW",
        // ip_country:countryCode,
        source: `${utmData.utm_source}`,
        medium: `${utmData.utm_medium}`,
        campaign: `${utmData.utm_campaign}`,
      },
    };
    const jsonString = JSON.stringify(dataCrm);

     const CRMURL = "https://4space-backend.vercel.app/add-contact-to-crm";

     const responseCRM = await fetch(CRMURL, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: jsonString,
     });

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
            <IntlTelInput
              containerClassName="intl-tel-input btest  selected-flag"
              inputClassName="  column  borderReduis "
              name="phone"
              defaultCountry="ae"
              separateDialCode={true}
              telInputProps={{
                required: true,

                className: "",
                // "border w-full border-gray-300 rounded-md px-3 py-2 focus:ring-secondry outline-none focus:border-secondry direction-fix",
              }}
              onPhoneNumberChange={(status, value, countryData, number, id) => {
               setPhone(number);
               setCountry(countryData.iso2);
               setCountryCode(countryData.dialCode);
              }}
            />
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

          <div className="field">
            <label className="label">
              {" "}
              <strong>Industry</strong>
            </label>
            <div className="control ">
              <div className="select" style={{ width: "100%", font: "black" }}>
                <select style={{ width: "100%" }} name="industry" required>
                  <option value="">Please select an item from the list</option>
                  <option value="Residential">Residential</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Commercial">Commercial / Offices</option>
                  <option value="Retail">Retail</option>
                  <option value="Leisure">Leisure / Entertainment</option>
                  <option value="Restaurant">Restaurant / Café / F&B</option>
                  <option value="Cultural">Cultural / Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            {/*<p className="help is-danger">This email is invalid</p>*/}
          </div>
          <div className="field field-new   mb-0">
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
