import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Tilt from "react-parallax-tilt";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const data = [
    { title: "Be world-class", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." },
    { title: "Share everything you know", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." },
    { title: "Always learning", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." },
    { title: "Be supportive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." },
    { title: "Take responsibility", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." },
    { title: "Enjoy downtime", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet." }
  ];

  const people = [
    { name: "Leslie Alexander", role: "Co-Founder / CEO", imageUrl: "./image/team.avif" },
    { name: "Michael Foster", role: "Co-Founder / CTO", imageUrl: "./image/team2.avif" },
    { name: "Dries Vincent", role: "Business Relations", imageUrl: "./image/team3.avif" },
    { name: "Tom Cook", role: "Director of Product", imageUrl: "./image/team4.avif" },
    { name: "Whitney Francis", role: "Copywriter", imageUrl: "./image/team5.avif" },
    { name: "Leonard Krasner", role: "Senior Designer", imageUrl: "./image/team6.avif" },
    { name: "Floyd Miles", role: "Principal Designer", imageUrl: "./image/team7.avif" },
    { name: "Emily Selman", role: "VP, User Experience", imageUrl: "./image/team8.avif" },
    { name: "Kristin Watson", role: "VP, Human Resources", imageUrl: "./image/team9.avif" },
    { name: "Emma Dorsey", role: "Senior Developer", imageUrl: "./image/team10.avif" },
    { name: "Alicia Bell", role: "Junior Copywriter", imageUrl: "./image/team11.avif" },
    { name: "Lindsay Walton", role: "Front-end Developer", imageUrl: "./image/team12.avif" }
  ];

  return (
    <motion.div
      className="pt-20 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav />

      <div className="w-full h-auto px-2 sm:px-4">
        <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl text-white my-2 mb-3">
          About Us
        </motion.h1>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
          <motion.img variants={fadeLeft} src="./image/about.avif" className="w-full sm:w-6/12 rounded-md" />
          <motion.p variants={fadeRight} className="text-white w-full sm:w-6/12 sm:px-5 mt-3 sm:text-xl">
            <span className="text-2xl mb-2 block capitalize">our journey story.</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor enim voluptate itaque quae? Nobis voluptatem porro tenetur et voluptas, aliquam ratione amet culpa quas, animi repellat tempora molestias, quam dignissimos modi ipsum. Reprehenderit voluptas veritatis blanditiis molestias illo obcaecati, quibusdam voluptatibus, quae minima at optio doloremque sunt libero ullam quo deleniti? Ab, delectus totam enim fugit maiores vitae error, sit temporibus ea laboriosam dolorem quidem accusamus, eligendi cupiditate. Vero fugit deserunt dolore asperiores natus, eius qui, in error iste.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 px-2 sm:h-96">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
          <motion.p variants={fadeLeft} className="text-white sm:text-xl w-full sm:w-6/12 sm:px-3 order-2 sm:order-1 mt-3">
            <span className="text-2xl sm:text-4xl mb-2 block capitalize">our mission</span>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor enim voluptate itaque quae? Nobis voluptatem porro tenetur et voluptas, aliquam ratione amet culpa quas, animi repellat tempora molestias, quam dignissimos modi ipsum. Reprehenderit voluptas veritatis blanditiis molestias illo obcaecati, quibusdam voluptatibus, quae minima at optio doloremque sunt libero ullam quo deleniti? Ab, delectus totam enim fugit maiores vitae error, sit temporibus ea laboriosam dolorem quidem accusamus, eligendi cupiditate. Vero fugit deserunt dolore asperiores natus, eius qui, in error iste.
          </motion.p>
          <motion.img variants={fadeRight} src="./image/about2.jpg" className="w-full sm:w-6/12 sm:h-[60vh] rounded-md order-1 sm:order-2" />
        </div>
      </div>

      <div className="sm:px-5 px-2 my-20">
        <motion.h1 variants={fadeUp} className="text-white text-2xl sm:text-3xl md:text-4xl mt-6">
          Our values
        </motion.h1>
        <motion.p variants={fadeUp} className="text-white pt-2 sm:text-lg sm:w-[50%]">
          Lorem ipsum dolor sit amet consect adipisicing elit...
        </motion.p>
        <div className="flex flex-wrap justify-between items-center gap-4 mt-9 sm:mt-12 text-white">
          {data.map((item, index) => (
            <motion.div key={index} variants={fadeUp} className="w-full sm:w-[30%]">
              <motion.h3 className="text-lg font-semibold text-zinc-300 my-1">{item.title}</motion.h3>
              <p className="italic text-slate-300 sm:text-xl">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.h1 variants={fadeUp} className="text-center text-2xl sm:text-4xl my-20 text-white">
        Our Full Team
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-4 mb-20">
        {people.map((person, index) => (
          <Tilt key={index}>
            <motion.div
              variants={fadeUp}
              className="w-full h-auto text-white ring-1 rounded-md p-2 bg-gradient-to-tl from-[#15803d] via-[#115e59] to-[#164e63]"
            >
              <img src={person.imageUrl} className="w-24 h-24 rounded-full mx-auto my-5 shadow-2xl" />
              <div className="mx-auto text-center my-7">
                <motion.h1>{person.name}</motion.h1>
                <motion.h1>{person.role}</motion.h1>
              </div>
              <div className="w-24 flex justify-between items-center">
                <Facebook />
                <Instagram />
                <Linkedin />
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <div className="w-full h-auto my-24 px-2 text-white">
        <motion.h1 variants={fadeUp} className="text-2xl sm:text-4xl w-full sm:w-[50%]">
          We’re a passionate group of people building the future of ecommerce
        </motion.h1>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between gap-3 my-7">
          <p className="italic text-slate-300 py-3 sm:text-2xl sm:px-2">
            Anim aute id magna aliqua Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet.
            <br />
            adipisicing elit. Nobis reiciendis, velit nam voluptate ipsum dolores ea? Reiciendis accusamus corporis quas recusandae laborum debitis! Assumenda voluptate nobis voluptatum dolorem, quidem rerum quis non tenetur. Error dolores, laboriosam voluptatem tenetur ducimus eveniet.
          </p>
          <img src="./image/about3.avif" className="w-full sm:w-[50%] rounded-md" />
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default About;
