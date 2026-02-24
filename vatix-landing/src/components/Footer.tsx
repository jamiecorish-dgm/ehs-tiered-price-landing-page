import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "Health & Safety Solutions": [
    { label: "EHS Software", href: "#" },
    { label: "Health & Safety Software", href: "#" },
    { label: "Incident Reporting", href: "#" },
    { label: "Risk Assessments", href: "#" },
    { label: "Audits & Inspections", href: "#" },
    { label: "Near Miss Reporting", href: "#" },
    { label: "Lone Worker Device", href: "#" },
    { label: "Lone Worker App", href: "#" },
  ],
  "Care & Healthcare Solutions": [
    { label: "Event Reporting", href: "#" },
    { label: "Risk Management", href: "#" },
    { label: "Audits & Inspections", href: "#" },
    { label: "Action Plans", href: "#" },
    { label: "Safeguarding Reporting", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Glossary", href: "#" },
    { label: "Policy Generator", href: "#" },
    { label: "Buyer\u2019s Guide", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

const trustBadges = [
  {
    src: "/images/6764463cfd924bf88fd79a69_image 2-min.png",
    alt: "SSAIB",
  },
  {
    src: "/images/6764463c80035c9868db096a_image 3-min.png",
    alt: "Crown Commercial Service",
  },
  {
    src: "/images/6764463d2dfe133eee2dff64_image 4-min.png",
    alt: "Cyber Essentials",
  },
  {
    src: "/images/6764463e862da82c5c044772_image 6-min.png",
    alt: "GDPR Compliant",
  },
  {
    src: "/images/6764463e546428df1dd2221d_image 7-min.png",
    alt: "British Assessment Bureau",
  },
];

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1197 24L10.3244 15.371L3.06933 24H0L8.96262 13.343L0 0H7.88032L13.3424 8.13275L20.186 0H23.2554L14.7087 10.1634L24 24H16.1197ZM19.5377 21.5673H17.4713L4.39483 2.43273H6.46151L11.6987 10.0944L12.6044 11.4239L19.5377 21.5673Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0994 4.3882 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6576 4.71615C15.9701 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.34 7.92313 13.875 8.85386 13.875 9.80958V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0994 24 12.0733Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#102A56]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Top section with columns */}
        <div className="pb-16 pt-16 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr_0.6fr] lg:gap-8">
            {/* Brand column */}
            <div className="flex flex-col gap-6">
              <Link href="#" className="inline-block">
                <Image
                  src="/images/6761de2686002a3e2ce97f72_vatix-logo-light.svg"
                  alt="Vatix"
                  width={120}
                  height={60}
                  className="h-auto w-[120px]"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-relaxed text-white/80">
                  30 Great Guildford Street, London, SE1 0HS, United Kingdom
                </p>
                <a
                  href="tel:02039915555"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  020 3991 5555
                </a>
                <a
                  href="mailto:sales@vatix.com"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  sales@vatix.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  aria-label="X.com link"
                  href="https://x.com/vatix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-6 w-6 items-center justify-center text-white/60 transition-colors hover:text-white"
                >
                  <XIcon />
                </a>
                <a
                  aria-label="LinkedIn link"
                  href="https://www.linkedin.com/company/vatixltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-6 w-6 items-center justify-center text-white/60 transition-colors hover:text-white"
                >
                  <LinkedInIcon />
                </a>
                <a
                  aria-label="Facebook link"
                  href="https://web.facebook.com/profile.php?id=100063824490905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-6 w-6 items-center justify-center text-white/60 transition-colors hover:text-white"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {heading}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges row */}
        <div className="pb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
            {/* Capterra + G2 group */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/67644518152db00e2e0d67b8_capterra.svg"
                  alt="Capterra"
                  width={120}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/users-love-us.svg"
                  alt="Users love Vatix on G2"
                  width={80}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </a>
            </div>

            {/* Certificate badges */}
            <div className="flex flex-wrap items-center gap-4">
              {trustBadges.map((badge) => (
                <Image
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  width={60}
                  height={60}
                  className="h-[50px] w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            Vatix Holdings Limited &copy; 2025 All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Legal
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
