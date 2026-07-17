import { useEffect, useRef, useState } from "react";
import { LearningVisual } from "./LearningVisual";
import { RhythmVisual } from "./RhythmVisual";

const slides = [
  {
    id: "learns",
    title: "Learns night after night.",
    body: "Over time, Somni adapts more closely to what helps you settle, stay asleep and wake well.",
    visual: "learning",
  },
  {
    id: "rhythm",
    title: "Your whole night, in sync.",
    body: "Sound, light and scent work together from wind-down to wake-up, adapting as your night unfolds.",
    visual: "rhythm",
  },
  {
    id: "quiet",
    title: "Nothing to manage.",
    body: "No wearables. No app rituals. Somni quietly cares for you from your bedside — even while you sleep.",
    visual: "photo",
  },
];

function SlideVisual({ type }) {
  if (type === "learning") return <LearningVisual />;
  if (type === "rhythm") return <RhythmVisual />;
  return <img className="quiet-photo" src={`${import.meta.env.BASE_URL}assets/somni-no-wearable-v2.png`} alt="A sleeping person wearing no watch or sleep tracker" loading="lazy" />;
}

export function HighlightsCarousel() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = 0;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function goTo(index) {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    const track = trackRef.current;
    const card = track?.children[next];
    const firstCard = track?.children[0];
    if (!track || !card || !firstCard) return;
    track.scrollTo({ left: card.offsetLeft - firstCard.offsetLeft, behavior: "smooth" });
    setActive(next);
  }

  function handleScroll() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      const cards = track ? Array.from(track.children) : [];
      if (!track || cards.length === 0) return;
      const firstOffset = cards[0].offsetLeft;
      const closest = cards.reduce((best, card, index) => {
        const distance = Math.abs(card.offsetLeft - firstOffset - track.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });
      setActive(closest.index);
    });
  }

  return (
    <section className="highlights" id="highlights" aria-labelledby="highlights-title">
      <div className="highlights-heading">
        <h2 id="highlights-title">Get the highlights.</h2>
      </div>
      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide, index) => (
          <article className="highlight-card" key={slide.id} aria-label={`${index + 1} of ${slides.length}`}>
            <div className={`card-visual card-visual--${slide.visual}`}><SlideVisual type={slide.visual} /></div>
            <div className="card-copy">
              <p><strong>{slide.title}</strong> {slide.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <span className="sr-only" aria-live="polite">Highlight {active + 1} of {slides.length}</span>
        <div className="arrow-controls">
          <button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous highlight"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg></button>
          <button onClick={() => goTo(active + 1)} disabled={active === slides.length - 1} aria-label="Next highlight"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" /></svg></button>
        </div>
      </div>
    </section>
  );
}
