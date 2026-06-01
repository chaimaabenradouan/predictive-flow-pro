import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaimaa Benradouan — AI & Data Science Engineer" },
      {
        name: "description",
        content:
          "Portfolio de Chaimaa Benradouan, élève-ingénieure en Génie Informatique et IA — projets Machine Learning, Data Science, Web Development.",
      },
      { property: "og:title", content: "Chaimaa Benradouan — AI & Data Science Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio de Chaimaa Benradouan — Machine Learning, Data Science, Web Development.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
