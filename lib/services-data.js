import {
  Wrench,
  Monitor,
  Cpu,
  Network,
  Headphones,
  Code2,
} from "lucide-react"

export const services = [
  {
    slug: "computer-repair",
    icon: Wrench,
    title: "Computer Repair",
    shortDescription:
      "Expert diagnosis and repair for all computer issues. Hardware failures, software problems, virus removal, and more.",
    overview:
      "Our computer repair service covers everything from sudden hardware failures to persistent software issues. Every unit that comes through our workshop goes through a full diagnostic process before any work begins, so you always know exactly what's wrong and what it will cost to fix.",
    features: [
      "Hardware diagnostics",
      "Software troubleshooting",
      "Virus & malware removal",
      "Performance optimization",
    ],
    included: [
      "Free initial diagnostic assessment",
      "Component-level hardware testing",
      "Data backup before any repair work",
      "Genuine or certified replacement parts",
      "90-day service warranty on all repairs",
    ],
    technician: {
      name: "Mr. Moavia Abdul Aziz",
      role: "Technical Manager",
      image: "/images/ceo.jpg",
      bio: "Over 8 years of hands-on experience diagnosing and repairing desktops, laptops, and custom builds. Specializes in board-level repair, data recovery, and performance tuning.",
    },
    gallery: [
      { src: "/images/gallery/computer-repair-1.jpg", alt: "Laptop motherboard repair in progress" },
      { src: "/images/gallery/computer-repair-2.jpg", alt: "Technician diagnosing a desktop PC" },
      { src: "/images/gallery/computer-repair-3.jpg", alt: "Repaired laptop ready for pickup" },
      { src: "/images/gallery/computer-repair-4.jpg", alt: "Component-level soldering work" },
    ],
  },
  {
    slug: "custom-pc-building",
    icon: Monitor,
    title: "Custom PC Building",
    shortDescription:
      "Get a custom-built PC tailored to your exact needs. Gaming, workstation, or everyday use - we build it right.",
    overview:
      "We design and build custom PCs around your budget, workload, and performance goals — whether that's a high-end gaming rig, a rendering workstation, or a quiet everyday machine. Every build is assembled by hand, cable-managed, and stress-tested before delivery.",
    features: [
      "Personalized configurations",
      "Premium components",
      "Cable management",
      "Stress testing included",
    ],
    included: [
      "One-on-one consultation to plan your build",
      "Component sourcing and compatibility checks",
      "Professional cable management",
      "48-hour stress test before delivery",
      "Full OS installation and driver setup",
    ],
    technician: {
      name: "Mr. Imran Javed",
      role: "Chief Executive Officer",
      image: "/images/ceo.jpg",
      bio: "Leads our build team with a strong background in system architecture and component selection, ensuring every custom PC balances performance, reliability, and value.",
    },
    gallery: [
      { src: "/images/gallery/custom-pc-1.jpg", alt: "Custom gaming PC build with RGB lighting" },
      { src: "/images/gallery/custom-pc-2.jpg", alt: "Cable management inside a PC case" },
      { src: "/images/gallery/custom-pc-3.jpg", alt: "Workstation build for video editing" },
      { src: "/images/gallery/custom-pc-4.jpg", alt: "Completed custom build ready for delivery" },
    ],
  },
  {
    slug: "hardware-upgrades",
    icon: Cpu,
    title: "Hardware Upgrades",
    shortDescription:
      "Boost your computer's performance with professional hardware upgrades. RAM, SSD, GPU, and more.",
    overview:
      "Not ready for a full new PC? A targeted hardware upgrade can add years of useful life and a serious performance boost. We assess your current system and recommend the upgrades that will actually make a difference.",
    features: [
      "RAM upgrades",
      "SSD installation",
      "Graphics card upgrades",
      "CPU upgrades",
    ],
    included: [
      "Compatibility assessment before purchase",
      "Professional installation and testing",
      "Data migration to new drives",
      "Post-upgrade performance benchmarking",
      "30-day installation warranty",
    ],
    technician: {
      name: "Staff Member 4",
      role: "IT Systems Specialist",
      image: "/images/ceo.jpg",
      bio: "Focuses on hardware compatibility and system optimization, with deep experience matching upgrade paths to real-world performance needs.",
    },
    gallery: [
      { src: "/images/gallery/hardware-upgrade-1.jpg", alt: "Installing a new graphics card" },
      { src: "/images/gallery/hardware-upgrade-2.jpg", alt: "SSD upgrade in a laptop" },
      { src: "/images/gallery/hardware-upgrade-3.jpg", alt: "RAM installation close-up" },
      { src: "/images/gallery/hardware-upgrade-4.jpg", alt: "Benchmark testing after upgrade" },
    ],
  },
  {
    slug: "network-setup",
    icon: Network,
    title: "Network Setup",
    shortDescription:
      "Professional network installation and configuration for homes and businesses. Secure and reliable connectivity.",
    overview:
      "From single-router home WiFi to multi-access-point business networks, we design and install connectivity solutions that are fast, secure, and reliable. Every setup includes basic security hardening as standard.",
    features: [
      "WiFi optimization",
      "Router setup",
      "Network security",
      "Mesh network installation",
    ],
    included: [
      "Site survey and coverage planning",
      "Router and access point configuration",
      "Network security hardening",
      "Guest network setup (on request)",
      "Post-installation walkthrough",
    ],
    technician: {
      name: "Mr. Moavia Abdul Aziz",
      role: "Technical Manager",
      image: "/images/ceo.jpg",
      bio: "Experienced in designing and securing home and business networks, from basic WiFi setups to mesh systems covering large properties.",
    },
    gallery: [
      { src: "/images/gallery/network-1.jpg", alt: "Router installation and configuration" },
      { src: "/images/gallery/network-2.jpg", alt: "Mesh network access point setup" },
      { src: "/images/gallery/network-3.jpg", alt: "Network cabling and organization" },
      { src: "/images/gallery/network-4.jpg", alt: "Office network setup" },
    ],
  },
  {
    slug: "it-support",
    icon: Headphones,
    title: "IT Support",
    shortDescription:
      "Comprehensive IT support for businesses. Remote and on-site assistance available 24/7.",
    overview:
      "We provide ongoing IT support for small and medium businesses, combining remote monitoring with on-site visits when needed. Our goal is to catch problems before they become downtime.",
    features: [
      "Remote support",
      "On-site visits",
      "System maintenance",
      "Security monitoring",
    ],
    included: [
      "24/7 remote support access",
      "Scheduled on-site visits",
      "Proactive system maintenance",
      "Security and backup monitoring",
      "Monthly support summary report",
    ],
    technician: {
      name: "Staff Member 2",
      role: "Client Services Director",
      image: "/images/ceo.jpg",
      bio: "Oversees client support relationships, ensuring fast response times and clear communication for every IT support case.",
    },
    gallery: [
      { src: "/images/gallery/it-support-1.jpg", alt: "On-site IT support visit" },
      { src: "/images/gallery/it-support-2.jpg", alt: "Remote monitoring dashboard" },
      { src: "/images/gallery/it-support-3.jpg", alt: "Server maintenance work" },
      { src: "/images/gallery/it-support-4.jpg", alt: "Client office IT setup" },
    ],
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    shortDescription:
      "Custom software and web solutions for businesses. Remote assistance available 24/7.",
    overview:
      "Our development team builds custom websites, business tools, and software solutions tailored to your workflow. Recent work includes projects delivered through our partner, PrimeSEO Solution.",
    features: [
      "Remote support",
      "24/7 available",
      "Software updates",
      "Easy to use",
    ],
    included: [
      "Requirements discovery session",
      "Custom design and development",
      "Testing across devices and browsers",
      "Post-launch support and updates",
      "Ongoing maintenance available",
    ],
    externalLink: "https://primeseosolutions.vercel.app/",
    externalLinkLabel: "Visit PrimeSEO Solution",
    technician: {
      name: "Staff Member 3",
      role: "Sales & Marketing Manager",
      image: "/images/ceo.jpg",
      bio: "Coordinates development projects with our software partner, PrimeSEO Solution, translating client needs into working software.",
    },
    gallery: [
      { src: "/images/gallery/software-dev-1.jpg", alt: "Website development project" },
      { src: "/images/gallery/software-dev-2.jpg", alt: "Custom software interface" },
      { src: "/images/gallery/software-dev-3.jpg", alt: "Development team planning session" },
      { src: "/images/gallery/software-dev-4.jpg", alt: "Completed web application" },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
