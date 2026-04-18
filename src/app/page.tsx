export default function Home() {
  const features = [
    {
      title: "Elastic compute",
      description:
        "Scale containers, jobs, and services instantly with predictable performance and zero cluster overhead.",
    },
    {
      title: "Private networking",
      description:
        "Ship secure workloads across isolated networks, managed load balancers, and encrypted service-to-service traffic.",
    },
    {
      title: "Observability built in",
      description:
        "Trace deploys, inspect logs, and monitor usage from a single control plane designed for fast-moving teams.",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.14),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#f8fafc_100%)] text-slate-950">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="mb-20 flex items-center justify-between">
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

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Unified cloud platform
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Launch infrastructure that feels as fast as your team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Moonbear gives startups and scale-ups a clean, programmable cloud for compute, storage, networking, and deploy workflows—without the operational drag of legacy providers.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#platform"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Explore the platform
              </a>
              <a
                href="#infrastructure"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                See infrastructure overview
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-slate-200 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Control plane</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                    One view for deploys, services, and infrastructure.
                  </p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  All systems operational
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white sm:col-span-2">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-slate-400">Production environment</p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight">moonbear-core</p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                      Deploy, monitor, and scale from a single interface designed to stay calm under load.
                    </p>
                  </div>
                  <div className="grid gap-2 text-right text-sm text-slate-300">
                    <span>12 active services</span>
                    <span>4 regions online</span>
                    <span>Zero manual ops</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Deploy velocity</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">2 min</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Average time from merge to production-ready rollout.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Infrastructure model</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">API-first</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Every environment, service, and policy is programmable.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 p-5 sm:col-span-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Current rollout</p>
                    <p className="mt-2 text-lg font-medium text-slate-950">
                      Edge API cluster upgrade progressing smoothly.
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">84%</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[84%] rounded-full bg-slate-950" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-10 sm:px-10 lg:grid-cols-3 lg:px-12">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_16px_48px_rgba(15,23,42,0.05)]"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">{feature.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>

      <section
        id="infrastructure"
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12"
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Why Moonbear</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A cloud provider designed for clarity, speed, and control.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-100 p-6">
            <p className="text-sm font-medium text-slate-500">Deploy workflow</p>
            <p className="mt-3 text-lg font-medium text-slate-950">
              Git-connected releases, previews, rollbacks, and environment promotion without brittle pipelines.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-100 p-6">
            <p className="text-sm font-medium text-slate-500">Cost model</p>
            <p className="mt-3 text-lg font-medium text-slate-950">
              Transparent usage-based billing with no surprise egress math or pre-committed capacity.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-100 p-6 sm:col-span-2">
            <p className="text-sm font-medium text-slate-500">Operations</p>
            <p className="mt-3 max-w-2xl text-lg font-medium text-slate-950">
              Teams get a single, minimalist surface area for infrastructure—fast to learn, easy to automate, and ready for production from day one.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
