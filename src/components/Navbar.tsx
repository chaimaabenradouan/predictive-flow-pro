import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md border-b border-border ${
        scrolled ? "bg-background/95 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-background/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-mono-tech font-bold text-primary text-sm sm:text-base tracking-[0.2em] uppercase cursor-blink whitespace-nowrap"
        >
          C.BENRADOUAN
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors relative
                  after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-primary after:-translate-x-1/2 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-primary p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-primary transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pt-4 pb-6 bg-background/95 border-t border-border animate-fade-up">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary font-mono-tech"
              >
                &gt; {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
