"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  maxValue: number;
}

const ProgressBar = ({ value, maxValue }: ProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    // Delay the width animation slightly for better effect
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative h-6 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full transition-all duration-2000 ease-out bg-gray-100"
        style={{
          width: `${animatedWidth}%`,
          background: "linear-gradient(90deg, #16C64F 0%, #B4EDC7 100%)",
          boxShadow: "0 0 20px rgba(22, 198, 79, 0.3)",
        }}
      />
    </div>
  );
};

export default ProgressBar;
