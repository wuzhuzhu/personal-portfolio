// @ts-check
const { withBlitz } = require("@blitzjs/next")

// todo: rm if not using
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
// todo: rm if not using
const config = {
  reactStrictMode: true,
  images: {
    domains: ["i.interview.run"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = withBlitz(withBundleAnalyzer(config))
