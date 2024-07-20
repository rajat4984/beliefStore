import React from "react";
import logoWithoutBg from "../assets/images/logoWithoutBg.png";
import pinterest from "../assets/images/pinterest.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import facebook from "../assets/images/facebook.png";
import "../styles/footer.css"

const Footer = () => {
  const imgArr = [
    { img: facebook },
    { img: instagram },
    { img: youtube },
    { img: pinterest },
  ];
  return (
    <>
    <hr className="divider"/>
    <div className="footer">
      <div className="logo">
        <img src={logoWithoutBg} />
      </div>
      <div className="social_links">
        {imgArr.map((item) => {
          return (
            <a className="link" target="_blank">
              <img src={item.img} />
            </a>
          );
        })}
      </div>
    </div>
    
    </>
  );
};

export default Footer;
