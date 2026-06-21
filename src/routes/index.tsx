import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  HeartPulse,
  TrendingDown,
  Users,
  Smartphone,
  Receipt,
  Wallet,
  Boxes,
  Wrench,
  MapPin,
  Recycle,
  Cloud,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";

import heroMarket from "@/assets/hero-market.png.asset.json";
import meter from "@/assets/meter.png.asset.json";
import charcoal from "@/assets/charcoal.jpg.asset.json";
import unitMarket from "@/assets/unit-market.png.asset.json";
import digester from "@/assets/digester.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umodoro Biotechnology — Pay-As-You-Go Biogas for Zambian Markets" },
      {
        name: "description",
        content:
          "Umodoro builds portable, modular biogas units that bring clean, affordable pay-as-you-go cooking energy to Zambia's urban markets — up to 44% cheaper than charcoal.",
      },
      { property: "og:title", content: "Umodoro Biotechnology — Clean Biogas for Zambian Markets" },
      {
        property: "og:description",
        content:
          "Affordable, clean pay-as-you-go biogas replacing charcoal in dense urban markets across Zambia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroMarket.url },
      { property: "twitter:image", content: heroMarket.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Stat({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <Icon className="h-6 w-6 text-accent" strokeWidth={2.2} />
      <p className="mt-4 font-display text-3xl font-700">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-primary">
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-500 text-muted-foreground md:flex">
            <a href="#problem" className="transition-colors hover:text-foreground">Problem</a>
            <a href="#solution" className="transition-colors hover:text-foreground">Solution</a>
            <a href="#model" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#team" className="transition-colors hover:text-foreground">Team</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-600 text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em]">
              Patent Pending · Zambia
            </span>
            <h1 className="mt-6 font-display text-4xl font-700 leading-[1.05] sm:text-5xl md:text-6xl">
              Pay-As-You-Go Biogas for Zambia&apos;s Urban Markets
            </h1>
            <p className="mt-5 max-w-md text-lg text-primary-foreground/85">
              Clean, affordable cooking energy that replaces smoky charcoal — up to
              <span className="font-700 text-accent"> 44% cheaper</span>, paid for with a tap of mobile money.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 font-600 text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#problem"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 font-600 transition-colors hover:bg-primary-foreground/10"
              >
                See the problem
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-glow">
              <img
                src={heroMarket.url}
                alt="A market vendor cooking on a clean gas burner powered by Umodoro biogas"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl shadow-soft md:order-1">
            <img
              src={charcoal.url}
              alt="A market vendor cooking over a smoky charcoal fire"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionTag>The problem</SectionTag>
            <h2 className="mt-5 text-3xl font-700 sm:text-4xl">
              Charcoal is burning <span className="text-gradient-accent">health &amp; wealth</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We surveyed 30 businesses across 7 market zones in Lusaka. Vendors work up to 14-hour
              days over open charcoal fires — and they told us they&apos;d gladly switch to a cleaner,
              cheaper option.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-muted p-5 text-sm italic text-foreground">
              &ldquo;We work for 14 hours… our heads hurt and we feel like fainting every day. We
              would gladly switch to a cheaper, cleaner option.&rdquo;
              <span className="mt-2 block text-xs not-italic text-muted-foreground">
                — Lusaka market vendor, Umodoro survey
              </span>
            </blockquote>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Stat icon={HeartPulse} value="90%" label="report daily headaches" />
              <Stat icon={TrendingDown} value="40%+" label="of revenue lost to fuel" />
              <Stat icon={Users} value="80%" label="of vendors are women" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <SectionTag>Our solution</SectionTag>
            <h2 className="mt-5 text-3xl font-700 sm:text-4xl">
              A biodigester built for dense urban markets
            </h2>
            <p className="mt-4 text-muted-foreground">
              Existing biodigesters are too large, permanent, or rely on costly imported parts — and
              none were designed for busy city markets. Umodoro fills that gap with a portable,
              robust unit made from local parts.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={digester.url}
                alt="The Umodoro biodigester: a black feed tank connected to a white modular gas tank"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4">
              {[
                { icon: Boxes, title: "Portable & Modular", text: "Stacks and scales to fit any market footprint." },
                { icon: Wrench, title: "Robust Local Parts", text: "Built to last with near-zero maintenance, no imports." },
                { icon: Recycle, title: "Turns Waste into Energy", text: "On-site biogas from organic market waste." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-primary">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-600">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-gradient-hero p-5 text-primary-foreground shadow-soft">
                <p className="text-sm">
                  <span className="font-700">Proven on the ground:</span> 3 prototypes across Lusaka,
                  Chibombo &amp; Luanshya (2024–2026), 14 testers, 80% satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pay as you go / model */}
      <section id="model" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTag>How it works</SectionTag>
            <h2 className="mt-5 text-3xl font-700 sm:text-4xl">
              Pay only for the gas you use
            </h2>
            <p className="mt-4 text-muted-foreground">
              No upfront fuel costs. Vendors cook on clean gas and pay with mobile money, while
              real-time metering keeps billing transparent and builds trust.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <Wallet className="h-6 w-6 text-accent" strokeWidth={2.2} />
                <h3 className="mt-3 font-600">Pay per use</h3>
                <p className="mt-1 text-sm text-muted-foreground">No upfront fuel costs.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <Smartphone className="h-6 w-6 text-accent" strokeWidth={2.2} />
                <h3 className="mt-3 font-600">Mobile money</h3>
                <p className="mt-1 text-sm text-muted-foreground">Easy, familiar payments.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <Receipt className="h-6 w-6 text-accent" strokeWidth={2.2} />
                <h3 className="mt-3 font-600">Clear billing</h3>
                <p className="mt-1 text-sm text-muted-foreground">Real-time usage tracking.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={meter.url}
              alt="A vendor cooking next to an Umodoro pay-as-you-go gas meter"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Energy networks */}
        <div className="mt-16 grid items-center gap-10 rounded-3xl border border-border bg-secondary/40 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="text-2xl font-700 sm:text-3xl">On-site energy networks</h3>
            <p className="mt-3 text-muted-foreground">
              Modular units produce biogas right where markets need it — and unlock extra revenue
              beyond cooking fuel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-600 shadow-soft">
                <MapPin className="h-4 w-4 text-accent" /> Any market
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-600 shadow-soft">
                <Cloud className="h-4 w-4 text-accent" /> Carbon credits
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-600 shadow-soft">
                <Recycle className="h-4 w-4 text-accent" /> Waste management
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={unitMarket.url}
              alt="A modular Umodoro biogas unit installed in an outdoor market"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em]">
              The economics
            </span>
            <h2 className="mt-5 text-3xl font-700 sm:text-4xl">A single unit pays for itself</h2>
            <p className="mt-4 text-primary-foreground/85">
              With conservative gas and fertilizer sales, each unit breaks even in just 4–9 months.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "$150", label: "Gas revenue / month", sub: "10 vendors × $15" },
              { value: "+$250", label: "Fertilizer / month", sub: "~4000L by-product" },
              { value: "$1,100", label: "One-off CapEx", sub: "hardware, lines & install" },
              { value: "4–9 mo", label: "Break-even", sub: "~$300–500 monthly profit" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-700 text-accent">{c.value}</p>
                <p className="mt-2 font-600">{c.label}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <SectionTag>The people</SectionTag>
          <h2 className="mt-5 text-3xl font-700 sm:text-4xl">Founder &amp; advisors</h2>
          <p className="mt-4 text-muted-foreground">
            Led by a biotech founder with 7+ years of experience in the USA &amp; Zambia, and backed
            by advisors at the frontier of digesters, waste management and private-sector growth.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-accent/30 bg-secondary/40 p-7 shadow-soft">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-primary">Founder</span>
            <h3 className="mt-2 font-display text-2xl font-700">Mphatso Simbao</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              7+ years in biotech across the USA &amp; Zambia. 2+ years and $3,000 personally invested
              in Umodoro prototypes. Winner of the 2026 FACE NDC Green Innovation Challenge.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              { name: "Blessing Gondwe", role: "Private Sector Engagement Consultant — FAO" },
              { name: "Dr T.H. Culhane", role: "Pioneer of modular Solar Cities digesters" },
              { name: "Dr K. Banda", role: "Pioneer in waste management practices" },
            ].map((a) => (
              <div key={a.name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="text-xs font-600 uppercase tracking-[0.18em] text-muted-foreground">
                  Advisor
                </span>
                <h4 className="mt-1 font-display text-lg font-600">{a.name}</h4>
                <p className="text-sm text-muted-foreground">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask / Contact */}
      <section id="contact" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <SectionTag>Get involved</SectionTag>
          <h2 className="mt-5 text-3xl font-700 sm:text-4xl">
            Help us build the future of Zambia&apos;s urban markets
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We&apos;re seeking a <span className="font-600 text-foreground">$3,900 grant</span> for a
            one-year pilot near Lusaka Apex Medical University (LAMU) — 4 canteens and 6 vendors, with
            university-backed data collection under an existing MoU. We&apos;re also looking for
            partners and market access.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {[
              "$3,900 grant for a 1-year pilot",
              "4 canteens + 6 vendors at a market zone",
              "University-backed data & deployment",
              "MoU with LAMU Health Sciences Dept",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left text-sm font-500 shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:umodoro@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-600 text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> umodoro@gmail.com
            </a>
            <a
              href="tel:+260776936094"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-600 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-accent" /> +260 776 936 094
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Umodoro Biotechnology · Lusaka, Zambia
          </p>
        </div>
      </footer>
    </div>
  );
}
