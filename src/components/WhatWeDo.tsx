import { capabilityIcons } from "@/components/icons";
import { whatWeDo } from "@/content/site";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="display text-center text-navy text-[1.4rem] uppercase tracking-[0.18em] sm:text-[1.75rem]">
          {whatWeDo.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[0.9rem] leading-[1.9] text-charcoal">
          {whatWeDo.intro.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {whatWeDo.items.map((item, i) => {
            const Icon = capabilityIcons[item.icon];
            return (
              <li
                key={item.title.join(" ")}
                className={`flex flex-col items-center px-4 text-center lg:px-6 ${
                  i > 0 ? "lg:border-l lg:border-border" : ""
                }`}
              >
                <Icon className="h-12 w-12 text-navy" />
                <h3 className="label-caps mt-6 text-[0.78rem] leading-[1.7] text-navy">
                  {item.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 max-w-[15rem] text-[0.83rem] leading-[1.85] text-charcoal">
                  {item.body}
                </p>
                <span className="rule-gold mt-6 w-10" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
