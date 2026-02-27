import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand:
    "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"],
      },
      directRoutes: {
        "socket.io": "socket.io",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        // ── Page Model ──────────────────────────────────────────────
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/index.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
          ],
        },

        // ── Data Models (one per section) ───────────────────────────

        {
          name: "TopBarSection",
          type: "data",
          filePath: "content/data/top-bar.json",
          fields: [{ name: "message", type: "string", required: true }],
        },

        {
          name: "NavbarSection",
          type: "data",
          filePath: "content/data/navbar.json",
          fields: [
            { name: "siteName", type: "string", required: true },
            { name: "ctaText", type: "string", required: true },
            { name: "ctaHref", type: "string", required: true },
            {
              name: "links",
              type: "list",
              items: { type: "model", models: ["NavLink"] },
            },
          ],
        },

        {
          name: "HeroSection",
          type: "data",
          filePath: "content/data/hero.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "primaryCtaText", type: "string", required: true },
            { name: "primaryCtaHref", type: "string" },
            { name: "secondaryCtaText", type: "string" },
            { name: "secondaryCtaHref", type: "string" },
            { name: "heroImageAlt", type: "string" },
          ],
        },

        {
          name: "TrustBarSection",
          type: "data",
          filePath: "content/data/trust-bar.json",
          fields: [
            { name: "tagline", type: "string", required: true },
            {
              name: "logos",
              type: "list",
              items: { type: "string" },
            },
          ],
        },

        {
          name: "AboutSection",
          type: "data",
          filePath: "content/data/about.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "heading", type: "string", required: true },
            {
              name: "paragraphs",
              type: "list",
              items: { type: "string" },
            },
            {
              name: "values",
              type: "list",
              items: { type: "model", models: ["ValueItem"] },
            },
          ],
        },

        {
          name: "ServicesSection",
          type: "data",
          filePath: "content/data/services.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "services",
              type: "list",
              items: { type: "model", models: ["ServiceItem"] },
            },
          ],
        },

        {
          name: "PatientJourneySection",
          type: "data",
          filePath: "content/data/patient-journey.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "steps",
              type: "list",
              items: { type: "model", models: ["JourneyStep"] },
            },
          ],
        },

        {
          name: "TestimonialsSection",
          type: "data",
          filePath: "content/data/testimonials.json",
          fields: [
            { name: "teamImage", type: "image" },
            { name: "teamImageAlt", type: "string" },
            {
              name: "testimonials",
              type: "list",
              items: { type: "model", models: ["TestimonialItem"] },
            },
          ],
        },

        {
          name: "MissionSection",
          type: "data",
          filePath: "content/data/mission.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "quote", type: "string", required: true },
            { name: "subtitle", type: "string" },
            { name: "ctaText", type: "string" },
            { name: "ctaHref", type: "string" },
          ],
        },

        {
          name: "DoctorsSection",
          type: "data",
          filePath: "content/data/doctors.json",
          fields: [
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "doctors",
              type: "list",
              items: { type: "model", models: ["DoctorItem"] },
            },
          ],
        },

        {
          name: "TechnologySection",
          type: "data",
          filePath: "content/data/technology.json",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "technologies",
              type: "list",
              items: { type: "model", models: ["TechItem"] },
            },
          ],
        },

        {
          name: "SmileSavingsSection",
          type: "data",
          filePath: "content/data/smile-savings.json",
          fields: [
            { name: "heading", type: "string", required: true },
            { name: "subheading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "buttons",
              type: "list",
              items: { type: "model", models: ["CtaButton"] },
            },
          ],
        },

        {
          name: "LocationsSection",
          type: "data",
          filePath: "content/data/locations.json",
          fields: [
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            {
              name: "locations",
              type: "list",
              items: { type: "model", models: ["LocationItem"] },
            },
          ],
        },

        {
          name: "FaqSection",
          type: "data",
          filePath: "content/data/faq.json",
          fields: [
            { name: "heading", type: "string", required: true },
            {
              name: "faqs",
              type: "list",
              items: { type: "model", models: ["FaqItem"] },
            },
          ],
        },

        {
          name: "FinalCtaSection",
          type: "data",
          filePath: "content/data/final-cta.json",
          fields: [
            { name: "heading", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "primaryCtaText", type: "string", required: true },
            { name: "primaryCtaHref", type: "string" },
            { name: "secondaryCtaText", type: "string" },
            { name: "secondaryCtaHref", type: "string" },
          ],
        },

        {
          name: "FooterSection",
          type: "data",
          filePath: "content/data/footer.json",
          fields: [
            { name: "siteName", type: "string", required: true },
            { name: "tagline", type: "string", required: true },
            { name: "copyright", type: "string" },
            { name: "hours", type: "string" },
            {
              name: "treatments",
              type: "list",
              items: { type: "string" },
            },
            {
              name: "locations",
              type: "list",
              items: { type: "model", models: ["FooterLocation"] },
            },
            {
              name: "connectLinks",
              type: "list",
              items: { type: "model", models: ["NavLink"] },
            },
            {
              name: "socials",
              type: "list",
              items: { type: "model", models: ["SocialLink"] },
            },
          ],
        },

        // ── Object Models (nested items) ────────────────────────────

        {
          name: "NavLink",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "href", type: "string", required: true },
          ],
        },

        {
          name: "ValueItem",
          type: "object",
          fields: [
            { name: "icon", type: "string" },
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
          ],
        },

        {
          name: "ServiceItem",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "icon", type: "string" },
            { name: "color", type: "string" },
          ],
        },

        {
          name: "JourneyStep",
          type: "object",
          fields: [
            { name: "number", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
          ],
        },

        {
          name: "TestimonialItem",
          type: "object",
          fields: [
            { name: "quote", type: "string", required: true },
            { name: "author", type: "string", required: true },
          ],
        },

        {
          name: "DoctorItem",
          type: "object",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "image", type: "image" },
          ],
        },

        {
          name: "TechItem",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
          ],
        },

        {
          name: "LocationItem",
          type: "object",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "image", type: "image" },
            { name: "address", type: "string", required: true },
            { name: "city", type: "string", required: true },
            { name: "phone", type: "string", required: true },
            { name: "hours", type: "string", required: true },
          ],
        },

        {
          name: "FaqItem",
          type: "object",
          fields: [
            { name: "question", type: "string", required: true },
            { name: "answer", type: "string", required: true },
          ],
        },

        {
          name: "CtaButton",
          type: "object",
          fields: [
            { name: "text", type: "string", required: true },
            { name: "href", type: "string", required: true },
          ],
        },

        {
          name: "FooterLocation",
          type: "object",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "address", type: "string", required: true },
            { name: "city", type: "string", required: true },
            { name: "phone", type: "string", required: true },
          ],
        },

        {
          name: "SocialLink",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "icon", type: "string" },
            { name: "href", type: "url", required: true },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
});
