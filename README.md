# HAMADA ZH – boutique riad website
React + TypeScript + Tailwind CSS + Vite. English/French.

## Run locally (Node 18+)
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # type-check + production build in dist/
    npm run preview

## Structure
- `src/i18n.tsx` – EN/FR strings (`T`) and language provider. `src/data.ts` – rooms, experiences, gallery, bilingual content.
- `src/components/` – Header, Hero, About, Rooms, Experiences, Gallery (lightbox), Booking, Contact, shared `ui.tsx`.
- `src/lib/booking.ts` – `BookingProvider` interface. Implement it for your booking engine and swap `demoProvider` in `Booking.tsx`.

## Before launch
- Photos are Unsplash placeholders (`src/data.ts`); replace with your own. A gradient shows if an image fails to load.
- Rooms, amenities, experiences and story text are samples. No rates, availability, reviews, awards or contact details are included.
- Replace address/phone/email/social placeholders and the map pin (`Contact.tsx`); wire the contact form to a backend or email service.
- Booking and contact forms are demonstrations: nothing is sent.
