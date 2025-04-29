'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.4 }); // Triggers animation when 80% of element is in view

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 1
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8
            }
        }
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8
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
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {/* Left column content */}
                        <motion.p
                            className="text-white text-2xl font-bold"
                            variants={textVariants}
                            whileHover={{ color: "#f6b17a" }}
                        >
                            WORLDWIDE TRUST<br></br>
                            IN PREMIUM CHARCOAL BRIQUETTES
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a] transition-colors">
                            KNOW MORE
                        </button>
                    </motion.div>
                    <motion.div
                        variants={boxVariants}
                        className="bg-black w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-lg shadow-xl"
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="text-white text-center">
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold mb-4"
                                whileHover={{ scale: 1.1, color: "#f6b17a" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Title Here
                            </motion.h3>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Your text content goes here. Add any description or information you want to display in this black rectangle.
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
