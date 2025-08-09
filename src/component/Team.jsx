import { motion } from "framer-motion";
import { Users, Facebook, Instagram, Linkedin } from "lucide-react";
import Tilt from "react-parallax-tilt";

const Team = () => {

    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                './image/team8.avif',
        },
        {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                './image/team4.avif',
        },
        {
            name: 'Dries Vincent',
            role: 'Business Relations',
            imageUrl:
                './image/team7.avif',
        },
        {
            name: 'Tom Cook',
            role: 'Director of Product',
            imageUrl:
                './image/team2.avif',
        },
    ]

    return (
        <div className="w-full h-auto py-9">
            <motion.h1
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
                className="flex justify-start sm:justify-center items-center gap-2 text-white"
            >
                <Users className="hidden sm:block md:w-10 md:h-10 lg:h-12 lg:w-12" />
                <span className="font-bold my-2 md:text-3xl lg:text-4xl text-xl px-3">Our Team</span>
            </motion.h1>

            <div className="flex w-full h-auto gap-4 mt-12 sm:mt-16 flex-wrap justify-center sm:px-4 ">{
                people.map((data, index) => (
                    <Tilt>
                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 * index }}
                            key={index}
                            className="w-full h-auto backdrop-blur-3xl rounded-md ring-2 bg-zinc-800 text-white px-20 sm:px-14 py-5"

                        >
                            <img src={data.imageUrl} className="w-32 h-32 rounded-full mx-auto my-5 shadow-2xl" />
                            <div className="mx-auto text-center my-7">
                                <motion.h1>{data.name}</motion.h1>
                                <motion.h1>{data.role}</motion.h1>
                            </div>
                            <div className="flex justify-between items-center">
                                <Facebook />
                                <Instagram />
                                <Linkedin />
                            </div>
                        </motion.div>
                    </Tilt>
                ))
            }</div>

        </div>
    )
}

export default Team;