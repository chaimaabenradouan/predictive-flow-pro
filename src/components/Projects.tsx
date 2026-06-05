import { SectionTitle } from "./SectionTitle";
import imgFraud from "@/assets/project-fraud.png";
import imgChurn from "@/assets/project-churn.jpg";
import imgLoan from "@/assets/project-loan.jpg";
import imgOptical from "@/assets/project-optical.jpg";
import imgFlora from "@/assets/project-flora.jpg";

const projects = [
  {
    img: imgOptical,
    title: "Prédiction de Distorsion Optique Industrielle",
    badge: "Industrial AI Competition",
    description:
      "Système de prédiction de la distorsion optique sur composants manufacturés (compétition IA Industrielle). Anticipation de 12 mesures de déformation à partir de 29 variables de planéité surfacique pour optimiser le contrôle qualité.",
    highlights: [
      "Stacking XGBoost + LightGBM + CatBoost",
      "R² Global 0.7289 • 5 414 échantillons",
      "Gestion outliers ×7 + StratifiedKFold",
    ],
    tech: ["Python", "XGBoost", "LightGBM", "CatBoost", "Scikit-learn"],
    link: "https://github.com/chaimaabenradouan/competition_indus",
  },
  {
    img: imgFraud,
    title: "Fraud Detection System",
    badge: "Machine Learning / FinTech",
    description:
      "J'ai conçu une plateforme complète pour analystes bancaires, du scoring automatique à la résolution des cas suspects. Le système détecte les transactions frauduleuses en temps réel, alerte les analystes via un dashboard central, et leur offre une interface d'investigation détaillée pour valider, refuser ou bloquer chaque opération. Un workflow de vérification client par email sécurisé permet de confirmer l'authenticité des transactions à risque, avec une file d'attente dédiée et un suivi des réponses. Le module statistiques génère des rapports PDF téléchargeables pour le pilotage métier, le tout sécurisé par authentification, contrôle d'accès par rôles et traçabilité complète des actions.",
    highlights: [
      "XGBoost •  F1 96.77",
      "ROC-AUC 0.999932",
      "Temps réel via Socket.IO",
    ],
    tech: ["Python", "Flask", "React", "Scikit-learn", "Socket.IO", "XGBoost", "SQLite"],
    link: "https://github.com/imaneennaji-12/mini_projet/",
  },
  {
    img: imgChurn,
    title: "Customer Churn Prediction",
    badge: "Machine Learning",
    description:
      "Prédiction du churn sur 7 043 clients télécom — Logistic Regression vs Random Forest avec GridSearchCV. Déployé via Streamlit.",
    highlights: [
      "Accuracy 80.8% • ROC-AUC 0.846",
      "Pipeline EDA + feature engineering",
      "Hyperparameter tuning GridSearchCV",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    link: "https://github.com/chaimaabenradouan/churn_project",
  },
  {
    img: imgLoan,
    title: "Loan Approval Prediction",
    badge: "Machine Learning",
    description:
      "Prédiction d'approbation de crédit sur 614 demandes. Pipeline ML complet de nettoyage à déploiement, modèle KNN optimisé.",
    highlights: [
      "Accuracy 85.7% • Recall 99.1%",
      "AUC 0.814",
      "Déploiement via Streamlit",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    link: "https://github.com/chaimaabenradouan/loan-approval-prediction",
  },
  {
    img: imgFlora,
    title: "Chaimaa Flora — E-Commerce",
    badge: "Web Development",
    description:
      "Site WordPress complet pour une boutique de fleurs et parfums. Configuration de la structure, customisation des pages et identité visuelle élégante.",
    highlights: [
      "Theme Blossom Shop customisé",
      "Pages Home, About, Products, Contact",
      "Stack XAMPP local",
    ],
    tech: ["WordPress","Blossom Shop Theme", "XAMPP"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="what i built">My <span className="gradient-text">Projects</span></SectionTitle>

        {/* Mobile: 1 col stacked, Desktop: 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative bg-card backdrop-blur-md border border-border clip-corner-lg
                shadow-[var(--shadow-card)] transition-all duration-500
                hover:-translate-y-3 hover:border-primary hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)]
                flex flex-col overflow-hidden"
            >
              {/* Top accent line on hover */}
              <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-3 left-3 font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest bg-background/80 backdrop-blur px-3 py-1.5 text-secondary border border-secondary/40 clip-corner-sm">
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[11px] sm:text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 clip-corner-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  className="group/btn inline-flex items-center gap-2 self-start px-5 py-2.5 border border-primary text-primary
                    font-mono-tech text-xs uppercase tracking-widest clip-corner-sm
                    transition-all hover:bg-primary hover:text-background"
                >
                  View Project
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
