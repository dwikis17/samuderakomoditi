'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyUs() {
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
                            className="text-white text-4xl font-bold"
                            whileHover={{ color: "#f6b17a" }}
                        >
                            Why Choose Us?
                        </motion.h2>
                        <motion.p
                            className="text-white text-lg"
                            variants={itemVariants}
                        >
                            We deliver excellence in premium charcoal briquettes with unmatched quality and service.
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a]/90 transition-colors">
                            LEARN MORE
                        </button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            "Quality Assurance",
                            "Global Distribution",
                            "Expert Support",
                            "Sustainable Practice"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-black p-6 rounded-lg shadow-xl"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <h3 className="text-[#f6b17a] text-xl font-bold mb-2">{item}</h3>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}