
export default function Footer() {
    return (
        <footer className="bg-[var(--foreground)] text-[var(--background)] py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-serif mb-6 text-[var(--secondary)]">Dr. Maya Reynolds, PsyD</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Licensed Clinical Psychologist<br />
                        Helping you reclaim your peace and move forward with confidence.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-wide uppercase text-[var(--secondary)]">Location</h4>
                    <p className="text-gray-400 leading-relaxed">
                        123th Street 45 W<br />
                        Santa Monica, CA 90401
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-wide uppercase text-[var(--secondary)]">Contact</h4>
                    <p className="text-gray-400 leading-relaxed mb-2">hello@mayareynolds.com</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                    <button className="mt-4 text-[var(--secondary)] border-b border-[var(--secondary)] pb-1 hover:text-white hover:border-white transition text-sm">
                        Send a Message
                    </button>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
            </div>
        </footer>
    );
}
