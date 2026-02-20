import { ScrollReveal } from "./ScrollReveal";

export function SafariSection() {
  return (
    <section className="relative bg-[#0F2430] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1759301542781-7c1d364dacb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbGlvbiUyMHNhZmFyaSUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzcxNDQyNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="African lion at golden hour"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 py-36 px-6 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[5px] uppercase text-[#D4775C] font-semibold mb-4">
            Days 6 – 10
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-4 font-light">
            The Wild
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-xl text-[#E8DDD3]/60 font-light max-w-2xl mx-auto mb-20">
            Fly to Kruger. Four nights in the bush. The ending that ruins every future vacation.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-16">
          {[
            {
              name: "Royal Malewane",
              tier: "Platinum",
              description: "Colonial luxury in Thornybush Reserve",
              image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWZhcmklMjBsb2RnZSUyMHRlbnQlMjBBZnJpY2F8ZW58MXx8fHwxNzcxNDQyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              name: "Saseka Tented Camp",
              tier: "Gold",
              description: "Contemporary elegance under canvas",
              image: "https://images.unsplash.com/photo-1587285758881-a3d33de87bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqZWVwJTIwQWZyaWNhbiUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MTQ0MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              name: "Simbavati Waterside",
              tier: "Silver",
              description: "Riverside serenity in Klaserie Reserve",
              image: "https://images.unsplash.com/photo-1548417153-32c109eb47f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZWxlcGhhbnQlMjBzYWZhcmklMjBLcnVnZXJ8ZW58MXx8fHwxNzcxNDQyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              name: "Sausage Tree Camp",
              tier: "Bronze",
              description: "Intimate bush life by the Olifants",
              image: "https://images.unsplash.com/photo-1587285758881-a3d33de87bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqZWVwJTIwQWZyaWNhbiUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MTQ0MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
          ].map((lodge, index) => (
            <ScrollReveal key={lodge.name} delay={index * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2430]/85 via-transparent to-transparent flex flex-col justify-end p-7">
                  <div className="absolute top-4 right-4 bg-[#C45D3E] text-white px-3.5 py-1.5 text-[10px] tracking-[2px] uppercase font-semibold">
                    {lodge.tier}
                  </div>
                  <h3 className="font-serif text-2xl mb-1.5">{lodge.name}</h3>
                  <p className="text-sm text-[#E8DDD3]/60 font-light">{lodge.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-base text-[#E8DDD3]/50 font-light max-w-3xl mx-auto leading-relaxed">
            Dawn game drives when the predators are still hunting. Sundowners in the bush. Night
            drives with spotlights revealing nocturnal hunters. Expert rangers and trackers guide
            every moment. All meals, premium drinks, and safari activities included.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}