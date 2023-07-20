import React from "react";

import emailjs from "emailjs-com";

import { useRef } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6g9ghle",
        "template_5nj7jzr",
        form.current,
        "YZF8uKACZ1BE5j0He"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section
      id="contact"
      className="flex flex-wrap justify-center gap-3 min-h-screen fix-less"
    >
      <div className="flex flex-wrap flex-col text-center">
        <h2>Enter The Feilds in Below To</h2>
        <h1>Contact Me</h1>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <div className="flex flex-wrap flex-col basis-1/6 gap-9">
          <div className="flex flex-wrap flex-col justify-center bg-gray-900 border-2 rounded-lg text-center items-center gap-3 fix-less box">
            <MdOutlineEmail className="text-4xl" />
            <h2>My Email</h2>
            <h1>Krasniqi1287@gmail.com</h1>
          </div>
          <div className="flex flex-wrap flex-col justify-center bg-gray-900 border-2 rounded-lg text-center items-center gap-3 fix-less box">
            <FaFacebookMessenger className="text-4xl" />
            <h2>My Messenger</h2>
            <h1>https://m.me/mymessangerid</h1>
          </div>
          <div className="flex flex-wrap flex-col justify-center bg-gray-900 border-2 rounded-lg text-center items-center gap-3 fix-less box">
            <AiFillPhone className="text-4xl" />
            <h2>My Phone Number</h2>
            <h1>(905)-325-6867</h1>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-wrap flex-col basis-1/3 justify-evenly"
        >
          <h2>Send Me An Email</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="border-2 border-gray-900 rounded-xl text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border-2 border-gray-900 rounded-xl text-black"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="border-2 border-gray-900 rounded-xl text-black"
          />
          <button type="submit" className="btn">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
