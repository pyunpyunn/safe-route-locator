import { createFileRoute } from "@tanstack/react-router";
import { ResQperationLogo } from "@/components/resqperation-logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ResQperation | Rescue Coordination" },
      {
        name: "description",
        content: "ResQperation rescue coordination and geotagging header identity.",
      },
      { property: "og:title", content: "ResQperation | Rescue Coordination" },
      {
        property: "og:description",
        content: "A strong location-led identity for rescue coordination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <header className="flex h-16 items-center border-b border-header-line bg-header px-6">
        <div className="flex min-w-0 items-center gap-3" aria-label="ResQperation">
          <div className="grid size-9 shrink-0 place-items-center rounded-md border border-header-line text-header-mark" aria-hidden="true">
            <span className="font-display text-lg font-black">R</span>
          </div>

          <ResQperationLogo />
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">Header wordmark preview</p>
      </section>
    </main>
  );
}
