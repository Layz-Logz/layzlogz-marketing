export default function CaregiverSection() {
  return (
    <section id="caregivers" className="bg-[#ecf5fc] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl rounded-card border border-teal/30 bg-gradient-to-br from-white to-teal/10 p-7 shadow-card md:p-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Built for families, not just individuals.
        </h2>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
          Share selected logs with a son, daughter, spouse, or caregiver. Real-time updates
          and emergency notifications can help families stay connected.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy">Son</div>
          <div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy">Daughter</div>
          <div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy">Spouse</div>
          <div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy">Caregiver</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-white px-4 py-2">Real-time updates</span>
          <span className="rounded-full bg-white px-4 py-2">Emergency notifications</span>
        </div>
      </div>
    </section>
  )
}
