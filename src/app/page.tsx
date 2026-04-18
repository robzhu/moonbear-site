const highlights = [
  {
    title: "AI Native",
    value: "Agentic",
    description: "Moonbear is the most AI-forward Data Deletion Service on the market. We use AI to help you delete your data faster and more efficiently.",
  },
  {
    title: "Enterprise-ready",
    value: "Scales With You",
    description: "Coordinate deletion processes across products, business units, and stakeholders from a single administrative surface.",
  },
  {
    title: "Global Coverage",
    value: "Data Sovereignty",
    description: "Delete data in one of our four global regions: US-East-1, US-West-1, US-Central-1, and US-East-2.",
  },
];

const howItWorks = [
  {
    title: "Step 1",
    description: "We support multiple different file formats, such as .txt, .pdf, .docx, .jpg, .png, .csv, .json, .zip, etc.",
    value: "Send us your Data",
  },
  {
    title: "Step 2",
    description: "Our global data centers carefully receive each byte of your data and handle it with the care and precision your data deserves.",
    value: "Receive the Data",
  },
  {
    title: "Step 3",
    description: "Then our intelligent fleet orchestrator schedules an agentic team to begin generating a high-level strategy for deleting your data.",
    value: "Delete the Data",
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
      "Deletes common document and image formats: .txt, .pdf, .docx, .jpg, .png",
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
      "Deletes documents, media, and data exports: .txt, .pdf, .docx, .jpg, .png, .csv, .json, .zip",
      "Console access",
      "API access",
      "SDK access",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    cadence: "for pricing",
    description: "For organizations with advanced governance, security, and billing requirements.",
    benefits: [
      "Unlimited bears",
      "Unlimited deletion volume",
      "Deletes all supported file types, including regulated and archival formats",
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
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_52%,_#f8fafc_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(15,23,42,0.18)]">
              M
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Moonbear</p>
              <p className="text-sm text-slate-500">Data Deletion Service</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="rounded-full border border-slate-200/90 bg-white/85 px-3 py-2 text-xs font-medium tracking-wide text-slate-600 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur sm:px-4 sm:text-sm">
              The Trusted Leader in Data Deletion
            </div>
          </div>
        </header>

        <div className="flex flex-1 items-center py-8 lg:py-10">
          <div className="flex w-full flex-col gap-8">
            <div className="max-w-full flex flex-col gap-3">
              <p className="mt-14 text-3xl font-semibold tracking-[-0.04em] text-slate-700 sm:mt-16 sm:text-4xl lg:text-5xl">
                Moonbear
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
                Data Deletion Service
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Managed Data Deletion for the Agentic Era.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#overview"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Explore the platform
                </a>
                <a
                  href="#pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  View pricing
                </a>
              </div>
            </div>

            <div
              id="howItWorks"
              className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="p-5">
                <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">How it works</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Send your data to us via API, SDK, or console, and we delete it for you.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {howItWorks.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] bg-slate-50 p-5"
                    >
                      <p className="text-sm font-medium text-slate-500">{item.title}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

              </div>
            </div>

            <div
              id="Overview"
              className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="p-5">
                <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Why Moonbear</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      A streamlined approach to deletion operations at organizational scale.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {highlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-3xl bg-slate-50 p-5"
                    >
                      <p className="text-sm font-medium text-slate-500">{item.title}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

              </div>
            </div>

            <div
              id="pricing"
              className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 px-6 py-5">
                <p className="text-sm font-medium text-slate-500">Pricing</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Flexible plans for every stage of deletion operations.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Every plan includes access to the Moonbear console, API, and SDK, with tiered capacity and governance features for larger teams.
                </p>
              </div>

              <div className="p-5">
                <div className="grid gap-4 lg:grid-cols-3">
                  {pricingTiers.map((tier) => (
                    <article
                      key={tier.name}
                      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <p className="text-sm font-medium text-slate-500">{tier.name}</p>
                      <div className="mt-4 flex min-h-14 items-end gap-2">
                        <p className="text-4xl font-semibold tracking-tight text-slate-950">
                          {tier.price}
                        </p>
                        <p className="pb-1 text-sm text-slate-500">{tier.cadence}</p>
                      </div>
                      <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
                        {tier.description}
                      </p>
                      <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
                        {tier.benefits.map((benefit) => (
                          <li key={benefit} className="grid grid-cols-[0.5rem_1fr] items-start gap-x-3">
                            <span className="mt-2 block h-2 w-2 rounded-full bg-slate-950" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="testimonials"
              className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 px-6 py-5">
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  What Customers Are Saying
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  When security, compliance, reliability, and performance matter, don't gamble with your data. Choose Moonbear.
                </p>
              </div>

              <div className="flex flex-col gap-12 px-4 py-8 sm:px-6 sm:py-10">
                {customerTestimonials.map((t, index) => {
                  const alignRight = index % 2 === 1;
                  return (
                    <blockquote
                      key={t.name}
                      className={
                        alignRight
                          ? "max-w-2xl border-l-4 border-slate-200 py-1 pl-6 sm:ml-auto sm:border-l-0 sm:border-r-4 sm:pl-0 sm:pr-8 sm:text-right"
                          : "max-w-2xl border-l-4 border-slate-200 py-1 pl-6 sm:pl-8"
                      }
                    >
                      <p className="text-lg font-medium leading-8 text-slate-800 sm:text-xl sm:leading-9">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer className="mt-6 sm:mt-8">
                        <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                        <p className="mt-1 text-sm text-slate-600">
                          {t.role}, {t.company}
                        </p>
                      </footer>
                    </blockquote>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
