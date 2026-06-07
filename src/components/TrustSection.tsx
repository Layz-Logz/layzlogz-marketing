const points = [
  { title: 'User Owned Data', detail: 'You control what is kept, shared, and exported.' },
  { title: 'Provenance Tracking', detail: 'Every fact links back to a source moment.' },
  { title: 'Confidence Scoring', detail: 'Signals help you evaluate certainty before action.' },
  { title: 'Human Verification', detail: 'Critical entries are reviewed before permanence.' },
  { title: 'Permission Based Sharing', detail: 'Caregiver access is always explicit and revocable.' },
]

export default function TrustSection() {
  return (
    <section id="trust" className="relative bg-[#edf9f5] px-4 py-14 md:px-8 md:py-20">
      <div className="pointer-events-none absolute right-8 top-10 h-36 w-36 rounded-full bg-teal/15 blur-2xl" />
      <div className="mx-auto w-full max-w-6xl rounded-card border border-teal/20 bg-white p-7 shadow-card md:p-10">
        <div className="grid gap-7 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Trust Layer</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Built on trust, not blind AI.
            </h2>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              Designed with privacy and trust in mind.
            </p>

            <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point.title}
                  className="rounded-2xl border border-teal/20 bg-gradient-to-br from-white to-[#f3fcf9] px-4 py-3"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal text-white">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" aria-hidden="true">
                        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{point.title}</p>
                      <p className="mt-1 text-xs text-slate-600">{point.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-accent/25 bg-gradient-to-br from-[#123047] via-[#1d4e70] to-[#2D9CDB] p-5 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Explainable AI</p>
            <h3 className="mt-2 text-xl font-semibold">Trusted answers, with context.</h3>
            <p className="mt-3 text-sm leading-6 text-blue-50">
              LayZ LogZ highlights where each conclusion came from, when it was captured,
              and how reliable it is before it becomes part of your health memory.
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-xl bg-white/15 px-3 py-2">Source-linked timeline evidence</div>
              <div className="rounded-xl bg-white/15 px-3 py-2">Confidence and recency signals</div>
              <div className="rounded-xl bg-white/15 px-3 py-2">Human-in-the-loop review checkpoints</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
