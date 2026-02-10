"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const heroImages = [
    "/renders/Pasted Image4.jpg",
    "/renders/Pasted Image1.jpg",
    "/renders/Pasted Image2.jpg",
    "/renders/Pasted Image3.jpg",
];

export default function PropertyHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        setIsLoaded(true);

        // Auto-rotate images every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Image Carousel */}
            {heroImages.map((image, index) => (
                <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Terelj Resort ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <div className={`absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6">
                    {t("hero.title")}
                </h1>
                <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                    {t("hero.subtitle")}
                </p>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`View image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
