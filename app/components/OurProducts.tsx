'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function OurProducts() {
    const ref = useRef(null);
    // Adjusted margin and amount for better mobile visibility
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });
    const [currentCategory, setCurrentCategory] = useState(0);

    const categories = [
        {
            name: "Agriculture",
            products: ["Palm Oil", "Rubber", "Cocoa", "Coffee", "Spices"],
            icon: "🌾"
        },
        {
            name: "Marine Products",
            products: ["Shrimp", "Tuna", "Seaweed"],
            icon: "🌊"
        },
        {
            name: "Forestry",
            products: ["Wood", "Bamboo", "Rattan"],
            icon: "🌳"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Reduced for smoother mobile animation
                when: "beforeChildren" // Ensures parent animates before children
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Reduced y offset for mobile
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70, // Reduced stiffness for smoother animation
                damping: 10,
                duration: 0.8
            }
        }
    };

    const nextCategory = () => {
        setCurrentCategory((prev) => (prev + 1) % categories.length);
    };

    const prevCategory = () => {
        setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length);
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
                            Premium Indonesian Natural Resources for Global Markets
                        </motion.h2>
                        <motion.p
                            className="text-white text-lg"
                            variants={itemVariants}
                        >
                            Discover our extensive range of high-quality natural resources,
                            sustainably sourced from Indonesia's rich landscapes.
                        </motion.p>
                        <button className="bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a]/90 transition-colors">
                            VIEW CATALOG
                        </button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        {/* Category Display */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCategory}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="bg-black p-8 rounded-lg shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[#f6b17a] text-3xl font-bold flex items-center gap-3">
                                        {categories[currentCategory].icon}
                                        {categories[currentCategory].name}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={prevCategory}
                                            className="bg-[#f6b17a] p-2 rounded-full hover:bg-[#f6b17a]/80 transition-colors"
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={nextCategory}
                                            className="bg-[#f6b17a] p-2 rounded-full hover:bg-[#f6b17a]/80 transition-colors"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {categories[currentCategory].products.map((product, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-[#2d3250] p-4 rounded-lg"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgba(45, 50, 80, 0.8)",
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <h4 className="text-[#f6b17a] text-xl font-semibold mb-2">
                                                {product}
                                            </h4>
                                            <p className="text-white text-sm">
                                                Premium quality {product.toLowerCase()} sourced from Indonesia
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Category Indicators */}
                                <div className="flex justify-center mt-6 gap-2">
                                    {categories.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCategory(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${currentCategory === index ? 'bg-[#f6b17a]' : 'bg-gray-500'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}