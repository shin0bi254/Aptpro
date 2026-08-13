"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, navItems, siteConfig } from "@/lib/site-content";
import { LogoMark } from "./BrandMotif";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
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
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
