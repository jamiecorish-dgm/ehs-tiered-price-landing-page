"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const deviceImages = [
  { src: "/images/6777e235a3b57bc92a1d25a0_device-01.avif", alt: "Safe Pro Device - Front" },
  { src: "/images/6777e2349375f821799277f4_device-02.avif", alt: "Safe Pro Device - Side" },
  { src: "/images/6777e2347976fd44ccc1afba_device-03.avif", alt: "Safe Pro Device - Back" },
  { src: "/images/6777e2347839649e1c8a54c4_device-04.avif", alt: "Safe Pro Device - Top" },
  { src: "/images/6777e235c9915b76ace85964_device-05.avif", alt: "Safe Pro Device - Angle" },
  { src: "/images/6777e234cf4aa62513a1adfc_device-06.avif", alt: "Safe Pro Device - Dock" },
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

const howItWorksSteps = [
  {
    icon: "/images/677d8b95c3b8e088aade26e8_Mouse-Wireless.svg",
    step: "1",
    title: "Activate the Alarm Instantly",
    description: "Press the device's SOS button or rely on automatic fall detection to trigger the alarm.",
    image: "/images/676545ee4c5144216b79b20e_image-min.avif",
  },
  {
    icon: "/images/67acbfc97df34e5b30c0856a_Untitled design (2).png",
    step: "2",
    title: "Speak to a Trained Operator",
    description: "Once the alarm is activated, you're connected to a dedicated operator at our 24/7 Alarm Receiving Centre who will listen in and assess the situation. If it's safe, the operator will communicate directly with you via the device's speaker and microphone.",
    image: "/images/67647cb45cd3d12b1a6d48f7_Content-min.avif",
  },
  {
    icon: "/images/677d8b96248c653bb4064ce0_Insurance-Hand.svg",
    step: "3",
    title: "Get the Fastest Possible Emergency Response",
    description: "Vatix's URN access provides direct communication with police control rooms, bypassing 999 for quicker response times for emergency services. The operator will also contact your emergency contacts to keep them informed.",
    image: "/images/67acc20873d3b76cd5507230_ambulance-2024-09-22-16-48-47-utc.jpg",
  },
];

const features = [
  {
    icon: "/images/677d8b95c3b8e088aade26e8_Mouse-Wireless.svg",
    title: "4G Lone Worker Device",
    description: "With our Safe Pro 4G lone working alarm device, simply press the button to make an instant phone call to our 24/7 monitoring centre for emergency assistance.",
  },
  {
    icon: "/images/677d8b93c3281ee1aaa77d5c_Cellular-Network-4g.svg",
    title: "4G/HD Quality Calls",
    description: "Our devices are future-proofed with 4G for enhanced coverage, reliable connections, and crystal-clear audio, ensuring dependable performance as 2G networks phase out.",
  },
  {
    icon: "/images/677d8b99a3ee30e685dcc391_Wifi-Antenna.svg",
    title: "Roaming SIM Card",
    description: "The roaming SIM card allows devices to roam between O2, Vodafone, EE, and Three to ensure the best connection. Data and voice calls for alarm activations included.",
  },
  {
    icon: "/images/677d8b9387c47f323a0ae7d4_Clipboard-Check.svg",
    title: "24/7 Alarm Monitoring",
    description: "We use two UK-based 24/7 dedicated monitoring centres to provide swift responses to alarm calls, with fast-track Police Level 1 response available in the UK&I.",
  },
  {
    icon: "/images/677d8b9263844c7da9ebe981_Battery-Full.svg",
    title: "Up to 7-Day Battery Life",
    description: "Reliable, long-lasting power to keep your team connected without the need for frequent recharging.",
  },
  {
    icon: "/images/677d8b9387c47f323a0ae7de_Electric-Cord.svg",
    title: "Fast Charging Dock",
    description: "Fully recharges the device in just 4 hours, minimising downtime. Includes charging dock, USB C cable, and plug.",
  },
  {
    icon: "/images/677d8b95a1ec2867747ec928_Location-Pin.svg",
    title: "Location Tracking",
    description: "Combines automatic GPS updates and advanced Wi-Fi positioning to provide accurate location data, indoors and outdoors.",
  },
  {
    icon: "/images/677d8b97466e40fe2f84fca4_Recording-Tape-Bubble-Circle.svg",
    title: "Status Updates",
    description: "Allows users to post voice notes from the device, giving alarm responders valuable context before an emergency arises.",
  },
  {
    icon: "/images/677d90201576e9f3c2edbd52_Local-Storage-Folder.svg",
    title: "Management Portal",
    description: "Assign devices, set alarm response instructions, automatically track alerts, and view usage dashboards. Manager users are included at no additional charge.",
  },
];

const platformTabs = [
  {
    icon: "/images/677d8b998f5e6c07110789ab_User-Add-Plus.svg",
    title: "Easy to Setup",
    description: "Easily add new team members and quickly allocate and de-allocate devices and licenses to users.",
    image: "/images/6769776cecf082b10bc679c1_Easy-to-Setup-2x-1.webp",
  },
  {
    icon: "/images/677d8b94ddd0fca7b9244c60_Clipboard-Remove.svg",
    title: "Detailed Alarm Reports",
    description: "Fully meet your compliance audit requirements with a comprehensive audit trail of every alarm activation.",
    image: "/images/67697c3be4d546944a2f98bc_Detailed-Alarm-Reports-2x.webp",
  },
  {
    icon: "/images/677d8b9490c13d1f33d12392_Heart-Rate-Search.svg",
    title: "Track & Monitor Engagement",
    description: "Get actionable insights on user engagement and alarm triggers to ensure full compliance with lone worker procedures.",
    image: "/images/67697c3b36b2d7e343936b3a_Track-Monitor-Engagement-2x.webp",
  },
];

const caseStudies = [
  {
    logo: "/images/676842c1e920e5490dfaff90_logo__watmos.avif",
    logoAlt: "WATMOS",
    quote: "Vatix stood out with its all-in-one system, including real-time location tracking - at no extra cost.",
    role: "Human Resources Officer",
  },
  {
    logo: "/images/676842d577cb968e98e5d54d_pilon-logo.avif",
    logoAlt: "PiLON",
    quote: "Having key incident information at my fingertips is invaluable...",
    role: "HSE Manager",
  },
  {
    logo: "/images/676842e67d744ee62ca857f3_Greencore_Group_plc_Logo-2.avif",
    logoAlt: "Greencore",
    quote: "The feedback has been really positive internally...",
    role: "Road Safety Manager",
  },
  {
    logo: "/images/676851585a3ec360e3b64226_dfds.svg",
    logoAlt: "DFDS",
    quote: "The system has been great for team leaders...",
    role: "HSE Advisor",
  },
  {
    logo: "/images/676842349385edf04a175fbb_Wessex-Internet_Master-Logo-1.avif",
    logoAlt: "Wessex Internet",
    quote: "The whole process has been very fast and simple...",
    role: "Health & Safety Advisor",
  },
  {
    logo: "/images/67684250dc6bc1ff55bf11be_250px-Brighton_and_Hove_City_Council.svg.avif",
    logoAlt: "Brighton & Hove",
    quote: "The Vatix team made the set-up very smooth...",
    role: "Transport Monitoring Team Leader",
  },
  {
    logo: "/images/67684285b73c68e3a2909fec_ezgif.com-webp-to-png-converter.avif",
    logoAlt: "Hotel Co 51",
    quote: "With Vatix's Safe Pro devices, our staff feel secure...",
    role: "Regional Director Operations",
  },
  {
    logo: "/images/676843784cef0c6510cf32f2_spark2life.svg",
    logoAlt: "Spark 2 Life",
    quote: "The most important thing is looking after your workers...",
    role: "Community Mentoring Administrative Coordinator",
  },
  {
    logo: "/images/6768415077cb968e98e4d323_swissport.svg",
    logoAlt: "Swissport",
    quote: "Having someone available 24/7 to answer emergency calls...",
    role: "QHSE Manager",
  },
  {
    logo: "/images/6768429571b9334d1a3e5191_Robinson-Contract-Services-logo.avif",
    logoAlt: "Robinson Contract",
    quote: "The reporting makes it simple to check if devices are active...",
    role: "Projector Coordinator",
  },
  {
    logo: "/images/676842a59385edf04a17abe8_plantbean.svg",
    logoAlt: "Plant & Bean",
    quote: "The system is incredibly valuable...",
    role: "Interim Health & Safety Manager",
  },
];

const faqItems = [
  {
    question: "Can I have some people using the Lone Worker Device and others using the Lone Worker App within the same account?",
    answer: "Absolutely, you can integrate both Lone Worker devices and Lone Worker App licenses within the same account. This flexibility enables you to tailor the safety solutions according to each employee's specific needs and risk assessments.",
  },
  {
    question: "What are the advantages of using a lone worker device?",
    answer: "Utilising a lone worker device gives you a reliable, straightforward method for raising an alarm. These devices are designed to high safety standards, offering robustness and an extended battery life compared to mobile phones.",
  },
  {
    question: "What accessories are included with the lone worker device?",
    answer: "The Lone Worker device package includes the Safe Pro device, a quick-release lanyard, a charging docking station, a cable for connecting the wall plug and charger, a getting-started user guide, and a UK wall plug. Additional wearable accessories like a belt clip, in-vehicle mount, and wall mount are also available.",
  },
  {
    question: "What privacy measures are in place for the lone worker device?",
    answer: "Your privacy is a priority. Location data is utilised solely in emergency scenarios. Upon alarm activation, the device's location is shared with our monitoring centres to provide an immediate and effective response. Moreover, a variety of privacy controls can be configured via the web portal, aligning with your organisation's policies.",
  },
  {
    question: "Why should I opt for a 4G lone worker device instead of a 2G device?",
    answer: "A 4G lone worker device offers numerous advantages over its 2G counterpart. These include broader network coverage\u2014especially in rural areas\u2014and more efficient support for features like live tracking. As 2G technology is gradually being phased out, a 4G device ensures longer-term compatibility and support.",
  },
];

/* ================================================================== */
/*  SVG ICONS                                                          */
/* ================================================================== */

function BlueCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="12" cy="12" r="12" fill="#EEF6FF" />
      <path d="M7 12.5L10.5 16L17 9" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
/*  MAIN PAGE COMPONENT                                                */
/* ================================================================== */

export default function Home() {
  const [activeDevice, setActiveDevice] = useState(0);
  const [activeHowItWorks, setActiveHowItWorks] = useState(0);
  const [activePlatformTab, setActivePlatformTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);

  const scrollCaseStudies = useCallback((direction: "left" | "right") => {
    const container = caseStudyRef.current;
    if (!container) return;
    const scrollAmount = 340; // card width (320) + gap (20)
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundImage: 'linear-gradient(180deg, #EEF6FF 0%, #FFFFFF 900px)', backgroundRepeat: 'no-repeat', backgroundColor: '#FFFFFF' }}>
      <Header />

      <main>
        {/* ============================================================ */}
        {/*  SECTION 1 — HERO                                            */}
        {/* ============================================================ */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[55%_45%] lg:gap-12 items-start">
              {/* Left — Text + Device Carousel */}
              <div className="flex flex-col">
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#D0D5DD] px-4 py-1.5 text-sm font-medium text-[#1A1A2E]">
                  Lone Worker Device
                </span>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1A1A2E] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                  Safe Pro Device
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#475467]">
                  Give your team the ability to call for help in an emergency from our lone worker device.
                </p>

                <ul className="mb-10 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-[#1A1A2E]">
                      <strong>Solely dedicated</strong> to lone worker alarms for better responses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-[#1A1A2E]">
                      <strong>Bypasses 999 call</strong> and saves vital time in an emergency
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-[#1A1A2E]">
                      <strong>Accredited</strong> to the highest industry standards
                    </span>
                  </li>
                </ul>

                {/* Device Carousel */}
                <div className="rounded-2xl bg-[#F9FAFB] p-6">
                  {/* Main image with arrows */}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveDevice((prev) => (prev === 0 ? deviceImages.length - 1 : prev - 1))}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D0D5DD] bg-white text-[#667085] transition-colors hover:bg-[#F9FAFB]"
                      aria-label="Previous image"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <Image
                      src={deviceImages[activeDevice].src}
                      alt={deviceImages[activeDevice].alt}
                      width={400}
                      height={400}
                      className="h-auto max-h-[320px] w-auto object-contain"
                      priority
                    />
                    <button
                      onClick={() => setActiveDevice((prev) => (prev === deviceImages.length - 1 ? 0 : prev + 1))}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D0D5DD] bg-white text-[#667085] transition-colors hover:bg-[#F9FAFB]"
                      aria-label="Next image"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>

                  {/* Thumbnails below */}
                  <div className="mt-4 flex gap-2 justify-center">
                    {deviceImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDevice(i)}
                        className={`h-14 w-14 overflow-hidden rounded-lg border-2 transition-all ${
                          activeDevice === i
                            ? "border-[#FFC83D] shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Quote Form */}
              {/* HubSpot form will be embedded here */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 lg:mt-14">
                <div className="px-8 pt-8 pb-4">
                  <h3 className="text-[28px] font-bold leading-tight text-[#1A1A2E]">
                    Get a Quote in 30 Minutes
                  </h3>
                </div>
                <div className="space-y-5 px-8 pb-8">
                  {/* First Name / Last Name */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#1A1A2E] placeholder-[#98A2B3] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#1A1A2E] placeholder-[#98A2B3] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Work Email Address"
                      className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#1A1A2E] placeholder-[#98A2B3] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#1A1A2E] placeholder-[#98A2B3] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#1A1A2E] placeholder-[#98A2B3] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]"
                    />
                  </div>

                  {/* Device Count Dropdown */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                      How many team members will be using a device? <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full appearance-none rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#1A1A2E] outline-none transition-colors focus:border-[#FFC83D] focus:ring-1 focus:ring-[#FFC83D]">
                      <option value="">Please Select</option>
                      <option value="1-9">1-9</option>
                      <option value="10-49">10-49</option>
                      <option value="50-149">50-149</option>
                      <option value="150+">150+</option>
                    </select>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[#D0D5DD] accent-[#FFC83D]"
                    />
                    <label htmlFor="privacy" className="text-xs leading-relaxed text-[#667085]">
                      I agree to the{" "}
                      <a href="#" className="text-[#1A1A2E] underline">
                        privacy policy
                      </a>
                      . By submitting this form, I consent to Vatix contacting me regarding their products and services.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full rounded-lg bg-[#FFC83D] px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#FFD060]">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 3 — G2 TRUST BADGES                                 */}
        {/* ============================================================ */}
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

        {/* ============================================================ */}
        {/*  SECTION 4 — CUSTOMER LOGOS MARQUEE                          */}
        {/* ============================================================ */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <p className="mb-10 text-center text-lg font-medium text-[#1A1A2E] md:text-xl">
              Join 500+ forward-thinking leaders enhancing safety and operations
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
              {/* First set */}
              {customerLogos.map((logo) => (
                <img
                  key={`a-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto md:h-10"
                />
              ))}
              {/* Duplicate set for seamless loop */}
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

        {/* ============================================================ */}
        {/*  SECTION 5 — TESTIMONIALS                                    */}
        {/* ============================================================ */}
        <section className="bg-[#102A56] py-20 md:py-28">
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

        {/* ============================================================ */}
        {/*  SECTION 6 — HOW IT WORKS                                    */}
        {/* ============================================================ */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#1A1A2E] md:text-4xl">
              How It Works
            </h2>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
              {/* Tabs — left side */}
              <div className="flex flex-col gap-0">
                {howItWorksSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHowItWorks(i)}
                    className="text-left w-full"
                  >
                    <div className={`flex items-start gap-4 px-5 py-5 transition-all ${
                      activeHowItWorks === i ? "" : "opacity-60 hover:opacity-80"
                    }`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F7]">
                        <img src={step.icon} alt="" className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-base font-semibold ${activeHowItWorks === i ? "text-[#1A1A2E]" : "text-[#667085]"}`}>
                          {step.step}. {step.title}
                        </h3>
                        {activeHowItWorks === i && (
                          <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-[3px] w-full bg-[#E4E7EC]">
                      {activeHowItWorks === i && (
                        <div
                          key={`hiw-${activeHowItWorks}`}
                          className="h-full bg-[#2E90FA] rounded-full animate-progress-fill"
                          onAnimationEnd={() => setActiveHowItWorks((prev) => (prev + 1) % howItWorksSteps.length)}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Image — right side */}
              <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#F9FAFB]">
                <Image
                  src={howItWorksSteps[activeHowItWorks].image}
                  alt={howItWorksSteps[activeHowItWorks].title}
                  width={700}
                  height={500}
                  className="h-auto w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 7 — FEATURES GRID                                   */}
        {/* ============================================================ */}
        <section className="bg-[#EDF6FF] py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Built with Powerful Features
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#475467]">
                All the features you need to empower your workforce and keep them safe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF6FF]">
                    <img src={feature.icon} alt="" className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A2E]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#475467]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 8 — 24/7 MONITORING CENTRE                          */}
        {/* ============================================================ */}
        <section className="bg-[#102A56] py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left — Text */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Supported by Our Dedicated 24/7 Alarm Monitoring Centre
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-white/70">
                  Our 24/7 Monitoring Team is highly trained to provide a swift and efficient response to lone worker alarm activations.
                </p>

                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-white">
                      <strong>Solely dedicated</strong> to lone worker alarm for better responses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-white">
                      <strong>Bypasses 999 call</strong> and saves vital time in an emergency
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BlueCheckIcon />
                    <span className="text-base text-white">
                      <strong>Accredited</strong> to the highest industry standards
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FFC83D] px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#FFD060]"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>

              {/* Right — Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/67647cb49ab828fc469d5378_Frame_a-min.avif"
                  alt="24/7 Alarm Monitoring Centre"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 9 — PLATFORM MANAGEMENT                             */}
        {/* ============================================================ */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Manage Everything with Ease in One Platform
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-[#475467]">
                Our integrated platform streamlines safety management, allowing you to oversee devices, monitor alerts, and manage responses from one user-friendly interface.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
              {/* Tabs — left side */}
              <div className="flex flex-col gap-0">
                {platformTabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePlatformTab(i)}
                    className="text-left w-full"
                  >
                    <div className={`flex items-start gap-4 px-5 py-5 transition-all ${
                      activePlatformTab === i ? "" : "opacity-60 hover:opacity-80"
                    }`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F7]">
                        <img src={tab.icon} alt="" className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`mb-1 text-base font-semibold ${
                          activePlatformTab === i ? "text-[#1A1A2E]" : "text-[#667085]"
                        }`}>
                          {tab.title}
                        </h3>
                        {activePlatformTab === i && (
                          <p className="text-sm leading-relaxed text-[#475467]">
                            {tab.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-[3px] w-full bg-[#E4E7EC]">
                      {activePlatformTab === i && (
                        <div
                          key={`pt-${activePlatformTab}`}
                          className="h-full bg-[#2E90FA] rounded-full animate-progress-fill"
                          onAnimationEnd={() => setActivePlatformTab((prev) => (prev + 1) % platformTabs.length)}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Screenshot — right side */}
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-[#F9FAFB] shadow-sm">
                <Image
                  src={platformTabs[activePlatformTab].image}
                  alt={platformTabs[activePlatformTab].title}
                  width={800}
                  height={550}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 10 — CUSTOMER CASE STUDIES                          */}
        {/* ============================================================ */}
        <section className="bg-[#102A56] py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                  Secure Your Future With Us
                </h2>
                <p className="max-w-2xl text-lg text-white/70">
                  Join the growing list of businesses empowering their teams with Vatix.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#FFC83D] px-5 py-2.5 text-sm font-medium text-[#102A56] transition-colors hover:bg-[#FFD060]"
              >
                View All
              </a>
            </div>
          </div>

          {/* Scrollable carousel with arrows */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollCaseStudies("left")}
              className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#102A56]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#102A56]"
              aria-label="Previous case study"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollCaseStudies("right")}
              className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#102A56]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#102A56]"
              aria-label="Next case study"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <div
              ref={caseStudyRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-5 md:px-8 pb-4 scrollbar-hide"
            >
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="flex w-[320px] shrink-0 flex-col rounded-2xl bg-white p-6"
                >
                  <div className="mb-6 flex h-12 items-center">
                    <Image
                      src={cs.logo}
                      alt={cs.logoAlt}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[#475467]">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <div>
                    <p className="mb-3 text-sm font-medium text-[#667085]">{cs.role}</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A1A2E] transition-colors hover:text-[#FFC83D]"
                    >
                      Read Full Story
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 11 — FAQ                                            */}
        {/* ============================================================ */}
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
                {faqItems.map((item, i) => (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="flex w-full items-start justify-between gap-4 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-base font-semibold text-[#1A1A2E] md:text-lg">
                        {item.question}
                      </span>
                      <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-xl leading-none text-[#667085] transition-transform duration-300 ${
                          openFaq === i ? "rotate-45" : ""
                        }`}>
                        +
                      </span>
                    </button>
                    <div
                      className={`faq-content ${openFaq === i ? "open" : ""}`}
                    >
                      <p className="mt-3 text-base leading-relaxed text-[#475467]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 12 — FINAL CTA                                      */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-[#EDF6FF] py-20 md:py-28">
          {/* Geometric background shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-80 w-80 rotate-12 rounded-3xl bg-[#DCEEFB] opacity-20" />
            <div className="absolute -right-16 -bottom-16 h-64 w-64 -rotate-12 rounded-3xl bg-[#DCEEFB] opacity-20" />
            <div className="absolute right-1/4 top-1/4 h-40 w-40 rotate-45 rounded-2xl bg-[#DCEEFB] opacity-15" />
          </div>
          <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Protect Your Lone Workers with Easy-to-Use Devices
              </h2>
              <p className="mb-8 max-w-2xl text-lg text-[#475467]">
                Share your requirements with us, and our Vatix experts will craft a personalised quote tailored to meet your unique needs.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#FFC83D] px-8 py-4 text-base font-semibold text-[#1A1A2E] transition-colors hover:bg-[#FFD060]"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
