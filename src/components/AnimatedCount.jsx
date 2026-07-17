import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_COUNT_OFFSET = 96;

export function AnimatedCount({ value }) {
  const initialValue = Math.max(0, value - INITIAL_COUNT_OFFSET);
  const elementRef = useRef(null);
  const frameRef = useRef(null);
  const currentRef = useRef(initialValue);
  const targetRef = useRef(value);
  const hasEnteredRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(initialValue);
  const [isCounting, setIsCounting] = useState(false);

  const animate = useCallback((from, to, duration) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (reduceMotionRef.current || from === to) {
      currentRef.current = to;
      setDisplayValue(to);
      setIsCounting(false);
      return;
    }

    const startTime = performance.now();
    setIsCounting(true);

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(from + (to - from) * eased);
      currentRef.current = nextValue;
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setIsCounting(false);
      }
    }

    frameRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    targetRef.current = value;
    if (hasEnteredRef.current) animate(currentRef.current, value, 520);
  }, [animate, value]);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasEnteredRef.current) return;
      hasEnteredRef.current = true;
      const target = targetRef.current;
      animate(currentRef.current, target, 1800);
      observer.disconnect();
    }, { rootMargin: "0px 0px -10%", threshold: 0.2 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [animate]);

  return (
    <span ref={elementRef} className={`waitlist-number${isCounting ? " is-counting" : ""}`}>
      <span aria-hidden="true">{displayValue.toLocaleString()}</span>
      <span className="sr-only">{value.toLocaleString()}</span>
    </span>
  );
}
