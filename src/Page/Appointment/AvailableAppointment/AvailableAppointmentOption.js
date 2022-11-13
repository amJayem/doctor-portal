import React from "react";

const AvailableAppointmentOption = ({ option, setTreatment }) => {
  const { slots, name } = option;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-primary text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center">
            <label disabled={slots.length === 0} onClick={()=>setTreatment(option)} htmlFor="my-modal-3" className="btn btn-primary text-white">
              Get appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentOption;
