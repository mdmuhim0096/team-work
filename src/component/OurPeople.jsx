import { motion } from "framer-motion";
import { User } from "lucide-react";

const OurPeople = () => {
    return (
        <div className="pt-11 px-2">
            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:gap-3"
            >
                <div className="sm:w-[50%] sm:px-4">
                    <motion.h1
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: -10, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-start sm:justify-center items-center gap-2 text-white"
                    >
                        <User className="hidden sm:block md:w-10 md:h-10 lg:h-12 lg:w-12" />
                        <span className="font-bold my-2 md:text-3xl lg:text-4xl">Our People</span>
                    </motion.h1>
                    <motion.p
                        initial={{ x: -30, opacity: 0, rotate: 45 }}
                        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, delay: 1 }}
                        className="text-white sm:text-xl pt-2 text-center"
                    >
                        Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
                        Anim aute id magna aliqua ad ad non deserunt sunt.
                        <br /><br /> Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ scale: .2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="sm:w-[50%] sm:h-[60vh]"
                >
                    <img src="./image/ourpeople1.avif" className="w-full h-full rounded-xl" alt="" />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, type: "keyframes" }}
                className="flex justify-between items-center gap-2 mt-3"
            >
                <motion.div
                    className="sm:w-[50%]"
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, type: "keyframes", delay: .4 }}
                >
                    <img src="./image/ourpeople2.avif" className="w-[100%] rounded-xl sm:h-[67vh]" />
                </motion.div>
                <div className="sm:w-[50%]">
                    <img src="./image/ourpeople3.avif" className="w-[100%] rounded-xl sm:h-[67vh]" alt="" />
                </div>
            </motion.div>
        </div>
    )
}

export default OurPeople;