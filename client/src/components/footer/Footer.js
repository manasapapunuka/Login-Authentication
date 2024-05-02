import React from 'react';
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
          <div className="footer-text">
            <p>Copyright © 2024 Authify. All Rights Reserved.</p>
          </div>

          <div className="icon-wrapper">
            
                    <a href="https://github.com/manasapapunuka">
                      <AiFillGithub/>
                    </a>
                  
                    <a href="https://www.linkedin.com/in/manasa-papunuka">
                      <AiFillLinkedin/>
                    </a>
          </div>
    </footer>

  )
}

export default Footer