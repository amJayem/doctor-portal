import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import bg from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section className="text-white"
    style={{
        backgroundImage: `url(${bg})`
    }}
    >
      <div className="hero shadow-xl ">
        <div className="hero-content">
            <img src={doctor} className="-mb-16 hidden md:block w-1/2 min-h-screen -mt-96" alt="Movie" />
          <div>
            <p className="font-bold text-xl text-primary">Appointment</p>
            <h2 className="my-5 text-3xl font-semibold">Make an appointment Today</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
