import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    title: "HR Executive",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "This platform makes employee management and payroll super simple and efficient!",
  },
  {
    id: 2,
    name: "Jahid Hasan",
    title: "Employee",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    feedback: "Submitting my daily tasks has never been this easy. Love it!",
  },
  {
    id: 3,
    name: "Shamima Rahman",
    title: "Admin",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Managing teams, adjusting salaries, and tracking progress is so smooth here.",
  },
  {
    id: 4,
    name: "Imran Kabir",
    title: "Developer",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback: "The interface is modern and fast — saves me hours every week!",
  },
  {
    id: 5,
    name: "Farzana Akter",
    title: "Team Leader",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    feedback: "Love how everything from tasks to payments is in one place.",
  },
  {
    id: 6,
    name: "Tanvir Alam",
    title: "Finance Manager",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "Payroll management is now effortless, and reports are crystal clear.",
  },
  {
    id: 7,
    name: "Nasrin Sultana",
    title: "Project Coordinator",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    feedback: "Team communication improved so much after using this platform.",
  },
  {
    id: 8,
    name: "Mahmud Hossain",
    title: "Senior Developer",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    feedback: "I love the clean dashboard and easy task tracking tools.",
  },
  {
    id: 9,
    name: "Lubna Chowdhury",
    title: "Marketing Lead",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    feedback: "It helped our marketing team coordinate campaigns smoothly.",
  },
  {
    id: 10,
    name: "Abdullah Khan",
    title: "QA Specialist",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "The detailed reports make testing and quality control much easier.",
  },
  {
    id: 11,
    name: "Mousumi Akter",
    title: "Customer Support",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    feedback: "I can easily log and track customer queries every day.",
  },
  {
    id: 12,
    name: "Raihan Uddin",
    title: "Business Analyst",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    feedback:
      "Great insights from the analytics help us make data-driven decisions.",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500 mb-6">
          What Our Users Say
        </h2>
        <Swiper
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          loop={true}
          className="py-6"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center h-[250px]">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-black mb-3 max-w-2xl">
                  {testimonial.feedback}
                </p>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <span className="text-sm text-black">
                  {testimonial.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
