"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, navItems, siteConfig } from "@/lib/site-content";
import { LogoMark } from "./BrandMotif";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
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

      <details className="mobile-nav">
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
            >
              {item.label}
            </Link>
          ))}
          <Link className="mobile-cta" href="/contact">
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

  return (
    <>
      <footer className="site-footer">
        <div>
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
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
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
