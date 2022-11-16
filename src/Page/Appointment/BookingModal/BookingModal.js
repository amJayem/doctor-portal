import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {

  const { user } = useContext(AuthContext);
  console.log(user);
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

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(formInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        toast.success("Appointment booked")
        setTreatment(null);
      }
    })
    .catch(e=>console.error('booking error => ', e));

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
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
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
