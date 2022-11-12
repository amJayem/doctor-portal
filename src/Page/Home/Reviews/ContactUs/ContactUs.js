import React from "react";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import bg from "../../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="flex flex-col my-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="shadow-lg py-5  text-white">
        <div className="text-center my-5 ">
          <h3 className="text-primary font-bold text-xl">Contact Us</h3>
          <h2 className="text-3xl font-semibold">Stay connected with us</h2>
        </div>
        <form className="p-3 flex flex-col items-center gap-3 ">
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <textarea
            className=" textarea-accent w-full max-w-xs textarea"
            placeholder="Your Message"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
