'use client'
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.1,
        margin: "0px 0px -200px 0px"
    });

    const [hoveredCert, setHoveredCert] = useState<number | null>(null);

    const certifications = [
        {
            id: 1,
            name: "ISO 9001:2015",
            description: "Quality Management System",
            icon: "🏢",
            color: "#2196F3",
            details: "International standard for quality management systems, ensuring consistent product quality and customer satisfaction."
        },
        {
            id: 2,
            name: "FSC",
            description: "Forest Stewardship Council",
            icon: "🌳",
            color: "#4CAF50",
            details: "Certification for responsible forest management and sustainable wood sourcing practices."
        },
        {
            id: 3,
            name: "RSPO",
            description: "Roundtable on Sustainable Palm Oil",
            icon: "🌴",
            color: "#FF9800",
            details: "International certification for sustainable palm oil production and processing."
        },
        {
            id: 4,
            name: "SNI",
            description: "Indonesian National Standard",
            icon: "🏆",
            color: "#F44336",
            details: "Meeting Indonesia's highest national quality and safety standards for products and services."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d3250] relative overflow-hidden py-20"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => ( // Reduced number of background elements for better performance
                    <motion.div
                        key={i}
                        className="absolute h-40 w-40 border border-white/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="container mx-auto px-4 relative z-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meeting International Standards
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Our commitment to excellence is backed by prestigious international certifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            className="relative group"
                            onHoverStart={() => setHoveredCert(cert.id)}
                            onHoverEnd={() => setHoveredCert(null)}
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 
                                          transform transition-all duration-300 
                                          hover:bg-white/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="text-4xl p-4 rounded-full"
                                        style={{ backgroundColor: cert.color + '20' }}
                                    >
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {cert.name}
                                        </h3>
                                        <p className="text-gray-300">
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={itemVariants}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Additional Compliance & Standards
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Environmental", "Export", "Safety", "Quality"].map((tag) => (
                            <div
                                key={tag}
                                className="px-6 py-2 rounded-full bg-white/10 text-white 
                                         hover:bg-white/20 transition-colors"
                            >
                                {tag} Compliance
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}