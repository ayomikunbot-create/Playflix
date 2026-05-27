import { useEffect, useState } from "react";
import { Search, Bell, User } from "lucide-react";

const links = ["Home", "Movies", "Series", "K-Drama", "Cartoons", "Live Sports"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="font-display text-2xl lg:text-3xl font-black text-gradient-red tracking-widest">
            PLAYFLIX
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-muted-foreground hover:text-foreground transition-colors"><Search size={20} /></button>
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"><Bell size={20} /></button>
          <button className="w-9 h-9 rounded-md bg-gradient-red flex items-center justify-center shadow-glow">
            <User size={18} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
