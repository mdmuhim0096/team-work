import { motion } from "framer-motion"

const Subscribe = () => {
    return (
        <div className='flex flex-wrap justify-around items-center py-16 bg-zinc-800 gap-5'>
            <motion.h1
                className="text-white text-3xl font-bold"
                initial={{x: -120, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.4}}
            >To Subscribe to Us</motion.h1>
            <motion.div
               initial={{y: 50, opacity: 0}}
               whileInView={{y: 0, opacity: 1}}
               transition={{duration: 0.4, delay: 0.4}}
            >
                <input type="text" className="px-2 py-1 focus:outline-none w-[70%] bg-green-400 text-white placeholder:text-white rounded-s-md" placeholder="email" required />
                <motion.button
                    whileTap={{scale: 1.1}}
                    transition={{duration: 0.5, type: "spring", stiffness: 400}}
                    className="px-2 py-1 bg-rose-500 text-white rounded-e-md hover:bg-pink-500"
                    type="submit"
                >subscribe</motion.button>
            </motion.div>
        </div>
    )
}

export default Subscribe