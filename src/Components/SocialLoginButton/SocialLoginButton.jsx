import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { postEmployeeData } from "../../Api/PostEmployeeData";

const SocialLoginButton = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (res) => {
        const data = res.user;

        const employeeData = {
          bank_account_no: 101010101010101,
          designation: "Sales Assistant",
          email: data?.email,
          name: data?.displayName,
          photo: data?.photoURL,
          role: "employee",
          salary: 1000000,
          status: "unVerified",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const result = await postEmployeeData(employeeData);
        console.log(result);
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
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
