"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const allImages = [
    { id: 1, src: "/renders/Pasted Image4.jpg", title: "Southwest Aerial View", category: "Aerial" },
    { id: 2, src: "/renders/5.jpg", title: "Daytime High-Angle View", category: "Aerial" },
    { id: 3, src: "/renders/6.jpg", title: "Dusk Illumination", category: "Aerial" },
    { id: 4, src: "/renders/10.jpg", title: "Isometric Model", category: "Aerial" },
    { id: 5, src: "/renders/Pasted Image2.jpg", title: "Site Context", category: "Aerial" },
    { id: 6, src: "/renders/Pasted Image3.jpg", title: "Top-Down Plan", category: "Aerial" },
    { id: 7, src: "/renders/3.jpg", title: "Courtyard Eye-Level", category: "Exterior" },
    { id: 8, src: "/renders/4.jpg", title: "Sunset Pavilion", category: "Exterior" },
    { id: 9, src: "/renders/11.jpg", title: "Evening Patio", category: "Exterior" },
    { id: 10, src: "/renders/13.jpg", title: "Entrance Plaza", category: "Exterior" },
    { id: 11, src: "/renders/Pasted Image1.jpg", title: "Arrival Loop", category: "Exterior" },
    { id: 12, src: "/renders/7.jpg", title: "Indoor Pool Elevation", category: "Interior" },
    { id: 13, src: "/renders/14.jpg", title: "Glass Corridor", category: "Interior" },
    { id: 14, src: "/renders/15.jpg", title: "Concrete Curve", category: "Detail" },
    { id: 15, src: "/renders/16.jpg", title: "Rhythmic Wing", category: "Detail" },
    { id: 16, src: "/renders/17.jpg", title: "Interior Gallery", category: "Interior" },
    { id: 17, src: "/renders/8.jpg", title: "Distant Massing", category: "Model" },
    { id: 18, src: "/renders/9.jpg", title: "Cross-Section", category: "Model" },
    { id: 19, src: "/renders/koridor.jpg", title: "Corridor", category: "Interior" },
];

const categories = ["All", "Aerial", "Exterior", "Interior", "Detail", "Model"];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? allImages
        : allImages.filter(img => img.category === selectedCategory);

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
                    <Link href="/" className="text-lg md:text-xl font-light tracking-widest transition-colors duration-300 text-black hover:opacity-70">
                        TERELJ RESORT
                    </Link>
                    <Link href="/" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 text-black">
                        Back to Home
                    </Link>
                </div>
            </nav>

            <div className="pt-32 pb-16 px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Gallery</h1>
                        <p className="text-lg md:text-xl text-gray-600 font-light">Explore the complete visual story of Terelj Resort</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-12">
                        {categories.map((category) => (
                            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${selectedCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredImages.map((image) => (
                            <div key={image.id} className="group cursor-pointer relative aspect-[4/3] bg-gray-100 overflow-hidden" onClick={() => setSelectedImage(image.id)}>
                                <Image src={image.src} alt={image.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-light">{image.title}</p>
                                    <p className="text-white/70 text-xs font-light">{image.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl md:text-6xl font-light hover:opacity-70 transition-opacity z-10 w-12 h-12 flex items-center justify-center" onClick={() => setSelectedImage(null)}>×</button>
                    <button className="absolute left-4 md:left-10 text-white text-4xl font-light hover:opacity-70 transition-opacity z-10" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>‹</button>
                    <button className="absolute right-4 md:right-10 text-white text-4xl font-light hover:opacity-70 transition-opacity z-10" onClick={(e) => { e.stopPropagation(); handleNext(); }}>›</button>
                    <div className="relative w-full h-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={filteredImages.find(img => img.id === selectedImage)?.src || ""} alt={filteredImages.find(img => img.id === selectedImage)?.title || ""} fill className="object-contain" quality={100} />
                    </div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                        <p className="text-lg md:text-xl font-light mb-1">{filteredImages.find(img => img.id === selectedImage)?.title}</p>
                        <p className="text-sm text-white/70 font-light">{filteredImages.find(img => img.id === selectedImage)?.category}</p>
                    </div>
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white text-sm font-light">
                        {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
                    </div>
                </div>
            )}
        </main>
    );
}
