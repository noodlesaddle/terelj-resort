"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-32 md:py-40 px-8 md:px-16 bg-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>

            <div className="relative max-w-5xl mx-auto text-center">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight whitespace-pre-line">
                        {t("contact.title")}
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-white/90 max-w-3xl mx-auto">
                        {t("contact.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a href="mailto:tserenbal.g@gmail.com">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto font-light"
                            >
                                {t("contact.requestDeck")}
                            </Button>
                        </a>
                        <a href="tel:+97699194118">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black text-lg px-8 py-6 h-auto font-light"
                            >
                                {t("contact.scheduleCall")}
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
                        <div>
                            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">{t("contact.email")}</div>
                            <a href="mailto:tserenbal.g@gmail.com" className="text-lg hover:text-white/80 transition-colors">
                                tserenbal.g@gmail.com
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">{t("contact.phone")}</div>
                            <a href="tel:+97699194118" className="text-lg hover:text-white/80 transition-colors">
                                +976 9919 4118
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">{t("contact.location")}</div>
                            <p className="text-lg">
                                Terelj National Park, Mongolia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
