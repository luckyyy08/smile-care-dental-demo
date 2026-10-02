/**
 * [Clinic Name] — Main JavaScript Logic
 * Modules: Sticky Nav, Mobile Menu Drawer, Accessible FAQ Accordion,
 * Form Validation with Phone Keypad & Min-Date, and Scroll Reveal.
 */

(function () {
  'use strict';

  // ── Central Clinic Configuration ──────────────────────────────────────────
  const CLINIC = {
    name: '[Clinic Name]',
    phone: '+91XXXXXXXXXX',
    whatsapp: '91XXXXXXXXXX',
    address: '[Street Address], Near [Landmark], [Area], Nashik, Maharashtra 422005'
  };

  // ── Initialize on DOMContentLoaded ────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupStickyNav();
    setupMobileMenu();
    setupFaqAccordion();
    setupAppointmentForm();
    setupScrollReveal();
    setupDateConstraints();
  }

  // ── 1. Sticky Navigation Bar ─────────────────────────────────────────────
  function setupStickyNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── 2. Mobile Menu (Hamburger Drawer that closes on link click) ───────────
  function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('menuClose');
    const menuLinks = document.querySelectorAll('[data-menu-link]');

    if (!toggle || !overlay) return;

    const openMenu = () => {
      overlay.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    };

    const closeMenu = () => {
      overlay.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    };

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (overlay.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Close on any menu link click
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // ── 3. Accessible FAQ Accordion ──────────────────────────────────────────
  function setupFaqAccordion() {
    const faqButtons = document.querySelectorAll('.faq-button');
    if (!faqButtons.length) return;

    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(button.getAttribute('aria-controls'));

        // Close other open FAQ items for a clean single-open behavior
        faqButtons.forEach((otherBtn) => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherPanel = document.getElementById(otherBtn.getAttribute('aria-controls'));
            if (otherPanel) {
              otherPanel.classList.remove('open');
              otherPanel.style.maxHeight = null;
            }
          }
        });

        // Toggle current FAQ item
        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          if (panel) {
            panel.classList.remove('open');
            panel.style.maxHeight = null;
          }
        } else {
          button.setAttribute('aria-expanded', 'true');
          if (panel) {
            panel.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
          }
        }
      });
    });
  }

  // ── 4. Appointment Form Validation ───────────────────────────────────────
  function setupAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    const successCard = document.getElementById('formSuccess');
    if (!form) return;

    const nameInput = document.getElementById('patientName');
    const phoneInput = document.getElementById('patientPhone');
    const dateInput = document.getElementById('apptDate');
    const timeInput = document.getElementById('apptTime');
    const treatInput = document.getElementById('treatment');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');
    const waLink = document.getElementById('waConfirmLink');

    // Phone 10-digit regex for India (starts with 6, 7, 8, 9)
    const phoneRegex = /^[6-9]\d{9}$/;

    const validateName = () => {
      const val = nameInput.value.trim();
      const valid = val.length >= 2;
      if (nameError) nameError.classList.toggle('visible', !valid);
      nameInput.classList.toggle('is-invalid', !valid);
      return valid;
    };

    const validatePhone = () => {
      const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, '');
      const valid = phoneRegex.test(cleanPhone);
      if (phoneError) phoneError.classList.toggle('visible', !valid);
      phoneInput.classList.toggle('is-invalid', !valid);
      return valid;
    };

    const validateDate = () => {
      const valid = Boolean(dateInput.value);
      if (dateError) dateError.classList.toggle('visible', !valid);
      dateInput.classList.toggle('is-invalid', !valid);
      return valid;
    };

    const validateTime = () => {
      const valid = Boolean(timeInput.value);
      if (timeError) timeError.classList.toggle('visible', !valid);
      timeInput.classList.toggle('is-invalid', !valid);
      return valid;
    };

    nameInput?.addEventListener('blur', validateName);
    phoneInput?.addEventListener('blur', validatePhone);
    dateInput?.addEventListener('change', validateDate);
    timeInput?.addEventListener('change', validateTime);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isPhoneValid = validatePhone();
      const isDateValid = validateDate();
      const isTimeValid = validateTime();

      if (isNameValid && isPhoneValid && isDateValid && isTimeValid) {
        const patientName = nameInput.value.trim();
        const patientPhone = phoneInput.value.trim();
        const apptDate = dateInput.value;
        const apptTime = timeInput.value;
        const treatment = treatInput ? treatInput.value : 'General Consultation';

        // Prepare prefilled WhatsApp URL
        if (waLink) {
          const msg = encodeURIComponent(
            `Hello [Clinic Name], I would like to confirm my appointment:\n\n` +
            `• Name: ${patientName}\n` +
            `• Phone: ${patientPhone}\n` +
            `• Date: ${apptDate}\n` +
            `• Slot: ${apptTime}\n` +
            `• Treatment: ${treatment}`
          );
          waLink.href = `https://wa.me/${CLINIC.whatsapp}?text=${msg}`;
        }

        // Show success state smoothly
        form.style.display = 'none';
        if (successCard) {
          successCard.classList.add('show');
          successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  // ── 5. Date Constraints (Today as min date) ──────────────────────────────
  function setupDateConstraints() {
    const dateInput = document.getElementById('apptDate');
    if (!dateInput) return;

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // ── 6. Scroll Reveal Animation ───────────────────────────────────────────
  function setupScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
})();
