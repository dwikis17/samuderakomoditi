'use client'
import { motion } from "framer-motion";
import { useRef } from "react";

export default function GlobalReach() {
    const ref = useRef(null);

    const markets = [
        {
            region: "Asia",
            countries: ["China", "India", "Japan", "South Korea"],
            color: "#F6B17A"
        },
        {
            region: "Europe",
            countries: ["Germany", "Netherlands"],
            color: "#2D3250"
        },
        {
            region: "Americas",
            countries: ["USA", "Brazil"],
            color: "#4A5283"
        },
        {
            region: "Middle East & Africa",
            countries: ["UAE", "Saudi Arabia", "Egypt"],
            color: "#364156"
        }
    ];

    // Define market coordinates (percentages relative to map dimensions)
    const marketCoordinates = [
        // Asia
        { region: "China", top: "32%", left: "77%", color: "#F6B17A" },
        { region: "India", top: "45%", left: "70%", color: "#F6B17A" },
        { region: "Japan", top: "35%", left: "82%", color: "#F6B17A" },
        { region: "South Korea", top: "35%", left: "80%", color: "#F6B17A" },

        // Europe
        { region: "Germany", top: "30%", left: "50%", color: "#2D3250" },
        { region: "Netherlands", top: "28%", left: "48%", color: "#2D3250" },

        // Americas
        { region: "USA", top: "35%", left: "20%", color: "#4A5283" },
        { region: "Brazil", top: "65%", left: "30%", color: "#4A5283" },

        // Middle East & Africa
        { region: "UAE", top: "45%", left: "60%", color: "#364156" },
        { region: "Saudi Arabia", top: "45%", left: "58%", color: "#364156" },
        { region: "Egypt", top: "45%", left: "55%", color: "#364156" }
    ];

    const PulsingDot = ({ top, left, color }: { top: string, left: string, color: string }) => (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute w-3 h-3 rounded-full"
            style={{
                top,
                left,
                backgroundColor: color,
            }}
        >
            {/* Pulsing effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `2px solid ${color}`,
                    backgroundColor: 'transparent'
                }}
                animate={{
                    scale: [1, 2],
                    opacity: [1, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                }}
            />
        </motion.div>
    );

    // Add these styles to make the map more interactive
    const mapStyles = {
        // Add hover effect to dots
        ".dot-hover": {
            "&:hover": {
                transform: "scale(1.5)",
                transition: "transform 0.3s ease"
            }
        },

        // Improve tooltip visibility
        ".tooltip": {
            opacity: 0,
            transition: "opacity 0.3s ease",
            "&:hover": {
                opacity: 1
            }
        }
    };

    const ConnectingLines = () => (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {marketCoordinates.map((market, index) => (
                marketCoordinates.slice(index + 1).map((target, targetIndex) => (
                    <motion.line
                        key={`${market.region}-${target.region}`}
                        x1={`${parseInt(market.left)}%`}
                        y1={`${parseInt(market.top)}%`}
                        x2={`${parseInt(target.left)}%`}
                        y2={`${parseInt(target.top)}%`}
                        stroke={market.color}
                        strokeWidth="1"
                        strokeOpacity="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.1 }}
                    />
                ))
            ))}
        </svg>
    );

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2D3250] mb-6">
                        Serving Clients Worldwide
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Our global network enables us to deliver premium products to clients across continents,
                        ensuring reliable and efficient service worldwide.
                    </p>
                </motion.div>

                {/* World Map Section */}
                <div className="relative mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[400px] md:h-[500px] bg-[#1a1a1a] rounded-xl overflow-hidden relative"
                    >
                        {/* Map Background */}
                        <div
                            className="absolute inset-0 bg-[url('/world.svg')] bg-no-repeat bg-center bg-contain"
                            style={{
                                opacity: 0.3,
                                filter: 'brightness(0.8) contrast(1.2)'
                            }}
                        />

                        {/* Market Dots */}
                        <div className="absolute inset-0">
                            {marketCoordinates.map((market, index) => (
                                <PulsingDot
                                    key={market.region}
                                    top={market.top}
                                    left={market.left}
                                    color={market.color}
                                />
                            ))}
                        </div>

                        {/* Optional: Tooltips for each dot */}
                        <div className="absolute inset-0 pointer-events-none">
                            {marketCoordinates.map((market, index) => (
                                <div
                                    key={`tooltip-${market.region}`}
                                    className="absolute text-xs text-white bg-black/75 px-2 py-1 rounded"
                                    style={{
                                        top: `calc(${market.top} + 15px)`,
                                        left: market.left,
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    {market.region}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Markets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {markets.map((market, index) => (
                        <motion.div
                            key={market.region}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-2" style={{ backgroundColor: market.color }}></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#2D3250] mb-4">
                                    {market.region}
                                </h3>
                                <ul className="space-y-2">
                                    {market.countries.map((country) => (
                                        <li key={country} className="text-gray-600 flex items-center">
                                            <span className="w-2 h-2 rounded-full mr-2"
                                                style={{ backgroundColor: market.color }}></span>
                                            {country}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}


            </div>
        </section>
    );
}