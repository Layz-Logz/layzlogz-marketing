const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'Doctor Prep', href: '#doctor-prep' },
  { label: 'Caregivers', href: '#caregivers' },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="LayZ LogZ home">
          <img
            src="/assets/layz_logz_logo_no_tagline_8k.png"
            alt="LayZ LogZ"
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition duration-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="rounded-full bg-gradient-to-r from-accent to-teal px-4 py-2 text-sm font-semibold text-white shadow-card transition duration-200 hover:scale-[1.02] hover:shadow-xl"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  )
}
