import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="text-xl md:text-2xl font-bold tracking-widest font-serif text-[var(--foreground)] uppercase">
                <Link href="/">Dr. Maya Reynolds</Link>
            </div>
            <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-bold text-gray-800">
                <Link href="#services" className="hover:text-[var(--primary)] transition duration-300">Services</Link>
                <Link href="#about" className="hover:text-[var(--primary)] transition duration-300">About</Link>
                <Link href="#office" className="hover:text-[var(--primary)] transition duration-300">Our Office</Link>
                <Link href="#contact" className="hover:text-[var(--primary)] transition duration-300">Contact</Link>
            </div>
            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
                <button className="text-gray-900 font-bold">Menu</button>
            </div>
        </nav>
    );
}
