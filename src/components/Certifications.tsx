import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import certIaai from "@/assets/certiaai.png";
import certOracle from "@/assets/oracle.png";
import certIbm from "@/assets/imbcertif.png";
import certHp from "@/assets/hpcertif.jpeg";

const certs = [
  {
    title: "Professional Certificate in Data Science",
    issuer: "IAAI Academy",
    year: "Août 2025",
    score: "17/20",
    image: certIaai,
    skills: ["Python", "Pandas", "NumPy", "EDA", "Statistiques", "ML supervisé"],
    project: "Telco Churn",
    description:
      "Programme professionnel intensif en Data Science couvrant le cycle complet d'un projet ML : exploration, nettoyage, feature engineering, modélisation supervisée et évaluation.",
  },
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle University",
    year: "Mai 2026",
    score: "88%",
    image: certOracle,
    skills: ["IA générative", "LLMs", "Deep Learning", "OCI AI Services"],
    description:
      "Certification officielle Oracle validant la maîtrise des fondamentaux de l'IA, du Machine Learning, du Deep Learning et des services IA d'Oracle Cloud Infrastructure.",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    year: "Février 2026",
    image: certIbm,
    skills: ["Python", "Pandas", "NumPy", "API", "Web Scraping"],
    description:
      "Cours IBM délivré via Coursera couvrant Python appliqué à la data science : structures de données, manipulation avec Pandas/NumPy, accès API et web scraping.",
  },
  {
    title: "L'IA pour les débutants",
    issuer: "HP LIFE — HP Foundation",
    year: "Janvier 2026",
    image: certHp,
    skills: ["Concepts IA", "Applications business", "Éthique IA", "Données"],
    description:
      "Certificat de fin de cours HP LIFE attestant la réussite du programme « L'IA pour les débutants ». Acquisition d'une compréhension de base de l'impact de l'intelligence artificielle sur le paysage technologique : concepts clés, applications concrètes, importance des données pour l'IA, usages en entreprise et implications éthiques.",
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
                shadow-[var(--shadow-card)] transition-all overflow-hidden
                hover:-translate-y-2 hover:border-secondary hover:shadow-[0_15px_40px_rgba(0,255,170,0.25)]
                flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
                <img
                  src={c.image}
                  alt={`Certificat ${c.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono-tech text-xs text-primary uppercase tracking-widest">
                    {c.issuer}
                  </p>
                  {c.score && (
                    <span className="font-mono-tech text-secondary font-bold text-sm">{c.score}</span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="font-mono-tech text-xs text-muted-foreground mt-auto group-hover:text-secondary transition-colors">
                  {c.year} · Click for details →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/85 backdrop-blur-sm animate-fade-up overflow-y-auto"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-card border border-primary clip-corner-lg shadow-[0_20px_80px_rgba(0,217,255,0.4)] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-background/70 text-muted-foreground hover:text-primary transition"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={certs[open].image}
              alt={certs[open].title}
              className="w-full max-h-[55vh] object-contain bg-background border-b border-border"
            />
            <div className="p-6 sm:p-8">
              <p className="font-mono-tech text-xs text-primary uppercase tracking-widest mb-2">
                {certs[open].issuer} • {certs[open].year}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{certs[open].title}</h3>
              {certs[open].score && (
                <p className="font-mono-tech text-secondary mb-3">
                  Score: <span className="font-bold">{certs[open].score}</span>
                </p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {certs[open].description}
              </p>
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
        </div>
      )}
    </section>
  );
}
