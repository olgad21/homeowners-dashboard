"use client";

import { useEffect, useState, useRef } from "react";

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
  const [prevValue, setPrevValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = displayValue;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (value - startValue) * easeOutQuart;

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setIsAnimating(false);
        setPrevValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, displayValue]);

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(displayValue));

  const direction = value > prevValue ? "up" : "down";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-300 ${
          isAnimating
            ? direction === "up"
              ? "animate-slide-up"
              : "animate-slide-down"
            : ""
        }`}
        style={{
          transform: isAnimating
            ? direction === "up"
              ? "translateY(-10%) scale(0.95)"
              : "translateY(10%) scale(0.95)"
            : "translateY(0) scale(1)",
        }}
      >
        <span className="font-mono text-5xl font-bold tabular-nums">
          {formattedValue}
        </span>
      </div>
    </div>
  );
};
export default AnimatedCounter;
