import Link from "next/link";
import { getMailToUrl, getWhatsAppUrl, siteConfig } from "@/lib/site-content";

export default function NotFound() {
  const whatsappUrl = getWhatsAppUrl();
  const mailUrl = getMailToUrl();

  return (
    <main className="not-found-page">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>
          The page you requested is not available. Return to {siteConfig.shortName}
          {" "}or send an enquiry if you need IT support.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/">
            Return home
          </Link>
          <a className="secondary-button" href={whatsappUrl || mailUrl || "/#contact"}>
            Contact Aptpro
          </a>
        </div>
      </div>
    </main>
  );
}
