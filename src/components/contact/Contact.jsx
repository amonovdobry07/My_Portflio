import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t6kwzoq",    // EmailJS service ID
        "template_itxmq4y",   // Template ID
        form.current,
        "Hhew6SBq-SHSj1W2i"   // Public Key
      )
      .then(
        () => {
          console.log("✅ SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("❌ FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email:</h4>
            <h5>ogabekomonov79@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ogabekomonov79@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Ogabek Amonov</h5>
            <a href="https://t.me/Oga_dobry07" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+998 88 405 68 88</h5>
            <a href="https://wa.me/998884056888" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
