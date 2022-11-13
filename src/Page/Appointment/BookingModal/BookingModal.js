import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const formInfo = { 
        treatment: treatment.name,
        AppointmentDate:date,
        slot,
        patient:name,
        email, phone};
    console.log(formInfo);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={date}
              disabled
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot,i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="User name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="email address"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="phone"
              className="input input-bordered w-full "
            />
            <input
              className="btn bg-neutral text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
