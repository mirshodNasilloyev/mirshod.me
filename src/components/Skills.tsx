import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-20 md:px-12"
    >
      <div
        className="pointer-events-none absolute -right-20 top-4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-4 bottom-4 h-24 w-24 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Technologies
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Skills</h2>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border-l border-t border-slate-200 sm:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="border-b border-r border-slate-200 p-6 text-center transition-colors hover:bg-slate-50"
          >
            <p className="text-lg font-medium text-slate-900">{skill.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
              {skill.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
