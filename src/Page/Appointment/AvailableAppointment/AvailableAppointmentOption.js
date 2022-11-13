import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const AvailableAppointmentOption = ({ option }) => {
  const { slots, name } = option;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-primary text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try another day' }</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} available</p>
          <div className="card-actions justify-center">
            <PrimaryButton>Get appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentOption;
