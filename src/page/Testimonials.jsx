import React from "react";
import { motion } from "framer-motion";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Tilt from "react-parallax-tilt";

const testimonialsMain = {
  name: "Alice Johnson",
  role: "Founder & CEO, BrightFuture",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  quote:
    "Since partnering with this team, our company culture has transformed. Their dedication and innovation truly inspire us every day.",
};

const testimonialsGrid = [
  {
    id: 1,
    name: "James Carter",
    role: "Marketing Lead, RocketBiz",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The results we achieved together were beyond expectations — our revenue doubled within six months!",
    style: "bg-indigo-50 border-indigo-400",
  },
  {
    id: 2,
    name: "Maria Gonzales",
    role: "UX Designer, Creative Labs",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    quote:
      "A truly seamless collaboration. Their insight and execution were top-notch from start to finish.",
    style: "bg-pink-50 border-pink-400",
  },
  {
    id: 3,
    name: "Ethan Lee",
    role: "CTO, CloudNet",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    quote:
      "They took our vision and turned it into reality with stunning precision and technical expertise.",
    style: "bg-green-50 border-green-400",
  },
  {
    id: 4,
    name: "Sophia Patel",
    role: "Product Manager, InnovateX",
    photo: "https://randomuser.me/api/portraits/women/71.jpg",
    quote:
      "Every detail was carefully crafted, and the user experience improved drastically after launch.",
    style: "bg-yellow-50 border-yellow-400",
  },
];

const carouselTestimonials = [
  {
    id: 1,
    name: "Oliver Smith",
    role: "CEO, Fintech Co",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Their strategic guidance propelled our product to new heights faster than we imagined.",
  },
  {
    id: 2,
    name: "Emma Brown",
    role: "Lead Developer, WebWorks",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    quote:
      "An amazing team that delivers consistent quality and is always eager to help.",
  },
  {
    id: 3,
    name: "Liam Johnson",
    role: "Founder, StartSmart",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    quote:
      "Their support and expertise made our startup journey a smooth and exciting adventure.",
  },
  {
    id: 4,
    name: "Ava Martinez",
    role: "COO, BrightPath",
    photo: "https://randomuser.me/api/portraits/women/34.jpg",
    quote:
      "We felt truly heard and understood, which made all the difference in the project outcome.",
  },
];

const bgQuoteTestimonials = [
  {
    id: 1,
    name: "Noah Wilson",
    role: "HR Manager, PeopleFirst",
    quote:
      "Their team created an environment of trust and innovation that boosted employee morale significantly.",
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Isabella Davis",
    role: "Creative Director, Artify",
    quote:
      "Working with them felt like a partnership; they deeply cared about our brand identity.",
    bg: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1470&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};


export default function LargeTestimonials() {
  return (
    <main className=" text-gray-800 select-none overflow-x-hidden">
      <Nav />
      {/* Hero Testimonial */}
      <section className="relative text-white py-28 px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center gap-12 sm:pt-52 overflow-hidden">
        <motion.img
          src={testimonialsMain.photo}
          alt={testimonialsMain.name}
          className="w-48 h-48 rounded-full border-4 border-white shadow-lg flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            {testimonialsMain.name}
          </h1>
          <h3 className="text-xl font-semibold mb-4 opacity-80">
            {testimonialsMain.role}
          </h3>
          <p className="text-lg italic leading-relaxed tracking-wide max-w-lg">
            “{testimonialsMain.quote}”
          </p>
        </motion.div>
      </section>

      {/* Grid Testimonials with Different Styles */}
      <section className="px-4 py-32 sm:px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-20 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Trusted by Professionals Across Industries
        </motion.h2>

        <div className="grid sm:grid-cols-4 gap-6">
          {testimonialsGrid.map(({ id, name, role, photo, quote, style }, index) => (
            <Tilt key={index}>
              <motion.div
                className={`w-full flex flex-col items-center p-3 rounded-md bg-gradient-to-tr from-zinc-600 via-zinc-800 to-zinc-950 text-white ring-2 ring-green-500`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-28 h-28 rounded-full mb-6 object-fill shadow-md"
                />
                <p className="italic mb-4">“{quote}”</p>
                <div className="w-full">
                  <p className="font-semibold text-lg">{name}</p>
                  <p className="">{role}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Carousel Style Testimonials */}
      <section className="py-20">
        <motion.h2
           className="text-4xl font-semibold mb-20 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          What Our Partners Say
        </motion.h2>

        <div className="px-4">
          <motion.div
            className="grid sm:grid-cols-4 gap-6"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {carouselTestimonials.map(({ id, name, role, photo, quote }) => (
              <motion.div
                key={id}
                className="w-full max-w-sm bg-indigo-50 rounded-md ring-2 ring-blue-600 shadow-lg p-4 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-indigo-300 shadow-md"
                />
                <p className="italic text-indigo-900 mb-5">“{quote}”</p>
                <p className="font-semibold text-lg text-indigo-900">{name}</p>
                <p className="text-indigo-700">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Background Quote Sections */}
      <section className="relative my-10 px-4">
        {bgQuoteTestimonials.map(({ id, name, role, quote, bg }) => (
          <motion.div
            key={id}
            className="relative h-96 flex items-center justify-center text-center px-10 md:px-40 mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-50 rounded-xl"
              style={{ backgroundImage: `url(${bg})` }}
            />
            <div className="relative z-10 max-w-4xl text-white">
              <p className="text-xl md:text-4xl italic leading-relaxed mb-8 drop-shadow-lg">
                “{quote}”
              </p>
              <p className="font-bold text-xl md:text-2xl drop-shadow-lg">{name}</p>
              <p className="opacity-90">{role}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-tl text-white py-20 px-8 md:px-20 text-center rounded-t-3xl shadow-xl max-w-5xl mx-auto mb-20">
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join thousands of happy clients today
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Experience unparalleled quality and customer service that puts you first.
          Let’s create success together.
        </motion.p>
        <motion.button
          className="bg-pink-500 hover:bg-pink-600 px-12 py-4 rounded-full font-semibold text-xl shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.button>
      </section>
      <Footer />
    </main>
  );
}
