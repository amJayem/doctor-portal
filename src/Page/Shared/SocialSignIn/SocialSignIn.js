import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const SocialSignIn = () => {
  const { SocialSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.from?.pathname || "/";

  const providerGoogle = new GoogleAuthProvider();

  const handleGoogle = () => {
    SocialSignIn(providerGoogle)
      .then(()=>{
        navigate(from, {replace:true});
      })
      .catch((e) => {
        console.log("Google sign in error => ", e);
      });
  };
  return (
    <div>
      <input
        onClick={handleGoogle}
        className="btn btn-outline w-full"
        type="submit"
        value="continue with google"
      />
    </div>
  );
};

export default SocialSignIn;
