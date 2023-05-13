import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../sanity_client";
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSummited] = useState(true);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSummited(true);
    });
    setLoading(false);
  };
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:vuot2001.uet@gmail.com" className="p-text">
            vuot2001.uet@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (123) 456-789" className="p-text">
            +84 356-53 1883
          </a>
        </div>

        {isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(Footer, "contact", true);
