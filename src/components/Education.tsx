import { SectionTitle } from "./SectionTitle";

const items = [
  {
    period: "2025 – 2028",
    title: "Cycle d'Ingénieur en Génie Informatique et IA",
    place: "École Nationale des Sciences Appliquées (ENSA Safi)",
  },
  {
    period: "2023 – 2025",
    title: "Classes Préparatoires Intégrées",
    place: "ENSA Safi",
  },
  {
    period: "2023",
    title: "Baccalauréat en Sciences Physiques — Mention Très Bien",
    place: "Lycée Qualifiant Moussa Ibno Noussair, Casablanca",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="my journey">Edu<span className="gradient-text">cation</span></SectionTitle>

        <ul className="flex flex-col gap-5">
          {items.map((it, i) => (
            <li
              key={i}
              className="group bg-card backdrop-blur-md border-l-2 border-primary p-5 sm:p-7 clip-corner-md
                shadow-[var(--shadow-card)] transition-all hover:translate-x-2 hover:shadow-[0_10px_40px_rgba(0,217,255,0.2)]"
            >
              <p className="font-mono-tech text-primary text-sm sm:text-base font-bold tracking-wider">
                {it.period}
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">{it.place}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
