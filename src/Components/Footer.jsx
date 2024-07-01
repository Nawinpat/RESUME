import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi"; 

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Nawinpat" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/thnochtihiray/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100060586145080" target="_blank">
          <FiFacebook /> 
        </a> 
      </div>
    </footer>
  );
};

export default Footer;
