"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, navItems, siteConfig } from "@/lib/site-content";
import { LogoMark } from "./BrandMotif";
import { ArrowUp, ChevronDown, Menu, MessageCircle, ShieldCheck, X } from "lucide-react";

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
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollPosition(10);
  const { theme, toggleTheme } = useThemePreference();

  function closeMobileNav() {
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const serviceLinks = navItems.filter((item) => ["/services", "/website-design", "/erp-systems", "/cybersecurity", "/it-infrastructure"].includes(item.href));
  const primaryLinks = navItems.filter((item) => ["/solutions", "/projects", "/about", "/contact"].includes(item.href));

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
        <details className="services-menu">
          <summary>Services <ChevronDown size={15} aria-hidden="true" /></summary>
          <div className="services-menu-panel">
            {serviceLinks.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
          </div>
        </details>
        {primaryLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-nav">
        <button ref={mobileTriggerRef} className="mobile-menu-trigger" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        {mobileOpen ? <><button className="mobile-nav-backdrop" type="button" aria-label="Close navigation" onClick={closeMobileNav} /><div id="mobile-navigation" className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Site navigation" ref={mobileNavRef}>
          <div className="mobile-nav-heading"><span>Navigation</span><button type="button" onClick={closeMobileNav} aria-label="Close navigation"><X size={22} aria-hidden="true" /></button></div>
          <nav aria-label="Mobile navigation">
          <small>Capabilities</small>
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={closeMobileNav}
            >
              {item.label}
            </Link>
          ))}
          <small>Company</small>
          {primaryLinks.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMobileNav}>{item.label}</Link>)}
          <Link className="mobile-cta" href="/contact" onClick={closeMobileNav}>
            Start a Project
          </Link>
          </nav>
        </div></> : null}
      </div>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Theme preference: ${theme}. Toggle theme`}
      >
        <span aria-hidden="true" />
      </button>

      <Link className="nav-cta" href="/contact">
        Start a Project
      </Link>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();
  const serviceLinks = [
    { label: "Website design", href: "/website-design" },
    { label: "ERP systems", href: "/erp-systems" },
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "IT infrastructure", href: "/it-infrastructure" },
  ];
  const trustBadges = ["Nairobi and Kenya focus", "Security-aware delivery", "Device-prepared enquiries"];

  return (
    <>
      <section className="social-proof" aria-label="Aptpro trust indicators" data-reveal>
        <div className="section-shell social-proof-grid">
          {trustBadges.map((badge, index) => (
            <span key={badge} style={{ "--i": index } as React.CSSProperties}>
              <ShieldCheck size={16} aria-hidden="true" />
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
          <div className="footer-privacy-note">
            <ShieldCheck size={20} aria-hidden="true" />
            <div><strong>Privacy-conscious enquiry flow</strong><p>Contact details are assembled in your browser and handed to WhatsApp or email. This static site does not store submissions in its own backend.</p></div>
          </div>
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
              <Link key={item.href} href={item.href}>
                {item.label}
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
        <p className="copyright">&copy; {year} {siteConfig.businessName}. Built for clear, accountable technology engagement.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contact Aptpro on WhatsApp">
        <MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span>
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
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
}
