"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { ArrowIcon } from "@/components/icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
          {personalInfo.name}
        </a>

        <ul className="hidden gap-8 text-sm font-medium text-slate-500 md:flex">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  index === 0
                    ? "text-primary"
                    : "transition-colors hover:text-slate-900"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-slate-900 px-5 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white md:flex"
        >
          Contact
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          aria-label="Menyuni ochish"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menyu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 text-sm font-medium text-slate-500 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 transition-colors hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="mt-2 flex w-fit items-center gap-1.5 rounded-full border border-slate-900 px-5 py-2 text-slate-900"
              onClick={() => setOpen(false)}
            >
              Contact
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
