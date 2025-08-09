import { motion } from 'framer-motion'
import { Contact, Facebook, Instagram, Linkedin, Mail, Phone, TwitchIcon, TwitterIcon, Youtube } from 'lucide-react';

const ContactSummary = () => {
    return (
        <div className='w-full h-auto py-14'>
            <motion.h1
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center gap-2 text-white my-10"
            >
                <Contact className="hidden sm:block md:w-10 md:h-10 lg:h-12 lg:w-12" />
                <span className="font-bold my-2 text-xl md:text-3xl lg:text-4xl">Contact Summary</span>
            </motion.h1>
            <motion.div
                className='mx-auto flex flex-col sm:flex-row gap-3 justify-evenly py-8 px-2'
            >
                <motion.div
                    className='text-center italic flex flex-col gap-3'
                >
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Mail />
                        <span className='text-lg'>example@mail.com</span>
                    </motion.h1>
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Phone />
                        <span className='text-lg'>+@@ 123 456 789</span>
                    </motion.h1>
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Facebook />
                        <span className='text-lg'>https://www.facebook.com/.....</span>
                    </motion.h1>
                </motion.div>
                <motion.div className='text-center italic flex flex-col gap-3'>
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Linkedin />
                        <span className='text-lg'>https://www.linkedin.com/.....</span>
                    </motion.h1>
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Instagram />
                        <span className='text-lg'>https://www.instagram.com/.....</span>
                    </motion.h1>
                    <motion.h1
                        className='text-white flex items-center gap-3'
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <TwitterIcon />
                        <span className='text-lg'>https://www.towtter.com/.....</span>
                    </motion.h1>
                </motion.div>
            </motion.div>
            <div className='text-white overflow-hidden flex justify-center gap-5 my-4'>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 1 }}
                    className='cursor-pointer'
                >
                    <Facebook />
                </motion.div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 1 }}
                    className='cursor-pointer'
                >
                    <Instagram />
                </motion.div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 1 }}
                    className='cursor-pointer'
                >
                    <Linkedin />
                </motion.div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 1 }}
                    className='cursor-pointer'
                >
                    <TwitterIcon />
                </motion.div>
            </div>
        </div>
    )
}

export default ContactSummary