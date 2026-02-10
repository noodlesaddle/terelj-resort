"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const floorPlans = [
    { id: 1, title: "Hotel Layout 1", image: "/layouts/layout1.png" },
    { id: 2, title: "Hotel Layout 2", image: "/layouts/layout2.png" },
    { id: 3, title: "Service Area 1", image: "/layouts/layout3.png" },
    { id: 4, title: "Service Area 2", image: "/layouts/layout4.png" },
    { id: 5, title: "Service Area 3", image: "/layouts/layout5.png" },
    { id: 6, title: "Service Area 4", image: "/layouts/layout6.png" },
];

export default function FloorPlan() {
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
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
            className="py-24 md:py-32 px-8 md:px-16 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Floor Plans
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
                                    alt={plan.title}
                                    fill
                                    className="object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-light mt-6 text-center tracking-tight">
                                {plan.title}
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
                            alt={floorPlans.find(p => p.id === selectedPlan)?.title || ""}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                        <p className="text-lg md:text-xl font-light">
                            {floorPlans.find(p => p.id === selectedPlan)?.title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
