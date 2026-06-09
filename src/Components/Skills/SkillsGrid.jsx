import React from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { skillsData } from "./data";
import { SkillCardWrapper } from "./SkillCardWrapper";

export function SkillsGrid() {
  return (
    <div
      id="explorer-panel"
      className="lg:col-span-8 p-3 sm:p-6 md:p-8 flex flex-col justify-center bg-zinc-950/20"
    >
      {/* Display Header */}
      <div
        id="explorer-header-info"
        className="flex items-center justify-between mb-4 border border-zinc-800/60 bg-zinc-900/10 rounded-md py-2 px-3"
      >
        <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase">
          Interactive Grid Explorer
        </span>
        <span className="font-mono text-xs text-white tracking-[0.25em] font-semibold flex items-center animate-pulse">
          SKILLS...
        </span>
      </div>

      {/* Rainbow Running Border Container */}
      <div id="grid-glow-card-holder" className="rainbow-border-container shadow-2xl">
        <motion.div
          id="border-rainbow-flow-element"
          className="rainbow-border-flow"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
        <div className="rainbow-border-content select-none">

          {/* fine 1px dividers on background border */}
          <div id="skills-grid" className="skills-grid-container  grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-3
    gap-0
    sm:gap-4
    md:gap-5">

            {skillsData.map((skill, index) => {
              return (
                <motion.div
                  key={skill.id}
                  id={`skill-wrapper-${skill.id}`}
                  initial={{ opacity: 0, y: 35, scale: 0.85, rotateX: 12 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 13,
                    mass: 0.85,
                    delay: index * 0.045
                  }}
                  // className="min-w-0 overflow-hidden"
                  className="w-full min-w-0 overflow-hidden"
                >
                  <SkillCardWrapper
                    id={`skill-card-${skill.id}`}
                    skill={skill}
                  >
                    {(isHovered) => {
                      const IconComponent = skill.component;
                      return (
                        <div className="flex items-center gap-1.5 sm:gap-3 w-full min-w-0 p-4">
                          <motion.div
                            className="p-1 sm:p-2 bg-black border rounded flex-shrink-0 flex items-center justify-center border-zinc-800/80"
                            animate={{
                              scale: isHovered ? 1.12 : 1,
                              rotate: isHovered ? [0, -10, 10, 0] : 0,
                              borderColor: isHovered ? `${skill.color}50` : "rgba(63, 63, 70, 0.4)",
                              boxShadow: isHovered ? `0 0 12px ${skill.color}20` : "none"
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                              rotate: { duration: 0.4 }
                            }}
                          >
                            <IconComponent />
                          </motion.div>
                          <motion.span
                            className="font-mono text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-zinc-300 truncate flex-1 min-w-0"
                            animate={{
                              x: isHovered ? 5 : 0,
                              color: isHovered ? "#ffffff" : "#d4d4d8",
                              textShadow: isHovered ? `0 0 6px ${skill.color}30` : "none"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            {skill.name}
                          </motion.span>
                        </div>
                      );
                    }}
                  </SkillCardWrapper>
                </motion.div>
              );
            })}

            {/* Empty Slot Placeholder to build the elegant block border balance */}
            <div
              id="skill-card-placeholder"
              className="relative p-2.5 sm:p-5 md:p-8 bg-black/8 w-full h-full flex items-center justify-center pointer-events-none min-h-[64px] sm:min-h-[82px]"
    //           className="hidden
    // lg:flex
    // items-center
    // justify-center
    // min-h-[100px]
    // border
    // border-zinc-800/40
    // rounded-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            </div>

          </div>
        </div>
      </div>

      {/* Micro instruction footer */}
      <div
        id="grid-instruction-footer"
        className="flex items-center justify-between mt-4 border border-zinc-800/40 bg-zinc-900/10 rounded-md py-2 px-3 text-[10px]"
      >
        <div className="flex items-center gap-2 text-zinc-500">
          <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span>Interactive Spotlight: hover over any card to trigger its colored glow</span>
        </div>
        <span className="font-mono text-zinc-600 hidden md:inline">UTC: 2026</span>
      </div>
    </div>
  );
}
