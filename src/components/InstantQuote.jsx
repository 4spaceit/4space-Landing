
import { useState } from "react";
import { parseUTMParameters } from "../utmParser";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { parsePhoneNumber } from "libphonenumber-js";
import { useLocation } from "react-router-dom";

export default function InstantQuote({ openQuote, onCloseQuote }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [country, setCountry] = useState();
  const [errorMes,setErrorMes]=useState("")
  const [countryCode, setCountryCode] = useState();
  const [errorDescription, setErrorDescription] = useState("");
  const [errorDes, setErrorDes] = useState(false);
   const location = useLocation();

  const validatePhoneNumber = (phone, countryCode) => {
    try {
      const phoneNumber = parsePhoneNumber(`+${countryCode}${phone}`);
      return phoneNumber.isValid();
    } catch (error) {
      return false;
    }
  };

  const sanitizePhoneNumber = (phone) => {
    return phone.replace(/\D/g, "");
  };

  const submit = async (e) => {
    e.preventDefault();
     
 const fullUrl =  typeof window !== "undefined" ? `${window.location.origin}${location.pathname}${location.search}${location.hash}`:"";
 setError(false)
 setErrorMes("")

    setErrorDes(false);
    setErrorDescription("");

    const des = e.target.elements.message.value;
    const words = des.trim().split(/\s+/);
    if (words.length < 5) {
      setErrorDes(true);
      setErrorDescription("Description must contain at least 5 words.");
      return;
    }

    const sanitizedPhone = sanitizePhoneNumber(phone);

    if (!validatePhoneNumber(sanitizedPhone, countryCode)) {
      setPhoneError(true);
      return;
    }

    setLoading(true);
    const utmData = parseUTMParameters();

    const formData = new FormData();
    formData.append("applicant", e.target.elements.name.value);
    formData.append("email", e.target.elements.email.value);
    formData.append("mobile", "+" + countryCode + " " + sanitizedPhone);
    formData.append("message", e.target.elements.message.value);
    formData.append("location", e.target.elements.location.value);
    formData.append("size", e.target.elements.size.value);
    formData.append("industry", e.target.elements.industry.value);
    formData.append("utm_source", utmData.utm_source);
    formData.append("utm_medium", utmData.utm_medium);
    formData.append("utm_campaign", utmData.utm_campaign);
    formData.append("utm_term", utmData.utm_term);
    formData.append("utm_content", utmData.utm_content);
     formData.append("_wpcf7_unit_tag", "fix");

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    const dataCrm = {
      properties: {
        firstname: e.target.elements.name.value,
        phone: "+" + countryCode + " " + sanitizedPhone,
        email: e.target.elements.email.value,
        project_description: e.target.elements.message.value,
        country: country,
        industry: e.target.elements.industry.value,
        project_size: e.target.elements.size.value,
        project_location: e.target.elements.location.value,
        hs_lead_status: "NEW",
        hs_language: "en",
        source: `${utmData.utm_source}`,
        medium: `${utmData.utm_medium}`,
        campaign: `${utmData.utm_campaign}`,
        hs_context: `${utmData.hubspotUtckValue}`,
        urlPage: fullUrl,
        pagePath: `${location.pathname}-project-inquiry/`,
      },
    };
    const jsonString = JSON.stringify(dataCrm);

     await fetch("https://github.digializer.com/logs", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         industry: "4space-landing-logs",
         message: `email is : ${
           e.target.elements.email.value
         }  is ${jsonString}`,
       }),
     });

    const CRMURL = "https://4space-backend.vercel.app/create-leade-at-hubspot";

    const responseCRM = await fetch(CRMURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonString,
    });
    
    if (!responseCRM.ok) {
      setLoading(false);
      setError(true);
      setErrorMes("fail submit lead,please try again")
      return
    }
     
      try {
        const response = await fetch(
          "https://www.4spacewp.com/wp-json/contact-form-7/v1/contact-forms/10551/feedback",
          requestOptions
        );
        
        const respanseData = await response.json();
        if (response.ok) {
          setSuccess(true);
           await fetch("https://github.digializer.com/logs", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               industry: "4space-landing-success",
               message: `email is : ${
                 e.target.elements.email.value
               } success is ${JSON.stringify(respanseData)}`,
             }),
           });
          window.location = "https://4space.ae/thank-you/";
          document.getElementById("form-modal").hidden = true;
        } else {
          setError(true);
           setLoading(false);
           setErrorMes("fail submit contact,please try again");
           console.log("response", error);
           await fetch("https://github.digializer.com/logs", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               industry: "4space-landing",
               message: `email is : ${
                 e.target.elements.email.value
               } error is ${JSON.stringify(respanseData)}`,
             }),
           });
          await fetch(
            "https://4space-backend.vercel.app/send-email-error-development",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: `email is : ${
                  e.target.elements.email.value
                }+ data is ${JSON.stringify(respanseData)}`,
              }),
            }
          );

        }
      } catch (error) {
        setError(true);
           setLoading(false);
           setErrorMes("fail submit contact,please try again");
        console.error("Error:", error);
         const res = await fetch("https://github.digializer.com/logs", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             industry: "4space-landing",
             message: `email is : ${e.target.elements.email.value} error ${error}`,
           }),
         });
           await fetch(
             "https://4space-backend.vercel.app/send-email-error-development",
             {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                 message: `email is : ${
                   e.target.elements.email.value
                 }+ data is ${JSON.stringify(error)}`,
               }),
             }
           );
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
              containerClassName="intl-tel-input btest selected-flag"
              inputClassName="column borderReduis"
              name="phone"
              defaultCountry="ae"
              separateDialCode={true}
              telInputProps={{
                required: true,
              }}
              onPhoneNumberChange={(status, value, countryData, number, id) => {
                const sanitizedPhone = sanitizePhoneNumber(number);
                setPhone(sanitizedPhone);
                setCountry(countryData.iso2);
                setCountryCode(countryData.dialCode);
                setPhoneError(
                  !validatePhoneNumber(sanitizedPhone, countryData.dialCode)
                );
              }}
            />
            {phoneError && (
              <p className="help is-danger">
                Invalid phone number for selected country
              </p>
            )}
          </div>

          <h3 className="float-left mt-4 has-text-left">About The Project</h3>

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
              <strong>Industry</strong>
            </label>
            {/* <div className="control ">
              <div className="select" style={{ width: "100%", font: "black" }}>
                <select style={{ width: "100%" }} name="industry" required>
                  <option value="">Please select an item from the list</option>
                  <option value="Residential">Residential</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Retail">Retail</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div> */}
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
          </div>

          <div className="field">
            <label className="label has-text-left">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            {errorDes && (
              <div className="help is-danger mt-2">{errorDescription}</div>
            )}
          </div>

          <div className="field">
            <div className="control center">
              <button
                className="button is-large is-black btn-quote"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
            {error && (
              <p className="help is-danger has-text-centered">{errorMes}</p>
            )}
            {success && (
              <p className="help is-success has-text-centered">
                Thank you for contacting us!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}