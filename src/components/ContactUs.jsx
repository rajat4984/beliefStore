import React, { useRef, useState } from "react";
import contactUsImg from "../assets/images/contact_us.svg";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4relarc", "template_065j6j2", formRef.current, {
        publicKey: "4zx43XblAVunpJ9MQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          formRef.current.reset();
          toast.success("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
    <section class="contact_us">
      <Toaster />
      <h2 class="heading">Contact us</h2>
      <div class="container">
        <img src={contactUsImg} />
        <form onSubmit={sendEmail} ref={formRef}>
          <input
            name="from_name"
            type="text"
            placeholder="Your name"
            required
          />
          <input name="user_email" type="email" placeholder="Email" required />
          <textarea
            name="message"
            required
            rows="13"
            placeholder="Send us a message"
          ></textarea>
          <button onClick={(e) => sendEmail(e)} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
