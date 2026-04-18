const highlights = [
  {
    title: "Agentic First",
    value: "Built for AI",
    description: "Infrastructure designed from day one for agentic workloads, automation, and autonomous systems.",
  },
  {
    title: "Fast & Cheap AI and Compute",
    value: "High efficiency",
    description: "Run AI inference and general compute with lower latency and better economics than legacy cloud stacks.",
  },
  {
    title: "Instant global deployment",
    value: "Worldwide in seconds",
    description: "Ship services close to users everywhere with fast rollout paths across regions and edges.",
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
              <p className="text-sm text-slate-500">Cloud infrastructure, simplified.</p>
            </div>
          </div>
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 backdrop-blur">
            Built for modern product teams
          </div>
        </header>

        <div className="flex flex-1 items-center py-8 lg:py-10">
          <div className="flex w-full flex-col gap-12 lg:gap-14">
            <div className="max-w-3xl">
              <h1 className="my-14 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:my-16 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
                Cloud, Done Right
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Everything you need, nothing you don&apos;t.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#overview"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  View platform overview
                </a>
                <a
                  href="#overview"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  See why Moonbear
                </a>
              </div>
            </div>

            <div
              id="overview"
              className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 px-6 py-5">
                <p className="text-sm font-medium text-slate-500">Moonbear control plane</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  One interface for deploys, scale, and operations.
                </p>
              </div>

              <div className="p-5">
                <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Why Moonbear</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Fast enough for product teams, calm enough for ops.
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                    All systems operational
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
          </div>
        </div>
      </section>
    </main>
  );
}
