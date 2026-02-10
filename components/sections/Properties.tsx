"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const properties = [
    {
        id: 1,
        name: "Mountain Villa",
        location: "Terelj National Park",
        image: "/renders/property-1.png",
    },
    {
        id: 2,
        name: "Forest Retreat",
        location: "Terelj Valley",
        image: "/renders/property-2.png",
    },
    {
        id: 3,
        name: "River House",
        location: "Tuul River",
        image: "/renders/property-3.png",
    },
];

export default function Properties() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
                    Explore Our Properties
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Discover exceptional residences designed for modern living
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <Card key={property.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                            <div className="relative h-80 bg-gray-200">
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-light mb-2">{property.name}</h3>
                                <p className="text-gray-600">{property.location}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
