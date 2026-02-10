"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyMongolia() {
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

    const stats = [
        {
            number: "846K",
            label: "International Visitors",
            sublabel: "in 2025, +46% YoY growth",
        },
        {
            number: "$2.1B",
            label: "Tourism Revenue",
            sublabel: "Growing sector of economy",
        },
        {
            number: "#1",
            label: "Tourist Destination",
            sublabel: "Terelj National Park",
        },
        {
            number: "60 min",
            label: "From Capital",
            sublabel: "Easy accessibility",
        },
    ];

    const reasons = [
        {
            title: "Why Mongolia?",
            points: [
                "Fastest growing tourism market in Asia",
                "Government prioritizing tourism development",
                "Untapped luxury hospitality market",
                "Strategic location between China and Russia",
                "Stable political environment",
                "Growing middle class in neighboring countries",
            ],
        },
        {
            title: "Why Terelj National Park?",
            points: [
                "Mongolia's most visited national park",
                "Year-round destination with diverse activities",
                "Stunning natural landscapes and rock formations",
                "Close proximity to Ulaanbaatar (1 hour drive)",
                "Limited luxury accommodation options",
                "Protected natural environment ensures exclusivity",
            ],
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-40 px-8 md:px-16 bg-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        The Opportunity
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto">
                        Mongolia's tourism sector is experiencing unprecedented growth
                    </p>
                </div>

                {/* Statistics */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                        >
                            <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <div className="text-base md:text-lg font-light mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs md:text-sm text-white/60 font-light">
                                {stat.sublabel}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Mongolia & Why Terelj */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {reasons.map((section, sectionIndex) => (
                        <div
                            key={sectionIndex}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${(sectionIndex + 4) * 150}ms` }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.points.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="flex items-start text-lg font-light text-white/90"
                                    >
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Market Insights */}
                <div
                    className={`mt-20 p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '900ms' }}
                >
                    <h4 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                        Market Insights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg font-light text-white/80">
                        <div>
                            <p className="mb-4">
                                <strong className="text-white font-normal">Tourism Growth:</strong> Mongolia's tourism sector has seen exceptional growth, with international arrivals reaching 846,103 in 2025, representing a 46% year-over-year increase.
                            </p>
                            <p>
                                <strong className="text-white font-normal">Luxury Gap:</strong> Despite growing demand, there is a significant shortage of high-end accommodation options outside Ulaanbaatar.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4">
                                <strong className="text-white font-normal">Regional Demand:</strong> Growing affluent populations in China, South Korea, and Japan seeking unique nature-based experiences.
                            </p>
                            <p>
                                <strong className="text-white font-normal">Government Support:</strong> Tourism identified as key economic diversification strategy with infrastructure investments planned.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
