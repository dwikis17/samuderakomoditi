'use client'
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <img
                    src="/shipping-container.jpg"
                    alt="Shipping Container Port"
                    className="w-full h-full object-cover"
                />
                {/* Optional overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Right side - Contact Information */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                    <h2 className="text-[#2B4C3F] text-4xl md:text-5xl font-bold mb-6">
                        Delivering Quality Briquette Charcoal Globally
                    </h2>

                    <p className="text-gray-700 text-lg mb-8">
                        We are prepared to ship our products to the Middle East, including Lebanon, Iraq, Jordan, Palestine, and to any other country worldwide.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="space-y-2">
                            <h3 className="text-[#2B4C3F] font-semibold">Website</h3>
                            <p className="text-gray-700">www.sks.id</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-[#2B4C3F] font-semibold">Email</h3>
                            <a href="mailto:samuderakomoditi@gmail.com"
                                className="text-gray-700 hover:text-[#2B4C3F] transition-colors">
                                samuderakomoditi@gmail.com
                            </a>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-[#2B4C3F] font-semibold">Phone</h3>
                            <a href="tel:+6282132767646"
                                className="text-gray-700 hover:text-[#2B4C3F] transition-colors">
                                +62 821 3726 7646
                            </a>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-[#2B4C3F] font-semibold">Office Address</h3>
                            <p className="text-gray-700">
                                Rukan Aniva Grande GG no.9 Medang,<br />
                                Tangerang, 15334<br />
                                Indonesia
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#2B4C3F] text-white px-8 py-3 rounded hover:bg-[#1a3027] transition-colors">
                            CONTACT NOW
                        </button>
                        <button className="border-2 border-[#2B4C3F] text-[#2B4C3F] px-8 py-3 rounded hover:bg-[#2B4C3F] hover:text-white transition-colors">
                            CONTACT NOW
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}