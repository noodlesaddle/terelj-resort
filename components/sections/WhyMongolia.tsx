"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// Market figures from the investment booklet, pages 4–5. Sources are listed in "why.sources".
const stats = [
    { number: "847,170", labelKey: "why.visitors", sublabelKey: "why.visitorsSubtitle" },
    { number: "$1.6B", labelKey: "why.revenue", sublabelKey: "why.revenueSubtitle" },
    { number: "2M", labelKey: "why.target", sublabelKey: "why.targetSubtitle" },
    { number: "1.5–2 h", labelKey: "why.fromCapital", sublabelKey: "why.fromCapitalSubtitle" },
];

const wellnessStats = [
    { number: "+11.4%", labelKey: "why.wellness.tourism" },
    { number: "+15.6%", labelKey: "why.wellness.asia" },
    { number: "+10.4%", labelKey: "why.wellness.springs" },
    { number: "$7.5T", labelKey: "why.wellness.economy" },
];

const tereljPoints = ["why.terelj.1", "why.terelj.2", "why.terelj.3", "why.terelj.4", "why.terelj.5"];

const markets = ["china", "korea", "japan", "us", "europe", "australia"];

export default function WhyMongolia() {
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
        <section ref={sectionRef} id="market" className="relative py-32 md:py-48 px-8 md:px-20 bg-black text-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className={`text-center mb-20 transition-all duration-1000 ${reveal}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t("why.title")}</h2>
                    <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto">{t("why.subtitle")}</p>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "200ms" }}>
                    {stats.map((stat) => (
                        <div key={stat.labelKey} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                            <div className="whitespace-nowrap text-3xl md:text-4xl xl:text-5xl font-bold mb-2">{stat.number}</div>
                            <div className="text-sm md:text-base font-light mb-1">{t(stat.labelKey)}</div>
                            <div className="text-xs text-white/60 font-light">{t(stat.sublabelKey)}</div>
                        </div>
                    ))}
                </div>
                <p className={`text-base md:text-lg font-light text-white/70 max-w-4xl mx-auto text-center mb-28 transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "300ms" }}>
                    {t("why.momentum")}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-28">
                    <div className={`transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "400ms" }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">{t("why.terelj")}</h3>
                        <ul className="space-y-4">
                            {tereljPoints.map((key) => (
                                <li key={key} className="flex items-start text-lg font-light text-white/90">
                                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                                    <span>{t(key)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "550ms" }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">{t("why.wellness")}</h3>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {wellnessStats.map((s) => (
                                <div key={s.labelKey}>
                                    <div className="text-3xl md:text-4xl font-bold mb-1">{s.number}</div>
                                    <div className="text-sm font-light text-white/70">{t(s.labelKey)}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-base font-light text-white/80 leading-relaxed">{t("why.wellness.note")}</p>
                    </div>
                </div>

                <div className={`mb-16 transition-all duration-1000 ${reveal}`} style={{ transitionDelay: "700ms" }}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">{t("why.markets")}</h3>
                    <div className="hidden md:grid grid-cols-[1fr_2fr_2fr] gap-6 pb-3 border-b border-white/30 text-xs uppercase tracking-wider text-white/50">
                        <div />
                        <div>{t("why.markets.access")}</div>
                        <div>{t("why.markets.offer")}</div>
                    </div>
                    {markets.map((m) => (
                        <div key={m} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-2 md:gap-6 py-5 border-b border-white/10">
                            <div className="text-lg font-normal">{t(`why.market.${m}`)}</div>
                            <div className="text-base font-light text-white/70">{t(`why.market.${m}.access`)}</div>
                            <div className="text-base font-light text-white/90">{t(`why.market.${m}.offer`)}</div>
                        </div>
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">{t("why.near.title")}</h4>
                            <p className="text-base font-light text-white/90 leading-relaxed">{t("why.near.desc")}</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">{t("why.far.title")}</h4>
                            <p className="text-base font-light text-white/90 leading-relaxed">{t("why.far.desc")}</p>
                        </div>
                    </div>
                </div>

                <p className="text-xs font-light text-white/40 leading-relaxed">{t("why.sources")}</p>
            </div>
        </section>
    );
}
