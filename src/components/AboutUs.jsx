import React from "react";
import aboutUsImg from "../assets/images/logo.png"
const AboutUs = () => {
  return (
    <>
    <section class="about-us">
      <img src={aboutUsImg}/>

      <div class="info">
        <h2 class="heading">About us</h2>
        <p>
          Welcome to The Belief Store, your go-to destination for trendy and
          affordable women's clothing at wholesale prices. Since 2017, we have
          been dedicated to providing the latest fashion trends, ensuring our
          customers stay stylish and on point. We specialize in offering a wide
          range of fashionable clothing that caters to various tastes and
          preferences. Whether you're looking for casual wear, chic office
          outfits, or elegant evening dresses, our collections are designed to
          meet the diverse needs of women everywhere. At The Belief Store,
          quality and affordability go hand in hand. We take pride in sourcing
          high-quality garments that not only look great but also feel
          comfortable and durable. Our commitment to excellence ensures that you
          receive products that meet the highest standards. With a strong
          presence in India and a growing international clientele, we strive to
          deliver exceptional service and competitive pricing. Our dedicated
          team works tirelessly to ensure timely deliveries and a seamless
          shopping experience for our customers worldwide. Thank you for
          choosing The Belief Store. We look forward to continuing our journey
          in the fashion industry and helping you stay ahead of the trends.
        </p>
      </div>
    </section>
    <hr className="divider"/>
    </>
  );
};

export default AboutUs;
