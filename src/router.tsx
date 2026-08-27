import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Vite's BASE_URL follows `base` in vite.config.ts ("/" normally,
// "/designermosleem/" for the GitHub Pages project-page build).
const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
