// import React from 'react';

import { useEffect, useState } from "react";
import Logo from "../svg/logo_black.svg?react";

const SendEmail = () => {
  const fourSpace = "4Space";
  const idustryArText = {
    Restaurant: "رابطًا لملفنا التعريفي الخاص بالمطاعم",
    Retail: "رابطًا لملفنا التعريفي الخاص بيع بالتجزئة",
    Residential: "رابطًا لملفنا التعريفي الخاص بالمنازل السكنية",
    Commercial: " رابطًا لملفنا التعريفي الخاص بالشركات التجارية",
    Architecture: "رابطًا إلى الملف التعريفي الخاص بشركتنا المعمارية",
    Hotel: " رابطًا إلى الملف التعريفي الخاص بنا ",
    Leisure: "رابطًا إلى الملف التعريفي الخاص بنا",
    Cultural: "رابطًا إلى الملف التعريفي الخاص بنا",
  };
  const [loading, setLoading] = useState(false);
  const [loadingSendEmail, setLoadingSendEmail] = useState(false);
  const [loadingUnqualifiedContact, setLoadingUnqualifiedContact] =
    useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showContent, SetShowContent] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [openModel, SetOpenModel] = useState(false);
  const [openModelProjectInf, SetOpenModelProjectInf] = useState(false);
  const [email, setEmail] = useState("");
  const [emailType,setEmailType]=useState("")
  const [contactProjectInf, setContactProjectInf] = useState();
  // const [contactTypeAndEmail, setContactTypeAndEmail] = useState({});
  const [emailBody, setEmailBody] = useState("");
  const [emailLang,setEmailLang]=useState("")
  const [emailIndustryLink, setEmailIndustryLink] = useState({ text: "", link: "" });
  const [industryLinks, setIndustryLinks] = useState({
    Other:
      "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
    Restaurant:
      "https://drive.google.com/file/d/1ywLB1UARigKMtv_tM1QSoP5gZPIiQGi2/view",
    Retail:
      "https://drive.google.com/file/d/1KAXq-zxWhzJqDIANn51tTKjyFt4tRL8y/view",
    Residential:
      "https://drive.google.com/file/d/1ajXSzwIkXgA3ZYK-8lBlrFWizFdbN89h/view",
    Commercial:
      "https://drive.google.com/file/d/1pR-QN1iOrG_WocMBZ1cBV7HOFMczxHhK/view",
    Architecture:
     "https://drive.google.com/file/d/1q4X_5E4XIoQsZias341SZ6UhyQbULj_D/view",
    Hotel:
      "https://drive.google.com/file/d/1qFB-ZGssp04ue8PZRiPFiFcbpRZaIN8m/view",
    Leisure:
      "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
    Cultural:
      "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
  });
   const [industryLinksAr, setIndustryLinksAr] = useState({
     Other:
       "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
     Restaurant:
       "https://drive.google.com/file/d/1ywLB1UARigKMtv_tM1QSoP5gZPIiQGi2/view",
     Retail:
       "https://drive.google.com/file/d/1KAXq-zxWhzJqDIANn51tTKjyFt4tRL8y/view",
     Residential:
       "https://drive.google.com/file/d/1ajXSzwIkXgA3ZYK-8lBlrFWizFdbN89h/view",
     Commercial:
       "https://drive.google.com/file/d/1pR-QN1iOrG_WocMBZ1cBV7HOFMczxHhK/view",
     Architecture:
      "https://drive.google.com/file/d/1q4X_5E4XIoQsZias341SZ6UhyQbULj_D/view",
     Hotel:
       "https://drive.google.com/file/d/1qFB-ZGssp04ue8PZRiPFiFcbpRZaIN8m/view",
     Leisure:
       "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
     Cultural:
       "https://drive.google.com/file/d/138zy_5V0syvpQHemEvIKxbAjo439f9vj/view",
   });
  const [contactId, setContactId] = useState();
  const [encodeID, setEncodeId] = useState("");
  const [userName, setUserName] = useState("")
  const [isActive, setIsActive]=useState(false)
  const [deleteConfirmationText, setDeleteConfirmationText] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("is-login")) {
      SetShowContent(true);
  } 
},[])

  function textToHTMLMarkup(text) {
    // Escape special characters in the text
    text = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Convert line breaks to <br> tags
    text = text.replace(/\n/g, "<br>");

    // Wrap the text in <p> tags
    return `<p>${text}</p>`;
  }
  const submit = (e) => {
    //    setLoading(true);
    e.preventDefault();

    if (
      ( e.target.elements.email.value === "inquiry@4space.ae" &&
        e.target.elements.password.value === "4Space12345!" ) 
    ) {
      SetShowContent(true);
      sessionStorage.setItem("is-login", true);
    }
  };

  const submitSendEmail = async (e) => {
    e.preventDefault();
    setLoadingSendEmail(true);
    const emailBody = textToHTMLMarkup(e.target.elements.emailBody.value);
    let res
    if (emailType === "Qualified") {
      //  https://4space-backend.vercel.app
       res = await fetch("https://4space-backend.vercel.app/send-email", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           email,
           emailBody,
           contactId,
           encodeID,
           emailIndustryLink,
           emailLang,
           userName,
         }),
       });
      
    } else {
      // https://4space-backend.vercel.app
       res = await fetch(
         "https://4space-backend.vercel.app/unqualified-contact",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             contactId: contactId,
             email,
             emailBody,
             userName,
             emailLang,
           }),
         }
       );
    }
    if (res.status == 200) {
      setContacts(contacts.filter((contact) => contact.id != contactId));
      SetOpenModel(false);
    } else {
      setError(true);
    }
    setLoadingSendEmail(false);
  };

  // const UnqualifiedContact = async (
  //   e,
  //   contactid,
  //   nameUser,
  //   email,
  //   emailLang
  // ) => {
  //   e.preventDefault();
  //   // setLoadingUnqualifiedContact(true);
  //   // https://4space-backend.vercel.app
  //   const res = await fetch(
  //     "https://4space-backend.vercel.app/unqualified-contact",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         contactId: contactid,
  //         nameUser,
  //         email,
  //         emailLang,
  //       }),
  //     }
  //   );
  //   if (res.status == 200) {
  //     setContacts(contacts.filter((contact) => contact.id != contactid));
  //     SetOpenModel(false);
  //   } else {
  //     setError(true);
  //   }
  //   setLoadingUnqualifiedContact(false);
  // };
  //    setLoading(true);
  // https://4space-backend.vercel.app
  const getContacts = async () => {
    const response = await fetch(
      "https://4space-backend.vercel.app/first-complete-form"
    );
    const data = await response.json();
    setContacts(data.contactsData);
    // console.log("data",await data.json())
  };

  const deleteLead = async (leadId) => {
      setLoadingSendEmail(true);
    const res = await fetch(`https://4space-backend.vercel.app/delete-lead/${leadId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
        if (res.status == 200) {
          setContacts(contacts.filter((contact) => contact.id != leadId));
          if (deleteConfirmationText === "CV") {
              const res = await fetch("https://4space-backend.vercel.app/send-email-cv", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userName,
                  email,
                  emailLang,
                }),
              });
            console.log("send email")
          } else if (deleteConfirmationText === "Supplier") {
             const res = await fetch(
               "https://4space-backend.vercel.app/send-email-supplier",
               {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                   userName,
                   email,
                   emailLang,
                 }),
               }
             );
             console.log("send email");
          }
        } else {
          setError(true);
        }
        setIsActive(false)
        setLoadingSendEmail(false);
  
  }
  useEffect(() => { 
    getContacts();
  }, []);

    useEffect(() => {
      const textarea = document.getElementById("custom-textarea");
      if (textarea) {
        const lines = textarea.value.split("\n");
        const longestLineLength = Math.max(...lines.map((line) => line.length));
        const padding = Math.floor(
          (textarea.clientWidth - longestLineLength * 8) / 2
        ); // Adjust the multiplier based on the font size and style
        const styledLines = lines.map((line) =>
          line.padStart(padding + line.length)
        );
        textarea.value = styledLines.join("\n");
      }
    }, []);
  return (
    <div>
      {!showContent && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
            height: "100vh",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              width: "500px",
              // backgroundColor: "black",
              padding: "50px",
            }}
          >
            <form className=" form" id="form-mobile" onSubmit={submit}>
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
              </div>
              <div className="field">
                <label className="label has-text-left" htmlFor="email">
                  Password
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
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
          </div>
        </div>
      )}

      {showContent && (
        <>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
                padding: "10px",
              }}
            >
              <div className="navbar-brand">
                <Logo />
              </div>
              <div
                style={{
                  textAlign: "end",
                  marginBottom: "20px",
                  padding: "10px",
                }}
              >
                NUM OF Contacts :{" "}
                <span style={{ fontWeight: "bold" }}>{contacts?.length}</span>
              </div>
            </div>

            <div className="table-container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th className="is-size-6-mobile is-size-6-tablet has-text-centered">
                      POS
                    </th>
                    <th className="is-size-6-mobile is-size-6-tablet has-text-centered">
                      NAME
                    </th>
                    <th className="is-size-6-mobile is-size-6-tablet has-text-centered">
                      EMAIL
                    </th>
                    <th
                      className="is-size-6-mobile is-size-6-tablet has-text-centered"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      PHONE NUMBER
                    </th>
                    <th
                      className="is-size-6-mobile is-size-6-tablet has-text-centered"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      CREATED AT
                    </th>
                    <th
                      style={{ whiteSpace: "nowrap" }}
                      className="has-text-centered"
                    >
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((ele, index) => (
                    <tr
                      key={index}
                      // style={{backgroundColor:"red"}}
                    >
                      <th style={{ padding: "1rem" }}>{index + 1}</th>
                      <td
                        className="is-size-6-mobile is-size-6-tablet has-text-centered"
                        style={{ whiteSpace: "nowrap", padding: "1rem" }}
                      >
                        {ele.properties.firstname}
                      </td>
                      <td
                        className="is-size-6-mobile is-size-6-tablet has-text-centered"
                        style={{ whiteSpace: "nowrap", padding: "1rem" }}
                      >
                        {ele.properties.email}
                      </td>
                      <td
                        className="is-size-6-mobile is-size-6-tablet has-text-centered"
                        style={{ whiteSpace: "nowrap", padding: "1rem" }}
                      >
                        {ele.properties.phone}
                      </td>
                      <td
                        className="is-size-6-mobile is-size-6-tablet has-text-centered"
                        style={{ whiteSpace: "nowrap", padding: "1rem" }}
                      >
                        {ele.createdAt}
                      </td>

                      <td
                        className="has-text-centered"
                        style={{ verticalAlign: "middle" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            className="button "
                            onClick={() => {
                              setContactProjectInf(
                                ele.properties.project_description
                              );
                              SetOpenModelProjectInf(true);
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            Show Project Inf
                          </button>
                          <button
                            className="button"
                            onClick={() => {
                              SetOpenModel(true);
                              setContactId(ele.id);
                              setEncodeId(ele.properties.encode_id);
                              setLoadingSendEmail();
                              setEmailLang(ele.properties.hs_language);
                              setUserName(ele.properties.firstname);
                              setEmailBody(
                                `${
                                  ele.properties.hs_language != "ar"
                                    ? `Dear ${ele.properties.firstname},
I hope this email finds you well.
Thank you for taking the time to reach out and inquire about our design services at 4Space Design.
Kindly ask you to fill out the Design Inquiry Form so we can capture a little more detail about your project.
Once filled, one of our team will contact you to discuss the details of your project.
We have added a link to our <link here>  to give you a better understanding of 4Space Design. 
We are looking forward to hearing from you very soon.
Kind regards,
4Space Team.
`
                                    : `مرحباً ${ele.properties.firstname}
 .نآمل أن تكون بخير
نشكرك على الوقت الذي أمضيته للتواصل والاستفسار عن خدمات التصميم لدينا في
    .4Space Design 
    و نرجو منك ملىء نموذج الاستفسار عن التصميم  حتى نتمكن من الحصول على كل التفاصيل المتعلقة بمشروعك , بمجرد أن تقوم بملئها، سيقوم بالإتصال بك أحد أعضاء فريقنا لمناقشة تفاصيل مشروعك
   لقد أضفنا رابطًا إلى الملف التعريفي الخاص ليمنحك فهمًا أفضل عن تصاميم  
    .4Space 
 .ونحن نتطلع دائما” للرد من قبلكم 
أطيب التحيات،`
                                } `
                              );
                              setEmailType("Qualified");
                              // setEmail("Qualified");
                              setEmail(ele.properties.email);
                              setEmailLang(ele.properties.hs_language);
                              setEmailIndustryLink({
                                text:
                                  ele.properties.hs_language != "en"
                                    ? `${
                                        ele.properties.industry === "Other"
                                          ? "رابطًا لملفنا التعريفي الخاص بيع بالتجزئة بنا"
                                          : `${
                                              idustryArText[
                                                `${ele.properties.industry}`
                                              ]
                                            }`
                                      }`
                                    : `${
                                        ele.properties.industry === "Other"
                                          ? "4SPACE Company Profile 2024"
                                          : `4SPACE Company Profile 2024 ${ele.properties.industry}`
                                      }`,
                                link:
                                  ele.properties.hs_language != "ar"
                                    ? industryLinks[ele.properties.industry]
                                    : industryLinksAr[ele.properties.industry],
                              });
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            Qualified
                          </button>
                          <button
                            className="button "
                            onClick={() => {
                              SetOpenModel(true);
                              setContactId(ele.id);
                              setEncodeId(ele.properties.encode_id);
                              setLoadingSendEmail();
                              setEmailLang(ele.properties.hs_language);
                              setEmailType("UnQualified");
                              setUserName(ele.properties.firstname);
                              setEmailBody(
                                `${
                                  ele.properties.hs_language != "ar"
                                    ? `Dear ${ele.properties.firstname},
I hope this email finds you well.
Thank you for considering us for your project and for filling up the Inquiry form. We appreciate your trust. We have received and reviewed it.
After careful consideration, we regret to inform you that we are unable to proceed with your project at this time. This decision was not made lightly, and we understand the importance of your endeavor.
Apologize for any inconvenience this may cause and hope you will find the perfect fit for your project completion.
If there is anything else we can do for you, please do not hesitate to contact us.
Kind regards,
4Space Team.
`
                                    : `مرحباً ${ele.properties.firstname}
أتمنى أن تكون بخير 
   ${fourSpace}   شكرًا لك على اختيار  
 لاحتياجات مشروعك وعلى تخصيص الوقت لملء نموذج الاستفسار الخاص بنا نقدر ثقتك في خبرتنا بشكل كبير
  لقد قمنا بمراجعة تقديم مشروعك بعناية, وبسبب التزاماتنا الحالية مع مشاريع أخرى، لا نستطيع قبول مشاريع جديدة في هذا الوقت. نعتقد أن كل مشروع يستحق اهتمامنا الكامل وتفانينا للحفاظ على المعايير العالية التي نعتز بها
    نأسف لأي إزعاج قد يسببه هذا ونأمل أن تجد الشريك المناسب لتحقيق متطلبات مشروعك. يرجى أن تضعنا في اعتبارك لمبادراتك المستقبلية، حيث سيسرنا إعادة النظر في مشروعك عندما تسمح طاقتنا بذلك
    إذا كان هناك أي شيء آخر يمكننا مساعدتك به أو إذا كان لديك أي مشاريع أخرى، لا تتردد في التواصل معنا
   شكرًا مرة أخرى على اهتمامك بالعمل معنا 
    أطيب التحيات،`
                                } `
                              );
                              // setEmail("Qualified");
                              setEmail(ele.properties.email);
                              setEmailLang(ele.properties.hs_language);
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            {loadingUnqualifiedContact
                              ? "Loading..."
                              : "Unqualified"}
                          </button>

                          <button
                            className="button "
                            onClick={() => {
                              // deleteLead(ele.id);
                              setDeleteConfirmationText("Supplier");
                              setIsActive(true);
                              setContactId(ele.id);
                              setUserName(ele.properties.firstname);
                              setEmail(ele.properties.email);
                              setEmailLang(ele.properties.hs_language);
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            Supplier
                          </button>

                          <button
                            className="button "
                            onClick={() => {
                              // deleteLead(ele.id);
                              setDeleteConfirmationText("CV");
                              setIsActive(true);
                              setContactId(ele.id);
                              setUserName(ele.properties.firstname);
                              setEmail(ele.properties.email);
                              setEmailLang(ele.properties.hs_language);
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            CV
                          </button>

                          <button
                            className="button "
                            onClick={() => {
                              // deleteLead(ele.id);
                              setDeleteConfirmationText("Delete");
                              setIsActive(true);
                              setContactId(ele.id);
                            }}
                            style={{
                              cursor: "pointer",
                              boxShadow: "none",
                              outline: "none",
                            }} // Remove hover effect and adjust styles
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`modal ${isActive ? "is-active" : ""}`}>
              <div className="modal-background "></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title" style={{ padding: "20px" }}>
                    {deleteConfirmationText} Lead
                  </p>
                  <button
                    className="delete"
                    aria-label="close"
                    onClick={() => setIsActive(false)}
                  ></button>
                </header>
                <section className="modal-card-body has-text-black">
                  <p>
                    Are you sure you want to {deleteConfirmationText} this lead?
                  </p>
                </section>
                <footer className="modal-card-foot model-delete-container">
                  <button
                    className="button "
                    style={{
                      cursor: "pointer",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    onClick={() => deleteLead(contactId)}
                  >
                    submit
                  </button>
                  <button
                    className="button "
                    style={{
                      cursor: "pointer",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    onClick={() => setIsActive(false)}
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </>
      )}
      {/* ${ ? "is-active" : ""}  */}
      <div
        className={`modal scrollable-container ${openModel ? "is-active" : ""}`}
        id="modal"
        // style={{overflow:"hidden"}}
      >
        <div className="modal-background"></div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => {
            // document?.getElementById("modal")?.classList?.remove("is-active");
            SetOpenModel(false);
          }}
        ></button>
        <div className="modal-content scrollable-content">
          <form onSubmit={submitSendEmail} id="form-modal">
            <div className="field  mb-0">
              <div className="control">
                <textarea
                  className="textarea"
                  name="emailBody"
                  id="message"
                  required
                  rows="20"
                  style={{ textAlign: emailLang == "ar" ? "right" : "left" }}
                  // defaultValue={emailBody}
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
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
                  disabled={loadingSendEmail}
                  aria-label="submit"
                >
                  {loadingSendEmail ? "Sending..." : "Submit"}
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

      <div
        className={`modal scrollable-container ${
          openModelProjectInf ? "is-active" : ""
        }`}
        id="modal"
      >
        <div className="modal-background"></div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => {
            // document?.getElementById("modal")?.classList?.remove("is-active");
            SetOpenModelProjectInf(false);
          }}
        ></button>
        <div
          className="modal-content scrollable-content"
          style={{ backgroundColor: "", textAlign: "center" }}
        >
          {contactProjectInf}
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
