import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdEmail, MdMessage, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ContactUs = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // POST to your backend route (example: /api/contact-messages)
      await axiosSecure.post("api/contact-messages", data);
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600">Contact Us</h2>
        <p className="mt-2">
          We'd love to hear your ideas, suggestions, or any feedback!
        </p>
      </div>

      {/* Address & Contact Info */}
      <div className="bg-gray-50 p-6 rounded-lg shadow text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <MdLocationOn className="text-emerald-500 text-xl" />
          <span>1234 Innovation Avenue, Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <MdEmail className="text-emerald-500 text-xl" />
          <span>contact@greenroots.com</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaPhoneAlt className="text-emerald-500 text-sm" />
          <span>+880 1234 567890</span>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 text-gray-600">Your Email</label>
          <div className="flex items-center border border-gray-300 rounded">
            <MdEmail className="ml-2 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="you@example.com"
              className="w-full px-3 py-2 focus:outline-none focus:border-emerald-500 rounded-r"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Your Message</label>
          <div className="flex items-start border border-gray-300 rounded">
            <MdMessage className="ml-2 mt-2 text-gray-400" />
            <textarea
              {...register("message", { required: true })}
              rows="4"
              placeholder="Write your message..."
              className="w-full px-3 py-2 focus:outline-none focus:border-emerald-500 rounded-r"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
