import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLoginButton from "../../Components/SocialLoginButton/SocialLoginButton";
import { uploadImage } from "../../Api/ImageUploadApi";
import { postEmployeeData } from "../../Api/PostEmployeeData";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isPassword, setIsPassword] = useState(false);
  const { createUser, loading, setLoading, updateUserProfile, user, setUser } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  if(loading) return <Loader/>

  const onSubmit = async (data) => {
    try {
      const image = await uploadImage(data?.photo[0]);
      await createUser(data?.email, data?.password);
      await updateUserProfile(data.name, image);

      Swal.fire({
        title: "Registration Successful",
        icon: "success",
        draggable: true,
      });
      navigate(from);

      setUser({
        ...user,
        displayName: data?.name,
        photoURL: image,
        email: data?.email,
      });

      const employeeData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        designation: data.designation,
        bank_account_no: data.bank_account_no,
        salary: data.salary,
        photo: image,
        status: data.role === "HR" ? "verified" : "unverified",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      await postEmployeeData(employeeData);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Register
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type={isPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
              validate: {
                hasCapital: (v) =>
                  /[A-Z]/.test(v) || "Must include one capital letter",
                hasSpecial: (v) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
                  "Must include one special character",
              },
            })}
          />
          {isPassword ? (
            <FaRegEyeSlash
              onClick={() => setIsPassword(!isPassword)}
              className="absolute bottom-3 right-3 cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={() => setIsPassword(!isPassword)}
              className="absolute bottom-3 right-3 cursor-pointer"
            />
          )}
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 text-sm font-medium">Role</label>
          <select
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="Employee">Employee</option>
            <option value="HR">HR</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="block mb-1 text-sm font-medium">Designation</label>
          <select
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("designation", {
              required: "Designation is required",
            })}
          >
            <option value="">Select Designation</option>
            <option value="Sales Assistant">Sales Assistant</option>
            <option value="Social Media Executive">
              Social Media Executive
            </option>
            <option value="Digital Marketer">Digital Marketer</option>
          </select>
          {errors.designation && (
            <p className="text-red-500 text-xs mt-1">
              {errors.designation.message}
            </p>
          )}
        </div>

        {/* Bank Account No */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Bank Account No
          </label>
          <input
            type="number"
            placeholder="Bank Account No"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("bank_account_no", {
              required: "Bank account number is required",
            })}
          />
          {errors.bank_account_no && (
            <p className="text-red-500 text-xs mt-1">
              {errors.bank_account_no.message}
            </p>
          )}
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 text-sm font-medium">Salary</label>
          <input
            type="number"
            placeholder="Salary"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("salary", { required: "Salary is required" })}
          />
          {errors.salary && (
            <p className="text-red-500 text-xs mt-1">{errors.salary.message}</p>
          )}
        </div>

        {/* Photo (full width on mobile) */}
        <div>
          <label className="block mb-1 text-sm font-medium">Photo</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("photo", { required: "Photo is required" })}
          />
          {errors.photo && (
            <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
          )}
        </div>

        {/* Submit (full width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
          >
            Register
          </button>
        </div>
      </form>

      <Link
        to="/login"
        className="block text-center font-semibold text-sm mt-3"
      >
        Already have an account?{" "}
        <span className="text-indigo-700 hover:underline">Login</span>
      </Link>

      <div className="mt-6 text-center">
        <SocialLoginButton />
      </div>
    </div>
  );
};

export default Register;
