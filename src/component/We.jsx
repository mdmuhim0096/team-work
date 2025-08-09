
import { useState } from 'react';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { DollarSign, ArrowLeft, ArrowRight } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 120 }
  })
};

const textFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
};

const We = () => {
  const box = [
    {
      title: "250k",
      subTitle: "Users on the platform",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi, non quia voluptatum aliquam fuga libero repudiandae tempora consequuntur voluptates sint, quos natus."
    },
    {
      title: "$8.9 billion",
      subTitle: "Over $8B earned by our customers — and counting.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi, non quia voluptatum aliquam fuga libero repudiandae tempora consequuntur voluptates sint, quos natus."
    },
    {
      title: "401,093",
      subTitle: "Transactions this year",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi, non quia voluptatum aliquam fuga libero repudiandae tempora consequuntur voluptates sint, quos natus."
    }
  ];

  const people = [
    { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: './image/team8.avif' },
    { name: 'Michael Foster', role: 'Co-Founder / CTO', imageUrl: './image/team5.avif' },
    { name: 'Dries Vincent', role: 'Business Relations', imageUrl: './image/team7.avif' },
    { name: 'Tom Cook', role: 'Director of Product', imageUrl: './image/team3.avif' },
  ];

  const company = [
    "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
  ];

  const [sliderIndex, setSliderIndex] = useState(0);

  const slideLeft = () => sliderIndex > 0 && setSliderIndex((prev) => prev - 1);
  const slideRight = () => sliderIndex < people.length - 1 && setSliderIndex((prev) => prev + 1);

  return (
    <div className='mt-20'>
      {/* Heading */}
      <motion.h1
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className='text-2xl w-full text-center sm:text-5xl font-semibold px-2 sm:w-[60%] text-white sm:text-left'
      >
        We approach work as a place to make the world better
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-lg font-semibold px-2 text-center sm:w-[50%] text-white my-4 sm:text-left pt-2'
      >
        Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu.
      </motion.p>

      {/* Stat Cards */}
      <div className='flex justify-center items-end flex-wrap gap-6 pt-20 px-2'>
        {box.map((data, index) => (
          <Tilt key={index}>
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              custom={index}
              className='w-[100%] sm:w-80 h-80 bg-gradient-to-br from-green-600 via-emerald-800 to-cyan-700 rounded-md p-4 text-white shadow-lg'
            >
              <motion.h1
                variants={textFade}
                custom={0}
                className='text-emerald-300 font-semibold text-2xl flex justify-between'
              >
                <span>{data.title}</span>
                <DollarSign />
              </motion.h1>

              <motion.h4
                variants={textFade}
                custom={1}
                className='my-5 text-xl text-center'
              >
                {data.subTitle}
              </motion.h4>

              <motion.p
                variants={textFade}
                custom={2}
                className='mt-11 text-center'
              >
                {data.text}
              </motion.p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Leadership */}
      <div className="pt-24 sm:pt-32 px-4 w-full mt-10">
        <div className="mx-auto flex flex-col sm:flex-row gap-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:w-[50%]"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg text-white sm:w-[70%]">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className='w-full sm:w-[60%] md:w-[50%] h-[50vh] rounded-md relative mt-7 overflow-hidden'
          >
            <div className='absolute inset-0 flex justify-between items-center z-40 px-4'>
              <ArrowLeft className='text-white cursor-pointer' onClick={slideLeft} />
              <ArrowRight className='text-white cursor-pointer' onClick={slideRight} />
            </div>
            <motion.div
              key={sliderIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0 flex flex-col lg:flex-row justify-evenly items-center'
            >
              <img src={people[sliderIndex].imageUrl} className='w-40 h-40 rounded-full shadow-lg' />
              <div className='text-center text-white'>
                <h1 className="font-bold">{people[sliderIndex].name}</h1>
                <h2>{people[sliderIndex].role}</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="py-24 sm:py-32 overflow-hidden my-20">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl text-center my-5 sm:mb-8 md:mb-16">
          Trusted by the world’s most innovative teams
        </h2>
        <marquee className="my-10">
          {company.map((data, index) => (
            <img key={index} src={data} className='h-12 sm:h-20 inline-block mx-6' />
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default We;
