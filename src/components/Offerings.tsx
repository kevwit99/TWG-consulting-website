import waterTexture from "@/assets/navy-water.jpg";
import { RingMark } from "@/components/icons";
import { offerings } from "@/content/site";

export function Offerings() {
  return (
    <section id="who-we-serve" className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <img
        src={waterTexture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/70" />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="display text-center text-[1.4rem] uppercase tracking-[0.22em] text-ivory sm:text-[1.7rem]">
          {offerings.heading}
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-0">
          {offerings.items.map((item, i) => (
            <li
              key={item.title}
              className={`flex flex-col items-center px-2 text-center lg:px-10 ${
                i > 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              <RingMark tone={item.ring} />
              <h3 className="mt-6 text-[1.15rem] font-light tracking-[0.02em] text-ivory sm:text-[1.3rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.95rem] font-light text-ivory/85">{item.subtitle}</p>
              <p className="mt-5 max-w-[22rem] text-[0.85rem] leading-[1.9] text-ivory/70">
                {item.body}
              </p>
              <p className="label-caps mt-7 text-[0.82rem] text-gold-soft">{item.price}</p>
              <p className="label-caps mt-2 text-[0.68rem] text-coastal">{item.term}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
