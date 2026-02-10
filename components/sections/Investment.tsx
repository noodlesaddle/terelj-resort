"use client";

import { useEffect, useRef, useState } from "react";

export default function Investment() {
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

    const highlights = [
        {
            title: "Prime Location",
            description: "Located in Terelj National Park, Mongolia's premier tourist destination, just 60 minutes from the capital city.",
        },
        {
            title: "Growing Tourism",
            description: "Mongolia's tourism sector is experiencing rapid growth with increasing international visitors year over year.",
        },
        {
            title: "Unique Offering",
            description: "First luxury resort of its kind in the region, combining traditional hospitality with world-class amenities.",
        },
        {
            title: "Multiple Revenue Streams",
            description: "Hotel, restaurant, spa, event hall, and wellness services provide diversified income sources.",
        },
        {
            title: "5 Hectare Development",
            description: "Expansive property with room for future expansion and development opportunities.",
        },
        {
            title: "Year-Round Operation",
            description: "Four-season destination with activities and attractions throughout the year.",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="investment"
            className="py-24 md:py-32 px-8 md:px-16 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Investment Opportunity
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                        Be part of Mongolia's premier luxury resort development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="h-full p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                    {highlight.title}
                                </h3>
                                <p className="text-base font-light text-gray-600 leading-relaxed">
                                    {highlight.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Numbers */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                        <div className="text-sm md:text-base text-gray-600 font-light">Hectares</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
                        <div className="text-sm md:text-base text-gray-600 font-light">House Options</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2">7+</div>
                        <div className="text-sm md:text-base text-gray-600 font-light">Facilities</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2">60</div>
                        <div className="text-sm md:text-base text-gray-600 font-light">Min from City</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
