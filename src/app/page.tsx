const highlights = [
  {
    title: "AI Native",
    value: "Operational Intelligence",
    description:
      "Moonbear uses intelligent orchestration to route deletion work quickly, reduce manual review, and keep workflows consistent as volume grows.",
  },
  {
    title: "Enterprise-ready",
    value: "Governed at Scale",
    description:
      "Coordinate deletion processes across products, teams, and stakeholders from a single administrative surface with clear controls.",
  },
  {
    title: "Global Coverage",
    value: "Regional Confidence",
    description:
      "Execute deletion workloads across four deployment regions while supporting data residency and audit expectations.",
  },
];

const howItWorks = [
  {
    title: "Step 1",
    description:
      "Ingest requests through API, SDK, or console using the file and export formats your teams already manage.",
    value: "Submit the request",
  },
  {
    title: "Step 2",
    description:
      "Moonbear validates, routes, and stages each deletion job inside a controlled infrastructure footprint built for reliability.",
    value: "Process with control",
  },
  {
    title: "Step 3",
    description:
      "Receive a governed execution trail showing what was deleted, when it completed, and how policy requirements were met.",
    value: "Verify completion",
  },
];

const pricingTiers = [
  {
    name: "Personal",
    price: "$9.99",
    cadence: "/month",
    description: "For individuals managing recurring deletion workflows.",
    benefits: [
      "1 bear",
      "10,000 deletions per month",
      "1GB/month transfer quota",
      "Deletes common document and image formats",
      "Console access",
      "API access",
      "SDK access",
    ],
  },
  {
    name: "Professional",
    price: "$29.99",
    cadence: "/month",
    description: "For growing teams that need higher throughput and shared operations.",
    benefits: [
      "2 bears",
      "100,000 deletions per month",
      "2GB/month transfer quota",
      "Deletes documents, media, and data exports",
      "Console access",
      "API access",
      "SDK access",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "custom",
    description: "For organizations with advanced governance, security, and billing requirements.",
    benefits: [
      "Unlimited bears",
      "Unlimited deletion volume",
      "Unlimited transfer quota",
      "All supported file types",
      "Console access",
      "API access",
      "SDK access",
      "SAML",
      "HIPAA compliance",
      "Audit trails",
      "Enhanced invoicing",
    ],
  },
];

const customerTestimonials = [
  {
    quote:
      "We needed a deletion path that our security team could review without slowing product teams down. Moonbear gave us a single operational surface and predictable throughput across regions.",
    name: "Priya Natarajan",
    role: "VP of Information Security",
    company: "Northline Analytics",
  },
  {
    quote:
      "The API and SDK fit our existing pipelines cleanly. We went from ad hoc scripts to a governed workflow with clear ownership and fewer handoffs between engineering and compliance.",
    name: "Marcus Webb",
    role: "Director of Platform Engineering",
    company: "Harborstack Systems",
  },
  {
    quote:
      "Audit readiness mattered for our renewal cycle. Moonbear’s trails and enterprise controls made it straightforward to show what was deleted, when, and under which policy.",
    name: "Elena Okonkwo",
    role: "Chief Compliance Officer",
    company: "Crescent Health Data Co.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.12),_transparent_26%),radial-gradient(circle_at_80%_18%,_rgba(96,165,250,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              M
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.01em] text-white">Moonbear</p>
              <p className="text-sm text-slate-400">Data deletion service</p>
            </div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.16em] text-slate-300 uppercase backdrop-blur-xl sm:text-sm">
            Enterprise deletion, handled
          </div>
        </header>

        <div className="flex flex-1 items-center py-10 lg:py-14">
          <div className="flex w-full flex-col gap-8 lg:gap-10">
            <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-medium tracking-[0.22em] text-cyan-100 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  Governed deletion workflows
                </div>
                <p className="mt-10 text-sm font-medium tracking-[0.28em] text-slate-500 uppercase sm:text-base">
                  Moonbear
                </p>
                <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-balance text-white sm:text-6xl lg:text-[5.6rem] lg:leading-[0.92]">
                  Data deletion infrastructure for teams that need proof, not promises.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Moonbear gives security, compliance, and platform teams a controlled way to submit, execute, and verify deletion operations across systems and regions.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#overview"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-300 to-sky-300 px-6 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                  >
                    Explore the platform
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-medium text-slate-100 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8"
                  >
                    View pricing
                  </a>
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_28px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(94,234,212,0.13),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_32%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase">
                        Operating snapshot
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white">Deletion command center</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-slate-950/55 p-4">
                      <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">Policies executed</p>
                      <p className="mt-3 text-3xl font-semibold text-white">18.4M</p>
                      <p className="mt-2 text-sm text-slate-400">Completed deletion events this quarter</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-slate-950/55 p-4">
                      <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">Regions online</p>
                      <p className="mt-3 text-3xl font-semibold text-white">4</p>
                      <p className="mt-2 text-sm text-slate-400">US deployment coverage for residency needs</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-slate-950/55 p-4 sm:col-span-2">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">Verification trail</p>
                          <p className="mt-3 text-lg font-semibold text-white">Audit-ready evidence with every run</p>
                        </div>
                        <span className="text-sm font-medium text-cyan-200">99.98% success</span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/8">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-sky-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </section>

            <div
              id="howItWorks"
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="p-6 sm:p-7">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium tracking-[0.16em] text-slate-400 uppercase">How it works</p>
                    <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white">
                      A measured path from intake to verified deletion.
                    </p>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-slate-400">
                    Built to feel operationally calm for teams handling compliance-sensitive workloads.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {howItWorks.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/8 bg-slate-950/45 p-5 transition hover:border-cyan-300/20 hover:bg-slate-950/60"
                    >
                      <p className="text-sm font-medium tracking-[0.16em] text-slate-500 uppercase">{item.title}</p>
                      <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="overview"
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="p-6 sm:p-7">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium tracking-[0.16em] text-slate-400 uppercase">Why Moonbear</p>
                    <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white">
                      Built for deletion programs that need governance, speed, and consistency.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {highlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.76),rgba(2,6,23,0.92))] p-5"
                    >
                      <p className="text-sm font-medium tracking-[0.16em] text-slate-500 uppercase">{item.title}</p>
                      <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="pricing"
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="border-b border-white/10 px-6 py-6 sm:px-7">
                <p className="text-sm font-medium tracking-[0.16em] text-slate-400 uppercase">Pricing</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Flexible plans for every stage of deletion operations.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                  Every plan includes the Moonbear console, API, and SDK, with added capacity and governance controls as operational needs expand.
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid gap-4 lg:grid-cols-3">
                  {pricingTiers.map((tier) => {
                    const featured = tier.name === "Enterprise";

                    return (
                      <article
                        key={tier.name}
                        className={`flex h-full flex-col rounded-[1.7rem] border p-6 ${
                          featured
                            ? "border-cyan-300/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.45),rgba(15,23,42,0.92))] shadow-[0_24px_80px_rgba(14,116,144,0.18)]"
                            : "border-white/8 bg-slate-950/45"
                        }`}
                      >
                        <p className="text-sm font-medium tracking-[0.16em] text-slate-400 uppercase">{tier.name}</p>
                        <div className="mt-4 flex min-h-14 items-end gap-2">
                          <p className="text-4xl font-semibold tracking-tight text-white">{tier.price}</p>
                          <p className="pb-1 text-sm text-slate-400">{tier.cadence}</p>
                        </div>
                        <p className="mt-4 min-h-16 text-sm leading-6 text-slate-400">{tier.description}</p>
                        <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-200">
                          {tier.benefits.map((benefit) => (
                            <li key={benefit} className="grid grid-cols-[0.6rem_1fr] items-start gap-x-3">
                              <span className="mt-2 block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              id="testimonials"
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="border-b border-white/10 px-6 py-6 sm:px-7">
                <p className="text-sm font-medium tracking-[0.16em] text-slate-400 uppercase">Testimonials</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Trusted by teams where deletion is a governance requirement.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                  Moonbear helps organizations operationalize deletion without losing clarity, control, or confidence in the resulting audit trail.
                </p>
              </div>

              <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-3">
                {customerTestimonials.map((t) => (
                  <blockquote
                    key={t.name}
                    className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/8 bg-slate-950/45 p-6"
                  >
                    <p className="text-lg font-medium leading-8 text-slate-100">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-8 border-t border-white/8 pt-5">
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {t.role}, {t.company}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
