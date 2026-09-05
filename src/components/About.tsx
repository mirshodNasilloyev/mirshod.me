import { experience, personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-20 md:px-12"
    >
      <div
        className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          About Me
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Who I am and what I do
        </h2>
        <p className="mt-4 text-lg text-slate-500">{personalInfo.bio}</p>
      </div>

      <div className="relative mx-auto mt-10 max-w-2xl divide-y divide-slate-200 border-t border-slate-200">
        {experience.map((item) => (
          <div key={`${item.company}-${item.period}`} className="py-6 text-center">
            <span className="text-sm text-slate-400">{item.period}</span>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.role}</h3>
            <p className="mt-1 text-sm text-slate-500">{item.company}</p>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
