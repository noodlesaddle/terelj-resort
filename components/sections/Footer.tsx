import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Get Our Digital Catalog
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Discover the innovative concept and explore beautifully designed properties
                    </p>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        Request Now
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
                    <div>
                        <h3 className="text-xl font-light mb-4">About</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Our Story</a></li>
                            <li><a href="#" className="hover:text-white">Team</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-light mb-4">Properties</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">All Properties</a></li>
                            <li><a href="#" className="hover:text-white">Upcoming</a></li>
                            <li><a href="#" className="hover:text-white">Availability</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-light mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Brochure</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-light mb-4">Connect</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Facebook</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 Terelj Resort. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
