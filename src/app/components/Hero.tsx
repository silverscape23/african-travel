import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1B3A4B]">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1636811773039-7b69f9081a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0ZW5uaXMlMjBjb3VydCUyMG9jZWFuJTIwdmlldyUyMENhcGUlMjBUb3dufGVufDF8fHx8MTc3MTQ0MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tennis court with ocean view"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A4B]/60 via-transparent to-[#1B3A4B]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="mb-6 text-7xl md:text-8xl lg:text-9xl tracking-tight text-white">
            WILDCOURT
          </h1>
          <div className="mb-8 h-px w-32 bg-[#C45D3E] mx-auto" />
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto tracking-wide">
            Tennis. Wine. Safari.
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            An 8-night journey through Cape Town and Kruger
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
