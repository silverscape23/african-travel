import { ScrollReveal } from "./ScrollReveal";

export function Founders() {
  const founders = [
    {
      icon: "🏉",
      name: "Gavin",
      role: "Gavin Pfister · Cape Town",
      bio: "Before I ran your trip, I ran at people for a living. Stormers Super 12. Currie Cup. London Irish. Ulster. Worcester Warriors. Four countries. A decade of collisions. For Americans: imagine the guy organizing your tennis trip used to play in the NFL. When the tackles stopped, the ocean took over — most mornings I'm at Dunes in Noordhoek with Kreef before the sun clears the mountain. I built Extreme Scene 18 years ago because desk jobs are a kind of death for people like me. Since then I've organized everything from BMW retreats to Great White shark dives. I coach padel. I run My African Travel across Southern Africa.",
      quote:
        "\u201CThe athlete\u2019s brain never leaves. I just traded the pitch for the coastline \u2014 and the tackles for logistics that never miss.\u201D",
    },
    {
      icon: "🌊",
      name: "Kreef",
      role: "Grant Thomashoff · Cape Town",
      bio: "Howzit. Nobody's called me Grant since my mother was angry at me. Wynberg Boys' High, same school as Gav. Chemistry degree from Rhodes — same university as Jason. Built Daxi hair care from a small lab in Muizenberg 25 years ago and competed against Unilever with my own formulations. I've surfed Australia, Madagascar, rode out a hurricane in Mexico with my brother Tony. But the wave I keep coming back to is Dunes at Noordhoek with Gav before the sun's up. Two kids. Competitive tennis player. Currently opening Sweet Water — an open-air restaurant past Kommetjie towards Misty Cliffs.",
      quote:
        "\u201CMy job is simple: I know Cape Town\u2019s secrets because I\u2019ve been living them. The stuff you can\u2019t Google.\u201D",
    },
    {
      icon: "🎾",
      name: "Jason",
      role: "Florida",
      bio: "Some of the most beautiful moments in my life have taken place on a tennis court and in the ocean, surfing with Kreef and Gavin. I grew up in Hout Bay, a garden of Eden, playing on hard courts with friends and family. I never broke my racket but often my surfboard in the crystal clear waves of Llandudno and Dunes. My life now lies on the clay courts of Florida and the American dream — but my heart lies in Cape Town, the most beautiful and friendliest city in the world.",
      quote:
        "\u201CCome see for yourself. It\u2019s an experience that will change your life and your game.\u201D",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#F7F4F0]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[5px] uppercase text-[#C45D3E] font-semibold text-center mb-4">
            Who's Behind This
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B3A4B] text-center mb-6 leading-tight">
            The land of the Endless Summer.
            <br />
            The ancestral home of Federer.
            <br />
            The backyard of three boys who never really left.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {founders.map((founder, index) => (
            <ScrollReveal key={founder.name} delay={index * 0.1}>
              <div className="p-10 border-t-2 border-[#C45D3E] bg-[#FDFCFA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(27,58,75,0.08)]">
                <div className="text-4xl mb-5">{founder.icon}</div>
                <h3 className="font-serif text-4xl text-[#1B3A4B] font-normal mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm tracking-wide text-[#C45D3E] font-medium mb-5">
                  {founder.role}
                </p>
                <p className="text-base leading-relaxed text-[#6B6B6B] font-light mb-5">
                  {founder.bio}
                </p>
                <p className="font-serif text-lg italic text-[#1B3A4B] leading-snug pt-4 border-t border-[#1B3A4B]/10">
                  {founder.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
