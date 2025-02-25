import { useState } from "react";
import { parseUTMParameters } from "../../utmParser";
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
  const [countryCode, setCountryCode] = useState();
    const [errorDescription, setErrorDescription] = useState("");
  const [errorDes, setErrorDes] = useState(false);
  const [errorMes, setErrorMes] = useState("");
    const location = useLocation();

  const utmData = parseUTMParameters();
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
     const fullUrl =
       typeof window !== "undefined"
         ? `${window.location.origin}${location.pathname}${location.search}${location.hash}`
         : "";
     setError(false);
     setErrorMes("");
    setErrorDes(false);
    setErrorDescription("");
    const des = e.target.elements.message.value;
    const words = des.trim().split(/\s+/);
    if (words.length < 5) {
       setErrorDes(true);
       setErrorDescription("يجب أن تحتوي الوصف على ما لا يقل عن 5   كلمة.");
       return;
    }
      const sanitizedPhone = sanitizePhoneNumber(phone);

      if (!validatePhoneNumber(sanitizedPhone, countryCode)) {
        setPhoneError(true);
        return;
      }

      setLoading(true);
      const formData = new FormData();
      formData.append("applicant", e.target.elements.name.value);
      formData.append("email", e.target.elements.email.value);
      formData.append("mobile", "+" + countryCode + " " + phone);
      formData.append("message", e.target.elements.message.value);
      formData.append("location", e.target.elements.location.value);
      formData.append("size", e.target.elements.size.value);
      formData.append("industry", e.target.elements.industry.value);
      formData.append("utm_source", utmData.utm_source);
      formData.append("utm_medium", utmData.utm_medium);
      formData.append("utm_campaign", utmData.utm_campaign);
      formData.append("utm_term", decodeURIComponent(utmData.utm_term));
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
          phone: "+" + countryCode + " " + phone,
          email: e.target.elements.email.value,
          project_description: e.target.elements.message.value,
          country: country,
          industry: e.target.elements.industry.value,
          project_size: e.target.elements.size.value,
          project_location: e.target.elements.location.value,
          hs_lead_status: "NEW",
          hs_language: "ar",
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
          message: `email is : ${e.target.elements.email.value}  is ${jsonString}`,
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
            setErrorMes(
              " لم نتمكن من إرسال الليد ، هل يمكنك المحاولة مرة أخرى."
            );

      return;
    }
    
      try {
        const response = await fetch(
          "https://www.4spacewp.com/wp-json/contact-form-7/v1/contact-forms/10551/feedback",
          requestOptions
        );
const respanseData = await response.json();
        if (response.ok) {
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
           setSuccess(true);
          window.location = "https://4space.ae/ar/thank-you/";
          document.getElementById("form-mobile").hidden = true;
        } else {
           setError(true);
           setLoading(false);
              setErrorMes(
                " لم نتمكن من إرسال النموذج ، هل يمكنك المحاولة مرة أخرى."
          );
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
        setErrorMes(" لم نتمكن من إرسال النموذج ، هل يمكنك المحاولة مرة أخرى.");
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

          {/* <div className="field">
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
        </div> */}

          {/* <div className="field">
            <label className="label has-text-right">الجوال</label>
            <IntlTelInput
              containerClassName="intl-tel-input btest  selected-flag"
              inputClassName="  column  borderReduis "
              name="phone"
              style={{ direction: "ltr" }}
              // style={{direction:"ltr"}}
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
          </div> */}

          <div className="field">
            <label className="label has-text-right">موبيل</label>
            <IntlTelInput
              containerClassName="intl-tel-input btest selected-flag"
              inputClassName="column borderReduis"
              name="phone"
              style={{ direction: "ltr" }}
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
                هذا الرقم غير صحيح
              </p>
            )}
          </div>

          <h3 className="float-left mt-4 has-text-right"> عن المشروع</h3>

          <div className="field field-double mt-3">
            <div className="location">
              <label className="label has-text-right" htmlFor="location">
                الموقع
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
              <label className="label has-text-right" htmlFor="size">
                المساحة (متر مربع)
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
            <label className="label has-text-right">
              {" "}
              <strong> فئة المشروع</strong>
            </label>
            <div className="control ">
              <div className="select" style={{ width: "100%" }}>
                <select style={{ width: "100%" }} name="industry" required>
                  <option value="">الرجاء تحديد عنصر من القائمة</option>
                  <option value="Residential">سكني</option>
                  <option value="Hotel"> فندقى </option>
                  <option value="Commercial">تجاري / مكاتب</option>
                  <option value="Retail"> تجزئة</option>
                  <option value="Leisure">ترفيه / تسلية</option>
                  <option value="Restaurant">
                    مطعم / مقهى / مأكولات ومشروبات
                  </option>
                  <option value="Cultural">ثقافي / تعليمي</option>
                  <option value="Other">آخرين</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field field-new  ">
            <label className="label has-text-right" htmlFor="message">
              وصف المشروع
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            {errorDes && (
              <div className="notification is-warning mt-2">
                {errorDescription}
              </div>
            )}
          </div>

          {error && (
            <div className="notification is-warning">
{errorMes}
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
            تم إرسال النموذج بنجاح. شكرا لك.
          </div>
        )}
      </div>
    </div>
  );
}
