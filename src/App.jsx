import { useCallback, useState } from "react";
import { FinalCta } from "./components/FinalCta";
import { Hero } from "./components/Hero";
import { HighlightsCarousel } from "./components/HighlightsCarousel";

const BASE_WAITLIST_COUNT = 1284;

export function App() {
  const [waitlistCount, setWaitlistCount] = useState(BASE_WAITLIST_COUNT);
  const incrementWaitlist = useCallback((amount = 1) => {
    setWaitlistCount((count) => count + amount);
  }, []);

  return (
    <div className="site-shell">
      <main>
        <Hero />
        <HighlightsCarousel />
        <FinalCta
          waitlistCount={waitlistCount}
          onCountGrowth={incrementWaitlist}
          onJoined={incrementWaitlist}
        />
      </main>
    </div>
  );
}
