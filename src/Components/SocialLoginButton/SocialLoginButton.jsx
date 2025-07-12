import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { postEmployeeData } from "../../Api/PostEmployeeData";
import Swal from "sweetalert2";
import Loader from "../../Shared/Loader/Loader";

const SocialLoginButton = () => {
  const { signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  if (loading) return <Loader />;

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      const user = res.user;

      const employeeData = {
        bank_account_no: 101010101010101,
        designation: "Sales Assistant",
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
        role: "Employee",
        salary: 1000000,
        status: "unverified",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      await postEmployeeData(employeeData, user?.accessToken);

      navigate(from);

      Swal.fire({
        title: "Registration Successful",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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
