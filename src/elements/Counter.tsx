"use client";

import { useEffect, useState, useRef } from "react";
import { formatCurrency } from "@/utils/format";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("up");
  // Latest rendered value, read when a new animation starts without
  // re-running the effect on every frame.
  const displayValueRef = useRef(0);

  useEffect(() => {
    const startTime = performance.now();
    const startValue = displayValueRef.current;
    let frame = 0;

    setDirection(value >= startValue ? "up" : "down");
    setIsAnimating(true);

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (value - startValue) * easeOutQuart;

      displayValueRef.current = currentValue;
      setDisplayValue(currentValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  const transform = !isAnimating
    ? "translateY(0) scale(1)"
    : direction === "up"
    ? "translateY(-10%) scale(0.95)"
    : "translateY(10%) scale(0.95)";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="transition-all duration-300" style={{ transform }}>
        <span className="font-mono text-5xl font-bold tabular-nums">
          {formatCurrency(displayValue)}
        </span>
      </div>
    </div>
  );
};
export default AnimatedCounter;
