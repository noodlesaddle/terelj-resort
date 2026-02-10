import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />

            <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
                    Exceptional Design,
                    <br />
                    Extraordinary Living
                </h1>
                <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
                    Every detail, from the architecture to the experience, is crafted for unparalleled excellence.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
                        Explore Properties
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        Get Brochure
                    </Button>
                </div>
            </div>
        </section>
    );
}
