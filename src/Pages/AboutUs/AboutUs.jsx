import { FaUsers, FaChartLine, FaBullseye, FaHandshake, FaGlobe } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = () => {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        className="py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4"
          custom={1}
          variants={fadeInUp}
        >
          About Our Company
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300"
          custom={2}
          variants={fadeInUp}
        >
          We are a leading provider of innovative employee management
          solutions, dedicated to empowering businesses and their people.
        </motion.p>
        <motion.div className="flex justify-center space-x-4" custom={3} variants={fadeInUp}>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-transparent text-emerald-600 border border-emerald-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} custom={1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To streamline the complexities of workforce management with
              technology that's both powerful and intuitive, allowing
              companies to focus on what matters most: their growth and their
              people.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <FaBullseye className="text-emerald-600 text-3xl" />
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Focused on results and efficiency.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHandshake className="text-emerald-600 text-3xl" />
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Building strong, collaborative teams.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} custom={2} className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1573817112851-ceea17e26dcb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Mission"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-emerald-600"
          variants={fadeInUp}
          custom={1}
        >
          Our Core Values
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: FaGlobe,
            title: "Innovation",
            desc: "We continuously evolve our platform to meet the dynamic needs of the modern workplace."
          },{
            icon: FaUsers,
            title: "Integrity",
            desc: "Upholding the highest standards of honesty and transparency in all our interactions."
          },{
            icon: FaChartLine,
            title: "Excellence",
            desc: "Committed to delivering exceptional quality in our product and services."
          }].map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                custom={i}
              >
                <Icon className="text-5xl text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
