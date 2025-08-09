// import { motion } from "framer-motion";
// import { Leaf } from "lucide-react";

// const fadeInUp = {
//   initial: { y: 20, opacity: 0 },
//   whileInView: { y: 0, opacity: 1 },
//   transition: { duration: 0.4 }
// };

// const About = () => {
//   return (
//     <div className="pt-11 px-2">
//       <motion.h1
//         initial={{ y: 70, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="flex justify-start sm:justify-center items-center gap-2 text-white"
//       >
//         <Leaf className="hidden sm:block md:w-10 md:h-10 lg:h-12 lg:w-12" />
//         <span className="font-bold my-2 md:text-3xl lg:text-4xl">About</span>
//       </motion.h1>

//       <div className="flex flex-col sm:flex-row gap-5 sm:gap-2 items-start mt-12">
//         {/* Left Section */}
//         <div className="sm:w-1/2 h-auto sm:px-4">
//           <motion.h1
//             {...fadeInUp}
//             className="text-white mt-2 mb-4 lg:text-4xl lg:mt-7 text-center"
//           >
//             Who We Are?
//           </motion.h1>

//           <motion.p
//             {...fadeInUp}
//             className="text-white sm:text-xl pt-2 text-center"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi
//             deserunt similique doloribus ipsam sit.
//             <br />
//             <br />
//             Nam, reprehenderit quasi dolorum, esse facere ipsa velit ab
//             veritatis repellendus odit, earum mollitia! Nisi distinctio debitis
//             architecto, doloribus impedit minus illo unde ex atque, quod
//             numquam, reiciendis vitae exercitationem mollitia minima. Nisi
//             consequuntur expedita veritatis nam reiciendis. Repudiandae quam
//             facilis placeat fugiat eius! Praesentium eveniet voluptatum nam
//             commodi distinctio beatae quam, eaque repellat itaque sapiente
//             illum, cum ipsam sint facere. Dolor quod placeat repudiandae?
//           </motion.p>
//         </div>

//         {/* Right Section */}
//         <div className="sm:w-1/2 w-full h-full pb-2">
//           <div className="flex justify-between items-start gap-1 rounded-md mb-3">
//             <video
//               src="./video/large.mp4"
//               autoPlay
//               loop
//               playsInline
//               muted
//               className="w-[49%] rounded-xl"
//             />
//             <video
//               src="./video/large.mp4"
//               autoPlay
//               loop
//               playsInline
//               muted
//               className="w-[49%] rounded-xl"
//             />
//           </div>
//           <div className="w-full sm:h-[45vh] md:h-[50vh]">
//             <video
//               src="./video/people1.mp4"
//               autoPlay
//               loop
//               playsInline
//               muted
//               className="object-fill h-full w-full rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const fadeInSpring = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, type: "spring", stiffness: 120 }
};

const textStagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const About = () => {
  return (
    <div className="pt-11 px-2">
      {/* Title */}
      <motion.h1
        initial={{ y: -60, opacity: 0, rotate: -5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
        className="flex justify-start sm:justify-center items-center gap-2 text-white"
      >
        <Leaf className="hidden sm:block md:w-10 md:h-10 lg:h-12 lg:w-12" />
        <span className="font-bold my-2 md:text-3xl lg:text-4xl">About</span>
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-2 items-start mt-12">
        {/* Left Section */}
        <div className="sm:w-1/2 h-auto sm:px-4">
          <motion.h1
            {...fadeInSpring}
            className="text-white mt-2 mb-4 lg:text-4xl lg:mt-7 text-center"
          >
            Who We Are?
          </motion.h1>

          <motion.p
            {...textStagger}
            className="text-white sm:text-xl pt-2 text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi
            deserunt similique doloribus ipsam sit.
            <br />
            <br />
            Nam, reprehenderit quasi dolorum, esse facere ipsa velit ab
            veritatis repellendus odit, earum mollitia! Nisi distinctio debitis
            architecto, doloribus impedit minus illo unde ex atque, quod
            numquam, reiciendis vitae exercitationem mollitia minima. Nisi
            consequuntur expedita veritatis nam reiciendis. Repudiandae quam
            facilis placeat fugiat eius! Praesentium eveniet voluptatum nam
            commodi distinctio beatae quam, eaque repellat itaque sapiente
            illum, cum ipsam sint facere. Dolor quod placeat repudiandae?
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="sm:w-1/2 w-full h-full pb-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            className="flex justify-between items-start gap-1 rounded-md mb-3"
          >
            <motion.video
              variants={fadeInSpring}
              src="./video/about2.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-[49%] rounded-xl"
            />
            <motion.video
              variants={fadeInSpring}
              src="./video/about.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-[49%] rounded-xl"
            />
          </motion.div>

          <motion.div
            {...fadeInSpring}
            className="w-full sm:h-[45vh] md:h-[50vh]"
          >
            <video
              src="./video/people1.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="object-fill h-full w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

