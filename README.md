# TrekkersQuest

India-only trekking discovery website built with Astro. Current trek and editorial records are explicitly demo/sample content; the site does not sell trips, confirm availability or submit real enquiries.

## Development

Requires Node.js `>=22.23.4` and pnpm.

```sh
pnpm install
pnpm dev
```

Project guidance requests background server mode when launching with the Astro CLI: `astro dev --background`. Manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.

## Build and preview

```sh
pnpm build
pnpm preview
```

## Content editing

- Edit typed sample trek records in `src/data/treks.ts`. Every trek must remain `country: 'India'`; keep the `draft` status until the owner verifies details.
- Do not add altitude, distance, duration, season, difficulty, prices, availability or departures without source verification.
- Images currently use replaceable Unsplash URLs as illustrative landscapes, not TrekkersQuest trip photographs. Replace with properly licensed, locally hosted assets and accurate alt text before launch.
- Blog content is demo editorial guidance. Safety, permits, weather and access information needs current authoritative review.
- The contact and enquiry forms operate in demo mode only and explicitly do not send data. Integrate a server-side endpoint in a replaceable service before collecting messages.
- Replace the `example.com` URLs in `public/sitemap.xml` with the production canonical domain and add all published pages before launch.
- Policy routes are draft templates. The business must provide and legally review final privacy, terms and cancellation text.
- Add real business contact information, verified trip information, actual data sources and operator information as appropriate. Do not add social proof unless documented.

## Styling and motion

The site uses shared responsive design tokens in `src/layouts/Layout.astro`, with Urbanist for display headings, Plus Jakarta Sans for UI, Poppins for the brand wordmark, and Literata for reading text—all self-hosted via Fontsource. Brand colors and control variants follow the supplied Trekker’s Quest design-system HTML. The mountain-compass logo is served from `public/trekkers-quest-mark.svg` and used in the header, footer, and favicon. AOS provides scroll-triggered reveals across page content; initial viewport elements remain static, and reduced-motion preferences disable AOS. The landscape slider is a React island using Framer Motion and honors reduced-motion preferences. Iconify icons are rendered with the `iconify-icon` web component.

Tailwind is not installed in this starter; shared CSS is used instead to avoid bringing in a framework that the existing project did not have.
# trekkerquest
