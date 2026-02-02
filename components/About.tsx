
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-[var(--accent)]/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative h-[600px] md:h-[500px]">
                    <Image
                        src="/assets/profile.jpg"
                        alt="Dr. Maya Reynolds"
                        fill
                        className="object-contain rounded-sm drop-shadow-xl"
                        priority
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Meet Dr. Maya Reynolds</h2>
                    <div className="text-gray-800 leading-loose space-y-6 text-lg font-light">
                        <p>
                            I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                        </p>
                        <p>
                            Many of the people I work with are high-achieving and self-aware—but internally feel exhausted. I integrate evidence-based methods such as CBT, EMDR, and mindfulness to help you understand both the emotional and physiological sides of what you’re experiencing.
                        </p>
                    </div>
                    <button className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-700 transition duration-300 uppercase tracking-widest text-xs font-bold shadow-md">
                        Learn More About Me
                    </button>
                </div>
            </div>
        </section>
    );
}
