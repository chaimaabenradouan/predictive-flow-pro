import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="who am i">About <span className="gradient-text">Me</span></SectionTitle>

        <div className="bg-card backdrop-blur-md border-l-2 border-primary p-6 sm:p-10 clip-corner-md shadow-[var(--shadow-card)]">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Élève-ingénieure en <span className="text-primary font-semibold">Génie Informatique et Intelligence Artificielle</span> à l'ENSA Safi,
            je suis passionnée par le développement web et la Data Science appliquée à la résolution
            de problématiques concrètes. Rigoureuse, curieuse et motivée, je transforme les données
            en solutions intelligentes et mesurables.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Actuellement à la recherche d'un <span className="text-secondary font-semibold">stage d'été</span>,
            je souhaite mettre mes compétences techniques et ma forte capacité d'adaptation au service de vos projets.
          </p>
        </div>
      </div>
    </section>
  );
}
