import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdEmail, MdMessage, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTitle from "../../Hooks/useTitle";

const ContactUs = () => {
  useTitle("Contact Us - StaffHub");
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    data.createdAt = new Date().toISOString();
    try {
      await axiosSecure.post("api/contact-messages", data);
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-10 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.div className="text-center" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          Contact Us
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-400">
          We'd love to hear your ideas, suggestions, or any feedback!
        </p>
      </motion.div>

      {/* Address & Contact Info */}
      <motion.div
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow text-center space-y-2"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
          <MdLocationOn className="text-emerald-500 text-xl" />
          <span>1234 Innovation Avenue, Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
          <MdEmail className="text-emerald-500 text-xl" />
          <span>contact@greenroots.com</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
          <FaPhoneAlt className="text-emerald-500 text-sm" />
          <span>+880 1234 567890</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <label className="block mb-1 text-gray-600 dark:text-gray-300">
            Your Email
          </label>
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
            <MdEmail className="ml-2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-emerald-500 rounded-r"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block mb-1 text-gray-600 dark:text-gray-300">
            Your Message
          </label>
          <div className="flex items-start border border-gray-300 dark:border-gray-700 rounded">
            <MdMessage className="ml-2 mt-2 text-gray-400 dark:text-gray-500" />
            <textarea
              {...register("message", { required: true })}
              rows="4"
              placeholder="Write your message..."
              className="w-full px-3 py-2 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-emerald-500 rounded-r"
            ></textarea>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded transition"
          variants={itemVariants}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
