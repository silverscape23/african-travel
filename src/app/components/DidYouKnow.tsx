import { ScrollReveal } from "./ScrollReveal";

export function DidYouKnow() {
  const facts = [
    {
      title: "The Fifth Slam",
      description:
        "In the 1970s, the South African Open was called the 'Fifth Grand Slam' — its field was often stronger than Australia's. This country didn't discover tennis. Tennis discovered itself here.",
      image:
        "https://images.unsplash.com/photo-1761286753856-2f39b4413c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdGVubmlzJTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNTI1Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Federer's Unfinished Business",
      description:
        "Roger Federer recently admitted he still hasn't summited Table Mountain — calling the peak a 'must' and his main reason to return to Cape Town. If it's on Roger's bucket list, it should be on yours.",
      image:
        "https://images.unsplash.com/photo-1660463530535-b8ba6a79ee37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXIlMjBhdGhsZXRpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUyNTI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Older Than Roland Garros",
      description:
        "Founded in 1891, the South African Open is actually older than both the French Open and the Australian Open. This isn't a new tennis country. It's one of the originals.",
      image:
        "https://images.unsplash.com/photo-1680448450835-c9ab8b461f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdGVubmlzJTIwcmFja2V0JTIwY291cnQlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc3MTUyNTI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "The Giant Killer",
      description:
        "South Africa's Kevin Curren became the first player to defeat both John McEnroe and Jimmy Connors at the same Grand Slam. The tennis DNA here is real.",
      image:
        "https://images.unsplash.com/photo-1714802065570-4dda686ca3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZW5uaXMlMjBjaGFtcGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUyNTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="bg-[#0F2430] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-[10px] tracking-[5px] uppercase text-[#C45D3E] font-semibold mb-4">
              Did You Know
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#E8DDD3] font-light leading-tight max-w-3xl mx-auto">
              South Africa's tennis heritage runs deeper than you think.
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {facts.map((fact, index) => (
            <ScrollReveal key={fact.title} delay={index * 0.1}>
              <div className="text-center group">
                {/* Circular Photo */}
                <div className="relative w-[85px] h-[85px] mx-auto mb-6">
                  {/* Terracotta border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#C45D3E]" />
                  {/* Photo container */}
                  <div className="absolute inset-[3px] rounded-full overflow-hidden">
                    <img
                      src={fact.image}
                      alt={fact.title}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-[22px] text-[#E8DDD3] mb-3 font-normal">
                  {fact.title}
                </h3>

                {/* Body Text */}
                <p className="text-[13px] leading-relaxed text-[#E8DDD3]/45 font-light">
                  {fact.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
