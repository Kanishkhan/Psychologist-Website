import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-[var(--accent)] to-white">
            <div className="relative z-10 max-w-4xl space-y-10 animate-fade-in-up">
                {/* Sub-headline for context */}
                <p className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-500 uppercase">
                    Licensed Clinical Psychologist in Santa Monica
                </p>

                <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-none">
                    Reclaim Your <span className="italic text-[var(--primary)]">Peace</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
                    Compassionate therapy for adults navigating anxiety, trauma, and burnout.
                </p>

                <div className="pt-8">
                    <Link href="#contact" className="inline-block px-12 py-5 bg-[var(--primary)] text-white font-bold tracking-widest text-sm rounded-sm hover:bg-[var(--primary-dark)] transition duration-300 uppercase shadow-md hover:shadow-lg transform hover:-translate-y-1">
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
