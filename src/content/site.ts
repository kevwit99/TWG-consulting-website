/**
 * All page copy for THE WHITE GROUP lives here so it is easy to edit.
 */

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Approach", href: "#approach" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Invitation Only", href: "#contact" },
};

export const hero = {
  headline: ["Clarity for What's Next.", "Direction for What Matters."],
  eyebrow: ["Private advisory for founders, families", "& leaders in special circumstances."],
  script: "Insight. Discernment. Direction. Impact.",
  cta: { label: "Explore Our Approach", href: "#approach" },
};

export const whatWeDo = {
  heading: "We Help You See What Others Miss",
  intro: [
    "When decisions are complex and stakes are high, perspective changes everything.",
    "We bring clarity to complexity and help you move forward with confidence.",
  ],
  items: [
    {
      icon: "compass" as const,
      title: ["Strategic Clarity"],
      body: "Make sense of complexity and determine what's worth pursuing.",
    },
    {
      icon: "wave" as const,
      title: ["Growth &", "Transformation"],
      body: "Turn vision into actionable strategy and sustainable momentum.",
    },
    {
      icon: "mountain" as const,
      title: ["Leadership &", "Team Alignment"],
      body: "Build the right leadership and culture for what's next.",
    },
    {
      icon: "lighthouse" as const,
      title: ["Governance &", "Ownership"],
      body: "Strengthen decision-making, structure, and multi-generational clarity.",
    },
    {
      icon: "birds" as const,
      title: ["Capital &", "Partnerships"],
      body: "Identify opportunities, partners, and capital that create lasting value.",
    },
  ],
};

export const offerings = {
  heading: "Our Offerings",
  items: [
    {
      ring: "teal" as const,
      title: "Aligned Practice",
      subtitle: "Build the Practice that Fits You",
      body: "For experienced professionals ready to create a practice that aligns with who they are and how they work best.",
      price: "Starting at $7,500",
      term: "3-Month Engagement",
    },
    {
      ring: "silver" as const,
      title: "Special Circumstances",
      subtitle: "Navigate What's Not Simple",
      body: "For complex situations, transitions, or opportunities that require senior perspective and strategic navigation.",
      price: "Starting at $25,000",
      term: "3–6 Month Engagement",
    },
    {
      ring: "sand" as const,
      title: "Private Concierge Advisory",
      subtitle: "Ongoing Access. Trusted Perspective.",
      body: "For founders, families, and leaders who want The White Group close enough to call when something arises.",
      price: "Starting at $50,000",
      term: "Annual Engagement",
    },
  ],
};

export const cta = {
  lines: ["Some decisions shape everything.", "Let's make sure they're the right ones."],
  button: { label: "Request an Introduction", href: "#contact" },
};

export const approach = {
  heading: "Our Approach",
  steps: [
    {
      number: "01",
      title: ["See The", "Whole Picture"],
      body: "We listen deeply and understand the full context and stakes.",
    },
    {
      number: "02",
      title: ["Discern What", "Matters Most"],
      body: "We identify the real issues, opportunities, and leverage points.",
    },
    {
      number: "03",
      title: ["Chart The Right", "Direction"],
      body: "We design a clear, practical path forward with priorities.",
    },
    {
      number: "04",
      title: ["Catalyze &", "Move Forward"],
      body: "We bring in the right resources and keep momentum strong.",
    },
  ],
};

export const philosophy = {
  heading: "We work where water meets land.",
  body: ["We bring perspective above the noise,", "and the right response at the right time."],
  principles: [
    ["Clarity", "Over Noise"],
    ["Humanity", "Over Ego"],
    ["Ownership", "Over Default"],
    ["Intention", "Over Inheritance"],
  ],
};

export const footer = {
  blurb: ["Private advisory for founders, families", "and leaders navigating what's next."],
  site: "thewhitegroup.us",
  email: "info@thewhitegroup.us",
  phone: "715-204-1600",
  phoneHref: "tel:+17152041600",
  location: ["Based in Wisconsin", "Advising Nationwide"],
};
