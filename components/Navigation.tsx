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
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex justify-between items-center gap-4">
                <a
                    href="#"
                    aria-label={t("nav.brand")}
                    title={t("nav.brand")}
                    className={`whitespace-nowrap text-lg md:text-xl font-extrabold tracking-widest transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                        }`}
                >
                    TWR
                </a>

                <div className="hidden xl:flex gap-8 items-center">
                    <Link
                        href="/gallery"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.gallery")}
                    </Link>
                    <a
                        href="#floorplan"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.floorPlans")}
                    </a>
                    <a
                        href="#specs"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.specs")}
                    </a>
                    <a
                        href="#wellness"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.wellness")}
                    </a>
                    <a
                        href="#market"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.market")}
                    </a>
                    <a
                        href="#investment"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.investment")}
                    </a>
                    <a
                        href="#location"
                        className={`whitespace-nowrap text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {t("nav.location")}
                    </a>

                    {/* Language Switcher */}
                    <div className="flex gap-2 ml-2 items-center">
                        {(["en", "ja", "zh"] as const).map((lang, i, arr) => (
                            <span key={lang} className="flex items-center gap-2">
                                <button
                                    onClick={() => setLanguage(lang)}
                                    className={`whitespace-nowrap text-sm font-light tracking-wide transition-all duration-300 ${language === lang
                                        ? scrolled ? "text-black font-normal" : "text-white font-normal"
                                        : scrolled ? "text-black/50 hover:text-black" : "text-white/50 hover:text-white"
                                        }`}
                                >
                                    {lang === "en" ? "EN" : lang === "ja" ? "日本語" : "简体"}
                                </button>
                                {i < arr.length - 1 && (
                                    <span className={scrolled ? "text-black/30" : "text-white/30"}>|</span>
                                )}
                            </span>
                        ))}
                    </div>


                </div>

                {/* Mobile Menu */}
                <div className="xl:hidden flex flex-shrink-0 gap-3 items-center">
                    <div className="flex gap-1 items-center">
                        {(["en", "ja", "zh"] as const).map((lang, i, arr) => (
                            <span key={lang} className="flex items-center gap-1">
                                <button
                                    onClick={() => setLanguage(lang)}
                                    className={`whitespace-nowrap text-xs font-light tracking-wide transition-colors duration-300 ${language === lang
                                        ? scrolled ? "text-black" : "text-white"
                                        : scrolled ? "text-black/40" : "text-white/40"
                                        }`}
                                >
                                    {lang === "en" ? "EN" : lang === "ja" ? "日本語" : "简体"}
                                </button>
                                {i < arr.length - 1 && (
                                    <span className={`text-xs ${scrolled ? "text-black/20" : "text-white/20"}`}>|</span>
                                )}
                            </span>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className={`hidden sm:inline-block whitespace-nowrap px-4 py-2 text-xs font-light tracking-wide transition-all duration-300 ${scrolled ? "bg-black text-white" : "bg-white text-black"
                            }`}
                    >
                        {t("nav.contact")}
                    </a>
                </div>
            </div>
        </nav>
    );
}
