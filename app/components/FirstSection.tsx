'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function FirstSection() {
    const ref = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    // Adjusted margin and amount for better mobile visibility
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });

    // Ensure component is mounted before animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                // Added duration for container
                duration: 0.5,
                // Ensure container becomes visible first
                when: "beforeChildren"
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

    // Don't render until component is mounted
    if (!isMounted) {
        return null;
    }

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
                        {/* Left column content */}
                        <motion.p
                            className="text-white text-2xl font-bold"
                            variants={textVariants}
                            whileHover={{ color: "#f6b17a" }}
                        >
                            WORLDWIDE TRUST<br></br>
                            IN PREMIUM CHARCOAL BRIQUETTES
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a]/90 transition-colors">
                            KNOW MORE
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
                        <div className="text-white text-center">
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold mb-4"
                                whileHover={{ scale: 1.05 }} // Reduced scale for mobile
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                Title Here
                            </motion.h3>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg"
                                whileHover={{ scale: 1.02 }} // Reduced scale for mobile
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
