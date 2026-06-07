const principles = [
  'Memory before tracking',
  'Trust before AI',
  'Every fact needs provenance',
  'Voice first',
  'Health belongs to the user',
]

export default function Constitution() {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The LayZ LogZ Constitution</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-card border border-slate-200 bg-gradient-to-br from-white to-[#eef6fb] p-5 text-center text-sm font-semibold text-navy shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              {principle}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
