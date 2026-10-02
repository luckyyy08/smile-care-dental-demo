# Smile Care Dental Clinic: Website Build Pack

How to use: Copy **Part 1 (Master Prompt)** and **Part 2 (Documentation)** together and paste them into your AI tool (Claude / ChatGPT / Cursor / Bolt / Lovable etc.) in a single message.

---

# PART 1: MASTER PROMPT

You are a senior front-end developer and UI designer. Build a complete, production-quality, **single-page responsive website** for a demo dental clinic called **Smile Care Dental Clinic** in Nashik, India.

Use ONLY the content, structure, design rules and constraints in the "Documentation" section below. Do not invent extra claims, testimonials, awards, statistics, prices or doctor photos. If something is missing, use a clearly marked placeholder rather than making it up.

**Deliverables**
1. `index.html`
2. `style.css`
3. `script.js`
(All three files, complete, copy-paste ready, no "rest of code here" shortcuts.)

**Tech rules**
- Plain HTML5, CSS3 and vanilla JavaScript. No build tools, no frameworks required. (Bootstrap 5 via CDN is allowed only if it makes the layout simpler; if used, still write custom CSS for the theme.)
- Mobile-first, fully responsive (360px, 768px, 1200px+ must all look good).
- Semantic HTML, accessible (labels on all form fields, alt text on images, good colour contrast, visible focus states, `aria-label` on icon-only buttons).
- Fast loading: lazy-load images (`loading="lazy"`), compress-friendly, no heavy libraries.
- Smooth scrolling, sticky navbar, subtle scroll-reveal animations (CSS/IntersectionObserver only, respect `prefers-reduced-motion`).

**After the code, also give me:**
- A 5-line "how to run it" guide (open index.html / deploy on Vercel or Netlify).
- A short list of the places I must edit (phone number, WhatsApp number, email, map link, images).
- A self-check against the Acceptance Checklist at the end of the documentation.

Build it now, section by section, in the order given in the documentation.

---

# PART 2: DOCUMENTATION

## 1. Project summary
- **Type:** One-page local-business website (demo / sample design, not a live clinic).
- **Purpose:** Let nearby families trust the clinic, understand services, and book an appointment quickly.
- **Primary action:** Book Appointment. **Secondary action:** WhatsApp / Call.
- **Audience:** Families, college students and working adults in Nashik, mostly on mobile phones.
- **Tone:** Warm, calm, clear, professional. Simple English. No hype.

## 2. Clinic details (use exactly)
| Field | Value |
|---|---|
| Clinic name | Smile Care Dental Clinic |
| Tagline | Gentle, modern dental care for the whole family |
| Doctor | Dr. Aditi Kulkarni, BDS, MDS (Endodontics) |
| Address | 2nd Floor, Sample Plaza, College Road, Nashik, Maharashtra 422005 |
| Phone / WhatsApp | +91 98XXX XXXXX (keep as placeholder; make it easy to replace in ONE place in JS/HTML) |
| Email | hello@smilecaredemo.in |
| Timings | Mon-Sat: 10:00 AM - 1:30 PM and 5:00 PM - 8:30 PM. Sunday: By appointment only. |

## 3. Page structure (in this order)
1. Sticky navbar
2. Hero
3. About the doctor
4. Services
5. Why choose us
6. Book an appointment (form)
7. FAQ
8. Contact / Location
9. Footer
10. Sticky mobile bottom bar (Call + WhatsApp)

### 3.1 Navbar
- Left: clinic name (text logo with a small tooth/smile SVG icon).
- Links (smooth scroll): About, Services, Why Us, Book, FAQ, Contact.
- Right: **Book Appointment** button (scrolls to form).
- Mobile: hamburger menu that opens a clean dropdown/drawer and closes on link click.

### 3.2 Hero
- **Heading (H1):** Healthy smiles start with a gentle visit
- **Sub-text:** Modern dental care in the heart of Nashik. Book an appointment in under a minute.
- **Buttons:** `[Book Appointment]` (primary, scrolls to form) and `[WhatsApp Us]` (secondary, opens `https://wa.me/91XXXXXXXXXX?text=Hello%20Smile%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.`, with a clear placeholder number).
- Show tagline "Gentle, modern dental care for the whole family" as a small line above or below.
- Right/background: a free stock dental/smile image (see Images section). On mobile, stack text first, image below.
- Small trust strip under the buttons (facts only): "10+ years clinical experience" | "Appointment-based visits" | "Sterilised instruments".

### 3.3 About the doctor
Text (use exactly):
> Dr. Aditi Kulkarni is a dental surgeon with over 10 years of clinical experience. She completed her BDS and MDS in Endodontics and focuses on pain-free treatment and clear communication, so every patient understands their options before treatment begins.

- Show qualification chips: "BDS", "MDS (Endodontics)", "10+ years experience".
- **Do NOT use a real person's photo.** Use a neutral illustration, a clinic-interior stock image, or a styled placeholder card with initials "AK".

### 3.4 Services (6 cards, responsive grid: 1 col mobile, 2 tablet, 3 desktop)
Each card: simple inline SVG icon, title, one-line description. Subtle hover lift.
1. **Dental Check-up & Cleaning:** Routine examination, scaling and polishing.
2. **Root Canal Treatment:** Treatment to save a badly decayed or infected tooth.
3. **Tooth Fillings:** Restoring cavities with tooth-coloured materials.
4. **Braces & Aligners:** Options to straighten teeth for teens and adults.
5. **Dental Implants & Crowns:** Replacing missing or damaged teeth.
6. **Kids' Dentistry:** Child-friendly check-ups and preventive care.

Do not add prices, discounts, "guaranteed results" or comparisons.

### 3.5 Why choose us (4 points, icon + text)
- Sterilised instruments and clean clinic setup
- Clear explanation of treatment and cost before starting
- Appointment-based visits, so less waiting
- Easy parking and central location

### 3.6 Appointment form
Fields (all with visible labels):
| Field | Type | Rules |
|---|---|---|
| Name | text | required, min 2 chars |
| Phone number | tel | required, valid 10-digit Indian mobile (accept optional +91), numeric keyboard on mobile |
| Preferred date | date | required, cannot be a past date (set `min` to today) |
| Preferred time | select or radio | Morning / Evening |
| Reason for visit | dropdown | Check-up, Tooth pain, Braces, Other |
| Submit | button | label: "Request Appointment" |

Behaviour:
- Client-side validation with friendly inline error messages (no browser alert popups).
- On valid submit: prevent page reload, hide/disable the form and show this confirmation message exactly:
  **"Thank you! Our team will call you shortly to confirm your appointment."**
- This is a **demo**: no real backend. Put a clearly commented `// TODO` in `script.js` showing where to plug in a real endpoint (e.g. Formspree, Google Apps Script, or PHP mailer) later.
- Add a small note under the form: "Demo form: details are not stored or sent."
- Optional nicety: after validation, also offer a "Send details on WhatsApp" link that pre-fills a message with the form values.

### 3.7 FAQ (accordion, one open at a time, keyboard accessible, use `<button aria-expanded>`)
1. **Is root canal treatment painful?** With modern anaesthesia, the procedure is usually comfortable. Mild soreness afterwards is common and settles in a few days.
2. **How often should I get a dental check-up?** Generally every 6 months, or as advised by your dentist.
3. **At what age can my child first visit the dentist?** Around age 1, or when the first tooth appears.
4. **How long does a braces treatment take?** It varies by case, often 12-24 months. The doctor will give an estimate after examination.
5. **Do I need an appointment?** Appointments are preferred to avoid waiting, but emergency cases are seen as soon as possible.

### 3.8 Contact / Location
- Address, phone, email, timings (formatted as a small table: Mon-Sat two slots, Sunday by appointment).
- Tap-to-call (`tel:`) and tap-to-mail (`mailto:`) links.
- Google Map embed via iframe (`loading="lazy"`), searching "College Road, Nashik, Maharashtra 422005". Add a comment where the owner should replace it with the exact clinic pin.

### 3.9 Footer
- Clinic name, address, timings.
- Quick links (same as navbar).
- Small line, exactly: **"Sample website design by Lucky | Demo only."**
- Copyright line is optional; if added, keep it generic.

### 3.10 Sticky bottom bar (mobile, hidden on desktop)
- Two equal-width buttons fixed to the bottom: **Call** (`tel:`) and **WhatsApp** (`wa.me` link).
- Add bottom padding to the page so it never covers the footer content.
- Respect iPhone safe area (`env(safe-area-inset-bottom)`).

## 4. Design system
**Mood:** clean, calm, trustworthy, modern clinic.

**Colours (CSS variables in `:root`):**
- `--teal-600: #0F9D9A` (primary)
- `--teal-700: #0B7F7D` (primary hover)
- `--sky-100: #E6F6F8` (light section background)
- `--sky-50: #F4FBFC`
- `--ink-900: #12303A` (headings)
- `--ink-600: #4A6670` (body text)
- `--white: #FFFFFF`
- `--accent-wa: #25D366` (WhatsApp button only)
- `--error: #D64545`
Alternate white and light-blue sections for rhythm. Body text must pass WCAG AA contrast.

**Typography (Google Fonts, with fallbacks):** headings "Poppins" or "Nunito" (600-700), body "Inter" or "Nunito Sans" (400-500). Base font 16px, line-height 1.6. Fluid heading sizes with `clamp()`.

**Shape and spacing:** rounded corners (12-16px), soft shadows, generous whitespace (section padding about 72px desktop / 48px mobile), max content width 1140px.

**Buttons:** primary = solid teal, white text; secondary = outlined teal; WhatsApp = green with icon. Min touch target 44px height.

**Icons:** inline SVG only (no icon fonts needed).

## 5. Images
- Use free stock images from Unsplash or Pexels only (generic dental/clinic/smile/tools imagery).
- No real doctor or patient identity. No before/after photos.
- Use direct image URLs in the format `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=70`, and add an HTML comment above each saying "replace with your chosen image + credit".
- Give every image meaningful `alt` text, set `width`/`height` to avoid layout shift, and provide a pleasant CSS gradient fallback if an image fails to load.
- Add a short credit line in an HTML comment (Unsplash/Pexels licence note).

## 6. Compliance and content guardrails (important, healthcare advertising in India)
**DO NOT include:**
- Patient testimonials or reviews
- Claims like "best dentist", "No.1", "top-rated", "100% painless", "guaranteed results"
- Before/after photos
- Discount or offer banners, or price lists
- Invented statistics, awards or certifications

**DO include:** only factual, modest statements from this document, and a visible "Demo only" label in the footer.

## 7. SEO and meta (basic)
- `<title>`: Smile Care Dental Clinic | Gentle Dental Care in Nashik
- Meta description (about 150 chars): Gentle, modern dental care for the whole family at College Road, Nashik. Check-ups, root canal, braces, implants and kids' dentistry. Book online.
- Open Graph tags (title, description, image placeholder).
- Add `noindex` meta tag, since it is a demo: `<meta name="robots" content="noindex, nofollow">`
- Add JSON-LD `Dentist` schema using only the facts above (name, address, telephone placeholder, opening hours). Keep the phone as a placeholder.
- Favicon: inline SVG tooth/smile emoji-style favicon via data URI.
- One H1 only; logical H2/H3 order.

## 8. JavaScript requirements (`script.js`)
- Mobile menu toggle.
- Smooth scroll with offset for sticky navbar.
- FAQ accordion.
- Form validation + confirmation message.
- Set `min` date on the date field to today.
- Scroll-reveal using IntersectionObserver.
- A single config object at the top, for example:
  ```js
  const CLINIC = {
    phoneDisplay: "+91 98XXX XXXXX",
    phoneTel: "+9198XXXXXXXX",
    whatsapp: "9198XXXXXXXX",
    email: "hello@smilecaredemo.in"
  };
  ```
  and use it to fill all call/WhatsApp/mail links so the owner only edits one place.
- No console errors. No dependencies.

## 9. Acceptance checklist (the AI must verify before finishing)
- [ ] All 10 sections present, in the specified order
- [ ] All text matches this document exactly (hero, doctor bio, 6 services, 4 why-us points, 5 FAQs, confirmation message, footer line)
- [ ] No testimonials, "best" claims, before/after images, prices, or real doctor photos
- [ ] Form validates, blocks past dates, and shows the exact confirmation message
- [ ] Sticky Call + WhatsApp bar works on mobile, hidden on desktop
- [ ] Looks good at 360px, 768px and 1200px
- [ ] Teal / light-blue palette, clean and trustworthy
- [ ] Accessible labels, alt text, focus states, keyboard-friendly FAQ and menu
- [ ] Phone/WhatsApp/email editable from a single config
- [ ] `noindex` tag and "Demo only" footer present
- [ ] Output includes complete `index.html`, `style.css`, `script.js` + run/edit instructions

---

# PART 3: OPTIONAL FOLLOW-UP PROMPTS (use after the first build)

1. "Review your own code for bugs on small screens and fix them. Show only the changed parts."
2. "Add a subtle hero animation and polish spacing, but do not change any text content."
3. "Convert the form so it submits to a PHP file (`submit.php`) that emails the details, with basic spam protection (honeypot field) and server-side validation."
4. "Make a Lighthouse-friendly pass: improve performance, accessibility and SEO scores, and list what you changed."
