"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const resortSpecs = [
    { labelKey: "specs.name", valueKey: "specs.nameValue" },
    { labelKey: "specs.landArea", valueKey: "specs.landAreaValue" },
    { labelKey: "specs.accommodation", valueKey: "specs.accommodationValue" },
    { labelKey: "specs.phasing", valueKey: "specs.phasingValue" },
    { labelKey: "specs.location", valueKey: "specs.locationValue" },
];

const phases = [
    { id: "phase1", noteKey: null },
    { id: "phase2", noteKey: null },
    { id: "phase3", noteKey: "specs.phase3.note" },
];

export default function PropertySpecs() {
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

    const reveal = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

    return (
        <section ref={sectionRef} id="specs" className="py-28 md:py-40 px-8 md:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${reveal}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t("specs.title")}</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">{t("specs.subtitle")}</p>
                </div>

                <dl className="mb-24 md:mb-32 space-y-8 md:space-y-10">
                    {resortSpecs.map((spec, index) => (
                        <div key={spec.labelKey} className={`border-b border-gray-200 pb-6 md:pb-8 transition-all duration-700 ${reveal}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <dt className="text-xs md:text-sm text-gray-500 mb-3 tracking-wider uppercase">{t(spec.labelKey)}</dt>
                            <dd className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">{t(spec.valueKey)}</dd>
                        </div>
                    ))}
                </dl>

                <div className="mb-16">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-10 tracking-tight transition-all duration-700 ${reveal}`} style={{ transitionDelay: "300ms" }}>
                        {t("specs.phases")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {phases.map((phase, index) => (
                            <div key={phase.id} className={`bg-gray-50 p-8 rounded-lg transition-all duration-700 hover:shadow-lg ${reveal}`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
                                <div className="text-xs md:text-sm text-gray-500 tracking-wider uppercase mb-4">{t(`specs.${phase.id}.label`)}</div>
                                <div className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t(`specs.${phase.id}.count`)}</div>
                                <p className="text-base font-light text-gray-600 leading-relaxed">{t(`specs.${phase.id}.desc`)}</p>
                                {phase.noteKey && (
                                    <p className="mt-4 pt-4 border-t border-gray-200 text-sm font-light text-gray-500 leading-relaxed">{t(phase.noteKey)}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`border border-dashed border-gray-300 rounded-lg p-8 transition-all duration-700 ${reveal}`} style={{ transitionDelay: "800ms" }}>
                    <h4 className="text-lg md:text-xl font-bold mb-3 tracking-tight">{t("specs.later.title")}</h4>
                    <p className="text-base font-light text-gray-600 leading-relaxed">{t("specs.later.desc")}</p>
                </div>
            </div>
        </section>
    );
}
