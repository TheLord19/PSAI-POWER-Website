/** @type {import('next').NextConfig} */

// Every removed or renamed URL gets a 301 so existing rankings and inbound
// links carry over. Specific paths first; first match wins.
const REDIRECTS = [
  // Services → Capabilities, mapped by what each old page actually covered.
  { source: "/services", destination: "/capabilities" },
  { source: "/services/power-system-design", destination: "/capabilities/substation-design" },
  { source: "/services/grid-modernization", destination: "/capabilities/substation-design" },
  { source: "/services/renewable-integration", destination: "/capabilities/renewable-interconnection" },
  { source: "/services/system-analysis", destination: "/capabilities/power-system-studies" },
  { source: "/services/power-system-analysis", destination: "/capabilities/power-system-studies" },
  { source: "/services/electrical-protection", destination: "/capabilities/protection-and-control" },
  { source: "/services/energy-audits", destination: "/capabilities" },
  { source: "/services/:path*", destination: "/capabilities" },

  // Who We Serve → Sectors, six reduced to four.
  { source: "/who-we-serve", destination: "/sectors" },
  { source: "/who-we-serve/utilities-grid-operators", destination: "/sectors/utilities" },
  { source: "/who-we-serve/mining-industry", destination: "/sectors/mining" },
  { source: "/who-we-serve/renewable-energy", destination: "/sectors/renewables" },
  { source: "/who-we-serve/industrial-manufacturing", destination: "/sectors/industrial" },
  { source: "/who-we-serve/:path*", destination: "/sectors" },

  // Merged into /firm, or removed.
  { source: "/about", destination: "/firm" },
  { source: "/team", destination: "/firm" },
  { source: "/licenses", destination: "/firm" },
  { source: "/resources", destination: "/capabilities" },
  { source: "/resources/:path*", destination: "/capabilities" },
  { source: "/contact", destination: "/contact-us" },
].map((r) => ({ ...r, permanent: true }));

const nextConfig = {
  reactStrictMode: true,
  // This checkout is a git worktree beside the main one, so Turbopack's root
  // inference can walk up and pick the wrong directory. Pin it.
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    // No source image here is wider than ~1200px, and nothing is displayed
    // wider than a 15rem column. The default ladder goes to 3840, so the
    // browser pulled a 3840px upscale as the srcset fallback and AVIF-encoding
    // it stalled the page load. Cap both ladders at useful sizes.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 256, 384],
  },
  async redirects() {
    return REDIRECTS;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // 'unsafe-inline'/'unsafe-eval' are required by Next.js runtime scripts
            // and inline styles; formspree + vercel-insights are the only XHR targets.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob:",
              "connect-src 'self' https://formspree.io https://*.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
