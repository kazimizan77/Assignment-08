"use client";

import Marquee from "react-fast-marquee";
import { FaFire } from "react-icons/fa";

export default function MarqueeSection() {
  const items = [
    "New Arrivals",
    "Atomic Habits — James Clear",
    "The Alchemist — Paulo Coelho",
    "Special Discount on Memberships",
    "A Brief History of Time — Hawking",
    "Clean Code — Robert Martin",
    "Sapiens — Yuval Noah Harari",
    "1984 — George Orwell",
  ];

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-3 shadow-md">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_70%)]"></div>

      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>

      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>

      <Marquee speed={55} gradient={false} pauseOnHover>
        {items.map((item, i) => {
          const isHighlight = item === "New Arrivals";

          return (
            <div
              key={i}
              className="group flex items-center gap-4 px-8 transition-all duration-300"
            >
              {isHighlight ? (
                <span className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1 text-xs font-semibold text-black shadow-md">
                  <FaFire className="text-sm text-orange-500" />
                  {item}
                </span>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 group-hover:scale-125 transition"></span>

                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition">
                    {item}
                  </span>
                </>
              )}

              <span className="text-white/20 text-lg">•</span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
