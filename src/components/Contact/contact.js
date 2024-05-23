import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact-page">
      <div className="customers">
        <h2>My clients</h2>
        <p className="clients-description">Here is a brief description of my clients and what I have done for them.</p>
        <img className="client-img" src="" alt="" />
        <img className="client-img" src="" alt="" />
        <img className="client-img" src="" alt="" />
      </div>
      <div id="contact-section">
        <h2>Contact Me</h2>
        <span className="">By filling out the form located below you can get in touch with me for any quote.</span>
        <form className="contact-form" ref={form} inSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea className="msg" name="message" rows={5} placeholder="Your message"></textarea>
        </form>
        <button type="submit" value="send" className="submit-btn">Submit</button>
        <div className="links">
          <img className="link-img" src="" alt="" />
          <img className="link-img" src="" alt="" />
          <img className="link-img" src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contact;