import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-20 md:px-12"
    >
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-6 top-6 h-24 w-24 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Work
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Projects</h2>
      </div>

      <div
        className={`relative mx-auto mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 ${
          projects.length > 1 ? "max-w-4xl sm:grid-cols-2" : "max-w-md"
        }`}
      >
        {projects.map((project) => (
          <div key={project.title} className="bg-white p-6 text-center">
            <div className="relative mx-auto h-44 w-full overflow-hidden rounded-xl border border-slate-200">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
              {project.description}
            </p>

            <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
              {project.tags.join(" · ")}
            </p>

            <div className="mt-5 flex justify-center gap-4 text-sm font-medium">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-900 underline underline-offset-4 hover:text-primary"
                >
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 underline underline-offset-4 hover:text-slate-900"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
