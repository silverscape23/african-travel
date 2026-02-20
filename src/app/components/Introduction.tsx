import { motion } from "motion/react";

export function Introduction() {
  return (
    <section className="relative bg-[#F7F4F0] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-5xl md:text-6xl lg:text-7xl leading-tight text-[#1B3A4B] mb-12">
            Where the Atlantic meets Table Mountain, and the Big Five roam free.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div>
              <div className="text-6xl mb-4 text-[#C45D3E]">8</div>
              <p className="text-xl text-[#1B3A4B]/80">Unforgettable Nights</p>
            </div>
            <div>
              <div className="text-6xl mb-4 text-[#C45D3E]">2</div>
              <p className="text-xl text-[#1B3A4B]/80">Iconic Destinations</p>
            </div>
            <div>
              <div className="text-6xl mb-4 text-[#C45D3E]">∞</div>
              <p className="text-xl text-[#1B3A4B]/80">Extraordinary Moments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
