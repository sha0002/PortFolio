import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Dedicated Interactive SkillCardWrapper which tracks cursor mouse position offsets
 * dynamically to draw beautiful active colored focal spotlights.
 */
export function SkillCardWrapper({ id, skill, children }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Offset mouse positions tracking logic
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={containerRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-2.5 sm:p-5 md:p-8 select-none flex items-center transition-all duration-350 min-h-[64px] sm:min-h-[82px] overflow-hidden w-full min-w-0"
      style={{
        backgroundColor: "#050507",
        borderLeft: "2.5px solid transparent",
        boxShadow: isHovered ? `0 0 20px ${skill.color}10` : "none"
      }}
    >
      {/* BRAND COLOR SPOTLIGHT GLOW BACKPLATE */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            id={`${id}-spotlight-backglow`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 inset-y-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, ${skill.color}15, ${skill.color}05 40%, transparent 80%)`
            }}
          />
        )}
      </AnimatePresence>

      {/* ADDITIONAL GENERAL AMBIENT GLOW ON HOVER */}
      <div 
        id={`${id}-ambient-hover-backplate`}
        className="absolute inset-0 pointer-events-none transition-opacity duration-350"
        style={{
          boxShadow: `inset 0 0 15px ${skill.color}08`,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Internal Content (Logo and text line) */}
      <div id={`${id}-content-inner`} className="relative w-full z-10">
        {children(isHovered)}
      </div>
    </div>
  );
}
