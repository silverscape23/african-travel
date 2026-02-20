import { ScrollReveal } from "./ScrollReveal";

export function LearnTheLanguage() {
  const phrases = [
    {
      before: "You won't say \"that's amazing\" anymore. You'll say",
      after: "lekker.",
      sub: null,
    },
    {
      before: "You won't say \"I'm so done.\" You'll say",
      after: "gatvol.",
      sub: "And you'll mean it more.",
    },
    {
      before: "Your doubles partner isn't \"dude\" anymore. He's",
      after: "bru.",
      sub: null,
    },
    {
      before: "Saturday barbecue? No. It's a",
      after: "braai",
      sub: "now. And it's better.",
    },
    {
      before: "Someone asks if you want to go back? You don't say yes. You say",
      after: "yebo.",
      sub: null,
    },
  ];

  return (
    <section className="bg-[#0F2430] py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[5px] uppercase text-[#D4775C] font-semibold mb-4">
            Learn the Language
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#E8DDD3] leading-tight mb-20">
            After 10 days in Cape Town,
            <br />
            you won't talk the same.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-9 mb-20">
          {phrases.map((phrase, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="py-7 border-b border-[#E8DDD3]/[0.07] text-left last:border-b-0">
                <span className="block text-lg text-[#E8DDD3]/45 font-light leading-relaxed">
                  {phrase.before}
                </span>
                <span className="block mt-2 font-serif text-5xl md:text-6xl font-medium italic text-[#D4775C] tracking-wide">
                  {phrase.after}
                </span>
                {phrase.sub && (
                  <span className="block mt-1 text-base text-[#E8DDD3]/35 font-light italic">
                    {phrase.sub}
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic text-[#E8DDD3]/50 leading-relaxed">
            By the time you land, you'll already speak the language.
            <br />
            By the time you leave, you won't want to stop.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}