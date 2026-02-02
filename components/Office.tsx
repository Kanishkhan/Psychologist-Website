import Image from "next/image";

export default function Office() {
    return (
        <section id="office" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Our Office</h2>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg font-light">
                    My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="relative h-72 md:h-96 w-full">
                    <Image
                        src="/assets/office-1.jpg"
                        alt="Therapy Office Seating Area"
                        fill
                        className="object-cover rounded-sm shadow-sm hover:shadow-xl transition duration-500"
                    />
                </div>
                <div className="relative h-72 md:h-96 w-full">
                    <Image
                        src="/assets/office-2.jpg"
                        alt="Therapy Office Natural Light"
                        fill
                        className="object-cover rounded-sm shadow-sm hover:shadow-xl transition duration-500"
                    />
                </div>
            </div>

            <div className="mt-16 text-center">
                <div className="inline-block px-8 py-3 bg-gray-100 text-gray-800 text-sm font-bold tracking-wide rounded-full uppercase border border-gray-200">
                    In-Person in Santa Monica • Secure Telehealth in CA
                </div>
            </div>
        </section>
    );
}
