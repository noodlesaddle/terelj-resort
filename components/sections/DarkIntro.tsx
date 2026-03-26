"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DarkIntro() {
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

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 px-8 md:px-20 bg-black text-white overflow-hidden">
            <div className="relative max-w-5xl mx-auto">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tight leading-tight whitespace-pre-line">
                        {t("intro.title")}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-white/90 whitespace-pre-line">
                        {t("intro.subtitle")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t("intro.climate.title")}</h3>
                            <p className="text-lg text-white/70 font-light leading-relaxed">{t("intro.climate.desc")}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t("intro.work.title")}</h3>
                            <p className="text-lg text-white/70 font-light leading-relaxed">{t("intro.work.desc")}</p>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-base md:text-lg text-white/60 font-light">{t("intro.footer")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
