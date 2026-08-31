import heroImage from "@/assets/hero-pelican.jpg";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-ivory">
      <div className="absolute inset-y-0 right-0 w-full sm:w-[68%] lg:w-[62%]">
        <img
          src={heroImage}
          alt="A brown pelican standing on rocks above calm coastal water"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 82%, transparent) 16%, color-mix(in oklab, var(--ivory) 18%, transparent) 38%, transparent 58%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 90%, transparent) 45%, color-mix(in oklab, var(--ivory) 55%, transparent) 72%, color-mix(in oklab, var(--ivory) 20%, transparent) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="max-w-[30rem] sm:max-w-[38rem]">
          <h1 className="display text-navy text-[2rem] leading-[1.18] sm:text-[2.5rem] lg:text-[2.9rem]">

            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <span className="rule-gold mt-7" />

          <p className="label-caps mt-7 text-[0.72rem] leading-[2] text-charcoal sm:text-[0.8rem]">
            {hero.eyebrow.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <p
            className="mt-7 text-xl text-gold sm:text-2xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {hero.script}
          </p>

          <a
            href={hero.cta.href}
            className="label-caps mt-9 inline-block bg-navy px-8 py-4 text-[0.7rem] text-ivory transition-colors duration-200 hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
