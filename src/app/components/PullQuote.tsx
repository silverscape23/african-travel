import { ScrollReveal } from "./ScrollReveal";

export function PullQuote() {
  return (
    <section className="relative py-36 px-6 text-center bg-[#F7F4F0]">
      {/* Giant Quote Mark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-serif text-[220px] text-[#C45D3E] opacity-10 leading-none pointer-events-none">
        "
      </div>

      <ScrollReveal>
        <p className="relative font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1B3A4B] leading-[1.4] max-w-4xl mx-auto mb-7">
          He comes for the tennis. She comes for the adventure. They both come home saying it was
          the best trip they've ever taken.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-xs tracking-[4px] uppercase text-[#C45D3E] font-semibold">
          The Wildcourt Promise
        </p>
      </ScrollReveal>
    </section>
  );
}
