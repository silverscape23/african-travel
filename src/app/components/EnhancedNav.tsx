import { useEffect, useState } from "react";

export function EnhancedNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-[#0F2430]/96 backdrop-blur-xl py-4 px-6 md:px-12 shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "py-7 px-6 md:px-12 bg-transparent"
      }`}
    >
      <div className="text-white text-lg tracking-[5px] uppercase font-bold">Wildcourt</div>

      <div className="flex items-center gap-8 md:gap-10">
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a
              href="#experience"
              className="text-white/60 text-xs tracking-[2.5px] uppercase font-medium transition-colors hover:text-white"
            >
              The Trip
            </a>
          </li>
          <li>
            <a
              href="#tennis"
              className="text-white/60 text-xs tracking-[2.5px] uppercase font-medium transition-colors hover:text-white"
            >
              The Tennis
            </a>
          </li>
          <li>
            <a
              href="#safari"
              className="text-white/60 text-xs tracking-[2.5px] uppercase font-medium transition-colors hover:text-white"
            >
              The Safari
            </a>
          </li>
        </ul>

        <a
          href="#inquire"
          className="bg-[#C45D3E] text-white px-7 py-2.5 text-[11px] tracking-[3px] uppercase font-semibold transition-all hover:bg-[#D4775C] hover:-translate-y-px"
        >
          Inquire
        </a>
      </div>
    </nav>
  );
}
