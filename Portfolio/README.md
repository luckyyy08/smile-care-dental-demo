# Lokesh Ahire — Clinic Portfolio Website
**Documentation & Launch Guide**

Nashik madhil clinics ani doctors sathi custom web development portfolio.

---

## 1. Project Overview
| Item | Detail |
|---|---|
| **Developer** | Lokesh Ahire (Lucky), Nashik, Maharashtra |
| **Education** | BSc Computer Science Student, Nashik |
| **Target Audience** | Clinic owners, doctors, dentists, pediatricians in Nashik |
| **Primary Goal** | Direct WhatsApp inquiries & web development clients |
| **Tech Stack** | Plain HTML5, CSS3 (Vanilla), JavaScript (Vanilla) — No build step |
| **Hosting** | Vercel (Free tier with automatic SSL / HTTPS) |
| **Recommended Domain** | `lokeshahire.in` / `lokeshahire.com` |

---

## 2. Folder Structure
```
portfolio/
├── index.html              # Main single-page portfolio
├── robots.txt              # Search engine crawler permissions
├── sitemap.xml             # XML sitemap for Google Search Console
├── README.md               # Project documentation & checklist
├── css/
│   └── style.css           # Clean CSS3 design system (Mobile-First 375px+)
├── js/
│   └── main.js             # Vanilla JS with centralized CONFIG object
└── images/
    ├── favicon.png         # Site favicon
    ├── og.jpg              # 1200x630 social share preview
    ├── profile.jpg         # Profile photo of Lokesh Ahire
    ├── demo1-desktop.webp  # Dental Clinic concept desktop preview
    ├── demo1-mobile.webp   # Dental Clinic concept mobile preview
    ├── demo2-desktop.webp  # Physician Clinic concept desktop preview
    ├── demo2-mobile.webp   # Physician Clinic concept mobile preview
    ├── demo3-desktop.webp  # Skin & Child Specialist concept desktop preview
    └── demo3-mobile.webp   # Skin & Child Specialist concept mobile preview
```

---

## 3. Design System Tokens
| Token | Value | Usage |
|---|---|---|
| Primary Color | `#0d9488` (Teal) | Main CTAs, badges, brand accents |
| Primary Hover | `#0f766e` | Interactive hover states |
| Primary Light | `#f0fdfa` | Tag backgrounds, icon containers |
| White | `#ffffff` | Primary background, card surfaces |
| Soft Alt Tint | `#f8fafc` | Alternate section background |
| Text Main | `#0f172a` | High-contrast readable typography |
| Text Muted | `#475569` | Subtitles, descriptions |
| Typography | Google Font **Poppins** (400, 500, 600, 700) | Single font family with `system-ui` fallback |
| Border Radius | `8px` (sm), `12px` (md), `16px` (lg), `24px` (xl) | Clean rounded cards & buttons |
| Tap Targets | Minimum 44px height & width | Safe thumb targets for doctors on mobile |

---

## 4. Distinct Demo Showcase Identities
Each of the 3 concept demos in `#work` features its own distinct design theme:
1. **Smile Care Dental Clinic**: Fresh clinical teal (`#0d9488`), teeth treatments & whitening focus.
2. **Arogya Physician & Diabetes Care**: Medical royal blue (`#2563eb`), OPD consultation schedules & doctor credentials.
3. **DermaKids Skin & Pediatric Clinic**: Warm friendly rose (`#f43f5e`), pediatric vaccination charts & dermatology consultations.

---

## 5. Centralized Configuration (`js/main.js`)
All details can be updated in one place inside `js/main.js`:
```javascript
const CONFIG = {
  phone: "91XXXXXXXXXX",                // WhatsApp number with 91 country code
  displayPhone: "+91 XXXXXXXXXX",       // Formatted for screen display
  email: "lokesh@example.com",          // Direct email
  city: "Nashik, Maharashtra",          // City & State
  domain: "https://lokeshahire.in",     // Live domain
  
  demoLinks: {
    dental: "https://demo-dental.vercel.app",
    physician: "https://demo-physician.vercel.app",
    skinChild: "https://demo-skin-child.vercel.app"
  },

  prices: {
    basic: "₹4,999",
    standard: "₹9,999",
    premium: "₹14,999"
  }
};
```

---

## 6. How to Deploy on Vercel
1. Create a GitHub repository (e.g. `lokesh-portfolio`) and push the `portfolio/` files.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep **Framework Preset** as **"Other"** and Root Directory as `./` (or `portfolio/`).
5. Click **"Deploy"**. Your site will be live on an auto-HTTPS `.vercel.app` URL within 30 seconds!

### Connecting a Custom Domain (`lokeshahire.in`):
1. In Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your purchased domain (e.g., `lokeshahire.in`).
3. Vercel will provide DNS records:
   - For Apex domain (`lokeshahire.in`): Add an **A Record** pointing to `76.76.21.21`.
   - For Subdomain (`www.lokeshahire.in`): Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
4. Wait 5-15 minutes for SSL certificate activation.

---

## 7. Launch & Verification Checklist
- [x] Responsive layout tested from 375px mobile screens up to 1440px desktop
- [x] Zero horizontal scrolling
- [x] No jQuery or external heavy JS frameworks
- [x] Google Fonts loaded with `preconnect` and `display=swap`
- [x] Images optimized in WebP format with explicit `width` and `height`
- [x] Floating WhatsApp button with gentle pulse and safe margin
- [x] Valid `robots.txt` and `sitemap.xml`
- [x] Schema.org `ProfessionalService` JSON-LD structured data included
