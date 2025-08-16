import { FaUsers, FaChartLine } from "react-icons/fa";
import { FaBullseye, FaHandshake, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4 animate-fadeInDown">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300 animate-fadeIn">
            We are a leading provider of innovative employee management
            solutions, dedicated to empowering businesses and their people.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-transparent text-emerald-600 border border-emerald-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600 dark:text-gray-50">
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
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573817112851-ceea17e26dcb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Mission"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-emerald-600 dark:text-gray-50">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <FaGlobe className="text-5xl text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously evolve our platform to meet the dynamic needs of
                the modern workplace.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-5xl text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upholding the highest standards of honesty and transparency in
                all our interactions.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="text-5xl text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to delivering exceptional quality in our product and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
