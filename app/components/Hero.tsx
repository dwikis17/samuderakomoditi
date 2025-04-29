'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Hero Background Image */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Image
                    src="/hero.jpg"
                    alt="Charcoal background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Watermark Text */}
            {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h2 className="text-white/20 text-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight">
                    INDONESIA&apos;S FINEST
                    <br />
                    COCONUT CHARCOAL
                    <br />
                    BRIQUETTE
                </h2>
            </div> */}

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
                <motion.h1
                    className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Samudera Komoditi
                    <br />
                    Indonesia
                </motion.h1>

                <motion.p
                    className="text-white text-xl md:text-2xl lg:text-3xl mt-6 font-bold"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Samudera Komoditas Indonesia Ltd. – Leading Exporter of Indonesian Natural Resources
                </motion.p>

                <motion.p
                    className="text-white text-lg md:text-xl mt-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Premium Quality | Sustainable Sourcing | Global Partnerships
                </motion.p>

                <motion.button
                    className="mt-10 bg-[#f6b17a] text-white px-8 py-3 rounded-sm hover:cursor-pointer font-medium hover:bg-[#f6b17a] transition-colors"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    KNOW MORE
                </motion.button>
            </div>
        </section>
    )
}