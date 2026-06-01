import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle kicker="let's talk">Get in <span className="gradient-text">Touch</span></SectionTitle>

        <div className="bg-card backdrop-blur-md border border-border p-6 sm:p-10 clip-corner-lg shadow-[var(--shadow-card)]">
          <p className="text-center text-muted-foreground mb-8 text-base sm:text-lg">
            À la recherche d'un stage d'été. N'hésitez pas à me contacter !
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="mailto:chaimaabenradouan20@gmail.com"
              className="group flex items-center gap-4 p-5 border border-border clip-corner-sm hover:border-primary transition-all hover:bg-primary/5"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 clip-corner-sm text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-mono-tech text-[11px] text-muted-foreground uppercase tracking-widest">Email</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  chaimaabenradouan20@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+212617710212"
              className="group flex items-center gap-4 p-5 border border-border clip-corner-sm hover:border-primary transition-all hover:bg-primary/5"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 clip-corner-sm text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-mono-tech text-[11px] text-muted-foreground uppercase tracking-widest">Phone</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">+212 617 710 212</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 border border-border clip-corner-sm hover:border-primary transition-all hover:bg-primary/5"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 clip-corner-sm text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p className="font-mono-tech text-[11px] text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">View Profile</p>
              </div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 border border-border clip-corner-sm hover:border-primary transition-all hover:bg-primary/5"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 clip-corner-sm text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div>
                <p className="font-mono-tech text-[11px] text-muted-foreground uppercase tracking-widest">GitHub</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">View Profile</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/CV_Chaimaa_Benradouan.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-mono-tech font-semibold uppercase tracking-widest text-sm border-2 border-secondary text-secondary clip-corner-sm transition-all hover:bg-secondary hover:text-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download my CV
            </a>
          </div>
        </div>

        <footer className="mt-12 text-center font-mono-tech text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chaimaa Benradouan — Built with passion &amp; code</p>
        </footer>
      </div>
    </section>
  );
}
