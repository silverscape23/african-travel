interface ActParallaxProps {
  image: string;
  actLabel: string;
}

export function ActParallax({ image, actLabel }: ActParallaxProps) {
  return (
    <div
      className="relative h-[40vh] md:h-[60vh] min-h-[300px] bg-scroll md:bg-fixed bg-bottom bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#0F2430]/30" />
      <div className="absolute bottom-12 left-6 md:left-12 font-serif text-lg italic text-white/70 tracking-wide">
        {actLabel}
      </div>
    </div>
  );
}
