import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { ArrowIcon, DownloadIcon, iconMap } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:gap-12 md:px-12 md:pb-20"
    >
      <div className="max-w-xl text-center md:text-left">
        <ul className="mb-6 flex justify-center gap-4 text-slate-400 md:justify-start">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <li key={social.name}>
                <a
                  href={social.url}
                  target={social.icon === "phone" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.name}
                  className="transition-colors hover:text-slate-900"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-2xl font-medium text-slate-900">👋 {personalInfo.greeting},</p>
        <h1 className="mt-1 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          It&apos;s{" "}
          <span className="underline decoration-primary decoration-4 underline-offset-4">
            {personalInfo.name}
          </span>
          .
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-500">{personalInfo.title}</p>
        <p className="mt-5 text-base leading-relaxed text-slate-500">{personalInfo.bio}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            Contact
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            My Work
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            aria-label="Download resume"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative flex h-64 w-64 shrink-0 items-center justify-center sm:h-80 sm:w-80">
        <div
          className="absolute h-40 w-40 rounded-tr-[6rem] bg-primary/80 sm:h-48 sm:w-48"
          style={{ bottom: 0, left: 0 }}
        />
        <div
          className="absolute h-32 w-24 rounded-l-full bg-secondary/70 sm:h-40 sm:w-28"
          style={{ top: "10%", right: 0 }}
        />
        <div
          className="absolute h-16 w-16 opacity-40"
          style={{
            top: 0,
            left: "-0.5rem",
            backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        <span className="absolute right-4 top-2 h-2.5 w-2.5 rounded-full bg-slate-900" />

        <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-64 sm:w-64">
          <Image
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            fill
            priority
            sizes="256px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
