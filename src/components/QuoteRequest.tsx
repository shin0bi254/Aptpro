"use client";

import { FormEvent, useMemo, useState } from "react";
import { getMailToUrl, getWhatsAppUrl, serviceCategories, siteConfig } from "@/lib/site-content";

type Status = {
  type: "idle" | "error" | "success";
  message: string;
};

const contactMethods = ["WhatsApp", "Email", "Phone call", "Any convenient channel"];
const projectTypes = [
  "Website project",
  "ERP or business system",
  "Cybersecurity",
  "IT support",
  "Infrastructure",
  "Consultation",
];
const budgetRanges = [
  "Not sure yet",
  "Under KES 50,000",
  "KES 50,000 - 150,000",
  "KES 150,000 - 500,000",
  "Above KES 500,000",
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
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const contactMethod = String(formData.get("contactMethod") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !organization || !email || !phone || !contactMethod || !service || !timeline || !message) {
      setStatus({
        type: "error",
        message: "Please complete the required fields before preparing your enquiry.",
      });
      return;
    }

    const enquiry = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Preferred contact: ${contactMethod}`,
      `Project type: ${service}`,
      `Budget range: ${budget || "Not provided"}`,
      `Desired timeline: ${timeline}`,
      "",
      message,
    ].join("\n");

    const whatsappUrl = getWhatsAppUrl(`Hello Aptpro,\n\n${enquiry}`);
    const mailUrl = getMailToUrl(enquiry);

    if (contactMethod === "Email" && mailUrl) {
      window.location.href = mailUrl;
      setStatus({
        type: "success",
        message: "Opening your email app with the enquiry prepared.",
      });
      return;
    }

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
        <label className="floating-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder=" " required />
        </label>
        <label className="floating-field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder=" " required />
        </label>
      </div>

      <div className="form-row">
        <label className="floating-field select-field">
          <span>Project type</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            {serviceCategories.map((option) => (
              <option key={option.title} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </label>
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
      </div>

      <div className="form-row">
        <label className="floating-field select-field">
          <span>Budget range (optional)</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="floating-field">
          <span>Desired timeline</span>
          <input name="timeline" type="text" placeholder=" " required />
        </label>
      </div>

      <label className="floating-field textarea-field">
        <span>Project description</span>
        <textarea
          name="message"
          rows={4}
          placeholder=" "
          required
        />
        <small>Describe the business goal, current problem, audience, users, systems or risks involved.</small>
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
