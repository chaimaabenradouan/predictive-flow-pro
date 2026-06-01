import profileAsset from "@/assets/profile-photo.png.asset.json";
const profileImg = profileAsset.url;

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-up">
          <p className="font-mono-tech text-primary text-sm tracking-[0.3em] uppercase mb-4">
            &gt; Hello world, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Chaimaa <span className="gradient-text">Benradouan</span>
          </h1>
          <p className="font-mono-tech text-base sm:text-lg text-secondary mb-4">
            &lt; Computer Science &amp; AI Engineer /&gt;
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Passionnée par l'IA, la Data Science et le développement web.
            Je transforme les données en solutions intelligentes et mesurables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 font-mono-tech font-semibold uppercase tracking-widest text-sm border-2 border-primary text-primary clip-corner-sm transition-all hover:text-background overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 -z-0" />
              <span className="relative z-10">Contact Me</span>
            </a>
            <a
              href="/CV_Chaimaa_Benradouan.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-mono-tech font-semibold uppercase tracking-widest text-sm border-2 border-secondary text-secondary clip-corner-sm transition-all hover:bg-secondary hover:text-background w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary to-secondary opacity-40 blur-2xl rounded-full" />
            <img
              src={profileImg}
              alt="Chaimaa Benradouan"
              width={350}
              height={350}
              className="relative w-48 sm:w-64 lg:w-[320px] aspect-square object-cover clip-corner-md border-2 border-primary/40 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
