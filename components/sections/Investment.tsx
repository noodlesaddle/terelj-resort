"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

// Investment amount, deal structure and projections are deliberately kept off the site
// and shared only through the investment deck.
const keyFigures = [
    { value: "5", labelKey: "invest.hectares" },
    { value: "47", labelKey: "invest.villas" },
    { value: "8", labelKey: "invest.pods" },
    { value: "3", labelKey: "invest.phases" },
];

export default function Investment() {
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

    const highlights = [
        { titleKey: "invest.primeLocation", descKey: "invest.primeLocation.desc" },
        { titleKey: "invest.growingTourism", descKey: "invest.growingTourism.desc" },
        { titleKey: "invest.uniqueOffering", descKey: "invest.uniqueOffering.desc" },
        { titleKey: "invest.phased", descKey: "invest.phased.desc" },
        { titleKey: "invest.packages", descKey: "invest.packages.desc" },
        { titleKey: "invest.yearRound", descKey: "invest.yearRound.desc" },
    ];

    return (
        <section ref={sectionRef} id="investment" className="py-28 md:py-40 px-8 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t("invest.title")}</h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">{t("invest.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
                    {highlights.map((h, index) => (
                        <div key={index} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="h-full p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{t(h.titleKey)}</h3>
                                <p className="text-base font-light text-gray-600 leading-relaxed">{t(h.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                    {keyFigures.map((f) => (
                        <div key={f.labelKey} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{f.value}</div>
                            <div className="text-sm md:text-base text-gray-600 font-light">{t(f.labelKey)}</div>
                        </div>
                    ))}
                </div>

                <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
                    <p className="text-base md:text-lg text-gray-600 font-light mb-8">{t("invest.deckNote")}</p>
                    <a href="mailto:tserenbal.g@gmail.com?subject=Terelj%20Wellness%20Resort%20%E2%80%94%20Investment%20Deck%20Request">
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 h-auto font-light">
                            {t("contact.requestDeck")}
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
