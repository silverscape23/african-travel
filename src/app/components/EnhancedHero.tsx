import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function EnhancedHero() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#0F2430]">
      {/* Hero Image with Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1636811773039-7b69f9081a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0ZW5uaXMlMjBjb3VydCUyMG9jZWFuJTIwdmlldyUyMENhcGUlMjBUb3dufGVufDF8fHx8MTc3MTQ0MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tennis court with ocean view"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2430]/70 via-[#0F2430]/50 to-[#0F2430]/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm tracking-[6px] uppercase text-[#E8DDD3] mb-10 font-medium"
        >
          Cape Town, South Africa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-9 leading-[1.1] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
        >
          The baseline looks very
          <br />
          different <em className="italic text-[#D4775C]">in Africa.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl text-white font-light tracking-[2px] mb-3"
        >
          Tennis in Paradise.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-block font-serif text-lg italic text-[#E8DDD3] bg-[#C45D3E]/10 backdrop-blur-sm px-6 py-2 rounded-full"
        >
          Change your court. Change your life.
        </motion.p>

        {/* Award Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-10 w-[340px] md:w-[400px] h-[180px] md:h-[210px] overflow-hidden"
        >
          <img
            src="/images/awards-white.png"
            alt="The Telegraph: Most Beautiful City in the World 2025. Time Out: Best City in the World 2025."
            className="w-full invert"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="text-[10px] tracking-[4px] uppercase text-white/30">Discover</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#C45D3E] to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleY: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
