const pillars = [
  {
    title: 'Meals and nutrition',
    icon: 'meal',
    tone: 'from-[#123047] to-[#205476] text-white border-transparent',
    description: 'Image and voice meal capture with timeline context.',
  },
  {
    title: 'Medications',
    icon: 'medications',
    tone: 'from-[#2D9CDB] to-[#4EB6F2] text-white border-transparent',
    description: 'Dose reminders, adherence streaks, and change history.',
  },
  {
    title: 'Symptoms',
    icon: 'symptoms',
    tone: 'from-[#2FBF9B] to-[#52D6B5] text-white border-transparent',
    description: 'Natural language symptom logs tied to events.',
  },
  {
    title: 'Lab reports',
    icon: 'labs',
    tone: 'from-[#1C7FAE] to-[#2FBF9B] text-white border-transparent',
    description: 'Structured extraction and trend-aware summaries.',
  },
  {
    title: 'Doctor prep',
    icon: 'doctor',
    tone: 'from-[#FFFFFF] to-[#EFF7FD] text-navy border-slate-200',
    description: 'Visit-ready summaries with questions and changes.',
  },
  {
    title: 'Caregiver sharing',
    icon: 'caregiver',
    tone: 'from-[#123047] to-[#2D9CDB] text-white border-transparent',
    description: 'Permission-based visibility for family and care teams.',
  },
  {
    title: 'Emergency readiness',
    icon: 'emergency',
    tone: 'from-[#F47C6B] to-[#F29A8D] text-white border-transparent',
    description: 'Critical facts available when decisions are urgent.',
  },
  {
    title: 'Health story',
    icon: 'story',
    tone: 'from-[#EAF8F4] to-[#DFF3FA] text-navy border-teal/30',
    description: 'AI turns moments into a meaningful health narrative.',
  },
]

function Icon({ name }: { name: string }) {
  const common = 'h-5 w-5'
  if (name === 'meal') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      </svg>
    )
  }
  if (name === 'medications') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <rect x="4" y="8" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  if (name === 'symptoms') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M3 12h4l2-4 3 8 2-4h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'labs') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M8 4v6l-3 6a3 3 0 002.7 4h8.6a3 3 0 002.7-4l-3-6V4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }
  if (name === 'doctor') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M8 4v5a4 4 0 108 0V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (name === 'caregiver') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 17c1-2 3-3 5-3s4 1 5 3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (name === 'emergency') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M12 4l8 14H4L12 4z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 9v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="15.5" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (name === 'story') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M6 5h12v14H6z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export default function ProductPromise() {
  return (
    <section className="relative bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-6 top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Features</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Health logging without the homework.
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-700 md:text-lg">
          LayZ LogZ captures health moments automatically and transforms them into trusted
          health memory.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <div
              key={item.title}
              className={`group rounded-card border bg-gradient-to-br p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.tone}`}
            >
              <div className="inline-flex rounded-lg bg-white/20 p-2 ring-1 ring-white/25">
                <Icon name={item.icon} />
              </div>
              <p className="mt-3 text-sm font-semibold md:text-base">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-current/85">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-[#f0f8fe] to-[#ebfaf6] px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">AI CAPABILITIES</p>
          <p className="mt-1 text-sm text-slate-700 md:text-base">
            Multimodal capture, timeline intelligence, confidence scoring, and explainable summaries
            are built into every memory flow.
          </p>
        </div>
      </div>
    </section>
  )
}
