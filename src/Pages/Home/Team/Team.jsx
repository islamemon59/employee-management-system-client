import React from "react";

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500">Meet Our Team</h2>
        <p className="text-gray-600">
          We’re a small group of passionate developers, designers & thinkers,
          working together to bring you the best service.
        </p>
        <p className="text-gray-500">
          Each member brings unique skills to build amazing user experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="rounded-lg shadow"
        />
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          className="rounded-lg shadow"
        />
        <img
          src="https://randomuser.me/api/portraits/men/54.jpg"
          className="rounded-lg shadow"
        />
        <img
          src="https://randomuser.me/api/portraits/women/22.jpg"
          className="rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default Team;
