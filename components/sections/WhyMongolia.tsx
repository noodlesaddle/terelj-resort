"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhyMongolia() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: "846K", labelKey: "why.visitors", sublabelKey: "why.visitorsSubtitle" },
        { number: "$2.1B", labelKey: "why.revenue", sublabelKey: "why.revenueSubtitle" },
        { number: "#1", labelKey: "why.destination", sublabelKey: "why.destinationSubtitle" },
        { number: "60 min", labelKey: "why.fromCapital", sublabelKey: "why.fromCapitalSubtitle" },
    ];

    const mongoliaPoints = ["why.mongolia.1", "why.mongolia.2", "why.mongolia.3", "why.mongolia.4", "why.mongolia.5", "why.mongolia.6"];
    const tereljPoints = ["why.terelj.1", "why.terelj.2", "why.terelj.3", "why.terelj.4", "why.terelj.5", "why.terelj.6"];

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 px-8 md:px-20 bg-black text-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t("why.title")}</h2>
                    <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto">{t("why.subtitle")}</p>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                            <div className="text-sm md:text-base font-light mb-1">{t(stat.labelKey)}</div>
                            <div className="text-xs text-white/60 font-light">{t(stat.sublabelKey)}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">{t("why.mongolia")}</h3>
                        <ul className="space-y-4">
                            {mongoliaPoints.map((key, i) => (
                                <li key={i} className="flex items-start text-lg font-light text-white/90">
                                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                                    <span>{t(key)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '550ms' }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">{t("why.terelj")}</h3>
                        <ul className="space-y-4">
                            {tereljPoints.map((key, i) => (
                                <li key={i} className="flex items-start text-lg font-light text-white/90">
                                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                                    <span>{t(key)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`p-8 md:p-12 bg-white/5 rounded-lg border border-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
                    <h4 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">{t("why.insights")}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg font-light text-white/80">
                        <div>
                            <p className="mb-4"><strong className="text-white font-normal">{t("why.insights.growth.label")}</strong> {t("why.insights.growth.text")}</p>
                            <p><strong className="text-white font-normal">{t("why.insights.luxury.label")}</strong> {t("why.insights.luxury.text")}</p>
                        </div>
                        <div>
                            <p className="mb-4"><strong className="text-white font-normal">{t("why.insights.demand.label")}</strong> {t("why.insights.demand.text")}</p>
                            <p><strong className="text-white font-normal">{t("why.insights.gov.label")}</strong> {t("why.insights.gov.text")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
