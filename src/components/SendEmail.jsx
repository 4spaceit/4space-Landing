// import React from 'react';

import { useEffect, useState } from "react";
import Logo from "../svg/logo_black.svg?react";

const SendEmail = () => {
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
  const [contactProjectInf, setContactProjectInf] = useState();
  // const [contactTypeAndEmail, setContactTypeAndEmail] = useState({});
  const [emailBody, setEmailBody] = useState("");
  const [contactId, setContactId] = useState();
  const [encodeID, setEncodeId] = useState("");
  const submit = (e) => {
    //    setLoading(true);
    e.preventDefault();

    if (
      e.target.elements.email.value === "test@gmail.com" &&
      e.target.elements.password.value === "123"
    ) {
      SetShowContent(true);
    }
  };

    const formatHTMLContent = (htmlContent) => {
      return htmlContent
        .split("\n") // Split the content by newline characters
        .map((line) => line.trim()) // Trim leading and trailing whitespace from each line
        .filter((line) => line !== "") // Remove empty lines
        .join("\n"); 
    };

  const submitSendEmail = async (e) => {
    e.preventDefault();
    setLoadingSendEmail(true);
    const emailBody = e.target.elements.emailBody.value;
    const res = await fetch("https://4space-backend.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        emailBody,
        contactId,
        encodeID,
      }),
    });
    if (res.status == 200) {
      setContacts(contacts.filter((contact) => contact.id != contactId));
      SetOpenModel(false);
    } else {
      setError(true);
    }
    setLoadingSendEmail(false);
  };

  const UnqualifiedContact = async (e, contactid) => {
    e.preventDefault();
    setLoadingUnqualifiedContact(true);

    const res = await fetch("https://4space-backend.vercel.app/unqualified-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactId: contactid,
      }),
    });
    if (res.status == 200) {
      setContacts(contacts.filter((contact) => contact.id != contactid));
      SetOpenModel(false);
    } else {
      setError(true);
    }
    setLoadingUnqualifiedContact(false);
  };
  //    setLoading(true);
  const getContacts = async () => {
    const response = await fetch("https://4space-backend.vercel.app/first-complete-form");
    const data = await response.json();
    setContacts(data.contactsData);
    // console.log("data",await data.json())
  };
  useEffect(() => {
    getContacts();
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
                              setEmailBody(` <p>Dear ${ele.properties.firstname},</p>
                                         <p>Thank you for taking the time to reach out and inquire about our design services at 4Space Design. Prior to the meeting, we kindly ask you to fill out the design inquiry form in the link below so we can capture a little more detail about your restaurant project.</p>
                                         <p>Design Inquiry Form: <span>[[form link]]</span></p>
                                         <p>Once filled, one of our team will contact you to discuss the details of your project.</p>
                                         <p>I've added a link to our company profile to give you a better understanding of 4Space Design.</p>
                                         <p><a href="https://4space.ae/">4SPACE Company Profile</a></p>
                                         <p>We are looking forward to hearing from you very soon.</p>`);
                              // setEmail("Qualified");
                              setEmail(ele.properties.email);
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
                            onClick={(e) => {
                              // setEmail("Unqualified");
                              setContactId(ele.id);
                              setEncodeId(null);
                              UnqualifiedContact(e, ele.id);
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  // defaultValue={emailBody}
                  value={formatHTMLContent(emailBody)}
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
