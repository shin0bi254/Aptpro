// ===============================
// AptPro Website Interactions
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Footer year
  // -------------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------------------------------
  // Mobile navigation toggle
  // -------------------------------
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  function closeMobileMenu() {
    hamburger?.classList.remove("open");
    mobileMenu?.classList.remove("open");
    hamburger?.setAttribute("aria-expanded", "false");
    mobileMenu?.setAttribute("aria-hidden", "true");
  }

  hamburger?.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open", isOpen);

    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close menu when clicking a mobile link
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!mobileMenu || !hamburger) return;

    const isClickInside =
      mobileMenu.contains(e.target) || hamburger.contains(e.target);

    if (!isClickInside) closeMobileMenu();
  });

  // -------------------------------
  // Contact form (frontend mock)
  // -------------------------------
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const service = form.service.value;

    if (!name || !whatsapp || !service) {
      showStatus("Please fill in all required fields.", "error");
      return;
    }

    // Simulated submit (replace with backend / email service later)
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    setTimeout(() => {
      showStatus(
        "Message sent successfully. We will contact you on WhatsApp soon.",
        "success"
      );
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }, 1200);
  });

  function showStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = `form-note ${type}`;
  }

  // -------------------------------
  // Scroll reveal animations
  // -------------------------------
  const revealElements = document.querySelectorAll(
    ".card, .why-card, .step, .about-stat"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
