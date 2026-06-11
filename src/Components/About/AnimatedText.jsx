import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

function Character({ char, index, total, progress }) {
  // Distribute the fade progress across the character order.
  // Each character begins to reveal sequentially in the scroll range 0 to 1.
  const start = index / total;
  // Overlap slightly for a smoother, less abrupt fade-in
  const end = Math.min(1, start + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      {/* Invisible placeholder to reserve layout space */}
      <span className="opacity-0" aria-hidden="true">
        {char === " " ? "\u00A0" : char}
      </span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Split words first to keep typography spacing robust and avoid awkward mid-word breaks
  const words = text.split(" ");
  let charCumulativeIndex = 0;

  // Calculate total number of characters
  const totalChars = text.length;

  return (
    <p
      ref={containerRef}
      className={`relative inline-block leading-relaxed tracking-wide ${className}`}
    >
      {words.map((word, wIdx) => {
        const wordChars = word.split("");
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, cIdx) => {
              const globalIndex = charCumulativeIndex++;
              return (
                <Character
                  key={cIdx}
                  char={char}
                  index={globalIndex}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
            {/* Account for space after the word, unless it's the last word */}
            {wIdx < words.length - 1 && (
              <Character
                char=" "
                index={charCumulativeIndex++}
                total={totalChars}
                progress={scrollYProgress}
              />
            )}
          </span>
        );
      })}
    </p>
  );
}
