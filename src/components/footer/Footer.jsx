import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Amonoff
      </a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://wa.me/998884056888" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://t.me/Oga_dobry07" target="_blank" rel="noopener noreferrer"><RiTelegram2Fill /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Amonoff Tutorials. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
