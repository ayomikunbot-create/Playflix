import { Radio } from "lucide-react";
import m6 from "@/assets/m6.jpg";

const matches = [
  { home: "Madrid", away: "Barcelona", time: "LIVE · 67'", score: "2 - 1" },
  { home: "Lakers", away: "Warriors", time: "Q3 · 8:22", score: "78 - 81" },
  { home: "Man Utd", away: "Liverpool", time: "Today 21:00", score: "vs" },
];

export function LiveSport() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={m6} alt="Stadium" className="w-full h-full object-cover opacity-30" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-4">
            <Radio size={14} className="glow-pulse" /> LIVE NOW
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4 leading-tight">
            Every match.<br /><span className="text-gradient-red">Every moment.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-6">
            Stream live football, basketball, F1, UFC and more in stunning 4K HDR with multi-angle replays.
          </p>
          <button className="bg-gradient-red text-primary-foreground font-semibold px-7 py-3.5 rounded-md shadow-glow hover:scale-105 transition-transform">
            Watch Live
          </button>
        </div>
        <div className="space-y-3">
          {matches.map((m, i) => (
            <div key={i} className="p-5 rounded-xl bg-card/80 backdrop-blur border border-border flex items-center justify-between hover:border-primary/60 transition-colors">
              <div className="flex-1">
                <div className="text-xs text-primary font-bold mb-1">{m.time}</div>
                <div className="font-display font-bold text-lg">{m.home} <span className="text-muted-foreground mx-2 text-base font-normal">{m.score}</span> {m.away}</div>
              </div>
              <button className="ml-4 px-4 py-2 text-xs font-semibold rounded-md bg-secondary border border-border hover:bg-primary hover:border-primary transition-colors">
                Watch
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
