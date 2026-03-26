"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const floorPlans = [
    { id: 1, titleKey: "floorplan.hotel1", image: "/layouts/layout1.png" },
    { id: 2, titleKey: "floorplan.hotel2", image: "/layouts/layout2.png" },
    { id: 3, titleKey: "floorplan.service1", image: "/layouts/layout3.png" },
    { id: 4, titleKey: "floorplan.service2", image: "/layouts/layout4.png" },
    { id: 5, titleKey: "floorplan.service3", image: "/layouts/layout5.png" },
    { id: 6, titleKey: "floorplan.service4", image: "/layouts/layout6.png" },
];

export default function FloorPlan() {
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Fallback: if IntersectionObserver never fires (e.g. already in view), show after mount
        const timeout = setTimeout(() => setIsVisible(true), 300);

        return () => {
            observer.disconnect();
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (selectedPlan !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedPlan]);

    return (
        <section
            ref={sectionRef}
            id="floorplan"
            className="py-28 md:py-40 px-8 md:px-20 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {t("floorplan.title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {floorPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`cursor-pointer group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            onClick={() => setSelectedPlan(plan.id)}
                        >
                            <div className="relative h-[400px] md:h-[500px] bg-white overflow-hidden rounded-lg">
                                <Image
                                    src={plan.image}
                                    alt={t(plan.titleKey)}
                                    fill
                                    className="object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-light mt-6 text-center tracking-tight">
                                {t(plan.titleKey)}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedPlan !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
                    onClick={() => setSelectedPlan(null)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl md:text-6xl font-light hover:opacity-70 transition-opacity z-10 w-12 h-12 flex items-center justify-center"
                        onClick={() => setSelectedPlan(null)}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div className="relative w-full h-full max-w-7xl">
                        <Image
                            src={floorPlans.find(p => p.id === selectedPlan)?.image || ""}
                            alt={t(floorPlans.find(p => p.id === selectedPlan)?.titleKey || "")}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                        <p className="text-lg md:text-xl font-light">
                            {t(floorPlans.find(p => p.id === selectedPlan)?.titleKey || "")}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
