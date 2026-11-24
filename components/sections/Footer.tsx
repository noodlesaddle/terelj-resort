"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const sectionLinks = [
    { href: "/gallery", key: "nav.gallery" },
    { href: "#specs", key: "nav.specs" },
    { href: "#wellness", key: "nav.wellness" },
    { href: "#market", key: "nav.market" },
    { href: "#investment", key: "nav.investment" },
    { href: "#location", key: "nav.location" },
];

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-black text-white py-20 px-8 md:px-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <p className="text-lg font-light tracking-widest mb-4">{t("nav.brand")}</p>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">{t("footer.tagline")}</p>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">{t("footer.explore")}</h3>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-400 font-light">
                            {sectionLinks.map((link) => (
                                <li key={link.key}>
                                    {link.href.startsWith("/") ? (
                                        <Link href={link.href} className="hover:text-white transition-colors">{t(link.key)}</Link>
                                    ) : (
                                        <a href={link.href} className="hover:text-white transition-colors">{t(link.key)}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">{t("footer.contact")}</h3>
                        <ul className="space-y-2 text-sm text-gray-400 font-light">
                            <li>
                                <a href="mailto:tserenbal.g@gmail.com" className="hover:text-white transition-colors">tserenbal.g@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:+97699194118" className="hover:text-white transition-colors">+976 9919 4118</a>
                            </li>
                            <li className="break-all">{t("contact.wechat")}: wxid_wu6xn6p3tid412</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4 md:justify-between text-xs text-gray-500 font-light">
                    <p>{t("gallery.note")}</p>
                    <p>&copy; 2026 Terelj Wellness Resort. {t("footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
}
