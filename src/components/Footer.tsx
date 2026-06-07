export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-[#f7fbfe] px-4 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/layz_logz_z_mark_only_8k.png"
            alt="LayZ LogZ Z mark"
            className="h-11 w-11 rounded-xl object-cover"
          />
          <div>
            <p className="text-base font-semibold text-navy">LayZ LogZ</p>
            <p className="text-sm text-slate-600">Your Personal Health Memory</p>
          </div>
        </div>

        <div className="text-sm text-slate-600">
          <p>Coming Soon</p>
          <p>© 2026 LayZ LogZ</p>
        </div>
      </div>
    </footer>
  )
}
