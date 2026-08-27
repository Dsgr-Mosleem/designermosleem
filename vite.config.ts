// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project-page build: `GITHUB_PAGES=true bun run build`
// (set by .github/workflows/deploy.yml). Lovable/Cloud builds stay untouched.
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const basePath = isGithubPages ? (process.env["BASE_PATH"] ?? "/designermosleem/") : "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  // Static output so GitHub Pages (static hosting) can serve the site.
  ...(isGithubPages
    ? {
        nitro: { preset: "static" as const },
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          pages: [{ path: "/", prerender: { enabled: true, crawlLinks: true } }],
        }
      : {}),
  },
});
