import { motion } from "motion/react";
import { ReactNode } from "react";

interface DaySectionProps {
  day: string;
  title: string;
  description: string | ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
}

export function DaySection({
  day,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  bgColor = "#F7F4F0",
}: DaySectionProps) {
  const isDark = bgColor === "#1B3A4B";
  
  return (
    <section className="relative" style={{ backgroundColor: bgColor }}>
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-screen`}>
        {/* Image Half */}
        <div className="lg:w-1/2 relative overflow-hidden group">
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Content Half */}
        <div className="lg:w-1/2 flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-xl"
          >
            <div className={`text-[11px] tracking-[5px] mb-4 uppercase font-semibold ${isDark ? "text-[#D4775C]" : "text-[#C45D3E]"}`}>
              {day}
            </div>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl mb-7 leading-[1.15] font-light ${isDark ? "text-[#E8DDD3]" : "text-[#1B3A4B]"}`}>
              {title}
            </h2>
            <div className={`text-base md:text-lg leading-[1.85] space-y-4 font-light ${isDark ? "text-[#E8DDD3]/60" : "text-[#2C2C2C]/70"}`}>
              {description}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}