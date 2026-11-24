"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// Replace with your Cloudflare Stream video URL after uploading
// e.g. https://customer-xxx.cloudflarestream.com/VIDEO_ID/downloads/default.mp4
const VIDEO_URL = "https://o8qobnfpcwag5t2l.public.blob.vercel-storage.com/resort_Draft%201.mp4";

export default function PropertyHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={VIDEO_URL} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className={`absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.3em] font-light mb-4 md:mb-6">
                    {t("hero.eyebrow")}
                </p>
                <h1 className="text-white text-[1.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-tight mb-4 md:mb-6">
                    {t("hero.title")}
                </h1>
                <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                    {t("hero.subtitle")}
                </p>
            </div>
        </section>
    );
}
