import { Play, Plus, Download } from "lucide-react";
import { ChevronRight } from "lucide-react";

export interface Movie {
  title: string;
  meta: string;
  img: string;
}

export function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="relative py-8">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-wide">
            {title}
          </h2>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            Explore all <ChevronRight size={14} />
          </a>
        </div>

        <div className="perspective-1000">
          <div className="row-scroll flex gap-5 overflow-x-auto pb-8 pt-2 -mx-2 px-2">
            {movies.concat(movies).map((m, i) => (
              <article
                key={i}
                className="card-3d shrink-0 w-48 md:w-56 lg:w-64 rounded-xl overflow-hidden bg-card shadow-card relative group cursor-pointer"
              >
                <div className="aspect-[2/3] overflow-hidden relative">
                  <img src={m.img} alt={m.title} loading="lazy" width={512} height={768} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm flex items-center justify-center gap-3">
                    <button className="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center shadow-glow">
                      <Play size={18} className="fill-current text-primary-foreground ml-0.5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors">
                      <Plus size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display font-bold text-sm md:text-base mb-1 leading-tight">{m.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{m.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
