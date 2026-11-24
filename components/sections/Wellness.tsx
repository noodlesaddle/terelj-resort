"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

type Phase = "P1" | "P2" | "P3";

// Activity list and phasing from the investment booklet, page 9.
const categories: { id: string; items: Phase[] }[] = [
    { id: "movement", items: ["P1", "P1", "P1"] },
    { id: "heat", items: ["P1", "P1", "P2", "P2", "P3"] },
    { id: "therapies", items: ["P1", "P2", "P2", "P2", "P2"] },
    { id: "food", items: ["P1", "P1", "P2", "P2"] },
    { id: "mind", items: ["P1", "P1", "P1", "P2"] },
    { id: "nature", items: ["P1", "P1", "P3", "P3"] },
];

const packages = ["cityReset", "steppeDetox", "winterSauna"];

export default function Wellness() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        const timeout = setTimeout(() => setIsVisible(true), 300);
        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, []);

    const reveal = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

    return (
        <section ref={sectionRef} id="wellness" className="py-28 md:py-40 px-8 md:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${reveal}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t("wellness.title")}</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-4">{t("wellness.subtitle")}</p>
                    <p className="text-sm text-gray-500 font-light max-w-3xl mx-auto">{t("wellness.phaseKey")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 md:mb-32">
                    {categories.map((cat, index) => (
                        <div key={cat.id} className={`bg-white p-8 rounded-lg transition-all duration-700 ${reveal}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight">{t(`wellness.cat.${cat.id}`)}</h3>
                            <ul className="space-y-3">
                                {cat.items.map((phase, i) => (
                                    <li key={i} className="flex items-start justify-between gap-4 text-base font-light text-gray-700">
                                        <span>{t(`wellness.${cat.id}.${i + 1}`)}</span>
                                        <span className="flex-shrink-0 text-xs font-normal text-gray-500 border border-gray-300 rounded px-1.5 py-0.5 mt-0.5">{phase}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={`text-center mb-12 transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "400ms" }}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{t("wellness.packages")}</h3>
                    <p className="text-base md:text-lg text-gray-600 font-light">{t("wellness.packagesSubtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {packages.map((id, index) => (
                        <div key={id} className={`bg-black text-white p-8 rounded-lg transition-all duration-700 ${reveal}`} style={{ transitionDelay: `${(index + 5) * 100}ms` }}>
                            <div className="flex items-baseline justify-between gap-4 mb-2">
                                <h4 className="text-2xl font-bold tracking-tight">{t(`wellness.pkg.${id}.name`)}</h4>
                                <span className="text-sm font-light text-white/70 flex-shrink-0">{t(`wellness.pkg.${id}.nights`)}</span>
                            </div>
                            <p className="text-sm font-light text-white/60 mb-6">{t(`wellness.pkg.${id}.for`)}</p>
                            <p className="text-base font-light text-white/90 leading-relaxed">{t(`wellness.pkg.${id}.desc`)}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-500 font-light max-w-3xl mx-auto">{t("wellness.disclaimer")}</p>
            </div>
        </section>
    );
}
