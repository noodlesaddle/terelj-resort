"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Location() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        const timeout = setTimeout(() => setIsVisible(true), 300);
        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="location"
            className="py-28 md:py-40 px-8 md:px-20 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            {t("location.title")}
                        </h2>
                        <p className="text-xs md:text-sm text-gray-400 text-right font-light">
                            {t("location.address")}
                        </p>
                    </div>

                    {/* Map and Info Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {/* Map */}
                        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-50 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2662.3!2d107.405738!3d47.879850!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUyJzQ3LjUiTiAxMDfCsDI0JzIwLjciRQ!5e0!3m2!1sen!2smn!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: 'grayscale(100%) contrast(1.1)',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Access Information */}
                        <div className="space-y-12 md:space-y-16">
                            {/* By Road */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-4 tracking-tight">
                                    {t("location.byCar")}
                                </h3>
                                <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-3">
                                    {t("location.byCar.desc")}
                                </p>
                                <div className="flex flex-wrap gap-x-12 gap-y-4">
                                    <p className="text-2xl md:text-3xl font-light">{t("location.time")}</p>
                                    <p className="text-2xl md:text-3xl font-light">
                                        <span className="text-sm text-gray-400 mr-3 align-middle">{t("location.distanceLabel")}</span>
                                        {t("location.distance")}
                                    </p>
                                </div>
                            </div>

                            {/* Flights */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-4 tracking-tight">
                                    {t("location.flights")}
                                </h3>
                                <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                                    {t("location.flights.desc")}
                                </p>
                            </div>

                            {/* Google Maps Link */}
                            <div className="pt-8 border-t border-gray-200">
                                <a
                                    href="https://maps.app.goo.gl/zqn24hg8jnjqWhx47"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs md:text-sm text-gray-400 hover:text-black transition-colors duration-300 font-light flex items-center gap-2"
                                >
                                    <span>{t("location.googleMaps")}</span>
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
