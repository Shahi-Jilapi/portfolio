export type Project = {
  slug: string;
  title: string;
  owner: string;
  year: string;
  status: "Collaborative" | "In progress";
  summary: string;
  role: string;
  contribution: string[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageSource?: string;
  imageCredit?: string;
  repository?: string;
  repositoryNote?: string;
};

export const projects: Project[] = [
  {
    slug: "pawtail-shop",
    title: "PawTail Shop",
    owner: "EyaminBinAman / team repository",
    year: "2026",
    status: "Collaborative",
    summary:
      "A pet-supplies storefront with product discovery, category browsing, product details, and customer shopping flows.",
    role: "Storefront and API contributor using AI-assisted development",
    contribution: [
      "Built and tested the animal-facing API area used by the storefront.",
      "Implemented the product-details experience and contributed cart and wishlist workflows.",
      "Worked on category-based product discovery and responsive customer-facing interfaces.",
      "Resolved integration and merge issues while working within a shared Git workflow.",
    ],
    tags: ["Next.js", "React", "Express", "MongoDB", "Postman"],
    image: "/images/projects/codecraft/pawtail-shop.png",
    imageAlt: "PawTail category page for cat products with filters and sorting",
    imageSource: "https://www.codecraftstudiosbd.com/#solutions",
    imageCredit: "Project visual from CodeCraft Studios",
    repository: "https://github.com/EyaminBinAman/E-commerce_Site",
  },
  {
    slug: "pawtail-admin-panel",
    title: "PawTail Admin Panel",
    owner: "EyaminBinAman / team repository",
    year: "2026",
    status: "Collaborative",
    summary:
      "A back-office workspace for orders, sales reporting, catalog control, promotions, and daily e-commerce operations.",
    role: "Administration and backend contributor using AI-assisted development",
    contribution: [
      "Built promotion-code and banner models, controllers, and routes for the shared API.",
      "Created administration interfaces for promotions, banners, reviews, profile, and login.",
      "Contributed to order visibility and operational dashboard workflows.",
      "Integrated administration work across the shared client and backend codebases.",
    ],
    tags: ["Next.js", "React", "Express", "MongoDB", "Admin UI"],
    image: "/images/projects/codecraft/pawtail-admin.png",
    imageAlt: "PawTail admin orders dashboard with payment and order status controls",
    imageSource: "https://www.codecraftstudiosbd.com/#solutions",
    imageCredit: "Project visual from CodeCraft Studios",
    repository: "https://github.com/EyaminBinAman/E-commerce_Site",
  },
  {
    slug: "petshop-ecommerce-platform",
    title: "PetShop E-Commerce Platform",
    owner: "CodeCraft Studios / team project",
    year: "2026",
    status: "Collaborative",
    summary:
      "A customer-facing pet-shop platform designed around promotions, product discovery, category navigation, and online ordering.",
    role: "Storefront contributor using AI-assisted development",
    contribution: [
      "Contributed to implementation and iteration of the customer storefront.",
      "Worked on responsive product-discovery and category-navigation experiences.",
      "Helped develop promotional and customer-facing commerce interfaces.",
      "Reviewed and refined the interface as part of a collaborative delivery workflow.",
    ],
    tags: ["React", "Next.js", "E-Commerce", "Responsive UI"],
    image: "/images/projects/codecraft/petshop-storefront.png",
    imageAlt: "PetShop storefront showing a promotional pet-products hero banner",
    imageSource: "https://www.codecraftstudiosbd.com/#solutions",
    imageCredit: "Project visual from CodeCraft Studios",
    repositoryNote: "The project repository is not publicly linked.",
  },
  {
    slug: "petshop-ecommerce-admin",
    title: "PetShop E-Commerce Admin",
    owner: "CodeCraft Studios / team project",
    year: "2026",
    status: "Collaborative",
    summary:
      "An operations dashboard for supplier invoices, orders, catalog management, promotions, delivery settings, and sales reporting.",
    role: "Administration interface contributor using AI-assisted development",
    contribution: [
      "Contributed to implementation and iteration of the administration experience.",
      "Worked on structured operational interfaces for store-management workflows.",
      "Helped refine information hierarchy across dense administrative views.",
      "Supported responsive behavior and interface consistency across the dashboard.",
    ],
    tags: ["React", "Admin UI", "Dashboards", "Responsive UI"],
    image: "/images/projects/codecraft/petshop-admin.png",
    imageAlt: "PetShop administration dashboard showing supplier invoice records",
    imageSource: "https://www.codecraftstudiosbd.com/#solutions",
    imageCredit: "Project visual from CodeCraft Studios",
    repositoryNote: "The project repository is not publicly linked.",
  },
  {
    slug: "pawfect-pet-groomer",
    title: "Pawfect Pet Groomer",
    owner: "EyaminBinAman / team repository",
    year: "2026",
    status: "Collaborative",
    summary:
      "A pet-grooming product explored across mobile service discovery, location-aware flows, secure local state, and supporting data architecture.",
    role: "Application contributor using AI-assisted development",
    contribution: [
      "Worked on the Expo and React Native application foundation.",
      "Developed and refined grooming-service presentation across responsive views.",
      "Integrated location and secure-storage capabilities for the mobile experience.",
      "Contributed to 3D pet-asset exploration and the Prisma migration baseline.",
    ],
    tags: ["Expo", "React Native", "Prisma", "Mobile UI"],
    repositoryNote: "Repository access is currently restricted.",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    owner: "Shahi-Jilapi",
    year: "2026",
    status: "In progress",
    summary:
      "This portfolio: a responsive personal site built to document real contributions, technical direction, and future work without overstating ownership.",
    role: "Project owner and content director",
    contribution: [
      "Defined the content, project evidence, design direction, and public identity.",
      "Directed an AI-assisted Next.js and TypeScript implementation in Codex.",
      "Reviewed responsive behavior, accessibility, motion, and production builds.",
    ],
    tags: ["Next.js", "TypeScript", "GSAP", "Responsive UI"],
    repository: "https://github.com/Shahi-Jilapi/portfolio",
  },
];

export const repositoryArchive = [
  { name: "CodeCraft", owner: "EyaminBinAman", focus: "Web and admin system development" },
  { name: "Witchybae", owner: "EyaminBinAman", focus: "Product interface development" },
  { name: "ScrubHub", owner: "EyaminBinAman / Shahi-Jilapi", focus: "Service-platform development" },
  { name: "myApp", owner: "Shahi-Jilapi", focus: "Application prototyping and iteration" },
  { name: "Cafe Finder", owner: "Shahi-Jilapi", focus: "Location-based discovery experience" },
  { name: "BroKills", owner: "Shahi-Jilapi", focus: "Collaborative application development" },
  { name: "Social Media App", owner: "EyaminBinAman", focus: "Social platform development" },
  { name: "PizzaHub", owner: "EyaminBinAman / Prachurjyo", focus: "Food-ordering platform development" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
