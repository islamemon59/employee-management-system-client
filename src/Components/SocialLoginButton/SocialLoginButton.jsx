import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLoginButton = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Google login clicked");
  };
  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full border border-gray-400 py-2 rounded hover:bg-gray-100"
      >
        <FcGoogle className="text-xl mr-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLoginButton;
