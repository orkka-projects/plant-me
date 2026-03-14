# plant me

## Project Brief

# plant me

> **Note:** The app name defined in conversation is **Garden.ia** — "plant me" appears to be the document template title. This brief uses **Garden.ia** throughout.

---

## Overview

Garden.ia is an AI-powered landscaping and garden planning web app that helps users of all experience levels create personalized, safe, and financially viable garden projects. By combining climate data (pulled automatically via weather APIs), user-uploaded photos with AI-detected spatial measurements, lifestyle restrictions (pets, children, pests), and real-time pricing from local plant shops, Garden.ia generates tailored plant recommendations and delivers results in three formats: an interactive 2D layout (The Sims-style), an inspirational moodboard (Pinterest/collage-style), and a minimalist printable shopping list. The app targets anyone from first-time gardeners to hobbyists and professional landscapers in Brazil.

---

## Target Users

- **Beginner Enthusiast:** A person with no gardening experience who wants a beautiful, manageable garden. Goals: avoid mistakes, get clear guidance, stay within budget, ensure safety for pets and children.
- **Hobbyist Gardener:** An amateur who gardens as a leisure activity. Goals: optimize time and cost, discover new plant combinations, expand variety while maintaining aesthetic vision.
- **Professional Landscaper / Gardener:** A hired professional who wants practical tools to speed up proposals and impress clients. Goals: generate visual project proposals quickly, access compatibility data and plant care guides.
- **Homeowner with Lifestyle Restrictions:** Someone with pets, children, mosquito problems, or specific climate/space constraints. Goals: find plants that are safe, functional (repellents, fruit-bearing), and stylistically aligned with their home.

---

## Core Features (MVP)

1. **Multi-Step Onboarding Form (Wizard)**
   Users fill out a structured step-by-step form covering: CEP/location, space photo + measurements, initial and monthly budget, animals (type and behavior), children (yes/no), care level (DIY / DIY + occasional gardener / specialist), aesthetic style preferences, and desired plant types (fruit-bearing, flowers, green, repellents, etc.).

2. **Automatic Climate Data Integration**
   Upon CEP entry, the app fetches real-time and seasonal climate data from Windy (or equivalent meteorological API) to inform plant viability recommendations for that region.

3. **Photo Upload + AI Perimeter Detection and Measurement Marking**
   User uploads a photo of the space. AI detects the perimeter and overlays it on the image. The app then prompts the user to input specific measurements, illustrating visually on the photo exactly which dimension is being requested (e.g., drawing a line on the wall and asking "what is this length?"). This continues until all dimensions are captured.

4. **AI-Powered Plant Recommendations**
   The AI cross-references all inputs (climate, space, budget, restrictions, style) to suggest plants that: are compatible with each other (root systems, shade, growth patterns), are non-toxic to the animals and children present, act as natural repellents (e.g., mosquitoes), produce fruit or flowers as desired, fit within the initial and monthly maintenance budget, and thrive in the local climate.

5. **3 Result Visualizations**
   - **The Sims (2D Top-Down View):** Interactive map of the space with plants positioned. User can click on each plant to see name, quick care info, and price. Drag-and-drop repositioning is a stretch goal.
   - **Moodboard (Pinterest/Collage Style):** Inspirational visual collage showing how the finished space will look and feel. Includes color palette, suggested decorative items (pots, furniture, lighting), and reference images of similar projects.
   - **Minimalist Print List:** Clean text-based list of all recommended plants with quantity, unit price, total cost, where to buy (store name and address), and basic planting instructions. Includes a QR code linking to the full care guide in the app.

6. **Real-Time Store Price Comparison**
   The app searches for plant nurseries and garden shops near the user's CEP (same city/state/country). It compares real-time prices for the recommended plants, includes shipping/freight costs, and ranks results by best price, best rating (Google Reviews + Reclame Aqui), and fastest delivery.

7. **Illustrated Personalized Care Guide**
   A visual, illustrated guide for maintaining the recommended garden. Adapted to the user's care level (DIY vs. professional), local climate seasonality, and specific plant needs. Exportable as a PDF with a monthly care schedule.

8. **Authentication: Login + Anonymous Mode**
   - **Logged-in users:** Can save projects, revisit and refine them, and share projects with other users.
   - **Anonymous users:** Can complete the full flow but cannot save projects server-side. They are offered the option to export as PDF or take a print/screenshot of their results.

9. **PDF Export + Print Option**
   Available to all users (logged in or anonymous). Exports the project summary, plant list, and care guide as a downloadable PDF.

---

## Key Screens

1. **Home / Landing Page**
   Purpose: Introduce Garden.ia and prompt the user to start. Main elements: App name and tagline, Start button (anonymous or login), visual identity with glicínia/hortênsia branding, option to log in or create account.

2. **Login / Sign Up Screen**
   Purpose: Authenticate the user or allow anonymous continuation. Main elements: Email/password login, create account form, "Continue without account" CTA, brief explanation of what is lost without an account (no saving).

3. **New Project — Onboarding Form (Multi-Step)**
   Purpose: Collect all inputs needed for AI recommendation. Main elements: Step-by-step wizard UI, progress indicator, fields for CEP (auto-fetches climate), budget (initial + monthly), pet info, children info, pest problems (mosquitoes, etc.), care level selector, aesthetic style picker (tropical, farmhouse whimsical, etc.), plant type preference checkboxes (frutíferas, flores, repelentes, etc.).

4. **Photo Upload + Measurement Marking Screen**
   Purpose: Capture the physical space. Main elements: Camera/gallery upload button, AI overlay showing detected perimeter on photo, sequential illustrated prompts asking for each specific measurement (line drawn on photo indicating which wall/distance to measure), confirmation step showing all captured dimensions.

5. **Processing / Loading Screen**
   Purpose: Show the AI is working. Main elements: Animated botanical illustration, motivational or informative messages while processing (e.g., "Analisando o clima da sua região…", "Verificando plantas seguras para gatos…").

6. **Results Screen — The Sims View (2D)**
   Purpose: Interactive spatial visualization of the garden plan. Main elements: Top-down 2D map of the space with plants placed in position, plant icons/images with labels, clickable plants showing name, care summary, and price, dimensions preserved to scale, toggle to switch between the 3 result formats.

7. **Results Screen — Moodboard View**
   Purpose: Inspirational collage showing the vibe of the finished space. Main elements: Collage of reference images of the finished space, color palette generated from the project, suggested decorative items (pots, garden furniture, lighting), "feel" labels (e.g., "Whimsical Tropical"), toggle to switch between result formats.

8. **Results Screen — Print List View (Minimalist)**
   Purpose: Practical take-to-the-store list. Main elements: Clean numbered list of plants, quantity, unit price, total, store name and address, basic planting notes, QR code to full care guide, Print and Export PDF buttons.

9. **Store Price Comparison Screen**
   Purpose: Help user find the best place to buy. Main elements: List of nearby nurseries/garden shops (filtered by CEP/region), price per plant per store, shipping cost and estimated delivery time, store rating (Google + Reclame Aqui score), sort filters (price, rating, delivery speed).

10. **Care Guide Screen**
    Purpose: Teach user how to maintain their garden. Main elements: Illustrated per-plant care cards (watering, pruning, sun exposure), seasonal calendar (adapted for subtropical RS climate), care level toggle (DIY vs. professional tasks), Export PDF / monthly schedule button.

11. **My Projects Dashboard** *(logged-in users only)*
    Purpose: Manage saved projects. Main elements: Grid/list of saved projects with thumbnail, date, and project name, Open / Edit / Share / Delete actions per project, New Project CTA.

---

## Branding & Style

- **App Name:** Garden.ia
- **Visual Inspiration:** Glicínias (Wisteria) and Hortênsias Paniculatas (Panicle Hydrangeas) — soft, romantic, nature-forward botanical aesthetic.
- **Color Palette:**
  - Primary: Azul (blue) — calm, trustworthy
  - Secondary: Lilás (lilac/purple) — delicate, whimsical
  - Background: Branco (white) — clean, airy
  - Accents: Verde (green) — plants, nature, life
- **Tone:** Whimsical, light, welcoming, accessible. Not overly scientific or corporate. Feels like a creative hobby tool, not a technical dashboard.
- **Illustration Style:** Soft, organic, botanical illustrations. Used throughout the interface especially in the care guide and loading screen. Not overly realistic — closer to watercolor or hand-drawn aesthetics.
- **Typography:** Modern and readable with personality — suggest a rounded serif or soft sans-serif pairing.
- **UI Components:** Rounded buttons, soft card shadows, botanical icon set, pastel tones on interactive elements.

---

## Integrations

- **Windy API (or equivalent meteorological service):** Auto-fetch climate data (temperature range, rainfall, humidity, seasons) based on user CEP. Used to validate plant viability for the region.
- **Google Maps API:** Locate nearby nurseries and garden shops by CEP/region. Display on store comparison screen.
- **Google Reviews:** Pull store ratings for nurseries found via Maps API.
- **Reclame Aqui:** TBD — either API (if available) or web scraping to pull store reputation scores for the price comparison feature.
- **Computer Vision / AI Vision API:** Detect space perimeter from uploaded photos. Candidate: OpenAI Vision API or TensorFlow.js. Used in the measurement marking screen.
- **AI/LLM for Recommendations:** Core recommendation engine for plant compatibility, safety filtering, and care guide generation. TBD — specific model/provider not defined (likely OpenAI or similar).
- **Cloud Storage:** Store uploaded user photos. Candidates: Cloudinary, AWS S3, or Vercel Blob.
- **Real-Time Price Scraping / Plant Store APIs:** TBD — mechanism for fetching real-time plant prices from local stores not yet defined. May require web scraping or partnerships with garden shop platforms.

---

## Out of Scope

The following were discussed and explicitly deferred to future phases:

- **Augmented Reality (AR):** Viewing plants overlaid on the real space via phone camera.
- **Community Features:** Public sharing, social feed, following other users' projects.
- **In-App Marketplace:** Buying plants directly through the app.
- **Landscaper Consultation Booking:** Connecting users with professional landscapers for paid consultations.
- **Push Notification / Calendar Reminders:** Seasonal care reminders integrated with user's calendar.
- **Social Login:** Google/Facebook OAuth (deferred to post-MVP).
- **Drag-and-Drop in The Sims View:** Interactive repositioning of plants is a stretch goal, not required for MVP.

---

## Technical Notes

- **Stack:** Next.js (App Router) + Prisma + Tailwind CSS + PostgreSQL
- **Deployment:** Vercel (auto-deploy on push to `main`)
- **Authentication:** Email/password login with optional anonymous mode. Anonymous users get full functionality but no server-side persistence. They can export PDF or print as an alternative to saving.
- **Photo Storage:** Cloud-based (Cloudinary, AWS S3, or Vercel Blob — TBD). Photos uploaded per project and linked to user account if logged in.
- **AI Vision:** Used for photo perimeter detection. Recommended: OpenAI Vision API. Must overlay detected perimeter on the photo and prompt user sequentially for each measurement with a visual illustration of which measurement is being requested.
- **Climate API:** Windy.com API preferred (as specified by client). Fallback TBD. Called on CEP entry during onboarding form.
- **Real-Time Pricing:** Mechanism TBD. Options include web scraping local nursery websites, integrating with e-commerce APIs, or a manual database updated regularly. This is a technically complex feature — may need a background job (cron) to cache prices and keep them reasonably fresh.
- **Reclame Aqui Integration:** No official public API confirmed — may require scraping. Needs legal/technical validation before implementation.
- **PDF Export:** Must be available to all users including anonymous. Recommend using a library like `react-pdf` or Puppeteer for server-side PDF generation.
- **Localization:** App is in Brazilian Portuguese. All UI copy, plant names, and care guides should be in PT-BR.
- **Reference Location for Initial Testing:** CEP 95588-000 (Rio Grande do Sul — subtropical climate). All climate logic should be validated against this region first.

## Tech Stack
- **Framework:** Next.js (App Router)
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **Deployment:** Vercel (auto-deploy on push to main)

## Conventions
- Server components by default, client components only for interactivity
- Use server actions for mutations
- Tailwind for all styling — mobile-first, responsive
- Prisma for all database access