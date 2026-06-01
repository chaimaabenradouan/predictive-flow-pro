import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const certs = [
  {
    title: "Professional Certificate in Data Science",
    issuer: "IAAI Academy",
    year: "2025",
    score: "17/20",
    skills: ["Python", "Pandas", "NumPy", "EDA", "Statistiques", "ML supervisé"],
    project: "Telco Churn",
  },
  {
    title: "OCI AI Foundations Associate",
    issuer: "Oracle",
    year: "Mai 2026",
    score: "88%",
    skills: ["IA générative", "LLMs", "Deep Learning", "OCI AI Services"],
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    year: "2026",
    skills: ["Pandas", "NumPy", "API", "Web Scraping"],
  },
];

export function Certifications() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="credentials">My <span className="gradient-text">Certifications</span></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group text-left relative bg-card backdrop-blur-md border border-border clip-corner-md
                p-6 sm:p-7 shadow-[var(--shadow-card)] transition-all
                hover:-translate-y-2 hover:border-secondary hover:shadow-[0_15px_40px_rgba(0,255,170,0.25)]
                flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 border border-secondary/40 clip-corner-sm text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                {c.score && (
                  <span className="font-mono-tech text-secondary font-bold text-lg">{c.score}</span>
                )}
              </div>
              <p className="font-mono-tech text-xs text-primary uppercase tracking-widest mb-2">
                {c.issuer} • {c.year}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 leading-tight">
                {c.title}
              </h3>
              <p className="font-mono-tech text-xs text-muted-foreground mt-auto group-hover:text-secondary transition-colors">
                Click to view details →
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/85 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-lg w-full bg-card border border-primary p-7 sm:p-9 clip-corner-lg shadow-[0_20px_80px_rgba(0,217,255,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-primary transition"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="font-mono-tech text-xs text-primary uppercase tracking-widest mb-2">
              {certs[open].issuer} • {certs[open].year}
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">{certs[open].title}</h3>
            {certs[open].score && (
              <p className="font-mono-tech text-secondary text-lg mb-4">
                Score: <span className="font-bold">{certs[open].score}</span>
              </p>
            )}
            <div className="mb-4">
              <p className="font-mono-tech text-xs text-muted-foreground uppercase mb-2">// Skills covered</p>
              <div className="flex flex-wrap gap-2">
                {certs[open].skills.map((s) => (
                  <span key={s} className="font-mono-tech text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 clip-corner-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {certs[open].project && (
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Projet:</span> {certs[open].project}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
