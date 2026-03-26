"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const allImages = [
    { id: 1, src: "/renders/Pasted Image4.jpg", titleKey: "gpage.1", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 2, src: "/renders/5.jpg", titleKey: "gpage.2", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 3, src: "/renders/6.jpg", titleKey: "gpage.3", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 4, src: "/renders/10.jpg", titleKey: "gpage.4", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 5, src: "/renders/Pasted Image2.jpg", titleKey: "gpage.5", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 6, src: "/renders/Pasted Image3.jpg", titleKey: "gpage.6", categoryKey: "gcat.aerial", filterKey: "aerial" },
    { id: 7, src: "/renders/3.jpg", titleKey: "gpage.7", categoryKey: "gcat.exterior", filterKey: "exterior" },
    { id: 8, src: "/renders/4.jpg", titleKey: "gpage.8", categoryKey: "gcat.exterior", filterKey: "exterior" },
    { id: 9, src: "/renders/11.jpg", titleKey: "gpage.9", categoryKey: "gcat.exterior", filterKey: "exterior" },
    { id: 10, src: "/renders/13.jpg", titleKey: "gpage.10", categoryKey: "gcat.exterior", filterKey: "exterior" },
    { id: 11, src: "/renders/Pasted Image1.jpg", titleKey: "gpage.11", categoryKey: "gcat.exterior", filterKey: "exterior" },
    { id: 12, src: "/renders/7.jpg", titleKey: "gpage.12", categoryKey: "gcat.interior", filterKey: "interior" },
    { id: 13, src: "/renders/14.jpg", titleKey: "gpage.13", categoryKey: "gcat.interior", filterKey: "interior" },
    { id: 14, src: "/renders/15.jpg", titleKey: "gpage.14", categoryKey: "gcat.detail", filterKey: "detail" },
    { id: 15, src: "/renders/16.jpg", titleKey: "gpage.15", categoryKey: "gcat.detail", filterKey: "detail" },
    { id: 16, src: "/renders/17.jpg", titleKey: "gpage.16", categoryKey: "gcat.interior", filterKey: "interior" },
    { id: 17, src: "/renders/8.jpg", titleKey: "gpage.17", categoryKey: "gcat.model", filterKey: "model" },
    { id: 18, src: "/renders/9.jpg", titleKey: "gpage.18", categoryKey: "gcat.model", filterKey: "model" },
    { id: 19, src: "/renders/koridor.jpg", titleKey: "gpage.19", categoryKey: "gcat.interior", filterKey: "interior" },
];

const categoryFilters = [
    { key: "gcat.all", filter: "all" },
    { key: "gcat.aerial", filter: "aerial" },
    { key: "gcat.exterior", filter: "exterior" },
    { key: "gcat.interior", filter: "interior" },
    { key: "gcat.detail", filter: "detail" },
    { key: "gcat.model", filter: "model" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const { t, language, setLanguage } = useLanguage();

    const filteredImages = selectedFilter === "all"
        ? allImages
        : allImages.filter(img => img.filterKey === selectedFilter);

    const handlePrevious = () => {
        if (selectedImage === null) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[prevIndex].id);
    };

    const handleNext = () => {
        if (selectedImage === null) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredImages[nextIndex].id);
    };

    return (
        <main className="min-h-screen bg-white">
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 md:py-8 flex justify-between items-center">
                    <Link href="/" className="text-lg md:text-xl font-light tracking-widest text-black hover:opacity-70 transition-opacity">
                        {language === "ja" ? "テレルジリゾート" : "TERELJ RESORT"}
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2 items-center">
                            <button onClick={() => setLanguage("en")} className={`text-sm font-light transition-all ${language === "en" ? "text-black" : "text-gray-400"}`}>EN</button>
                            <span className="text-gray-300">|</span>
                            <button onClick={() => setLanguage("ja")} className={`text-sm font-light transition-all ${language === "ja" ? "text-black" : "text-gray-400"}`}>日本語</button>
                        </div>
                        <Link href="/" className="text-sm font-light hover:opacity-70 transition-opacity text-black">
                            {t("gpage.back")}
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-16 px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">{t("gpage.title")}</h1>
                        <p className="text-lg md:text-xl text-gray-600 font-light">{t("gpage.subtitle")}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-12">
                        {categoryFilters.map(({ key, filter }) => (
                            <button key={filter} onClick={() => setSelectedFilter(filter)} className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${selectedFilter === filter ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                                {t(key)}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredImages.map((image) => (
                            <div key={image.id} className="group cursor-pointer relative aspect-[4/3] bg-gray-100 overflow-hidden" onClick={() => setSelectedImage(image.id)}>
                                <Image src={image.src} alt={t(image.titleKey)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-light">{t(image.titleKey)}</p>
                                    <p className="text-white/70 text-xs font-light">{t(image.categoryKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl font-light hover:opacity-70 z-10" onClick={() => setSelectedImage(null)}>×</button>
                    <button className="absolute left-4 md:left-10 text-white text-4xl font-light hover:opacity-70 z-10" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>‹</button>
                    <button className="absolute right-4 md:right-10 text-white text-4xl font-light hover:opacity-70 z-10" onClick={(e) => { e.stopPropagation(); handleNext(); }}>›</button>
                    <div className="relative w-full h-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={filteredImages.find(img => img.id === selectedImage)?.src || ""} alt={t(filteredImages.find(img => img.id === selectedImage)?.titleKey || "")} fill className="object-contain" quality={100} />
                    </div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                        <p className="text-lg md:text-xl font-light mb-1">{t(filteredImages.find(img => img.id === selectedImage)?.titleKey || "")}</p>
                        <p className="text-sm text-white/70 font-light">{t(filteredImages.find(img => img.id === selectedImage)?.categoryKey || "")}</p>
                    </div>
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white text-sm font-light">
                        {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
                    </div>
                </div>
            )}
        </main>
    );
}
