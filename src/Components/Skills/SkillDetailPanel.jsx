import React from "react";
import { Sparkles, Layers } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function SkillDetailPanel() {
  return (
    <div 
      id="summary-panel"
      className="lg:col-span-4! border-b! lg:border-b-0! lg:border-r! border-zinc-800/80! p-4! sm:p-6! md:p-8! flex! flex-col! justify-between! relative! bg-black/20!"
    >
      <div
        id="default-view-container"
        className="flex! flex-col! justify-between! h-full! space-y-8!"
      >
        <div className="space-y-4!">
          <div 
            id="badge-banner-ready"
            className="inline-flex! items-center! gap-1.5! px-2.5! py-2! rounded-full! text-[10px]! font-mono border! border-zinc-800! bg-zinc-900/50! text-zinc-400!"
          >
            <Sparkles className="w-3.5! h-3.5! text-amber-500! animate-pulse!" />
            <span>Ready to Deploy</span>
          </div>

          <h3 id="panel-headline" className="text-xl! md:text-2xl! font-light! text-white! tracking-tight! leading-snug!">
            Total control over <br />
            <span className="font-semibold! bg-gradient-to-r! from-white! via-zinc-400! to-zinc-600! bg-clip-text! text-transparent!">
              Full Stack Technologies.
            </span>
          </h3>

          {/* <p id="panel-subdescription" className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            A diverse and resilient set of modern technologies to design high-performance responsive web interfaces, robust systems, and optimized configurations.
          </p> */}
        </div>

        {/* Browser Illustration Stack matching visualization mockup */}
        <BrowserMockup />

        {/* Left Column Footnotes */}
        <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between border-t border-zinc-900 pt-3">
          <span className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            11 Technologies Loaded
          </span>
          <span className="text-emerald-500 animate-pulse flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
            Live Engine
          </span>
        </div>
      </div>
    </div>
  );
}
