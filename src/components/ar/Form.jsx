import { useState } from "react";
import { parseUTMParameters } from "../../utmParser";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

export default function Form(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState();

  // eslint-disable-next-line react/prop-types
  const { id } = props;

  const utmData = parseUTMParameters();

  const submit = async (e) => {
       setLoading(true);
       e.preventDefault();

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
           hs_language: "ar",
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
           window.location = "https://4space.ae/ar/thank-you/";
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

        <div className="field">
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
            <strong> الخدمة</strong>
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
