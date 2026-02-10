"use client";

import { useEffect, useRef, useState } from "react";

export default function DarkIntro() {
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

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-40 px-8 md:px-16 bg-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tight leading-tight">
                        A New Way of Living
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-white/90">
                        Nestled in the pristine wilderness of Terelj National Park,
                        <br className="hidden md:block" />
                        our resort offers an unparalleled retreat into nature.
                    </p>
                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl">
                        Spanning 5 hectares of untouched landscape, the resort features exclusive private villas alongside world-class amenities including a spa, restaurant, and wellness center. Every detail has been crafted to create a harmonious balance between luxury and the natural environment.
                    </p>
                </div>
            </div>
        </section>
    );
}
