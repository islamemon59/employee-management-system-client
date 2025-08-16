// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const SubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0], // up and down
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-extrabold text-emerald-500 mb-4"
          variants={floatingVariants}
          animate="animate"
        >
          Subscribe to Our Team
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-8"
          variants={itemVariants}
        >
          Get the latest updates and offers delivered straight to your inbox.
        </motion.p>

        <motion.form
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-5 py-3 rounded-full place-content-center"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default SubscribeSection;
