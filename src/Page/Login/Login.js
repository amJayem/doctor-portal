import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
//   console.log(errors);

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-3xl text-center font-semibold my-5">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: 'Email Address is required', pattern: {value: /^\S+@\S+$/i, message: 'Email is invalid'} })}
              className="input input-bordered "
            />
            {errors.email && <p className=" my-2 text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered "
              {...register("password", {
                required: "Password is required",
                minLength: {value: 6, message: 'Password must be 6 characters or longer'}
              })}
            />
            
            {errors.password && <p className="text-error my-2">{errors.password?.message}</p>}

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
              New to doctors portal?
              <Link to="/signup" className="text-secondary">
                {" "}
                Create a new account
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

export default Login;
