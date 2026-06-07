import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      className="bg-gradient-to-r from-accent to-teal px-4 pb-20 pt-14 text-white md:px-8 md:pb-24 md:pt-20"
    >
      <div className="mx-auto w-full max-w-3xl rounded-card border border-white/40 bg-white/10 p-7 shadow-card backdrop-blur md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Be first to try LayZ LogZ.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
          name="layzlogz-waitlist"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="layzlogz-waitlist" />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-white/50 bg-white px-4 py-3 text-navy outline-none transition focus:border-white focus:ring-2 focus:ring-white/35"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/50 bg-white px-4 py-3 text-navy outline-none transition focus:border-white focus:ring-2 focus:ring-white/35"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-semibold text-white">
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="w-full rounded-xl border border-white/50 bg-white px-4 py-3 text-navy outline-none transition focus:border-white focus:ring-2 focus:ring-white/35"
              defaultValue=""
            >
              <option value="" disabled>
                Select your role
              </option>
              <option>Individual</option>
              <option>Caregiver</option>
              <option>Healthcare Professional</option>
              <option>Investor</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b4463]"
          >
            Join Waitlist
          </button>

          {submitted && (
            <p className="rounded-xl border border-white/45 bg-white/20 px-4 py-3 text-sm font-medium text-white">
              You're on the list. We'll keep you posted.
            </p>
          )}

          <p className="text-xs leading-6 text-blue-50">
            No PHI collection. No medical advice. This is an early-access waitlist only.
          </p>
        </form>
      </div>
    </section>
  )
}
