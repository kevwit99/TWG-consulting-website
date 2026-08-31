import { PelicanMark } from "@/components/icons";
import { philosophy } from "@/content/site";

export function PhilosophyStrip() {
  return (
    <section id="insights" className="bg-teal py-10 text-ivory sm:py-12">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="flex items-center gap-5">
          <PelicanMark className="h-14 w-14 shrink-0 text-ivory/85" />
          <div className="min-w-0">
            <h2 className="label-caps text-[0.78rem] text-ivory">{philosophy.heading}</h2>
            <p className="mt-2 text-[0.85rem] leading-[1.8] text-ivory/85">
              {philosophy.body.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
          {philosophy.principles.map((principle, i) => (
            <li
              key={principle.join(" ")}
              className={`px-3 text-center lg:px-4 ${i > 0 ? "border-l border-ivory/25" : ""}`}
            >
              <p className="label-caps text-[0.72rem] leading-[1.8] text-ivory">
                {principle.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
