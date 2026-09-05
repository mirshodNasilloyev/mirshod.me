import { personalInfo, socialLinks } from "@/data/portfolio";
import { iconMap } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 px-6 py-20 md:px-12"
    >
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-6 top-6 h-24 w-24 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-md text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get in Touch</h2>
        <p className="mt-3 text-lg text-slate-500">
          Have a project or collaboration in mind? Send a message using the form below, or reach
          out on social media.
        </p>

        <form
          action={`mailto:?subject=Message%20via%20portfolio`}
          method="post"
          encType="text/plain"
          className="mt-8 space-y-4 text-left"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-500">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-accent to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            Send
          </button>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Or reach out directly through the channels below:
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.icon === "phone" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {social.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={personalInfo.resumeUrl}
            download
            className="mt-6 inline-block rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            Download Resume
          </a>
        </div>
      </div>

      <p className="relative mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {personalInfo.name}
      </p>
    </section>
  );
}
