const highlights = [
  {
    title: "Centralized deletion workflows",
    value: "Policy-driven operations",
    description: "Route deletion requests through a managed platform with standardized handling, auditability, and operational consistency.",
  },
  {
    title: "Enterprise-ready controls",
    value: "Designed for teams",
    description: "Coordinate deletion processes across products, business units, and stakeholders from a single administrative surface.",
  },
  {
    title: "Global service coverage",
    value: "Available wherever you operate",
    description: "Support distributed organizations with a deletion platform built to serve teams across regions and environments.",
  },
];

const pricingTiers = [
  {
    name: "Personal",
    price: "$9.99",
    cadence: "/month",
    description: "For individuals managing recurring deletion workflows.",
    benefits: [
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
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 backdrop-blur">
            Managed deletion for modern teams
          </div>
        </header>

        <div className="flex flex-1 items-center py-8 lg:py-10">
          <div className="flex w-full flex-col gap-12 lg:gap-14">
            <div className="max-w-3xl">
              <p className="mt-14 text-3xl font-semibold tracking-[-0.04em] text-slate-700 sm:mt-16 sm:text-4xl lg:text-5xl">
                Moonbear
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
                Data Deletion Service
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Send us your data and we&apos;ll delete it for you.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
              id="overview"
              className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 px-6 py-5">
                <p className="text-sm font-medium text-slate-500">Moonbear deletion console</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  One interface for intake, processing, and deletion operations.
                </p>
              </div>

              <div className="p-5">
                <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Why Moonbear</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      A streamlined approach to deletion operations at organizational scale.
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                    Service status: Operational
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {highlights.map((item) => (
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
              id="pricing"
              className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
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
                      className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
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
          </div>
        </div>
      </section>
    </main>
  );
}
