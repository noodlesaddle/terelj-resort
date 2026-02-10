"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
    {
        id: 1,
        image: "/renders/3.jpg",
        title: "Courtyard Sanctuary",
        description: "A curved concrete wall frames the grassy courtyard,\nleading to a single-story pavilion and the main\nresidential building beyond.",
    },
    {
        id: 2,
        image: "/renders/4.jpg",
        title: "Golden Hour Pavilion",
        description: "A long timber and glass pavilion nestled into the grassy slope,\nbathed in the warm glow of late afternoon sun.",
    },
    {
        id: 3,
        image: "/renders/7.jpg",
        title: "Forest Pool",
        description: "A glass-walled building houses a blue-lit lap pool,\nreflecting the interior timber structure against\na backdrop of dense forest.",
    },
    {
        id: 4,
        image: "/renders/17.jpg",
        title: "Light-Filled Gallery",
        description: "Sun-drenched hallway with light wood floors\nand floor-to-ceiling glass walls opening\nto a forested courtyard.",
    },
    {
        id: 5,
        image: "/renders/11.jpg",
        title: "Evening Terrace",
        description: "An outdoor wooden deck with cafe seating at night,\nframed by building wings with warm light\nspilling from glass doors.",
    },
    {
        id: 6,
        image: "/renders/14.jpg",
        title: "Seamless Connection",
        description: "A minimalist glass-walled corridor connects\nthe white residential building to the wooden wing,\noverlooking a lush lawn.",
    },
    {
        id: 7,
        image: "/renders/6.jpg",
        title: "Dusk Illumination",
        description: "As evening falls, warm interior lights glow through windows\nwhile integrated landscape lighting\nilluminates the central courtyard.",
    },
    {
        id: 8,
        image: "/renders/5.jpg",
        title: "Architectural Harmony",
        description: "The U-shaped complex reveals its four-story white building\nwith balconies overlooking a central green courtyard\nwith young trees.",
    },
];

export default function PropertyGallery() {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.getAttribute('data-id') || '0');
                        setVisibleItems((prev) => new Set(prev).add(id));
                    }
                });
            },
            { threshold: 0.2 }
        );

        return () => observerRef.current?.disconnect();
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('[data-gallery-item]');
        elements.forEach((el) => observerRef.current?.observe(el));
    }, []);

    return (
        <section className="bg-white">
            {galleryItems.map((item, index) => (
                <div
                    key={item.id}
                    data-gallery-item
                    data-id={item.id}
                    className="relative"
                >
                    {/* Full-screen image */}
                    <div className="relative h-screen w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            quality={90}
                        />
                    </div>

                    {/* Text content */}
                    <div className="px-8 md:px-16 py-16 md:py-24">
                        <div
                            className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleItems.has(item.id)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                } ${index % 2 === 0 ? '' : 'ml-auto text-right'}`}
                            style={{ maxWidth: index % 2 === 0 ? '42rem' : '42rem' }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                                {item.title}
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed whitespace-pre-line font-light">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
