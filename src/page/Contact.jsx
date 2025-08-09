import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  Mail, User, Phone, Key, Building,
  Facebook, Instagram, Linkedin, TwitterIcon
} from "lucide-react";

/* -------------------------
   Variants
   ------------------------- */
const pageVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } }
};

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const pop = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

/* -------------------------
   Input Component (animated)
   ------------------------- */
const Input = ({ Icon, type, name, variants = fadeUp }) => (
  <motion.div variants={variants} className="flex text-green-500 w-full ring-1 ring-green-400 p-2 rounded-md my-2 items-center">
    <Icon />
    <input
      className="focus:outline-none w-full bg-transparent px-2 text-white placeholder:text-green-400 placeholder:capitalize"
      placeholder={name}
      type={type}
      required
    />
  </motion.div>
);

/* -------------------------
   Contact Page
   ------------------------- */
const Contact = () => {
  const controls = useAnimation();
  const location = useLocation(); // ensures animation restarts when navigation key changes

  useEffect(() => {
    // Ensure starting from hidden then start visible so it always runs on navigation
    controls.set("hidden");
    // small timeout is optional but can prevent flicker in some setups
    // setTimeout(() => controls.start("visible"), 10);
    controls.start("visible");
  }, [controls, location.key]); // re-run when route location.key changes

  const form = [
    { name: "name", type: "text", icon: User },
    { name: "email", type: "email", icon: Mail },
    { name: "phone", type: "tel", icon: Phone },
    { name: "password", type: "password", icon: Key },
    { name: "company", type: "text", icon: Building }
  ];

  return (
    <>
      <Nav />

      <motion.div
        initial="hidden"
        animate={controls}
        variants={pageVariants}
        className="w-full h-auto py-20"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-center text-2xl sm:text-5xl text-white my-10"
        >
          Contact
        </motion.h1>

        {/* Contact info */}
        <motion.div
          variants={sectionContainer}
          className="mx-auto flex flex-col sm:flex-row gap-3 justify-evenly py-8 px-2 my-16"
        >
          <motion.div variants={sectionContainer} className="text-center italic flex flex-col gap-3">
            {[
              [Mail, "example@mail.com"],
              [Phone, "+@@ 123 456 789"],
              [Facebook, "https://www.facebook.com/....."]
            ].map(([Icon, text], i) => (
              <motion.h1 key={i} variants={fadeLeft} className="text-white flex items-center gap-3">
                <Icon />
                <span className="text-lg break-all">{text}</span>
              </motion.h1>
            ))}
          </motion.div>

          <motion.div variants={sectionContainer} className="text-center italic flex flex-col gap-3">
            {[
              [Linkedin, "https://www.linkedin.com/....."],
              [Instagram, "https://www.instagram.com/....."],
              [TwitterIcon, "https://www.twitter.com/....."]
            ].map(([Icon, text], i) => (
              <motion.h1 key={i} variants={fadeLeft} className="text-white flex items-center gap-3">
                <Icon />
                <span className="text-lg break-all">{text}</span>
              </motion.h1>
            ))}
          </motion.div>
        </motion.div>

        {/* Map + Form */}
        <motion.div variants={sectionContainer} className="flex flex-col sm:flex-row gap-4 px-4">
          {/* Map — wrapped so it follows stagger */}
          <motion.div variants={fadeUp} className="w-full sm:w-[50%] rounded-md overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32488.877249742294!2d-74.20543823353617!3d40.72413534715398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1754737209064!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-[320px] rounded-md border-0"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            variants={sectionContainer}
            action="#"
            method="post"
            className="w-full sm:w-[50%] h-auto rounded-md sm:px-5 mx-auto flex flex-col"
          >
            {form.map((data, index) => (
              <Input key={index} type={data.type} name={data.name} Icon={data.icon} variants={fadeUp} />
            ))}

            <motion.button
              type="submit"
              variants={pop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 p-2 rounded-md bg-green-500 hover:bg-green-600 cursor-pointer text-center text-white hover:text-green-300 w-full capitalize"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={sectionContainer} className="text-white overflow-hidden mt-10 w-full sm:w-2/12 mx-4 flex gap-5">
          {[Facebook, Instagram, Linkedin, TwitterIcon].map((Icon, i) => (
            <motion.div key={i} variants={pop} className="cursor-pointer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Contact;
