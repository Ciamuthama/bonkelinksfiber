import { useInView } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';

export const StatCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Extract numeric part and suffix
      const numericMatch = value.match(/(\d+\.?\d*)/);
      if (!numericMatch) {
        setCount(value);
        return;
      }

      const numericValue = parseFloat(numericMatch[0]);
      const suffix = value.replace(numericMatch[0], '');
      const isFloat = value.includes('.');

      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = easeProgress * numericValue;
        
        setCount((isFloat ? currentCount.toFixed(1) : Math.floor(currentCount)) + suffix);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <p ref={ref} className="text-4xl lg:text-5xl font-bold text-primary mb-2">
      {count}
    </p>
  );
};
