"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ================================================================== */
/*  ICONS                                                              */
/* ================================================================== */

function BlueCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="12" cy="12" r="12" fill="#EEF6FF" />
      <path d="M7 12.5L10.5 16L17 9" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-[#2E90FA]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="h-5 w-5 text-[#2E90FA]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-5 w-5 text-[#2E90FA]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="h-5 w-5 text-[#2E90FA]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

type Feature = { text: string; tag?: "KEY" | "AI"; unavailable?: boolean };

const tiers = [
  {
    name: "Essentials",
    description:
      "Bring all your incidents and all your risks into one platform. Track, report, and improve.",
    monthlyPrice: 24,
    annualPrice: 19,
    cta: "View full list",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      { text: "Incident reporting \u2014 custom forms" },
      { text: "Audits & inspections \u2014 unlimited templates" },
      { text: "Action tracking \u2014 assign & monitor" },
      { text: "Document management \u2014 100 documents" },
      { text: "3 standard dashboards" },
      { text: "Mobile app (iOS & Android)" },
      { text: "Email support \u2014 48 hr response" },
      { text: "Risk assessments", unavailable: true },
      { text: "SSO / SCIM", unavailable: true },
      { text: "API access", unavailable: true },
    ] as Feature[],
  },
  {
    name: "Professional",
    description:
      "The full EHS platform. For organisations needing more power, control and reporting.",
    monthlyPrice: 44,
    annualPrice: 35,
    cta: "Start free trial",
    ctaStyle: "primary" as const,
    popular: true,
    features: [
      { text: "Risk assessments" },
      { text: "Root cause analysis & RIDDOR auto-filing" },
      { text: "Corrective action workflows & escalation" },
      { text: "Unlimited custom dashboards" },
      { text: "Branded PDF & Excel reporting" },
      { text: "500 documents included" },
      { text: "Sites & assets register (1,000 each)" },
      { text: "Single sign-on (SSO)" },
      { text: "Enhanced support" },
      { text: "Guided onboarding included" },
    ] as Feature[],
  },
  {
    name: "Enterprise",
    description:
      "For large teams with complex requirements, dedicated support, and enterprise security.",
    monthlyPrice: 69,
    annualPrice: 55,
    cta: "Contact Sales",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      { text: "AI assistant", tag: "AI" as const },
      { text: "Documents & dashboard builder" },
      { text: "Predictive analytics & trend detection" },
      { text: "Unlimited sites, assets & contacts" },
      { text: "Custom integrations & dedicated API" },
      { text: "Multi-language support" },
      { text: "Dedicated account manager & QBRs" },
      { text: "Premium support" },
      { text: "99.9% SLA & data residency options" },
    ] as Feature[],
  },
];

const workforceFeatures = [
  { icon: PhoneIcon, title: "Mobile incident & near-miss reporting" },
  { icon: ClipboardIcon, title: "Complete assigned checklists" },
  { icon: DocumentIcon, title: "Document acknowledgement" },
  { icon: EyeIcon, title: "View own submissions" },
];

const deviceRates = [
  { tier: "Essentials", rate: 14, highlight: false },
  { tier: "Professional", rate: 12, highlight: true },
  { tier: "Enterprise", rate: 10, highlight: false },
];

const faqs = [
  {
    question:
      "What\u2019s the difference between full users and workforce licences?",
    answer:
      "Full users are your EHS team \u2014 they create audits, manage risk registers, build dashboards, and run reports. Workforce licences are for everyone else: frontline employees who submit incidents, complete assigned checklists, and acknowledge safety documents via the mobile app. This way you get wall-to-wall coverage without paying full-seat prices for every employee.",
  },
  {
    question: "Can I start on Essentials and upgrade later?",
    answer:
      "Absolutely. You can upgrade your plan at any time. When you upgrade, you\u2019ll get immediate access to the additional features and we\u2019ll pro-rate the cost for the remainder of your billing period.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes, we offer volume discounts for larger teams. Contact our sales team to discuss pricing for your organisation\u2019s specific needs.",
  },
  {
    question: "What\u2019s included in the lone worker add-on?",
    answer:
      "The lone worker add-on includes either our mobile app (GPS check-ins, SOS alerts, man-down detection) or our Safe Pro dedicated hardware device with 24/7 Alarm Receiving Centre monitoring, fall detection, and location tracking.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a free trial of our Professional plan so you can experience the full platform before committing. No credit card required to get started.",
  },
  {
    question: "Can I access Vatix on G-Cloud?",
    answer:
      "Yes, Vatix is available on the G-Cloud framework, making it easy for public sector organisations to procure our services through the Digital Marketplace.",
  },
];

const g2Badges = [
  { src: "/images/6909d9d11131801c4feaf4ba_EnvironmentalHealthandSafety_BestUsability_Total.svg", alt: "G2 Best Usability - Environmental Health and Safety" },
  { src: "/images/6909d9f415dab11504d92cf4_OccupationalHealthandSafety(OHS)_EasiestAdmin_EaseOfAdmin.svg", alt: "G2 Easiest Admin - Occupational Health and Safety" },
  { src: "/images/6909d9c6d01a117d519433cd_EnvironmentalHealthandSafety_BestResults_Total.svg", alt: "G2 Best Results - Environmental Health and Safety" },
  { src: "/images/6909d9a64248986e7590c0b2_Environmental,QualityandSafetyManagement_HighPerformer_HighPerformer.svg", alt: "G2 High Performer - Environmental Quality and Safety Management" },
  { src: "/images/6909d9ec3c95741ab5819052_OccupationalHealthandSafety(OHS)_BestMeetsRequirements_MeetsRequirements.svg", alt: "G2 Best Meets Requirements - Occupational Health and Safety" },
  { src: "/images/6909d9d74e6496f1e28f60c7_EnvironmentalHealthandSafety_EasiestToUse_EaseOfUse.svg", alt: "G2 Easiest to Use - Environmental Health and Safety" },
];

const customerLogos = [
  { src: "/images/6768334501438705a0371972_siemens.svg", alt: "Siemens" },
  { src: "/images/676832bbf5037266b15bb6b3_swissport.svg", alt: "Swissport" },
  { src: "/images/676832bbb73c68e3a284b2b9_nhs.svg", alt: "NHS" },
  { src: "/images/676832bb7d744ee62c9c3be5_cambridge.svg", alt: "Cambridge" },
  { src: "/images/676832bafa536c3a8db84dd0_coop.svg", alt: "Coop" },
  { src: "/images/676832ba42e5edb10339eb1a_intel.svg", alt: "Intel" },
  { src: "/images/676832baed191d0a4731cff6_IAG.svg", alt: "IAG" },
  { src: "/images/676832ba4468e982f42332e6_highland-springlogo.svg", alt: "Highland Spring" },
  { src: "/images/676832baf85eec6325824605_ineos.svg", alt: "Ineos" },
  { src: "/images/676832ba4468e982f423304b_NG Bailey.svg", alt: "NG Bailey" },
  { src: "/images/676832ba4468e982f4233021_the-crown-estate.svg", alt: "The Crown Estate" },
  { src: "/images/676832ba56c25a3a99c88787_danaher.svg", alt: "Danaher" },
];

const testimonials = [
  {
    quote: "Switching to Vatix was a real step up in capability and ease of use. It has everything you need to look after your lone workers in one product.",
    name: "Charlie B.",
    title: "Managing Director",
  },
  {
    quote: "Knowing my team are safe is paramount, Vatix is easily the best system out there to achieve this!",
    name: "Robin A.",
    title: "Youth Services Manager",
  },
  {
    quote: "Easy to use and manage. We use Vatix on a daily basis and our staff have chosen this device over any other.",
    name: "Rebeca L.",
    title: "People Manager",
  },
];

const appFeatures = [
  {
    title: "Quickly call for help in an emergency",
    description:
      "Instantly trigger a call to our 24/7 alarm receiving centre and ensure no time is wasted during critical situations.",
    icon: "/images/677d8b969656fca63c1139cb_Online-Medical-Call-Service.svg",
    media: "/images/6765634ec3d267bb10bf5016_Content_al-min.avif",
  },
  {
    title: "Keep in touch throughout the day with check-ins",
    description:
      "Allow staff to check in at any time or respond when prompted. A simple swipe confirms they are still safe.",
    icon: "/images/677d8c0a87c47f323a0b4d74_Notification-Message-Alert.svg",
    media: "/images/68235f8d92347bb19bb2cb27_FINAL-Check-in-mock-ups.gif",
  },
  {
    title: "Know your team made it home safely",
    description:
      "Enable your team to mark themselves as 'home safe' at the end of their shift, giving you confidence everyone made it home safely.",
    icon: "/images/68235ef47bdd7016e74ef528_home-4--home-house-roof-shelter.svg",
    media: "/images/682370a94b92fa03f0891527_team-view-mobile-app.gif",
  },
];

const deviceFeatures = [
  {
    title: "Activate the Alarm Instantly",
    description:
      "Press the device\u2019s SOS button or rely on automatic fall detection to trigger the alarm.",
    icon: "/images/677d8b95c3b8e088aade26e8_Mouse-Wireless.svg",
    media: "/images/676545ee4c5144216b79b20e_image-min.avif",
  },
  {
    title: "Speak to a Trained Operator",
    description:
      "Once the alarm is activated, you\u2019re connected to a dedicated operator at our 24/7 Alarm Receiving Centre who will assess the situation and communicate directly with you via the device\u2019s speaker and microphone.",
    icon: "/images/67acbfc97df34e5b30c0856a_Untitled design (2).png",
    media: "/images/67647cb45cd3d12b1a6d48f7_Content-min.avif",
  },
  {
    title: "Get the Fastest Possible Emergency Response",
    description:
      "Vatix\u2019s URN access provides direct communication with police control rooms, bypassing 999 for quicker response times. The operator will also contact your emergency contacts.",
    icon: "/images/677d8b96248c653bb4064ce0_Insurance-Hand.svg",
    media: "/images/67acc20873d3b76cd5507230_ambulance-2024-09-22-16-48-47-utc.jpg",
  },
];

/* ================================================================== */
/*  HELPER COMPONENTS                                                  */
/* ================================================================== */

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC83D" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5 text-sm text-gray-500">
      <Image
        src="/images/67fe4365edad0faa3ea4615a_Vector.png"
        alt="Verified"
        width={16}
        height={16}
        className="h-4 w-4"
      />
      <span>Verified Review</span>
    </div>
  );
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [fullUsers, setFullUsers] = useState(15);
  const [workforce, setWorkforce] = useState(200);
  const [devices, setDevices] = useState(0);
  const [loneWorkerTab, setLoneWorkerTab] = useState<"device" | "app">("device");
  const [featureStep, setFeatureStep] = useState(0);
  const [apps, setApps] = useState(0);
  const [calcTier, setCalcTier] = useState(1); // 0=Essentials, 1=Professional, 2=Enterprise

  const activeFeatures = loneWorkerTab === "app" ? appFeatures : deviceFeatures;

  /* Cost calculator — tier-aware */
  const calcTierData = [
    { name: "Essentials", monthly: 24, annual: 19, deviceRate: 14, appRate: 7, workforceRate: 2.5 },
    { name: "Professional", monthly: 44, annual: 35, deviceRate: 12, appRate: 6, workforceRate: 3.5 },
    { name: "Enterprise", monthly: 69, annual: 55, deviceRate: 10, appRate: 5, workforceRate: 3.5 },
  ];
  const activeTier = calcTierData[calcTier];
  const userRateMo = isAnnual ? activeTier.annual : activeTier.monthly;
  const workforceMo = activeTier.workforceRate;
  const estimatedAnnualCost =
    fullUsers * userRateMo * 12 +
    workforce * workforceMo * 12 +
    devices * activeTier.deviceRate * 12 +
    apps * activeTier.appRate * 12;

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundImage: "linear-gradient(180deg, #EEF6FF 0%, #FFFFFF 900px)",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Header />

      <main>
        {/* ====================================================== */}
        {/*  HERO                                                   */}
        {/* ====================================================== */}
        <section className="pt-32 pb-12 text-center">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-[#D0D5DD] bg-white px-4 py-1.5 text-sm font-medium text-[#1A1A2E]">
              SIMPLE, TRANSPARENT PRICING
            </div>

            <h1 className="mb-4 text-4xl font-bold text-[#1A1A2E] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Safety software that{" "}
              <span className="text-[#FFC83D]">scales with</span> you
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-[#475467]">
              From your first incident report to a fully connected EHS platform.
              Pay for what you need, upgrade when you&apos;re ready.
            </p>

            {/* Monthly / Annual toggle */}
            <div className="mb-12 inline-flex items-center gap-1 rounded-full bg-[#F2F4F7] p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  !isAnnual
                    ? "bg-[#FFC83D] text-[#1A1A2E] shadow-sm"
                    : "text-[#667085] hover:text-[#1A1A2E]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  isAnnual
                    ? "bg-[#FFC83D] text-[#1A1A2E] shadow-sm"
                    : "text-[#667085] hover:text-[#1A1A2E]"
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs font-semibold text-[#2E90FA]">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  PRICING CARDS                                          */}
        {/* ====================================================== */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                    tier.popular
                      ? "border-[#FFC83D] bg-white shadow-lg"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FFC83D] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#1A1A2E]">
                      Most Popular
                    </div>
                  )}

                  <h3 className="mb-2 text-xl font-bold text-[#1A1A2E]">
                    {tier.name}
                  </h3>
                  <p className="mb-6 min-h-[48px] text-sm leading-relaxed text-[#667085]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#1A1A2E]">
                      £{isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-sm text-[#667085]">/user/month</span>
                    {isAnnual && (
                      <span className="ml-2 text-xs text-[#98A2B3] line-through">
                        £{tier.monthlyPrice}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  {tier.ctaStyle === "primary" ? (
                    <button className="mb-8 w-full rounded-lg bg-[#FFC83D] px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#FFD060]">
                      {tier.cta}
                    </button>
                  ) : (
                    <button className="mb-8 w-full rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-gray-50">
                      {tier.cta}
                    </button>
                  )}

                  {/* "What's included" / "Everything in X, plus" */}
                  <p className="mb-4 text-xs font-medium text-[#98A2B3]">
                    {tier.name === "Essentials"
                      ? "What\u2019s included"
                      : tier.name === "Professional"
                        ? "Everything in Essentials, plus"
                        : "Everything in Professional, plus"}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((feat, i) =>
                      feat.unavailable ? (
                        <li key={i} className="flex items-start gap-3 opacity-40">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <circle cx="12" cy="12" r="12" fill="#F2F4F7" />
                            <path d="M8 12H16" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <span className="text-sm text-[#98A2B3] line-through">
                            {feat.text}
                          </span>
                        </li>
                      ) : (
                        <li key={i} className="flex items-start gap-3">
                          <BlueCheckIcon />
                          <span className="text-sm text-[#475467]">
                            {feat.text}
                            {feat.tag && (
                              <span className={`ml-1.5 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none ${
                                feat.tag === "AI"
                                  ? "bg-[#EEF6FF] text-[#2E90FA]"
                                  : "bg-[#FFC83D]/20 text-[#1A1A2E]"
                              }`}>
                                {feat.tag}
                              </span>
                            )}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  G2 BADGES                                              */}
        {/* ====================================================== */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {g2Badges.map((badge) => (
                <img
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-[80px] w-auto md:h-[100px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  CUSTOMER LOGOS MARQUEE                                  */}
        {/* ====================================================== */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <p className="mb-10 text-center text-lg font-medium text-[#1A1A2E] md:text-xl">
              Join 500+ forward-thinking leaders enhancing safety and operations
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
              {customerLogos.map((logo) => (
                <img
                  key={`a-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto md:h-10"
                />
              ))}
              {customerLogos.map((logo) => (
                <img
                  key={`b-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto md:h-10"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  WORKFORCE REPORTING                                    */}
        {/* ====================================================== */}
        <section className="bg-[#102A56] pt-20 pb-6 md:pt-28 md:pb-8">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              {/* Left — copy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Get your{" "}
                  <span className="text-[#FFC83D]">entire workforce</span>{" "}
                  reporting
                </h2>
                <p className="mb-8 max-w-lg text-base leading-relaxed text-white/70">
                  Full-seat pricing shouldn&apos;t stop you rolling out safety
                  reporting to every employee. Workforce licences let frontline
                  staff submit incidents, complete checklists, and acknowledge
                  documents — without the cost of a full seat.
                </p>
                <div className="mb-3">
                  <span className="mr-1 text-sm text-white/60">from</span>
                  <span className="text-4xl font-bold text-white">£2.50</span>
                  <span className="ml-1 text-white/60">
                    /person/month · billed annually
                  </span>
                </div>
                <p className="text-sm text-white/40">
                  Minimum 50 workforce licences · Available on any plan
                </p>
              </div>

              {/* Right — feature cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {workforceFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF6FF]/10">
                      <feat.icon />
                    </div>
                    <span className="text-sm font-medium leading-snug text-white/80">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  WHAT OUR CUSTOMERS SAY                                 */}
        {/* ====================================================== */}
        <section className="bg-[#102A56] pt-10 pb-20 md:pt-14 md:pb-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl bg-white p-6 md:p-8"
                >
                  <StarRating />
                  <p className="mt-4 mb-6 flex-1 text-base leading-relaxed text-[#475467]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-base font-semibold text-[#1A1A2E]">{t.name}</p>
                    <p className="mb-3 text-sm text-[#667085]">{t.title}</p>
                    <VerifiedBadge />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  LONE WORKER PROTECTION ADD-ON                          */}
        {/* ====================================================== */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            {/* Heading */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Lone Worker Protection
              </h2>
              <span className="rounded-full bg-[#FFC83D] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A1A2E]">
                Add-on
              </span>
            </div>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#475467]">
              Add integrated lone worker monitoring to any plan. Combine safety
              software with hardware-backed personal protection — something no
              other EHS platform offers.
            </p>

            {/* Pricing options card */}
            <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
                {/* Safe Pro Device — selectable (default) */}
                <button
                  onClick={() => { setLoneWorkerTab("device"); setFeatureStep(0); }}
                  className={`rounded-xl border-2 p-5 text-left transition-all ${
                    loneWorkerTab === "device"
                      ? "border-[#2E90FA] bg-[#EEF6FF]/40"
                      : "border-[#E4E7EC] hover:border-[#D0D5DD]"
                  }`}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      loneWorkerTab === "device" ? "border-[#2E90FA]" : "border-[#D0D5DD]"
                    }`}>
                      {loneWorkerTab === "device" && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#2E90FA]" />
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#667085]">
                      Safe Pro Device + 24/7 ARC
                    </p>
                  </div>
                  <div className="mb-3">
                    <span className="mr-1 text-sm text-[#98A2B3]">from</span>
                    <span className="text-3xl font-bold text-[#1A1A2E]">£10</span>
                    <span className="text-sm text-[#667085]">/device/mo</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#475467]">
                    Dedicated hardware, fall detection, ARC monitoring
                  </p>
                </button>

                {/* Lone Worker App — selectable */}
                <button
                  onClick={() => { setLoneWorkerTab("app"); setFeatureStep(0); }}
                  className={`rounded-xl border-2 p-5 text-left transition-all ${
                    loneWorkerTab === "app"
                      ? "border-[#2E90FA] bg-[#EEF6FF]/40"
                      : "border-[#E4E7EC] hover:border-[#D0D5DD]"
                  }`}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      loneWorkerTab === "app" ? "border-[#2E90FA]" : "border-[#D0D5DD]"
                    }`}>
                      {loneWorkerTab === "app" && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#2E90FA]" />
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#667085]">
                      Lone Worker App
                    </p>
                  </div>
                  <div className="mb-3">
                    <span className="mr-1 text-sm text-[#98A2B3]">from</span>
                    <span className="text-3xl font-bold text-[#1A1A2E]">£5</span>
                    <span className="text-sm text-[#667085]">/user/mo</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#475467]">
                    GPS check-ins, SOS alerts, man-down
                  </p>
                </button>

                {/* Tier rates */}
                <div className="flex flex-col gap-2.5 sm:col-span-2 lg:col-span-1">
                  {(loneWorkerTab === "device"
                    ? deviceRates.map((d) => ({ ...d, label: "Device", unit: "/mo" }))
                    : [
                        { tier: "Essentials", rate: 7, highlight: false },
                        { tier: "Professional", rate: 6, highlight: true },
                        { tier: "Enterprise", rate: 5, highlight: false },
                      ].map((d) => ({ ...d, label: "App", unit: "/user/mo" }))
                  ).map((d) => (
                    <div
                      key={d.tier}
                      className="flex items-center justify-between gap-4 rounded-lg bg-[#F9FAFB] px-4 py-2.5"
                    >
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          d.highlight
                            ? "bg-[#FFC83D]/20 text-[#1A1A2E]"
                            : "bg-[#E4E7EC] text-[#475467]"
                        }`}
                      >
                        {d.tier}
                      </span>
                      <span className="text-sm text-[#667085]">
                        <span className="font-semibold text-[#1A1A2E]">£{d.rate}</span>{d.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature scroller — same format as source page How It Works */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
              {/* Tabs — left side */}
              <div className="flex flex-col gap-0">
                {activeFeatures.map((feat, i) => (
                  <button
                    key={`${loneWorkerTab}-${i}`}
                    onClick={() => setFeatureStep(i)}
                    className="w-full text-left"
                  >
                    <div className={`flex items-start gap-4 px-5 py-5 transition-all ${
                      featureStep === i ? "" : "opacity-60 hover:opacity-80"
                    }`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F7]">
                        <img src={feat.icon} alt="" className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-base font-semibold ${
                          featureStep === i ? "text-[#1A1A2E]" : "text-[#667085]"
                        }`}>
                          {feat.title}
                        </h3>
                        {featureStep === i && (
                          <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                            {feat.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-[3px] w-full bg-[#E4E7EC]">
                      {featureStep === i && (
                        <div
                          key={`lw-${loneWorkerTab}-${featureStep}`}
                          className="h-full rounded-full bg-[#2E90FA] animate-progress-fill"
                          onAnimationEnd={() =>
                            setFeatureStep((prev) => (prev + 1) % activeFeatures.length)
                          }
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Image — right side */}
              <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#F9FAFB] max-h-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeFeatures[featureStep].media}
                  alt={activeFeatures[featureStep].title}
                  className="h-auto max-h-[420px] w-auto max-w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  COST CALCULATOR                                        */}
        {/* ====================================================== */}
        <section className="bg-[#EEF6FF] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg md:p-12 ring-1 ring-[#2E90FA]/30 shadow-[0_0_30px_rgba(46,144,250,0.15),0_0_60px_rgba(46,144,250,0.08)]">
              <h2 className="mb-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Estimate your annual cost
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-base text-[#475467]">
                See what Vatix would cost for your organisation.
              </p>

              {/* Tier tabs */}
              <div className="mb-10 flex justify-center">
                <div className="inline-flex rounded-full bg-[#F2F4F7] p-1">
                  {calcTierData.map((t, i) => (
                    <button
                      key={t.name}
                      onClick={() => setCalcTier(i)}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                        calcTier === i
                          ? "bg-[#102A56] text-white shadow-sm"
                          : "text-[#667085] hover:text-[#1A1A2E]"
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#667085]">
                    Full Users
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={fullUsers}
                    onChange={(e) =>
                      setFullUsers(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center text-lg font-semibold text-[#1A1A2E] outline-none transition focus:border-[#2E90FA] focus:ring-2 focus:ring-[#2E90FA]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#667085]">
                    Workforce
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={workforce}
                    onChange={(e) =>
                      setWorkforce(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center text-lg font-semibold text-[#1A1A2E] outline-none transition focus:border-[#2E90FA] focus:ring-2 focus:ring-[#2E90FA]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#667085]">
                    Devices
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={devices}
                    onChange={(e) =>
                      setDevices(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center text-lg font-semibold text-[#1A1A2E] outline-none transition focus:border-[#2E90FA] focus:ring-2 focus:ring-[#2E90FA]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#667085]">
                    Apps
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={apps}
                    onChange={(e) =>
                      setApps(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center text-lg font-semibold text-[#1A1A2E] outline-none transition focus:border-[#2E90FA] focus:ring-2 focus:ring-[#2E90FA]/20"
                  />
                </div>
              </div>

              {/* Rate breakdown */}
              <div className="mx-auto mb-8 flex max-w-xl justify-between border-t border-gray-100 pt-4 text-xs text-[#98A2B3]">
                <span>£{isAnnual ? activeTier.annual : activeTier.monthly}/user/mo</span>
                <span>£{workforceMo}/person/mo</span>
                <span>£{activeTier.deviceRate}/device/mo</span>
                <span>£{activeTier.appRate}/app/mo</span>
              </div>

              {/* Result */}
              <p className="mb-2 text-sm text-[#667085]">
                Estimated annual cost ({activeTier.name} · {isAnnual ? "annual" : "monthly"} billing)
              </p>
              <p className="mb-8 text-5xl font-bold text-[#1A1A2E]">
                £{new Intl.NumberFormat("en-GB").format(estimatedAnnualCost)}
              </p>

              <button className="inline-flex items-center gap-2 rounded-lg bg-[#FFC83D] px-8 py-3.5 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#FFD060]">
                Get a tailored quote
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/*  FAQ                                                    */}
        {/* ====================================================== */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
              {/* Left — Heading */}
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A2E] md:text-4xl lg:sticky lg:top-24">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* Right — Accordion */}
              <div className="flex flex-col divide-y divide-gray-200">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-start justify-between gap-4 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-base font-semibold text-[#1A1A2E] md:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-xl leading-none text-[#667085] transition-transform duration-300 ${
                          openFaq === i ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`faq-content ${openFaq === i ? "open" : ""}`}
                    >
                      <p className="mt-3 text-base leading-relaxed text-[#475467]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
