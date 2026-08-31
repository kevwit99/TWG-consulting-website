import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Offerings } from "@/components/Offerings";
import { ApproachCta } from "@/components/ApproachCta";
import { PhilosophyStrip } from "@/components/PhilosophyStrip";
import { SiteFooter } from "@/components/SiteFooter";

const title = "The White Group — Private Advisory for Founders & Families";
const description =
  "Private advisory for founders, entrepreneurial families, and leaders in special circumstances. Clarity for what's next, direction for what matters.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-white">
      <SiteNav />
      <main>
        <Hero />
        <WhatWeDo />
        <Offerings />
        <ApproachCta />
        <PhilosophyStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
