"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const galleryItems = [
    { id: 1, image: "/renders/3.jpg", titleKey: "gallery.1.title", descKey: "gallery.1.desc" },
    { id: 2, image: "/renders/4.jpg", titleKey: "gallery.2.title", descKey: "gallery.2.desc" },
    { id: 3, image: "/renders/7.jpg", titleKey: "gallery.3.title", descKey: "gallery.3.desc" },
    { id: 4, image: "/renders/17.jpg", titleKey: "gallery.4.title", descKey: "gallery.4.desc" },
    { id: 5, image: "/renders/11.jpg", titleKey: "gallery.5.title", descKey: "gallery.5.desc" },
    { id: 6, image: "/renders/14.jpg", titleKey: "gallery.6.title", descKey: "gallery.6.desc" },
    { id: 7, image: "/renders/6.jpg", titleKey: "gallery.7.title", descKey: "gallery.7.desc" },
    { id: 8, image: "/renders/5.jpg", titleKey: "gallery.8.title", descKey: "gallery.8.desc" },
];

export default function PropertyGallery() {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.getAttribute('data-id') || '0');
                        setVisibleItems((prev) => new Set(prev).add(id));
                    }
                });
            },
            { threshold: 0.05 }
        );
        itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="gallery" className="bg-white">
            {galleryItems.map((item, index) => (
                <div
                    key={item.id}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    data-id={item.id}
                    className="relative"
                >
                    <div className="relative h-[70vw] min-h-[300px] md:h-screen w-full">
                        <Image
                            src={item.image}
                            alt={t(item.titleKey)}
                            fill
                            className="object-cover"
                            quality={90}
                        />
                    </div>
                    <div className="px-8 md:px-20 py-20 md:py-32">
                        <div className={`max-w-2xl transition-all duration-700 ${visibleItems.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${index % 2 === 0 ? '' : 'ml-auto text-right'}`}>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 leading-tight tracking-tight">
                                {t(item.titleKey)}
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed whitespace-pre-line font-light">
                                {t(item.descKey)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
