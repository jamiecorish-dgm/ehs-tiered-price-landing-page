"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Chevron SVG used in dropdown toggles                               */
/* ------------------------------------------------------------------ */
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M12 6.5L8 10.5L4 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Arrow chevron used in dropdown menu links                          */
/* ------------------------------------------------------------------ */
function ChevronRight() {
  return (
    <svg
      className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity ml-auto shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M6 4.5L10 8.5L6 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation data                                                    */
/* ------------------------------------------------------------------ */
const healthAndSafetyLinks = [
  { label: "EHS Software", href: "#" },
  { label: "Health & Safety Software", href: "#" },
  { label: "Incident Reporting", href: "#" },
  { label: "Risk Assessments", href: "#" },
  { label: "Audits & Inspections", href: "#" },
  { label: "Near Miss Reporting", href: "#" },
  { label: "Lone Worker Device", href: "#" },
  { label: "Lone Worker App", href: "#" },
  { label: "Document Management", href: "#" },
];

const careAndHealthcareLinks = [
  { label: "Event Reporting", href: "#" },
  { label: "Risk Management", href: "#" },
  { label: "Audits & Inspections", href: "#" },
  { label: "Action Plans", href: "#" },
  { label: "Safeguarding Reporting", href: "#" },
];

const resourcesLinks = [
  { label: "Blog", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Glossary", href: "#" },
  { label: "Policy Generator", href: "#" },
  { label: "Buyer\u2019s Guide", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

/* ------------------------------------------------------------------ */
/*  useClickOutside hook                                               */
/* ------------------------------------------------------------------ */
function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown wrapper                                           */
/* ------------------------------------------------------------------ */
function DesktopDropdown({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useClickOutside(ref, () => setOpen(false));

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-[15px] font-medium text-brand-navy hover:text-brand-navy/70 transition-colors py-2"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full pt-2 ${wide ? "left-1/2 -translate-x-1/2" : "left-0"} z-50 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden ${
            wide ? "w-[720px]" : "w-[260px]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dropdown link item                                                 */
/* ------------------------------------------------------------------ */
function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group/link flex items-center gap-2.5 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <span className="text-[14px] text-brand-navy font-medium">{label}</span>
      <ChevronRight />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Solutions mega-menu content                                        */
/* ------------------------------------------------------------------ */
function SolutionsDropdownContent() {
  return (
    <div className="flex">
      {/* Left sidebar — Platform Overview */}
      <div className="w-[220px] bg-gray-50 p-6 border-r border-gray-100 flex flex-col">
        <div className="mb-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.86 5.93H3.45C2.1 5.93 1.74 7.19 1.74 7.65V21.36C1.74 22.31 2.46 23.08 3.45 23.08H18.88C19.83 23.08 20.6 22.31 20.6 21.36V14.5"
                stroke="#2E90FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.74 10.22H10.74"
                stroke="#2E90FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.02 18.79L8.6 16.22L6.02 13.65"
                stroke="#2E90FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.17 18.79H13.74"
                stroke="#2E90FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.83 6.81C11.23 6.71 11.23 5.84 11.83 5.74C14.01 5.36 15.75 3.7 16.22 1.54L16.25 1.37C16.38 0.78 17.23 0.77 17.37 1.37L17.41 1.56C17.9 3.71 19.63 5.36 21.81 5.74C22.41 5.84 22.41 6.71 21.81 6.81C19.63 7.19 17.9 8.84 17.41 10.99L17.37 11.18C17.23 11.78 16.38 11.77 16.25 11.18L16.22 11.01C15.75 8.85 14.01 7.19 11.83 6.81Z"
                stroke="#2E90FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-[15px] font-semibold text-brand-navy mb-1.5">
          Platform Overview
        </h3>
        <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
          Our integrated platform that revolutionises the way you manage safety,
          quality, and compliance.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-medium text-white bg-brand-navy rounded-lg hover:bg-brand-navy/90 transition-colors"
        >
          Explore Our Platform
        </Link>
      </div>

      {/* Right side — Two columns */}
      <div className="flex-1 p-5">
        <div className="grid grid-cols-2 gap-x-4">
          {/* Health & Safety column */}
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-text-muted uppercase mb-2 px-4">
              Health &amp; Safety
            </p>
            <div className="flex flex-col">
              {healthAndSafetyLinks.map((link) => (
                <DropdownLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* Care & Healthcare column */}
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-text-muted uppercase mb-2 px-4">
              Care &amp; Healthcare
            </p>
            <div className="flex flex-col">
              {careAndHealthcareLinks.map((link) => (
                <DropdownLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Simple dropdown content (Resources / Company)                      */
/* ------------------------------------------------------------------ */
function SimpleDropdownContent({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="py-2">
      {links.map((link) => (
        <DropdownLink key={link.label} href={link.href} label={link.label} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile nav accordion section                                       */
/* ------------------------------------------------------------------ */
function MobileAccordion({
  label,
  links,
  onLinkClick,
}: {
  label: string;
  links: { label: string; href: string }[];
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex items-center justify-between w-full py-3.5 px-4 text-[15px] font-medium text-brand-navy"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="pb-3 pl-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 px-4 text-[14px] text-text-secondary hover:text-brand-navy transition-colors"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Solutions accordion (with sub-sections)                     */
/* ------------------------------------------------------------------ */
function MobileSolutionsAccordion({
  onLinkClick,
}: {
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex items-center justify-between w-full py-3.5 px-4 text-[15px] font-medium text-brand-navy"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Solutions
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="pb-3 pl-4">
          {/* Platform Overview link */}
          <Link
            href="#"
            className="block py-2.5 px-4 text-[14px] font-medium text-blue-600 hover:text-blue-700 transition-colors"
            onClick={onLinkClick}
          >
            Platform Overview
          </Link>

          {/* Health & Safety */}
          <p className="text-[11px] font-semibold tracking-wider text-text-muted uppercase mt-3 mb-1.5 px-4">
            Health &amp; Safety
          </p>
          {healthAndSafetyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 px-4 text-[14px] text-text-secondary hover:text-brand-navy transition-colors"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}

          {/* Care & Healthcare */}
          <p className="text-[11px] font-semibold tracking-wider text-text-muted uppercase mt-3 mb-1.5 px-4">
            Care &amp; Healthcare
          </p>
          {careAndHealthcareLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 px-4 text-[14px] text-text-secondary hover:text-brand-navy transition-colors"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HEADER COMPONENT                                                   */
/* ================================================================== */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 py-3 px-4">
      <div className="max-w-[1280px] mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
        <div className="flex items-center justify-between h-[64px]">
          {/* ---- Logo ---- */}
          <Link href="/" className="shrink-0" aria-label="Vatix home">
            <Image
              src="/images/6761de26802f9b1e4b86ba1a_vatix-logo-dark.svg"
              alt="Vatix logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* ---- Desktop Navigation (hidden below md) ---- */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Solutions mega-dropdown */}
            <DesktopDropdown label="Solutions" wide>
              <SolutionsDropdownContent />
            </DesktopDropdown>

            {/* Customers (simple link) */}
            <Link
              href="#"
              className="text-[15px] font-medium text-brand-navy hover:text-brand-navy/70 transition-colors py-2"
            >
              Customers
            </Link>

            {/* Resources dropdown */}
            <DesktopDropdown label="Resources">
              <SimpleDropdownContent links={resourcesLinks} />
            </DesktopDropdown>

            {/* Company dropdown */}
            <DesktopDropdown label="Company">
              <SimpleDropdownContent links={companyLinks} />
            </DesktopDropdown>
          </nav>

          {/* ---- Desktop buttons (hidden below md) ---- */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-[14px] font-medium text-brand-navy hover:text-brand-navy/70 transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="text-[14px] font-medium text-brand-navy hover:text-brand-navy/70 transition-colors underline decoration-[#FFC83D] decoration-2 underline-offset-4"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium text-brand-navy bg-brand-yellow rounded-lg hover:bg-brand-yellow/90 transition-colors"
            >
              Get a Demo
            </Link>
          </div>

          {/* ---- Mobile hamburger (shown below md) ---- */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ---- Mobile menu overlay ---- */}
      <div
        className={`md:hidden fixed inset-0 top-[88px] bg-white z-40 overflow-y-auto transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="px-2 pb-6">
          {/* Solutions */}
          <MobileSolutionsAccordion onLinkClick={closeMobile} />

          {/* Customers */}
          <Link
            href="#"
            className="block py-3.5 px-4 text-[15px] font-medium text-brand-navy border-b border-gray-100"
            onClick={closeMobile}
          >
            Customers
          </Link>

          {/* Resources */}
          <MobileAccordion
            label="Resources"
            links={resourcesLinks}
            onLinkClick={closeMobile}
          />

          {/* Company */}
          <MobileAccordion
            label="Company"
            links={companyLinks}
            onLinkClick={closeMobile}
          />

          {/* Mobile buttons */}
          <div className="mt-6 px-4 flex flex-col gap-3">
            <Link
              href="#"
              className="text-center py-2.5 text-[14px] font-medium text-brand-navy hover:text-brand-navy/70 transition-colors"
              onClick={closeMobile}
            >
              Login
            </Link>
            <Link
              href="#"
              className="text-center py-3 text-[14px] font-medium text-brand-navy border border-brand-navy rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-center py-3 text-[14px] font-medium text-brand-navy bg-brand-yellow rounded-lg hover:bg-brand-yellow/90 transition-colors"
              onClick={closeMobile}
            >
              Get a Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
