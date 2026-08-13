"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, navItems, siteConfig } from "@/lib/site-content";
import { LogoMark } from "./BrandMotif";

type ThemePreference = "system" | "light" | "dark";

export function useScrollPosition(threshold = 10) {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasPassedThreshold(window.scrollY > threshold);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasPassedThreshold;
}

export function useIntersectionObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "[data-reveal]",
          ".hero-copy",
          ".ops-visual",
          ".trust-strip article",
          ".section-heading",
          ".section-intro",
          ".problem-item",
          ".service-panel",
          ".work-copy",
          ".work-panel",
          ".timeline article",
        ].join(","),
      ),
    );

    if (!elements.length) {
      return;
    }

    elements.forEach((element, index) => {
      element.dataset.reveal = element.dataset.reveal ?? "";
      element.style.setProperty("--i", element.style.getPropertyValue("--i") || String(index % 8));
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function useThemePreference() {
  const [theme, setTheme] = useState<ThemePreference>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const storedTheme = window.localStorage.getItem("aptpro-theme") as ThemePreference | null;

    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "system") {
      root.removeAttribute("data-theme");
      window.localStorage.removeItem("aptpro-theme");
      return;
    }

    root.dataset.theme = theme;
    window.localStorage.setItem("aptpro-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => {
      if (current === "system") {
        return "dark";
      }

      if (current === "dark") {
        return "light";
      }

      return "system";
    });
  }

  return { theme, toggleTheme };
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const isScrolled = useScrollPosition(10);
  const { theme, toggleTheme } = useThemePreference();

  function closeMobileNav() {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  }

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label={`${siteConfig.businessName} home`}>
        <LogoMark />
        <span>
          <strong>{siteConfig.shortName}</strong>
          <small>Business & IT Solutions</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <details className="mobile-nav" ref={mobileNavRef}>
        <summary aria-label="Open navigation">
          <span />
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={closeMobileNav}
            >
              {item.label}
            </Link>
          ))}
          <Link className="mobile-cta" href="/contact" onClick={closeMobileNav}>
            Book a consultation
          </Link>
        </nav>
      </details>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Theme preference: ${theme}. Toggle theme`}
      >
        <span aria-hidden="true" />
      </button>

      <Link className="nav-cta" href="/contact">
        Book a Consultation
      </Link>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();
  const serviceLinks = [
    "Managed IT",
    "Cybersecurity",
    "Business systems",
    "Web platforms",
    "Infrastructure",
  ];
  const trustBadges = ["Kenya-focused support", "Security-aware delivery", "No fake form storage"];

  return (
    <>
      <section className="social-proof" aria-label="Aptpro trust indicators" data-reveal>
        <div className="section-shell social-proof-grid">
          {trustBadges.map((badge, index) => (
            <span key={badge} style={{ "--i": index } as React.CSSProperties}>
              {badge}
            </span>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-summary">
          <Link className="brand footer-brand" href="/">
            <LogoMark />
            <span>
              <strong>{siteConfig.businessName}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </Link>
          <p>
            Serving growing organizations in Kenya with IT support, cybersecurity, business
            systems, automation, websites, CCTV, Microsoft 365, QuickBooks support, and practical
            technology strategy.
          </p>
        </div>
        <div className="footer-links">
          <nav aria-label="Footer navigation">
            <strong>Main</strong>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Footer service focus">
            <strong>Focus</strong>
            {serviceLinks.map((item) => (
              <Link key={item} href="/services">
                {item}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <strong>Contact</strong>
            <a href={whatsappUrl}>WhatsApp +{siteConfig.contact.whatsappNumber}</a>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
        <p className="copyright">
          &copy; {year} {siteConfig.businessName}. Enquiries are prepared on your device; no
          website backend stores form submissions.
        </p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contact Aptpro on WhatsApp">
        WhatsApp
      </a>
      <Link className="mobile-sticky-cta" href="/contact">
        Book Aptpro Consultation
      </Link>
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const showScrollTop = useScrollPosition(420);
  useIntersectionObserver();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <div id="main-content">{children}</div>
      <SiteFooter />
      <button
        className={`scroll-top${showScrollTop ? " is-visible" : ""}`}
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span aria-hidden="true" />
      </button>
    </>
  );
}
