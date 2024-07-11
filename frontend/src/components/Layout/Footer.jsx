import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithAnshuman.</div>
      <div>
        <Link to={"https://www.instagram.com/tripathianshuman305?igsh=MTQ5NXZpbW80cnU4dQ=="} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={""} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/anshuman-tripathi-a79164247"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/tripathianshuman305?igsh=MTQ5NXZpbW80cnU4dQ=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

