import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, speed = 0.5 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />
    </div>
  );
}