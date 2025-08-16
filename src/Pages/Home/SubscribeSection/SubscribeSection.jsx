// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";
const SubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Subscribe successfully ");
  };
  return (
    <section className="">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-emerald-500 mb-4">
          Subscribe to Our Team
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Get the latest updates and offers delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <motion.button
            type="submit"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-5 py-3 rounded-full place-content-center"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
