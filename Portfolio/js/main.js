/**
 * ============================================================================
 * LOKESH AHIRE — CLINIC PORTFOLIO WEBSITE
 * Main JavaScript (Vanilla JS, Zero Dependencies)
 * ============================================================================
 * 
 * Centralized Configuration:
 * Change your phone number, email, prices, and links in the CONFIG object below.
 * Everything on the site updates automatically!
 */

const CONFIG = {
  // --------------------------------------------------------------------------
  // PLACEHOLDER CONFIGURATION (Replace with your actual details)
  // --------------------------------------------------------------------------
  phone: "91XXXXXXXXXX",                // WhatsApp & Call number (Country code + 10 digits)
  displayPhone: "+91 XXXXXXXXXX",       // Nicely formatted for display
  email: "lokesh@example.com",          // Contact email address
  city: "Nashik, Maharashtra",          // City & State
  domain: "https://lokeshahire.in",     // Live website domain
  
  // Concept Demo URLs (Update after deploying each demo on Vercel)
  demoLinks: {
    dental: "https://demo-dental.vercel.app",
    physician: "https://demo-physician.vercel.app",
    skinChild: "https://demo-skin-child.vercel.app"
  },

  // Pricing Packages (In INR)
  prices: {
    basic: "₹4,999",
    standard: "₹9,999",
    premium: "₹14,999"
  },

  // Pre-filled WhatsApp message templates
  messages: {
    hero: "Namaskar Lokesh, mala clinic website baddal vicharaych aahe.",
    navbar: "Namaskar Lokesh, mala clinic website banvaychi aahe.",
    floating: "Namaskar Lokesh, mala clinic website baddal query aahe.",
    contact: "Namaskar Lokesh, mala clinic sathi website banvaychi aahe. Detail discussion karuya.",
    pricingBasic: "Namaskar Lokesh, mala Basic Package (₹4,999) clinic website baddal mahiti havi aahe.",
    pricingStandard: "Namaskar Lokesh, mala Standard Package (₹9,999) clinic website baddal mahiti havi aahe.",
    pricingPremium: "Namaskar Lokesh, mala Premium Package (₹14,999) clinic website baddal mahiti havi aahe."
  }
};

/**
 * Builds a direct wa.me link with encoded pre-filled text
 * @param {string} messageText 
 * @returns {string} URL string
 */
function getWhatsAppUrl(messageText) {
  const text = encodeURIComponent(messageText || CONFIG.messages.hero);
  return `https://wa.me/${CONFIG.phone}?text=${text}`;
}

/**
 * Initialize all dynamic elements on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current copyright year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Wire up all WhatsApp CTA links dynamically
  const setupWhatsAppLink = (selector, messageKey) => {
    const el = document.querySelector(selector);
    if (el) {
      el.href = getWhatsAppUrl(CONFIG.messages[messageKey]);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  };

  setupWhatsAppLink('#nav-wa-btn', 'navbar');
  setupWhatsAppLink('#hero-wa-btn', 'hero');
  setupWhatsAppLink('#floating-wa-btn', 'floating');
  setupWhatsAppLink('#contact-wa-btn', 'contact');
  setupWhatsAppLink('#pricing-btn-basic', 'pricingBasic');
  setupWhatsAppLink('#pricing-btn-standard', 'pricingStandard');
  setupWhatsAppLink('#pricing-btn-premium', 'pricingPremium');

  // Wire up direct phone & email links
  const contactPhoneEl = document.getElementById('contact-phone-link');
  if (contactPhoneEl) {
    contactPhoneEl.href = `tel:+${CONFIG.phone}`;
    const textSpan = contactPhoneEl.querySelector('.contact-val');
    if (textSpan) textSpan.textContent = CONFIG.displayPhone;
  }

  const contactEmailEl = document.getElementById('contact-email-link');
  if (contactEmailEl) {
    contactEmailEl.href = `mailto:${CONFIG.email}`;
    const textSpan = contactEmailEl.querySelector('.contact-val');
    if (textSpan) textSpan.textContent = CONFIG.email;
  }

  // Wire up demo links
  const demoDentalBtn = document.getElementById('demo-dental-link');
  if (demoDentalBtn && CONFIG.demoLinks.dental) {
    demoDentalBtn.href = CONFIG.demoLinks.dental;
  }
  const demoPhysicianBtn = document.getElementById('demo-physician-link');
  if (demoPhysicianBtn && CONFIG.demoLinks.physician) {
    demoPhysicianBtn.href = CONFIG.demoLinks.physician;
  }
  const demoSkinChildBtn = document.getElementById('demo-skinchild-link');
  if (demoSkinChildBtn && CONFIG.demoLinks.skinChild) {
    demoSkinChildBtn.href = CONFIG.demoLinks.skinChild;
  }

  // 3. Sticky Navbar Elevation on Scroll
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 15) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 4. Mobile Menu Hamburger Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    const toggleMenu = () => {
      const isActive = navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isActive ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close mobile menu when clicking any nav link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close when clicking outside of navbar
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navbar.contains(e.target)) {
        toggleMenu();
      }
    });
  }

  // 5. Smooth scroll with sticky navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
