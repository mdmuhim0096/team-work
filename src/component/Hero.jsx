
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative w-full h-screen before:w-full before:h-full before:z-10 before:bg-black/55 before:top-0 before:left-0 before:absolute"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-[100%]">
        <video src="./video/large.mp4" className="h-full w-full object-fill" autoPlay loop playsInline muted />
      </div>
      <div className="w-full h-full absolute z-10 top-0 left-0 flex items-center flex-col justify-center gap-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl text-white text-center px-1 font-semibold sm:text-5xl sm:px-20 md:px-28 md:text-6xl"
        >
          We’re changing the way people connect
        </motion.h1>

        <motion.hr
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 400 }}
          className="bg-white border w-[70%] my-2"
        />

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-center px-2 sm:px-11 sm:text-xl md:px-16 lg:px-36 lg:text-2xl"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </motion.p>

        <motion.div className="flex justify-between items-center w-52 mt-8">
          <motion.button
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 400 }}
            whileTap={{ scale: 1.1 }}
            className="text-white py-1 px-2 rounded-md bg-violet-700"
          >
            Get started
          </motion.button>

          <motion.button
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 400 }}
            whileTap={{ scale: 1.1 }}
            className="text-white py-1 px-2 border rounded-md"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
