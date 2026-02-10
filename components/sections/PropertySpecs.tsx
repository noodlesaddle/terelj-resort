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

    const resortSpecs = [
        { label: "Name", value: "TERELJ RESORT" },
        { label: "Total Land Area", value: "5 hectares" },
        { label: "Location", value: "Terelj National Park, Mongolia" },
    ];

    const houseOptions = [
        { size: "80 sqm", bedrooms: "2 Bedrooms", occupancy: "4-5 people" },
        { size: "50 sqm", bedrooms: "1 Bedroom", occupancy: "2-3 people" },
        { size: "40 sqm", bedrooms: "Studio", occupancy: "2 people" },
    ];

    const facilities = [
        "Restaurant",
        "Event Hall",
        "Hotel",
        "Spa",
        "Pilates Studio",
        "Onsen (Hot Spring)",
        "Wellness Services",
    ];

    return (
        <section
            ref={sectionRef}
            id="specs"
            className="py-24 md:py-32 px-8 md:px-16 bg-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    SPEC
                </h2>

                {/* Resort Information */}
                <div className="mb-20">
                    <div className="space-y-8 md:space-y-10">
                        {resortSpecs.map((spec, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-200 pb-6 md:pb-8 transition-all duration-700 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <dt className="text-xs md:text-sm text-gray-500 mb-3 tracking-wider uppercase">
                                    {spec.label}
                                </dt>
                                <dd className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                                    {spec.value}
                                </dd>
                            </div>
                        ))}
                    </div>
                </div>

                {/* House Options */}
                <div className="mb-20">
                    <h3
                        className={`text-2xl md:text-3xl font-bold mb-10 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Private House Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {houseOptions.map((house, index) => (
                            <div
                                key={index}
                                className={`bg-gray-50 p-8 rounded-lg transition-all duration-700 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                                    {house.size}
                                </div>
                                <div className="text-lg font-light text-gray-600 mb-2">
                                    {house.bedrooms}
                                </div>
                                <div className="text-base font-light text-gray-500">
                                    {house.occupancy}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Facilities */}
                <div>
                    <h3
                        className={`text-2xl md:text-3xl font-bold mb-10 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '700ms' }}
                    >
                        Resort Facilities
                    </h3>
                    <div
                        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '800ms' }}
                    >
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="text-lg font-light text-gray-700 flex items-center"
                            >
                                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                                {facility}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
