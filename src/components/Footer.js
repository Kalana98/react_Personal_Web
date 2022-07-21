import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div class="page-wrapper"></div>
      <div class="footer">
        <div class="footer-content">
          <center>
            <h2>Contact Me</h2>
            <br></br>
            <a href="www.Google.com">
              {" "}
              <FaGithub size="1.3em" />
            </a>
            <a href="www.facbook.com">
              {" "}
              <FaFacebook size="1.3em" />
            </a>
            <a href="www.twitter.com">
              {" "}
              <FaTwitter size="1.3em" />
            </a>
            <a href="www.linkedin.com">
              {" "}
              <FaLinkedinIn size="1.3em" />
            </a>
            <a href=" kalanamalshan98@gmail.com">
              {" "}
              <FaEnvelope size="1.3em" />
            </a>
          </center>
        </div>

        <div class="footer-bottom">
          &copy; kalana98@gmail.com | Designed By Kalana De Silva
        </div>
      </div>
    </div>
  );
}
