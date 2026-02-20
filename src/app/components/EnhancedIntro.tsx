import { ScrollReveal } from "./ScrollReveal";

export function EnhancedIntro() {
  return (
    <section className="py-36 px-6 md:px-12 max-w-4xl mx-auto text-center bg-[#F7F4F0]">
      <ScrollReveal>
        <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B3A4B] leading-[1.35] mb-12">
          What if the best tennis trip of your life had almost{" "}
          <span className="text-[#C45D3E]">nothing to do with tennis?</span>
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-lg leading-[1.9] text-[#6B6B6B] font-light max-w-2xl mx-auto mb-16">
          Wildcourt takes tennis players to Cape Town for the trip of a lifetime. Real coaching,
          real competition, and real adventure — from ocean-view courts and world-class wine
          country to Big 5 safari. Small groups. Every detail handled. The trip your tennis
          friends will never stop asking about.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
          <div>
            <div className="font-serif text-7xl font-light text-[#C45D3E] leading-none mb-2">
              10
            </div>
            <div className="text-sm tracking-[2px] uppercase text-[#6B6B6B] font-medium">
              Nights
            </div>
          </div>
          <div>
            <div className="font-serif text-7xl font-light text-[#C45D3E] leading-none mb-2">
              3
            </div>
            <div className="text-sm tracking-[2px] uppercase text-[#6B6B6B] font-medium">
              Acts
            </div>
          </div>
          <div>
            <div className="font-serif text-7xl font-light text-[#C45D3E] leading-none mb-2">
              1
            </div>
            <div className="text-sm tracking-[2px] uppercase text-[#6B6B6B] font-medium">
              Story you'll
              <br />
              never forget
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}