import React from "react";
import { useForm } from "react-hook-form";
import SocialLoginButton from "../../Components/SocialLoginButton/SocialLoginButton";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Login now</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
        >
          Login
        </button>
      </form>
        <Link to="/register" className="font-semibold text-sm mt-1">Don't have an account <span className="text-indigo-700 hover:border-b-1 cursor-pointer">Register</span></Link>

      <SocialLoginButton
      ></SocialLoginButton>
    </div>
  );
};

export default Login;
