import React, { useContext } from 'react';
import {Context} from "../../main";
import { Link } from "react-router-dom";
import {FaFacebook, FaYoutube, FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  const {isAuthorised} = useContext(Context)
  return (
    <footer className={isAuthorised ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ashraf</div>
      <div>
      <Link to={"/"}target='_blank'><FaFacebook/></Link>
      <Link to={"/"}target='_blank'><FaYoutube/></Link>
      <Link to={"/"}target='_blank'><FaLinkedin/></Link>
      <Link to={"/"}target='_blank'><RiInstagramFill/></Link>
      </div>
    </footer>
  );
};

export default Footer;
