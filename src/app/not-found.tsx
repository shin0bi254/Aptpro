import Link from "next/link";
import { SignalDivider } from "@/components/BrandMotif";
import { SiteShell } from "@/components/SiteChrome";
import { siteConfig } from "@/lib/site-content";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="not-found-page">
        <div>
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p>
            The page you requested is not available. Return to {siteConfig.shortName}, review the
            services, or send a consultation enquiry.
          </p>
          <SignalDivider tone="dark" />
          <div className="hero-actions">
            <Link className="primary-button" href="/">
              Return home
            </Link>
            <Link className="secondary-button" href="/services">
              View services
            </Link>
            <Link className="secondary-button" href="/contact">
              Contact Aptpro
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
