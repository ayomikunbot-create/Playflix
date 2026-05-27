export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40 backdrop-blur mt-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2">
            <div className="font-display text-2xl font-black text-gradient-red tracking-widest mb-3">PLAYFLIX</div>
            <p className="text-sm text-muted-foreground max-w-xs">Stream and download the world's best movies, series, K-dramas, cartoons and live sports in immersive 3D.</p>
          </div>
          {[
            { title: "Browse", links: ["Movies", "Series", "K-Drama", "Cartoons", "Live Sports"] },
            { title: "Account", links: ["Sign in", "My List", "Downloads", "Settings"] },
            { title: "Company", links: ["About", "Help Center", "Terms", "Privacy"] },
          ].map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-bold text-sm mb-3">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayomikun Tv. All rights reserved.</p>
          <p>Crafted with cinematic precision · PLAYFLIX 3D</p>
        </div>
      </div>
    </footer>
  );
}
