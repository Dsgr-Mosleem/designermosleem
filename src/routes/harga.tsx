import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/harga")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "harga" });
  },
  component: () => null,
});
