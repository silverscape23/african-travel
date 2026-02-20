import { ScrollReveal } from "./ScrollReveal";

export function BuiltForYou() {
  return (
    <section className="bg-[#1B3A4B] py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <ScrollReveal>
            <p className="text-xs tracking-[5px] uppercase text-[#D4775C] font-semibold mb-4">
              Built for You
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-6xl text-[#E8DDD3] font-light leading-tight mb-7">
              This isn't for <em className="text-[#D4775C] italic">everyone.</em>
              <br />
              It's for someone.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-[#E8DDD3]/50 font-light leading-relaxed">
              Wildcourt is designed for tennis players who want way more than tennis — and way more
              than a vacation. Small groups. Personal attention. The kind of trip that splits your
              life into before and after.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column - Personas */}
        <div className="flex flex-col gap-5 justify-center">
          <ScrollReveal delay={0.1}>
            <div className="p-8 border-l-2 border-[#C45D3E] bg-[#E8DDD3]/[0.04] transition-colors duration-300 hover:bg-[#E8DDD3]/[0.08]">
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-2 font-normal">
                The Social Player
              </h3>
              <p className="text-base text-[#E8DDD3]/50 leading-relaxed font-light">
                You play 3-4 times a week. Your tennis friends are your closest friends. You've
                been looking for the trip that brings your whole group somewhere extraordinary.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 border-l-2 border-[#C45D3E] bg-[#E8DDD3]/[0.04] transition-colors duration-300 hover:bg-[#E8DDD3]/[0.08]">
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-2 font-normal">
                The Tennis Couple
              </h3>
              <p className="text-base text-[#E8DDD3]/50 leading-relaxed font-light">
                One of you lives for tennis. The other wants wine, culture, and adventure. This is
                the first trip that's finally both of yours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 border-l-2 border-[#C45D3E] bg-[#E8DDD3]/[0.04] transition-colors duration-300 hover:bg-[#E8DDD3]/[0.08]">
              <h3 className="font-serif text-2xl text-[#E8DDD3] mb-2 font-normal">
                The Ready-for-Something-Different Player
              </h3>
              <p className="text-base text-[#E8DDD3]/50 leading-relaxed font-light">
                You've done the resort trips. You've done the tennis camps. You want something
                nobody in your club has ever done. You found it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
