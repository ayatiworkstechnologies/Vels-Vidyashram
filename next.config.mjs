import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Keep SEO metadata in the document <head> for every user agent.
  // Without this, Next.js may stream metadata into the response body.
  htmlLimitedBots: /.*/,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
