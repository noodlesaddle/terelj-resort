"use client";

import { useEffect, useRef, useState } from "react";

export default function PropertySpecs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const specs = [
        { label: "Name", value: "TERELJ RESORT" },
        { label: "Layout", value: "4 Bedrooms" },
        { label: "Max Occupancy", value: "8 people" },
        { label: "Location", value: "Terelj National Park, Mongolia" },
        { label: "Total area", value: "Indoor Area + Terrace + Pool + Courtyard" },
        { label: "", value: "2,574.2㎡" },
        {
            label: "Features",
            value: "Open-air hot spring bath, 2 private spas, private gym, meditation room, and panoramic lounge",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="specs"
            className="py-24 md:py-32 px-8 md:px-16 bg-white"
        >
            <div className="max-w-5xl mx-auto">
                <h2
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    SPEC
                </h2>

                <div className="space-y-8 md:space-y-10">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-200 pb-6 md:pb-8 transition-all duration-700 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {spec.label && (
                                <dt className="text-xs md:text-sm text-gray-500 mb-3 tracking-wider uppercase">
                                    {spec.label}
                                </dt>
                            )}
                            <dd className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                                {spec.value}
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
