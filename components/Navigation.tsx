"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-sm shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 md:py-8 flex justify-between items-center">
                <a
                    href="#"
                    className={`text-lg md:text-xl font-light tracking-widest transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                        }`}
                >
                    TERELJ RESORT
                </a>

                <div className="hidden md:flex gap-8 lg:gap-12">
                    <Link
                        href="/gallery"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        Gallery
                    </Link>
                    <a
                        href="#location"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        Location
                    </a>
                    <a
                        href="#specs"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        Specs
                    </a>
                    <a
                        href="#floorplan"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        Floor Plan
                    </a>
                </div>
            </div>
        </nav>
    );
}
