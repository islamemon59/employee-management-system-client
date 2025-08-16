import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Rise of AI in Creative Industries",
      snippet:
        "An exploration into how artificial intelligence is transforming art, music, and design...",
      author: "Alex Johnson",
      date: "September 1, 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEToqPaNvgCSirb63LSOYMpMIW1MtLT1GUuw&s",
      authorImage:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D",
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Node.js",
      snippet:
        "A practical guide to designing and implementing a microservices architecture...",
      author: "Maria Sanchez",
      date: "August 28, 2025",
      image:
        "https://images.ctfassets.net/hspc7zpa5cvq/6szXHVXaOaCxZD2ORnZ0FY/73f0df8b11694cc3274d9483a99e7f11/Microservices_Diagram.jpg",
      authorImage:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D",
    },
    {
      id: 3,
      title: "Optimizing Your React App for Performance",
      snippet:
        "Discover key techniques and tools to make your React applications faster and more efficient...",
      author: "David Chen",
      date: "August 20, 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtt71QDLsmXx_V6Eg3CTpBq_it230WnKvtw&s",
      authorImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8MnwwfHx8Mg%3D%3D",
    },
    {
      id: 4,
      title: "Introduction to Quantum Computing",
      snippet:
        "A beginner's guide to the fascinating world of quantum mechanics and its computational power...",
      author: "Emily White",
      date: "August 15, 2025",
      image:
        "https://blog.tipranks.com/wp-content/uploads/2025/05/shutterstock_2340550239-750x406.jpg",
      authorImage:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      title: "The Future of Smart Cities",
      snippet:
        "How IoT and advanced data analytics are shaping the urban landscapes of tomorrow...",
      author: "Robert Evans",
      date: "August 10, 2025",
      image:
        "https://www.datasciencecentral.com/wp-content/uploads/2022/05/smart-city-1-1024x683.jpg",
      authorImage:
        "https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      title: "A Designer's Guide to Typography",
      snippet:
        "Understanding the art and science of typefaces to create beautiful, readable designs...",
      author: "Sarah Brown",
      date: "August 5, 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3KoRMOio6jRbCd98P2WQQu0XZZ8ehz6MKw&s",
      authorImage:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-white sm:text-5xl">
            Latest Articles
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Stay up-to-date with our insights on technology, design, and more.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group flex flex-col rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-56 w-full object-cover rounded-t-xl"
                  src={article.image}
                  alt={article.title}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/5c646b/ffffff?text=Image+Missing";
                  }}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {article.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
                      {article.snippet}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{article.author}</span>
                    <img
                      className="h-10 w-10 rounded-full border-2 border-emerald-500 object-cover"
                      src={article.authorImage}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {article.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
