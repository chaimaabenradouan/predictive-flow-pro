export function SectionTitle({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {kicker && (
        <p className="font-mono-tech text-primary text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
          // {kicker}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight relative inline-block">
        {children}
      </h2>
      <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}
