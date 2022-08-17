import { Link } from "react-router-dom";
import { MdCopyright } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./styles.scss";

export function Footer() {
  const currDate = new Date();
  const currYear = currDate.getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copyright">
        <MdCopyright /> {currYear} Alugaverso
      </span>

      <nav className="footer__nav">
        <Link className="footer__nav__link" to="/lands">
          Encontre um terreno
        </Link>
        <Link className="footer__nav__link" to="/about">
          Sobre
        </Link>
        <Link className="footer__nav__link" to="/faq">
          Saiba mais
        </Link>
        <a
          className="footer__nav__link"
          href="https://sosamazonia.org.br/"
          target="_blank"
          rel="noreferrer"
        >
          Ajude a Amazônia 🇧🇷
        </a>
      </nav>
      <span className="footer__social-media">
        <a
          className="footer__social-media__link"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="footer__social-media__link"
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          className="footer__social-media__link"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="footer__social-media__link"
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </span>
    </footer>
  );
}
