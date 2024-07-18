import React, { useEffect, useState } from "react";

const Banner = ({ bannerImage, mobileBanner }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    
    <section className="banner-section">
      <div className="banner">
        <img src={isMobile ? mobileBanner : bannerImage} />
      </div>
    </section>
    <hr className="divider"/>
    </>
  );
};

export default Banner;
