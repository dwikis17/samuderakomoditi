'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Certifications() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d3250] relative overflow-hidden py-20"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-40 w-40 border border-white/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25],
                            y: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meeting International Standards
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Our commitment to excellence is backed by prestigious international certifications,
                        ensuring the highest quality standards in every aspect of our operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            onHoverStart={() => setHoveredCert(cert.id)}
                            onHoverEnd={() => setHoveredCert(null)}
                            className="relative group"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 h-full 
                                          transform transition-all duration-300 
                                          group-hover:scale-105 group-hover:bg-white/20"
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
                                        <p className="text-gray-300 mb-4">
                                            {cert.description}
                                        </p>
                                        <motion.p
                                            className="text-sm text-gray-400"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: hoveredCert === cert.id ? 1 : 0,
                                                height: hoveredCert === cert.id ? "auto" : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {cert.details}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl"
                                    style={{
                                        border: `2px solid ${cert.color}`,
                                        opacity: 0.5,
                                    }}
                                    animate={{
                                        scale: [1, 1.02, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section - Additional Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Additional Compliance & Standards
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Environmental", "Export", "Safety", "Quality"].map((tag, index) => (
                            <motion.div
                                key={tag}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-2 rounded-full bg-white/10 text-white"
                            >
                                {tag} Compliance
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}