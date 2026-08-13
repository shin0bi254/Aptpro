"use client";

import { FormEvent, useMemo, useState } from "react";
import { getMailToUrl, getWhatsAppUrl, serviceCategories, siteConfig } from "@/lib/site-content";

type Status = {
  type: "idle" | "error" | "success";
  message: string;
};

const contactMethods = [
  "WhatsApp",
  "Phone call",
  "Email",
  "Any convenient channel",
];

export function QuoteRequest() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const isSuccess = status.type === "success";

  const verifiedEmail = Boolean(siteConfig.contact.email);
  const verifiedWhatsApp = Boolean(siteConfig.contact.whatsappNumber);
  const canPrepareEnquiry = verifiedEmail || verifiedWhatsApp;

  const fallbackNote = useMemo(() => {
    if (canPrepareEnquiry) {
      return "";
    }

    return "Add a verified Aptpro email or WhatsApp number before launch to activate enquiry links.";
  }, [canPrepareEnquiry]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const trap = String(formData.get("company_website") ?? "").trim();

    if (trap) {
      setStatus({
        type: "success",
        message: "Thanks. Your enquiry has been prepared.",
      });
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const contactMethod = String(formData.get("contactMethod") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !organization || !contactMethod || !service || !message) {
      setStatus({
        type: "error",
        message: "Please complete all fields before preparing your enquiry.",
      });
      return;
    }

    const enquiry = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Preferred contact: ${contactMethod}`,
      `Service needed: ${service}`,
      "",
      message,
    ].join("\n");

    const whatsappUrl = getWhatsAppUrl(`Hello Aptpro,\n\n${enquiry}`);
    const mailUrl = getMailToUrl(enquiry);

    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus({
        type: "success",
        message: "Opening WhatsApp with the enquiry prepared.",
      });
      return;
    }

    if (mailUrl) {
      window.location.href = mailUrl;
      setStatus({
        type: "success",
        message: "Opening your email app with the enquiry prepared.",
      });
      return;
    }

    setStatus({
      type: "error",
      message: fallbackNote,
    });
  }

  return (
    <form
      className={`quote-form${isSuccess ? " is-success" : ""}`}
      onSubmit={handleSubmit}
      onChange={() => {
        if (status.type !== "idle") {
          setStatus({ type: "idle", message: "" });
        }
      }}
      noValidate
      data-reveal
    >
      <div className="form-row">
        <label className="floating-field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" placeholder=" " required />
        </label>
        <label className="floating-field">
          <span>Organization</span>
          <input name="organization" type="text" autoComplete="organization" placeholder=" " required />
        </label>
      </div>

      <div className="form-row">
        <label className="floating-field select-field">
          <span>Preferred contact</span>
          <select name="contactMethod" required defaultValue="">
            <option value="" disabled>
              Select a channel
            </option>
            {contactMethods.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="floating-field select-field">
          <span>Service needed</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceCategories.map((option) => (
              <option key={option.title} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="floating-field textarea-field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder=" "
          required
        />
        <small>Briefly describe what you need help with.</small>
      </label>

      <label className="honeypot" aria-hidden="true">
        <span>Company website</span>
        <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-actions">
        <button type="submit" disabled={!canPrepareEnquiry}>
          {canPrepareEnquiry ? "Prepare WhatsApp enquiry" : "Contact details required"}
        </button>
        <p>{fallbackNote || "Your enquiry opens in WhatsApp or email so you can review it before sending."}</p>
      </div>

      <p className="privacy-note">
        Aptpro does not receive this form until you send it from WhatsApp or your email app.
      </p>

      <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
