const items = [
  {
    title: 'Snap it.',
    body: 'Capture meals, medications, labs, symptoms, and documents.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 6l1.2-2h3.6L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    tone: 'from-accent to-sky-500',
  },
  {
    title: 'Say it.',
    body: 'Use voice to log health moments naturally.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 11a6 6 0 0012 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tone: 'from-teal to-emerald-400',
  },
  {
    title: 'LogZ it.',
    body: 'AI organizes everything into trusted health memory.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M8 7a4 4 0 118 0v1.5A2.5 2.5 0 0118.5 11h-13A2.5 2.5 0 003 13.5v2A4.5 4.5 0 007.5 20h9a4.5 4.5 0 004.5-4.5v-2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="9" cy="14" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    tone: 'from-navy to-accent',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#ecf5fc] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-card border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`inline-flex rounded-xl bg-gradient-to-r ${item.tone} p-2 text-white shadow-sm`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
