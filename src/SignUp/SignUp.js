import React, { useContext } from "react";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { SignUpUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: {errors},} = useForm();

  const handleSignUp = (data) => {
    console.log(data);

    SignUpUser(data.email, data.password)
    .then(data => {
      console.log(data);
    })
    .catch(e=>console.error('Sign up error => ', e));

  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-3xl text-center font-semibold my-5">Signup</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                },
                pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i , message: "Password must be strong"},
                message: "Password must be 6 characters or longer",
              })}
            />
            {errors.password && (
              <p className="text-error my-2">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
          </div>
          <br />
          <input
            className="btn text-white w-full"
            type="submit"
            value="login"
          />
          <label className="label">
            <span className="label-text">
              Already have an account? 
              <Link to="/login" className="text-secondary"> Login
              </Link>
            </span>
          </label>
        </form>
        <div className="divider">OR</div>
        <input
          className="btn btn-outline w-full"
          type="submit"
          value="continue with google"
        />
      </div>
    </div>
  );
};

export default SignUp;
