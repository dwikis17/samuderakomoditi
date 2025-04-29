'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Ethical() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.4 });

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
                        className="flex flex-col items-start justify-center space-y-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.h2
                            className="text-white text-3xl md:text-4xl font-bold"
                            variants={textVariants}
                            whileHover={{ color: "#f6b17a" }}
                        >
                            Responsible Export for a Better Future
                        </motion.h2>
                        <motion.p
                            className="text-white text-lg"
                            variants={textVariants}
                        >
                            Our commitment to sustainable practices and ethical standards
                            ensures a positive impact on both the environment and communities.
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a]/90 transition-colors">
                            LEARN MORE
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
                        <div className="text-white space-y-8">
                            <motion.div
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                <div className="border-l-4 border-[#f6b17a] pl-4">
                                    <h3 className="text-[#f6b17a] text-xl font-bold mb-2">
                                        Certified Sustainable Practices
                                    </h3>
                                    <p className="text-gray-300">
                                        Proudly certified by ISPO and RSPO, ensuring our mining
                                        and farming practices meet the highest sustainability standards.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f6b17a] pl-4">
                                    <h3 className="text-[#f6b17a] text-xl font-bold mb-2">
                                        International Compliance
                                    </h3>
                                    <p className="text-gray-300">
                                        Meeting and exceeding international environmental standards
                                        through rigorous quality control and monitoring.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f6b17a] pl-4">
                                    <h3 className="text-[#f6b17a] text-xl font-bold mb-2">
                                        Community Support
                                    </h3>
                                    <p className="text-gray-300">
                                        Empowering local communities through fair trade practices
                                        and sustainable development programs.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex justify-center items-center mt-6"
                                variants={itemVariants}
                            >
                                <div className="flex gap-4">
                                    <img
                                        src="/ispo-logo.png"
                                        alt="ISPO Certification"
                                        className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                    <img
                                        src="/rspo-logo.png"
                                        alt="RSPO Certification"
                                        className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}