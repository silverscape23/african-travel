import { ScrollReveal } from "./ScrollReveal";

export function TennisSection() {
  return (
    <section className="relative bg-[#1B3A4B] py-32 px-6 overflow-hidden" id="tennis">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[5px] uppercase text-[#D4775C] font-semibold mb-4">
            The Tennis
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#E8DDD3] font-light mb-4 leading-tight">
            This is not a hit-around
            <br />
            with cocktails.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#E8DDD3]/50 font-light mb-20 max-w-2xl mx-auto">
            The tennis is real. Structured. And played in places that'll ruin your home court
            forever.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 border-[1.5px] border-[#C45D3E] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl transition-all duration-300 hover:bg-[#C45D3E] hover:scale-110">
                🎾
              </div>
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-3 font-normal">
                Level-Tiered Sessions
              </h3>
              <p className="text-sm text-[#E8DDD3]/50 leading-relaxed font-light">
                3.5 to 5.0 USTA. You play with people at your level. Americano format, coached
                drills, round robins. The structure your competitive brain craves.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 border-[1.5px] border-[#C45D3E] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl transition-all duration-300 hover:bg-[#C45D3E] hover:scale-110">
                📋
              </div>
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-3 font-normal">
                Real Coaching
              </h3>
              <p className="text-sm text-[#E8DDD3]/50 leading-relaxed font-light">
                Sessions that actually make you better. Not a vacation coach phoning it in. You'll
                go home with two new weapons and a rebuilt backhand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 border-[1.5px] border-[#C45D3E] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl transition-all duration-300 hover:bg-[#C45D3E] hover:scale-110">
                🏆
              </div>
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-3 font-normal">
                The Tournament
              </h3>
              <p className="text-sm text-[#E8DDD3]/50 leading-relaxed font-light">
                Mid-trip Americano tournament. Real competition with the group you've been bonding
                with all week. Bragging rights included. Trophies probable.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto pt-10 border-t border-[#E8DDD3]/10">
            <p className="text-base text-[#E8DDD3]/40 font-light leading-relaxed">
              Kelvin Grove Club — 11 courts, hosted Davis Cup 2019. Glen Country Club — Atlantic
              Ocean views, Twelve Apostles backdrop. Courts you'll remember long after the match is
              over.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
