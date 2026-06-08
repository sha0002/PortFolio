import React from "react";
import { Lock } from "lucide-react";

export function BrowserMockup() {
  return (
    <div id="visual-stack-container" className="relative py-8 flex flex-col items-center justify-center">
      {/* Shadow Layer 1 (Back) */}
      <div 
        id="visual-stack-shadow-1"
        className="absolute w-56 h-36 bg-zinc-900/20 border border-zinc-800/30 rounded shadow -rotate-6 translate-y-3 scale-90 z-0" 
      />

      {/* Shadow Layer 2 (Middle) */}
      <div 
        id="visual-stack-shadow-2"
        className="absolute w-60 h-36 bg-zinc-900/40 border border-zinc-800/50 rounded shadow rotate-3 -translate-y-2 scale-95 z-1" 
      />

      {/* Front Primary Visual Card */}
      <div 
        id="browser-front-panel"
        className="relative w-64 bg-black border border-zinc-800 rounded shadow-2xl overflow-hidden z-10"
      >
        {/* Browser Window Header */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-900 bg-zinc-900/30">
          {/* Traffic lights dots */}
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>

          {/* URL bar */}
          <div className="flex items-center justify-center gap-1.5 px-3 py-0.5 rounded bg-black border border-zinc-800/60 text-[9px] font-mono text-zinc-400">
            <Lock className="w-2.5 h-2.5 text-emerald-500" />
            <span className="tracking-wide">127.0.0.1</span>
          </div>

          <div className="w-8" />
        </div>

        {/* Display content centered inside panel */}
        <div className="flex flex-col items-center justify-center text-center py-8 px-4 bg-gradient-to-b from-zinc-950 to-black relative">
          <span className="font-mono font-bold text-3xl tracking-widest text-zinc-200">
            404
          </span>
          <div className="flex gap-1.5 mt-2">
            <span className="w-4 h-1 rounded-full bg-indigo-500" />
            <span className="w-4 h-1 rounded-full bg-zinc-800" />
          </div>
          <span className="absolute bottom-1 right-2 font-mono text-[7px] text-zinc-600">
            sys_status_ok
          </span>
        </div>
      </div>
    </div>
  );
}
