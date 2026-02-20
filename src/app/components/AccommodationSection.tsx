import { ScrollReveal } from "./ScrollReveal";

export function AccommodationSection() {
  const hotels = [
    {
      name: "The Silo Hotel",
      tier: "Platinum",
      description: "Art-filled sanctuary above MOCAA. Pillowed-glass windows. The kind of room you photograph before you unpack.",
      image: "https://images.unsplash.com/photo-1726381552645-c4e5645366f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHdhdGVyZnJvbnQlMjBsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzE0NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Cape Grace",
      tier: "Gold",
      description: "Five-star harbor elegance. 112 suites with marina, mountain, or sea views. Warmth you don't expect from a hotel this polished.",
      image: "https://images.unsplash.com/photo-1726381552645-c4e5645366f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHdhdGVyZnJvbnQlMjBsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzE0NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "The V&A Hotel",
      tier: "Silver",
      description: "Modern luxury meets historic architecture. Waterfront views. Everything you need, nothing you don't.",
      image: "https://images.unsplash.com/photo-1726381552645-c4e5645366f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHdhdGVyZnJvbnQlMjBsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzE0NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Commodore Hotel",
      tier: "Bronze",
      description: "Classic Waterfront elegance. Smart, comfortable, perfectly located. More budget for wine.",
      image: "https://images.unsplash.com/photo-1726381552645-c4e5645366f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHdhdGVyZnJvbnQlMjBsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzE0NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="bg-[#F7F4F0] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[5px] uppercase text-[#C45D3E] font-semibold text-center mb-4">
            Where You Stay
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1B3A4B] font-light text-center mb-4 leading-tight">
            Five nights at the
            <br />
            V&amp;A Waterfront.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#6B6B6B] font-light text-center mb-20 max-w-2xl mx-auto">
            Choose your level. Every option puts you steps from the courts, the harbor, and the mountain.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotels.map((hotel, index) => (
            <ScrollReveal key={hotel.name} delay={index * 0.1}>
              <div className="group bg-[#FDFCFA] overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(27,58,75,0.12)]">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#C45D3E] text-white px-3.5 py-1.5 text-[10px] tracking-[2px] uppercase font-semibold">
                    {hotel.tier}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#1B3A4B] mb-2 font-medium">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed font-light">
                    {hotel.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}