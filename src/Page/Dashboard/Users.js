import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers:{
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
            toast.success("Set as Admin");
            refetch();
        }
      })
      .catch((e) => console.error("set admin error => ", e));
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-semibold my-5">All Users</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td onClick={() => handleAdmin(user._id)}>
                {user?.role !== "admin" && (
                  <button className="btn btn-warning ">Set admin</button>
                )}
              </td>
              <td>
                <button className="btn btn-error text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
