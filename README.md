# LayZ LogZ Marketing Website

Production-ready marketing site for LayZ LogZ, built with React, Vite, TypeScript, and Tailwind CSS.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 3
- Netlify deploy support

## Local Development

```bash
npm install
npm run dev
```

## Build and Preview

```bash
npm run build
npm run preview
```

## Brand Assets

Expected logos are in `public/assets`:

- `layz_logz_full_logo_with_tagline_8k.png`
- `layz_logz_logo_no_tagline_8k.png`
- `layz_logz_z_mark_only_8k.png`
- `layz_logz_app_icon_8k.png`

## Notes

- Static frontend only (no backend submission yet)
- Waitlist form prevents page reload and displays a success state
- Waitlist form is configured as a Netlify Form (`name="layzlogz-waitlist"`, `method="POST"`, `data-netlify="true"`)
- No PHI collection or medical advice claims

## Netlify Form Notifications

1. Deploy the site to Netlify.
2. Submit the waitlist form once from the deployed site so Netlify registers the form.
3. In Netlify dashboard, open Forms -> layzlogz-waitlist -> Settings and usage.
4. Add email notifications and set recipient to contact@layzlogz.com.
5. Optionally add spam filtering or reCAPTCHA in Netlify Forms settings.
