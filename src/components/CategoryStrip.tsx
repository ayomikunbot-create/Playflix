import { Film, Tv, Heart, Sparkles, Radio, Download } from "lucide-react";

const cats = [
  { icon: Film, label: "Movies", count: "12K+" },
  { icon: Tv, label: "Series", count: "3.4K" },
  { icon: Heart, label: "K-Drama", count: "890" },
  { icon: Sparkles, label: "Cartoons", count: "1.2K" },
  { icon: Radio, label: "Live Sports", count: "Live" },
  { icon: Download, label: "Downloads", count: "4K HDR" },
];

export function CategoryStrip() {
  return (
    <section className="relative py-10 border-y border-border bg-card/30 backdrop-blur">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {cats.map((c) => (
            <button
              key={c.label}
              className="group relative p-5 rounded-xl bg-secondary/40 border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-red flex items-center justify-center mb-3 mx-auto group-hover:rotate-12 transition-transform">
                <c.icon size={18} className="text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-sm">{c.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{c.count}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
