
'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-[#2d3250] text-white py-6`}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src="/bg.jpg" alt="PT Briket Charcoal Indonesia" width={80} height={60} className="mr-3" />
                        <span className="text-sm font-medium tracking-wide">SAMUDERA KOMODITAS INDONESIA</span>
                    </Link>
                </div>

                {/* Hamburger menu button for mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 text-sm font-medium tracking-wider font-extrabold">
                        <li>
                            <Link href="/" className="hover:text-[#f5f0e1] transition-colors">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#f5f0e1] transition-colors">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-[#f5f0e1] transition-colors">
                                OUR PRODUCT
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-[#f5f0e1] transition-colors">
                                GALLERY
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="hover:text-[#f5f0e1] transition-colors">
                                NEWS
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#f5f0e1] transition-colors">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile navigation */}
            <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                <ul className="flex flex-col items-center py-4 text-sm font-medium tracking-wider">
                    <li className="py-2">
                        <Link href="/" className="hover:text-[#f5f0e1] transition-colors">
                            HOME
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/about" className="hover:text-[#f5f0e1] transition-colors">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/products" className="hover:text-[#f5f0e1] transition-colors">
                            OUR PRODUCT
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/gallery" className="hover:text-[#f5f0e1] transition-colors">
                            GALLERY
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/news" className="hover:text-[#f5f0e1] transition-colors">
                            NEWS
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/contact" className="hover:text-[#f5f0e1] transition-colors">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
