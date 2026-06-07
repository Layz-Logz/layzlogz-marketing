export default function AppointmentPrep() {
  return (
    <section id="doctor-prep" className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-card border border-slate-200 bg-white p-7 shadow-card md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Never forget what to ask your doctor again.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
            LayZ LogZ prepares a visit summary from your health memory, including symptoms,
            medications, labs, questions, and recent changes.
          </p>
        </div>
        <div className="rounded-2xl bg-mist p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Visit Timeline</p>
          <div className="mt-3 space-y-3">
            <div className="rounded-xl bg-white p-3 text-sm text-slate-700">Symptoms trend summary</div>
            <div className="rounded-xl bg-white p-3 text-sm text-slate-700">Medication changes</div>
            <div className="rounded-xl bg-white p-3 text-sm text-slate-700">Lab highlights and questions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
