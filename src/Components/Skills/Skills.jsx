import React from "react";
import { SkillDetailPanel } from "./SkillDetailPanel";
import { SkillsGrid } from "./SkillsGrid";

const Skills = () => {
  return (
    <div
      id="main-app-container Skills"
      className="relative min-h-screen Skills bg-black text-zinc-100 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans"
    >

      {/* Dynamic Colored Ambient Spheres */}
      <div
        id="glow-sphere-1"
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-indigo-500/10 blur-[130px] pointer-events-none"
      />
      <div
        id="glow-sphere-2"
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-teal-500/5 blur-[120px] pointer-events-none"
      />
      <div
        id="glow-sphere-3"
        className="absolute top-10 right-1/3 rounded-full w-80 h-80 bg-amber-500/5 blur-[110px] pointer-events-none"
      />

      {/* Static blueprint grid overlay */}
      <div id="grid-pattern-overlay" className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Sweeping Scan Line */}
      <div id="sweeping-scan-line-element" className="sweeping-scan-line pointer-events-none" />

      {/* Main Container with Blueprint Wireframe Panel theme */}
      <div
        id="blueprint-frame"
        className="relative w-full max-w-6xl z-10 border rounded-lg shadow-2xl overflow-hidden bg-zinc-950/80 backdrop-blur-xl border-zinc-800/80"
      >

        {/* Blueprint Wireframe Headers */}
        <div id="blueprint-header-row" className="flex border-b border-zinc-800/80">

          {/* Header Left Small Accent */}
          <div
            id="accent-header-left"
            className="w-12 md:w-16 border-r border-zinc-800/80 flex items-center justify-center py-4 text-zinc-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>

          {/* Core App Header */}
          <div
            id="main-header-title-container"
            className="flex-1 flex flex-col items-center justify-center py-4 bg-black/40 border-r border-zinc-800/80"
          >
            <span
              id="header-tag"
              className="font-mono text-[12px] md:text-[10px] font-bold tracking-[0.25em] text-zinc-500"
            >
              PORTFOLIO TECHNOLOGIES
            </span>
          </div>

          {/* Header Right Small Accent */}
          <div id="accent-header-right" className="w-12 md:w-16 flex items-center justify-center py-4">
            <div className="w-2.5 h-2.5 border border-zinc-700 rotate-45" />
          </div>

        </div>

        {/* Outer Section Frame Grid wrapper */}
        <div id="blueprint-content-body" className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">

          {/* LEFT COLUMN: Controls default visualization */}
          <SkillDetailPanel />

          {/* RIGHT COLUMN: Majestic interactive grid of skills layout */}
          <SkillsGrid />

        </div>

      </div>

    </div>
  );
}

export default Skills