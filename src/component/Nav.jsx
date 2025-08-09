import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
    const navItems = ["home", "about", "blog", "testimonials", "contact"];
    const [isMenu, setIsMenu] = useState(false);
    const menuRef = useRef(null);

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenu(false);
            }
        };
        if (isMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenu]);

    return (
        <div className="fixed top-0 left-0 z-50 w-full">
            <div className="w-full flex justify-between items-center border-b border-green-700 p-2 backdrop-blur-md bg-black/20">

                {/* Logo */}
                <motion.img
                    src="./image/sitelogo.png"
                    alt="Logo"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10"
                />

                {/* Desktop Menu */}
                <div className="hidden sm:flex sm:w-[70%] lg:w-[40%] justify-between items-center">
                    {navItems.map((navItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="capitalize text-white text-sm hover:text-green-400 transition-colors"
                        >
                            <Link to={`/${navItem === "home" ? "" : navItem}`}>{navItem}</Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div
                    className="text-white sm:hidden relative z-50 cursor-pointer"
                    onClick={() => setIsMenu(!isMenu)}
                    aria-label="Toggle menu"
                >
                    {isMenu ? <X /> : <Menu />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenu && (
                        <motion.div
                            ref={menuRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                            className="fixed top-0 right-0 w-2/3 h-screen bg-zinc-900/90 p-6 sm:hidden flex flex-col items-start"
                        >
                            {navItems.map((navItem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className="capitalize text-white text-lg my-4 w-full hover:text-green-400"
                                >
                                    <Link
                                        to={`/${navItem === "home" ? "" : navItem}`}
                                        onClick={() => setIsMenu(false)}
                                    >
                                        {navItem}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default Nav;
