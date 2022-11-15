import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { SignInUser } = useContext(AuthContext);
  const [LoginError, setLoginError] = useState('');
  const { register, handleSubmit, formState: { errors },} = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.from?.pathname || '/';
  
  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');

    SignInUser (data.email, data.password) 
    .then(data => {
      console.log(data);
      navigate(from, {replace: true});
    })
    .catch(e=>{
      console.error('log in error => ',e);
      setLoginError(e.message);
    })
  };
  console.log(errors);

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
                required: "Password is required"
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
          {LoginError &&
            <p className="text-error">{LoginError}</p>
          }
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
