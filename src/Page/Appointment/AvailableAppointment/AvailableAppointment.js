import React, { useState } from "react";
import { format } from "date-fns";
import AvailableAppointmentOption from "./AvailableAppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {

  const [treatment, setTreatment] = useState(null);
  
  const {data : appointmentOptions = [] } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/appointmentOptions');
      const data = await res.json();
      return data
    }  
  })
  
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  
  // useEffect(() => {
  //   fetch("appointmentOptions.json")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <section className="my-16">
      <p className="text-secondary font-bold text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AvailableAppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AvailableAppointmentOption>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            selectedDate={selectedDate}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
