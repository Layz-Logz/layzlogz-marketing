export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white px-4 pb-16 pt-14 md:px-8 md:pt-20">
      <div className="pointer-events-none absolute left-[-100px] top-[-160px] h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-70px] h-[360px] w-[360px] rounded-full bg-teal/15 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-teal/40 bg-teal/10 px-4 py-1 text-sm font-semibold text-navy">
            Coming Soon
          </span>

          <img
            src="/assets/layz_logz_full_logo_with_tagline_8k.png"
            alt="LayZ LogZ Snap it. Say it. LogZ it."
            className="h-auto w-[280px] max-w-full md:w-[380px]"
          />

          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your Personal Health Memory
            </h1>
            <p className="text-xl font-semibold text-accent md:text-2xl">A CRM for your body.</p>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              LayZ LogZ is AI-powered health memory. Voice prompts make logging effortless,
              pictures are captured seamlessly, and your moments are organized in a natural,
              interactive chat flow for easy, low-effort tracking.
            </p>
            <p className="max-w-xl text-sm font-medium text-slate-600 md:text-base">
              Technology captures moments. Memory creates meaning.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                AI-Powered Memory Engine
              </span>
              <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                Voice Prompt Logging
              </span>
              <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
                Seamless Photo Capture + Chat Logging
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#waitlist"
              className="rounded-full bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-card transition duration-200 hover:scale-[1.02] hover:shadow-xl"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="relative md:pl-4">
          <img
            src="/assets/layz_logz_z_mark_only_8k.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 w-40 rotate-[8deg] opacity-20 md:w-52"
          />

          <div className="relative flex flex-col items-center gap-6 md:h-[720px] md:block">
            <article className="animate-float-soft relative z-10 h-[628px] w-[290px] rounded-[2.4rem] bg-slate-900 p-2 shadow-2xl md:absolute md:left-0 md:top-3">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4">
                <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
                <div className="flex h-full flex-col pt-4">
                  <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="text-[11px] font-semibold text-slate-700">LayZ LogZ</span>
                    <span className="text-[10px] text-slate-500">Today 8:24 AM</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Health Timeline
                      </p>
                      <p className="mt-1 text-base font-semibold text-navy">Good Morning Jill</p>
                    </div>
                    <img
                      src="/assets/layz_logz_app_icon_8k.png"
                      alt="LayZ LogZ app icon"
                      className="h-8 w-8 rounded-lg border border-slate-200"
                    />
                  </div>

                  <div className="mt-3 flex-1 space-y-2 rounded-2xl bg-mist p-3">
                    <p className="text-xs font-semibold text-slate-700">Today's Story</p>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                      <span className="text-[11px] text-slate-500">Medication Streak</span>
                      <span className="text-xs font-semibold text-navy">14 Days</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                      <span className="text-[11px] text-slate-500">Hydration</span>
                      <span className="text-xs font-semibold text-teal">Improved This Week</span>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-700">Recent Meal:</span> Grilled Chicken and
                      Vegetables
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-[11px]">
                      <span className="text-slate-500">Reminder</span>
                      <span className="font-semibold text-navy">Metformin 8:00 PM</span>
                    </div>
                    <div className="h-10 overflow-hidden rounded-xl bg-white p-2">
                      <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-coral via-accent to-teal" />
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Your average glucose trend is moving in the right direction.
                    </p>
                  </div>

                  <nav className="mt-3 grid grid-cols-4 rounded-2xl border border-slate-200 bg-white p-1">
                    <span className="rounded-xl bg-accent/10 px-1 py-2 text-center text-[11px] font-semibold text-accent">
                      Home
                    </span>
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Logs
                    </span>
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Reports
                    </span>
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Settings
                    </span>
                  </nav>
                </div>
              </div>
            </article>

            <article className="animate-float-soft-delay relative z-20 h-[628px] w-[290px] rounded-[2.4rem] bg-slate-900 p-2 shadow-2xl md:absolute md:left-[145px] md:top-[165px]">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4">
                <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
                <div className="flex h-full flex-col pt-4">
                  <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="text-[11px] font-semibold text-slate-700">Assistant Mode</span>
                    <span className="text-[10px] text-slate-500">Synced now</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Health Memory Assistant
                    </p>
                    <span className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-semibold text-accent">
                      AI
                    </span>
                  </div>

                  <div className="mt-3 flex-1 space-y-2.5 text-sm">
                    <div className="rounded-2xl bg-mist px-4 py-3 text-[12px] text-slate-700">
                      When did my dizziness start?
                    </div>
                    <div className="rounded-2xl bg-gradient-to-r from-accent to-teal px-4 py-3 text-[12px] text-white">
                      You first reported dizziness on May 11.
                    </div>
                    <div className="rounded-2xl border border-slate-200 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Related Events
                      </p>
                      <ul className="mt-2 space-y-1.5 text-[12px] text-slate-700">
                        <li>Medication adjustment</li>
                        <li>Reduced hydration</li>
                        <li>Elevated morning glucose</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-mist px-4 py-3 text-[12px] text-slate-700">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Timeline References
                      </p>
                      <p className="mt-1">May 11 initial note</p>
                      <p>May 13 medication update</p>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1b4463]"
                    >
                      Add to Doctor Visit Summary
                    </button>
                  </div>

                  <nav className="mt-3 grid grid-cols-4 rounded-2xl border border-slate-200 bg-white p-1">
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Home
                    </span>
                    <span className="rounded-xl bg-accent/10 px-1 py-2 text-center text-[11px] font-semibold text-accent">
                      Logs
                    </span>
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Reports
                    </span>
                    <span className="rounded-xl px-1 py-2 text-center text-[11px] font-medium text-slate-600">
                      Settings
                    </span>
                  </nav>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
