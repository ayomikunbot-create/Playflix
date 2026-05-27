import { Play, Info } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Featured film" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-32 pt-40 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-medium text-primary mb-6 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-primary glow-pulse" /> NOW STREAMING IN 3D
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            Cinema,<br />
            <span className="text-gradient-red">Reimagined.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Stream and download blockbusters, timeless classics, binge-worthy series, K-dramas, cartoons, and live sports — all in immersive 3D.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 bg-gradient-red text-primary-foreground font-semibold px-7 py-3.5 rounded-md shadow-glow hover:scale-105 transition-transform">
              <Play size={20} className="fill-current" /> Watch Now
            </button>
            <button className="inline-flex items-center gap-2 bg-secondary/60 backdrop-blur text-foreground font-semibold px-7 py-3.5 rounded-md border border-border hover:bg-secondary transition-colors">
              <Info size={20} /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
