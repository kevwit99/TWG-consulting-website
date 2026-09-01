import logoFooter from "@/assets/wg-logo-footer-light.png";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { footer } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy py-14 text-ivory sm:py-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-5 text-center sm:px-8 lg:grid-cols-3 lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <img
            src={logoFooter}
            alt="The White Group"
            loading="lazy"
            width={1278}
            height={453}
            className="h-16 w-auto sm:h-20"
          />
        </div>

        <div className="lg:text-center">
          <p className="text-[0.88rem] leading-[1.9] text-ivory/85">
            {footer.blurb.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="label-caps mt-4 text-[0.75rem] text-gold-soft">{footer.site}</p>
        </div>

        <address className="not-italic lg:justify-self-end">
          <ul className="mx-auto inline-flex flex-col gap-3 text-left text-[0.85rem] text-ivory/85">
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-ivory/60" />
              <a
                href={`mailto:${footer.email}`}
                className="transition-colors duration-200 hover:text-gold-soft focus-visible:text-gold-soft"
              >
                {footer.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-ivory/60" />
              <a
                href={footer.phoneHref}
                className="transition-colors duration-200 hover:text-gold-soft focus-visible:text-gold-soft"
              >
                {footer.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-1 h-4 w-4 shrink-0 text-ivory/60" />
              <span>
                {footer.location.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}
