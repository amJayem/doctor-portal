import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: { authorization: `bearer ${localStorage.getItem("token")}` },
      });
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return Loading();
  }

  //   const handleDelete = (doctorInfo) => {
  //     console.log(doctorInfo);
  //   };

  const handleDelete = (doctorInfo) => {
    const { _id } = doctorInfo;
    // console.log(doctorInfo);

    fetch(`http://localhost:5000/doctors/${_id}`, {
      method: "delete",
      headers: { authorization: `bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.error("Deleted successfully");
          setDeleteDoctor(null);
          refetch();
        }
      })
      .catch((e) => console.error("delete error => ", e));
  };

  return (
    <div>
      <h3 className="text-4xl my-5">Manage Doctors: {doctors?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.image} alt={`${doctor.name}`} />
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    //   onClick={() => handleDelete(doctor._id, doctor.name)}
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you want to delete, ${deleteDoctor.name}`}
          message={`If you delete ${deleteDoctor.name}, can't recover`}
          successAction={handleDelete}
          modalData={deleteDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
