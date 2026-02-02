import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Anxiety & Panic",
            desc: "Overcome constant worry, tension, and that feeling of always bracing for something to go wrong. Find calm in your body and mind.",
            image: "/assets/service-1.jpg"
        },
        {
            title: "Trauma & PTSD",
            desc: "Heal from past experiences that continue to affect your relationships, confidence, and sense of safety using evidence-based methods.",
            image: "/assets/service-2.png"
        },
        {
            title: "Burnout & Stress",
            desc: "Reconnect with yourself after years of pushing through high pressure. Develop more sustainable ways of living and working.",
            image: "/assets/service-3.png"
        },
    ];

    return (
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-gray-900 tracking-wide">My Approach to Healing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-8 border border-gray-200 bg-white shadow-sm hover:shadow-xl transition duration-500 rounded-sm group">
                        <div className="w-full h-56 bg-[var(--accent)] mb-8 flex items-center justify-center text-[var(--primary)] opacity-80 group-hover:opacity-100 transition relative overflow-hidden">
                            {s.image ? (
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-5xl font-serif italic text-[#557164]">{i + 1}</span>
                            )}
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">{s.title}</h3>
                        <p className="text-gray-700 mb-8 leading-relaxed text-base">{s.desc}</p>
                        <button className="text-[var(--primary)] font-bold border-b-2 border-transparent hover:border-[var(--primary)] transition uppercase text-xs tracking-widest pb-1">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
