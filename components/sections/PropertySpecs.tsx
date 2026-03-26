"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function PropertySpecs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        const timeout = setTimeout(() => setIsVisible(true), 300);
        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, []);

    const resortSpecs = [
        { labelKey: "specs.name", valueKey: "specs.nameValue" },
        { labelKey: "specs.landArea", valueKey: "specs.landAreaValue" },
        { labelKey: "specs.location", valueKey: "specs.locationValue" },
    ];

    const houseOptions = [
        { size: "80 sqm", bedroomsKey: "specs.bedrooms2", occupancyKey: "specs.people45" },
        { size: "50 sqm", bedroomsKey: "specs.bedroom1", occupancyKey: "specs.people23" },
        { size: "40 sqm", bedroomsKey: "specs.studio", occupancyKey: "specs.people2" },
    ];

    const facilitiesKeys = ["specs.restaurant", "specs.eventHall", "specs.hotel", "specs.spa", "specs.pilates", "specs.onsen", "specs.wellness"];

    return (
        <section ref={sectionRef} id="specs" className="py-28 md:py-40 px-8 md:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {t("specs.title")}
                </h2>

                <div className="mb-24 md:mb-32 space-y-8 md:space-y-10">
                    {resortSpecs.map((spec, index) => (
                        <div key={index} className={`border-b border-gray-200 pb-6 md:pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <dt className="text-xs md:text-sm text-gray-500 mb-3 tracking-wider uppercase">{t(spec.labelKey)}</dt>
                            <dd className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">{t(spec.valueKey)}</dd>
                        </div>
                    ))}
                </div>

                <div className="mb-24 md:mb-32">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-10 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                        {t("specs.houseOptions")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {houseOptions.map((house, index) => (
                            <div key={index} className={`bg-gray-50 p-8 rounded-lg transition-all duration-700 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
                                <div className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{house.size}</div>
                                <div className="text-lg font-light text-gray-600 mb-2">{t(house.bedroomsKey)}</div>
                                <div className="text-base font-light text-gray-500">{t(house.occupancyKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-10 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
                        {t("specs.facilities")}
                    </h3>
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
                        {facilitiesKeys.map((key, index) => (
                            <div key={index} className="text-lg font-light text-gray-700 flex items-center">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                                {t(key)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
