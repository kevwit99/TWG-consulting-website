import shoreline from "@/assets/shoreline.jpg";
import { approach, cta } from "@/content/site";

export function ApproachCta() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative isolate flex min-h-[22rem] items-center justify-center overflow-hidden px-6 py-20 sm:px-12">
        <img
          src={shoreline}
          alt="Quiet rocky shoreline at sunrise"
          loading="lazy"
          width={1408}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/45" />
        <div className="max-w-md text-center">
          <p className="display text-navy text-[1.35rem] leading-[1.6] sm:text-[1.6rem]">
            {cta.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <span className="rule-gold mx-auto mt-7" />
          <a
            href={cta.button.href}
            className="label-caps mt-8 inline-block bg-navy px-8 py-4 text-[0.7rem] text-ivory transition-colors duration-200 hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            {cta.button.label}
          </a>
        </div>
      </div>

      <div id="approach" className="bg-ivory px-5 py-20 sm:px-10 sm:py-24">
        <h2 className="display text-center text-navy text-[1.4rem] uppercase tracking-[0.2em] sm:text-[1.7rem]">
          {approach.heading}
        </h2>
        <span className="rule-gold mx-auto mt-6" />

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {approach.steps.map((step, i) => (
            <li
              key={step.number}
              className={`px-2 text-center xl:px-5 ${
                i > 0 ? "xl:border-l xl:border-border" : ""
              }`}
            >
              <p className="display text-[1.9rem] text-navy">{step.number}</p>
              <h3 className="label-caps mt-4 text-[0.72rem] leading-[1.7] text-navy">
                {step.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mx-auto mt-4 max-w-[14rem] text-[0.8rem] leading-[1.85] text-charcoal">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
