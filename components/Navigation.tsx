"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

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

                <div className="hidden lg:flex gap-8 items-center">
                    <Link
                        href="/gallery"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.gallery")}
                    </Link>
                    <a
                        href="#floorplan"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.floorPlans")}
                    </a>
                    <a
                        href="#specs"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.specs")}
                    </a>
                    <a
                        href="#investment"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.investment")}
                    </a>
                    <a
                        href="#location"
                        className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.location")}
                    </a>

                    {/* Language Switcher */}
                    <div className="flex gap-2 ml-2">
                        <button
                            onClick={() => setLanguage("en")}
                            className={`text-sm font-light tracking-wide transition-all duration-300 ${language === "en"
                                ? scrolled ? "text-black font-normal" : "text-white font-normal"
                                : scrolled ? "text-black/50 hover:text-black" : "text-white/50 hover:text-white"
                                }`}
                        >
                            EN
                        </button>
                        <span className={scrolled ? "text-black/30" : "text-white/30"}>|</span>
                        <button
                            onClick={() => setLanguage("ja")}
                            className={`text-sm font-light tracking-wide transition-all duration-300 ${language === "ja"
                                ? scrolled ? "text-black font-normal" : "text-white font-normal"
                                : scrolled ? "text-black/50 hover:text-black" : "text-white/50 hover:text-white"
                                }`}
                        >
                            日本語
                        </button>
                    </div>


                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex gap-3 items-center">
                    <button
                        onClick={() => setLanguage(language === "en" ? "ja" : "en")}
                        className={`text-xs font-light tracking-wide transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {language === "en" ? "日本語" : "EN"}
                    </button>
                    <a
                        href="#contact"
                        className={`px-4 py-2 text-xs font-light tracking-wide transition-all duration-300 ${scrolled
                            ? "bg-black text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        {t("nav.contact")}
                    </a>
                </div>
            </div>
        </nav>
    );
}
