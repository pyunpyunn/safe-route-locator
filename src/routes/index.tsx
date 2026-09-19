import { createFileRoute } from "@tanstack/react-router";

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

          <div className="wordmark" role="img" aria-label="ResQperation">
            <div className="wordmark-type" aria-hidden="true">
              <span>res</span>
              <svg className="wordmark-pin" viewBox="0 0 32 39" focusable="false">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16 1C7.72 1 1 7.72 1 16c0 10.38 15 22 15 22s15-11.62 15-22C31 7.72 24.28 1 16 1Zm0 8.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z"
                  clipRule="evenodd"
                />
                <path d="M19 22.4 27.5 30" fill="none" stroke="var(--header)" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
              <span>peration</span>
            </div>
            <svg className="wordmark-route" viewBox="0 0 176 10" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 5h49c13 0 12-3 24-3h29c12 0 12 6 24 6h42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round" />
              <circle cx="173" cy="5" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">Header wordmark preview</p>
      </section>
    </main>
  );
}
