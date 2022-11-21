import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url,{
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
        }
      });
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl my-5">My Appointment</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {bookings?.map((booking,i) => (
              <tr key={i}>
                <th>{i+1}</th>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.treatment}</td>
                <td>{booking.AppointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking.price &&
                    <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-primary text-white">Pay ${booking.price}</Link>}
                    {
                      booking.price && booking.paid &&
                      <span className="text-success">PAID</span>
                    }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
