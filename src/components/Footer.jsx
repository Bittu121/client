import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <p>© 2024 Crud Website. All Rights Reserved.</p>
        <span>Bittu Kumar</span>
        <nav>
          <a href="#">
            <FaTwitter />
          </a>
          |
          <a href="#">
            <FaInstagram />
          </a>
          |
          <a href="#">
            <FaFacebookF />
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
