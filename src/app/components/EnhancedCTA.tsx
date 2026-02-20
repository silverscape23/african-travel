import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";

export function EnhancedCTA() {
  return (
    <section className="py-40 px-6 text-center bg-[#F7F4F0]" id="inquire">
      <ScrollReveal>
        <p className="text-xs tracking-[5px] uppercase text-[#C45D3E] font-semibold mb-4">
          Limited Departures · 2026
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#1B3A4B] leading-tight mb-6">
          Ready to change
          <br />
          <em className="text-[#C45D3E] italic">your court?</em>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-lg text-[#6B6B6B] font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Small groups. Handcrafted itineraries. 10 nights in the most beautiful tennis destination
          you've never heard of. Spots don't wait.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <a
          href="mailto:gavin@extremescene.co.za"
          className="inline-block bg-[#C45D3E] text-white px-14 py-5 text-xs tracking-[3.5px] uppercase font-semibold transition-all duration-[400ms] hover:bg-[#1B3A4B] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(27,58,75,0.25)]"
        >
          Request Your Invitation
        </a>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-7 text-sm text-[#6B6B6B] font-light italic">
          We'll reply within 48 hours with everything you need to know.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-16 pt-12 border-t border-[#1B3A4B]/10 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-xs tracking-[2px] uppercase text-[#6B6B6B] mb-1">Duration</div>
            <div className="font-serif text-xl text-[#1B3A4B]">10 Nights</div>
          </div>
          <div className="text-center">
            <div className="text-xs tracking-[2px] uppercase text-[#6B6B6B] mb-1">Group Size</div>
            <div className="font-serif text-xl text-[#1B3A4B]">8 – 16 Players</div>
          </div>
          <div className="text-center">
            <div className="text-xs tracking-[2px] uppercase text-[#6B6B6B] mb-1">Season</div>
            <div className="font-serif text-xl text-[#1B3A4B]">Oct – April</div>
          </div>
          <div className="text-center">
            <div className="text-xs tracking-[2px] uppercase text-[#6B6B6B] mb-1">Level</div>
            <div className="font-serif text-xl text-[#1B3A4B]">3.5 – 5.0 USTA</div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}