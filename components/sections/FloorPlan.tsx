"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function FloorPlan() {
    const [isOpen, setIsOpen] = useState(false);
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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

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
                    Floor Plan
                </h2>

                <div
                    className={`relative h-[500px] md:h-[700px] bg-white cursor-pointer group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                    onClick={() => setIsOpen(true)}
                >
                    <Image
                        src="/renders/Image.png"
                        alt="Floor Plan"
                        fill
                        className="object-contain p-8 md:p-12 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                <p className="text-center text-gray-500 mt-6 text-sm md:text-base font-light">
                    Click to view full size
                </p>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl md:text-6xl font-light hover:opacity-70 transition-opacity z-10 w-12 h-12 flex items-center justify-center"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div className="relative w-full h-full max-w-7xl">
                        <Image
                            src="/renders/Image.png"
                            alt="Floor Plan"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
