import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-800 text-white rounded-none p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about">
          <a className="link link-hover">About Me</a>
        </Link>
        <Link to="/contact">
          <a className="link link-hover">Contact</a>
        </Link>
        <Link to="/education">
          <a className="link link-hover">Education</a>
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link to="https://www.facebook.com/profile.php?id=100095084532947">
            <FaFacebook></FaFacebook>
          </Link>
          <Link to="https://www.instagram.com/__hydro_carbon__">
            <FaInstagram></FaInstagram>
          </Link>
          <Link to="https://www.linkedin.com/in/istiaq-ahsan">
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ISTIAQ
          AHSAN ROMI
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
