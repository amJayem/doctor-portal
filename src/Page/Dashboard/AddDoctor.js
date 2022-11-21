import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialty");
      const data = await res.json();
      return data;
    },
  });

  const navigate = useNavigate();

  const imgHostingKey=process.env.REACT_APP_imgbb_Key;

  if (isLoading) {
    return Loading();
  }

  const handleAddDoctor = (doctorInfo) => {
    // console.log(doctorInfo);

    const img = doctorInfo.img[0];
    const formData = new FormData();
    formData.append('image',img);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            const doctor = {
                name: doctorInfo.name,
                email: doctorInfo.email,
                specialty: doctorInfo.specialty,
                image: data.data.display_url,
            };
            // console.log(doctor);

            fetch(`http://localhost:5000/doctors`,{
                method: 'post',
                headers:{ 'content-type': 'application/json' },
                authorization: `bearer ${localStorage.getItem("token")}`,
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data => {
                // console.log(data,doctor.name);
                if(data.acknowledged){
                    toast.success(`Doctor added successfully`);
                    navigate('/dashboard/manage-doctors');
                }
            })
            .catch(e=>console.error('failed to post doctor => ', e));
        }
    })
    .catch(e=>console.error('img upload error => ',e))
  };

  return (
    <div className="w-4/5">
      <div className="flex justify-center items-center">
        <div className="w-96 p-7">
          <h1 className="text-4xl font-semibold my-5">
            Add a Doctor
          </h1>
          <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" },
                })}
                className="input input-bordered "
              />
              {errors.email && (
                <p className=" my-2 text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                className="input select select-bordered w-full max-w-xs"
                type="text"
                {...register("specialty")}
              >
                <option disabled>Please Select a Specialty</option>
                {specialties.map((specialty) => (
                  <option 
                  key={specialty._id} 
                  value={specialty.name}
                  >{specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Image is required",
                })}
                className="input"
              />
            </div>
            <br />
            <input
              className="btn text-white w-full"
              type="submit"
              value="add doctor"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
