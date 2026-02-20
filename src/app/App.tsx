import { EnhancedNav } from "./components/EnhancedNav";
import { EnhancedHero } from "./components/EnhancedHero";
import { EnhancedIntro } from "./components/EnhancedIntro";
import { ActParallax } from "./components/ActParallax";
import { DaySection } from "./components/DaySection";
import { AccommodationSection } from "./components/AccommodationSection";
import { PullQuote } from "./components/PullQuote";
import { TennisSection } from "./components/TennisSection";
import { DidYouKnow } from "./components/DidYouKnow";
import { SafariSection } from "./components/SafariSection";
import { BuiltForYou } from "./components/BuiltForYou";
import { LearnTheLanguage } from "./components/LearnTheLanguage";
import { Founders } from "./components/Founders";
import { EnhancedCTA } from "./components/EnhancedCTA";

export default function App() {
  return (
    <div className="relative">
      {/* Enhanced Navigation */}
      <EnhancedNav />

      {/* Hero Section */}
      <EnhancedHero />

      {/* Introduction */}
      <EnhancedIntro />

      {/* ACT ONE: THE COURT */}
      <div id="experience">
        <ActParallax
          image="https://images.unsplash.com/photo-1653039771317-e4ce1fff385b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWJsZSUyME1vdW50YWluJTIwQ2FwZSUyMFRvd24lMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc3MTQ0MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          actLabel="Act One — The Court"
        />

        {/* Day 1 - Arrival */}
        <DaySection
          day="Day 1"
          title="Arrive. Breathe. Begin."
          description={
            <>
              <p>
                Touch down. Private transfer to the V&amp;A Waterfront. Check in, drop your bags,
                step onto the balcony. Table Mountain is right there. It's real.
              </p>
              <p>
                No tennis today. Tonight is a welcome dinner overlooking the Atlantic with the
                group. Good wine, good people, the beginning of something.
              </p>
              <p className="font-serif text-lg italic text-[#C45D3E]">
                Try to sleep. Tomorrow your court has an ocean view.
              </p>
            </>
          }
          imageSrc="https://images.unsplash.com/photo-1726381552645-c4e5645366f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHdhdGVyZnJvbnQlMjBsdXh0cnklMjBob3RlbHxlbnwxfHx8fDE3NzE0NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          imageAlt="V&A Waterfront"
        />

        {/* Day 2-3 */}
        <DaySection
          day="Days 2 – 3"
          title="First match. Table Mountain."
          description={
            <>
              <p>
                Morning coached sessions at ocean-view courts. Level-tiered groups, Americano
                format, real drills that make you better. This isn't a hit-around.
              </p>
              <p>
                Afternoons belong to Cape Town. Table Mountain by cable car. Bo-Kaap's painted
                streets. Camps Bay beach. Chapman's Peak Drive with the windows down.
              </p>
              <p>Evenings: the kind of restaurants you discover and immediately tell everyone about.</p>
            </>
          }
          imageSrc="https://images.unsplash.com/photo-1653039771317-e4ce1fff385b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWJsZSUyME1vdW50YWluJTIwQ2FwZSUyMFRvd24lMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc3MTQ0MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          imageAlt="Table Mountain golden hour"
          reverse
          bgColor="#1B3A4B"
        />
      </div>

      {/* Cape Town Accommodations */}
      <AccommodationSection />

      {/* ACT TWO: THE VINE */}
      <ActParallax
        image="https://images.unsplash.com/photo-1706700700247-b6a176e8e1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYW4lMjB2aW5leWFyZCUyMHdpbmVsYW5kcyUyMHN1bnNldHxlbnwxfHx8fDE3NzE0NDI1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        actLabel="Act Two — The Vine"
      />

      {/* Day 4 - Winelands */}
      <DaySection
        day="Day 4"
        title="Tennis in the Winelands."
        description={
          <>
            <p>
              Drive to Stellenbosch. Morning tennis surrounded by mountain peaks and 300-year-old
              oak trees. A court that makes your home club feel like a parking lot.
            </p>
            <p>
              Afternoon: private tastings at estates most tourists never find. Four-course lunch at
              Delaire Graff. Too many wines. Nobody's counting.
            </p>
            <p className="font-serif text-lg italic text-[#C45D3E]">
              The day Karen talks about for the rest of her life.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1638012858969-fac36ad2ea32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYW4lMjB3aW5lJTIwdGFzdGluZyUyMHZpbmV5YXJkfGVufDF8fHx8MTc3MTQ0MjU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Wine tasting in vineyard"
      />

      {/* Day 5 - Sidecars */}
      <DaySection
        day="Day 5"
        title="Sidecars to Chapman's Peak."
        description={
          <>
            <p>
              Leisurely morning. Optional helicopter over the peninsula, boat cruise in Table Bay,
              or hike up Lion's Head if you're feeling brave.
            </p>
            <p>
              At 5pm, mount vintage motorbike sidecars. Leather jackets provided. Wind in your face
              on one of the world's most beautiful coastal roads.
            </p>
            <p>
              Dinner at Chef's Warehouse at Tintswalo Atlantic. Full tasting menu. Wine pairings.
              The sun melts into the ocean while you eat.
            </p>
            <p className="font-serif text-lg italic text-[#C45D3E]">
              The Instagram post that breaks your personal record.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1674758978729-87c0a4c9e356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW1wcyUyMEJheSUyMGJlYWNoJTIwc3Vuc2V0JTIwQ2FwZSUyMFRvd258ZW58MXx8fHwxNzcxNDQyNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Chapman's Peak sunset"
        reverse
        bgColor="#1B3A4B"
      />

      {/* Pull Quote */}
      <PullQuote />

      {/* Tennis Section */}
      <TennisSection />

      {/* Did You Know */}
      <DidYouKnow />

      {/* ACT THREE: THE WILD */}
      <div id="safari">
        <ActParallax
          image="https://images.unsplash.com/photo-1548417153-32c109eb47f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZWxlcGhhbnQlMjBzYWZhcmklMjBLcnVnZXJ8ZW58MXx8fHwxNzcxNDQyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          actLabel="Act Three — The Wild"
        />

        {/* Safari Section */}
        <SafariSection />
      </div>

      {/* Built For You */}
      <BuiltForYou />

      {/* Learn The Language */}
      <LearnTheLanguage />

      {/* Founders */}
      <Founders />

      {/* Enhanced CTA */}
      <EnhancedCTA />

      {/* Footer */}
      <footer className="bg-[#0F2430] text-center py-20 px-6">
        <div className="text-[#E8DDD3] text-base tracking-[5px] uppercase font-bold mb-3">
          Wildcourt
        </div>
        <p className="font-serif text-base italic text-[#E8DDD3]/35 mb-10">
          Change your court. Change your life.
        </p>
        <div className="w-12 h-px bg-[#C45D3E] mx-auto mb-10 opacity-40" />
        <ul className="flex justify-center gap-8 list-none mb-10">
          <li>
            <a
              href="#experience"
              className="text-[11px] tracking-[2px] uppercase text-[#E8DDD3]/30 transition-colors hover:text-[#D4775C]"
            >
              The Trip
            </a>
          </li>
          <li>
            <a
              href="#tennis"
              className="text-[11px] tracking-[2px] uppercase text-[#E8DDD3]/30 transition-colors hover:text-[#D4775C]"
            >
              The Tennis
            </a>
          </li>
          <li>
            <a
              href="#safari"
              className="text-[11px] tracking-[2px] uppercase text-[#E8DDD3]/30 transition-colors hover:text-[#D4775C]"
            >
              The Safari
            </a>
          </li>
          <li>
            <a
              href="#inquire"
              className="text-[11px] tracking-[2px] uppercase text-[#E8DDD3]/30 transition-colors hover:text-[#D4775C]"
            >
              Inquire
            </a>
          </li>
        </ul>
        <p className="text-xs text-[#E8DDD3]/20 font-light">© 2026 Wildcourt. Cape Town, South Africa.</p>
      </footer>
    </div>
  );
}