import { useState } from "react";
import logoFull from "@/assets/wg-logo-full.png";
import { nav } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="The White Group — Home">
          <img
            src={logoFull}
            alt="The White Group"
            width={1278}
            height={453}
            className="h-11 w-auto sm:h-14"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-caps text-[11px] text-charcoal transition-colors duration-200 hover:text-teal focus-visible:text-teal focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="label-caps bg-navy px-6 py-3 text-[11px] text-ivory transition-colors duration-200 hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            {nav.cta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-navy lg:hidden"
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-[1240px] px-5 py-3 sm:px-8">
            {nav.links.map((link) => (
              <li key={link.href} className="border-b border-border/60 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="label-caps block py-4 text-xs text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5 pb-6">
              <a
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="label-caps block bg-navy px-6 py-4 text-center text-[11px] text-ivory"
              >
                {nav.cta.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
