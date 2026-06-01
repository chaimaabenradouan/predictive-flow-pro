import { SectionTitle } from "./SectionTitle";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "SQL", "JavaScript", "MATLAB"],
  },
  {
    title: "Data Science & AI",
    items: ["Scikit-learn", "Pandas", "NumPy", "XGBoost", "LightGBM", "CatBoost", "SMOTE", "Matplotlib", "Seaborn", "TensorFlow", "joblib"],
  },
  {
    title: "Web Development",
    items: ["React", "Flask", "HTML5", "CSS3", "WebSocket", "WordPress"],
  },
  {
    title: "Tools & DevOps",
    items: ["Docker", "Linux", "Git", "GitHub", "VS Code", "Jupyter", "Anaconda"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="tech stack">My <span className="gradient-text">Skills</span></SectionTitle>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono-tech text-primary text-sm sm:text-base font-semibold uppercase tracking-widest mb-5 pl-8 relative">
                <span className="absolute left-0 text-secondary">//</span>
                {g.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {g.items.map((item) => (
                  <div
                    key={item}
                    className="group bg-card backdrop-blur-md border border-border clip-corner-sm
                      px-3 py-4 sm:py-5 text-center transition-all cursor-default
                      hover:-translate-y-2 hover:border-primary hover:shadow-[0_15px_40px_rgba(0,217,255,0.25)]"
                  >
                    <p className="font-mono-tech text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
