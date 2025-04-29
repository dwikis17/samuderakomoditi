'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Introduction() {
    const ref = useRef(null);
    // Adjusted margin and amount for better mobile visibility
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                // Added delay to ensure container is visible first
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Reduced y offset for smoother mobile animation
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50, // Reduced stiffness for smoother animation
                damping: 8,
                duration: 0.8
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 }, // Reduced x offset for mobile
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 8,
                duration: 0.6
            }
        }
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.95 }, // Increased initial scale for better visibility
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 8,
                duration: 0.6
            }
        }
    };

    return (
        <section className="bg-[#2d3250] py-20" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]"
                    variants={containerVariants}
                    initial="hidden"
                    // Added fallback opacity to ensure content is visible if animation fails
                    animate={isInView ? "visible" : "hidden"}
                    style={{ opacity: isInView ? 1 : 0 }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start justify-center space-y-6"
                        whileHover={{ scale: 1.02 }} // Reduced scale for mobile
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        <motion.h2
                            className="text-white text-3xl md:text-4xl font-bold"
                            variants={textVariants}
                            whileHover={{ color: "#f6b17a" }}
                        >
                            Indonesia – A Land of Abundant Natural Wealth
                        </motion.h2>
                        <motion.p
                            className="text-white text-lg"
                            variants={textVariants}
                        >
                            Indonesia stands proudly as one of the world's leading exporters of natural resources, showcasing our commitment to sustainable and ethical sourcing practices.
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a]/90 transition-colors">
                            DISCOVER MORE
                        </button>
                    </motion.div>

                    <motion.div
                        variants={boxVariants}
                        className="bg-black w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-lg shadow-xl"
                        whileHover={{
                            scale: 1.01, // Reduced scale for mobile
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        <div className="text-white space-y-6">
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold mb-4 text-[#f6b17a]"
                                whileHover={{ scale: 1.05 }} // Reduced scale for mobile
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                Our Natural Abundance
                            </motion.h3>
                            <motion.ul
                                variants={itemVariants}
                                className="space-y-4 text-lg"
                            >
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#f6b17a]">•</span>
                                    <span>Rich in minerals and energy resources</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#f6b17a]">•</span>
                                    <span>Abundant agricultural products</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#f6b17a]">•</span>
                                    <span>Diverse marine resources</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#f6b17a]">•</span>
                                    <span>Sustainable sourcing practices</span>
                                </li>
                            </motion.ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}