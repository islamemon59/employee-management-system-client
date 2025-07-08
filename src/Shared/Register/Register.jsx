import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLoginButton from "../../Components/SocialLoginButton/SocialLoginButton";
import { uploadImage } from "../../Api/ImageUploadApi";
import { postEmployeeData } from "../../Api/PostEmployeeData";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPassword, setIsPassword] = useState(false);
  const { createUser } = useAuth();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    const image = await uploadImage(data?.photo[0]);

    createUser(data?.email, data?.password)
      .then(async (res) => {
        const employeeData = {
          bank_account_no: data.bank_account_no,
          designation: data.designation,
          email: data.email,
          password: data?.password,
          name: data.name,
          photo: image,
          role: data.role,
          salary: data.salary,
          status: "unVerified",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        console.log(employeeData);
        const result = await postEmployeeData(employeeData);
        console.log(result);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Register
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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

        <div className="relative">
          <input
            type={isPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: {
                hasCapital: (value) =>
                  /[A-Z]/.test(value) ||
                  "Must contain at least one capital letter",
                hasSpecial: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  "Must contain at least one special character",
              },
            })}
          ></input>
          {isPassword ? (
            <FaRegEyeSlash
              onClick={() => setIsPassword(!isPassword)}
              className="absolute bottom-3 right-3"
            />
          ) : (
            <FaEye
              onClick={() => setIsPassword(!isPassword)}
              className="absolute bottom-3 right-3"
            />
          )}

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <select
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="Employee">Employee</option>
            <option value="HR">HR</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <div>
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
            <p className="text-red-500 text-sm mt-1">
              {errors.designation.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Bank Account No"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("bank_account_no", {
              required: "Bank account number is required",
            })}
          />
          {errors.bank_account_no && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bank_account_no.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Salary"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("salary", { required: "Salary is required" })}
          />
          {errors.salary && (
            <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
          )}
        </div>

        <div>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-400 px-3 py-2 rounded"
            {...register("photo", { required: "Photo is required" })}
          />
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center">
        <SocialLoginButton />
      </div>
    </div>
  );
};

export default Register;
