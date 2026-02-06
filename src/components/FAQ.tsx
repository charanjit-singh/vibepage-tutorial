export function FAQ() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          <details className="border-border rounded-lg border bg-card px-6 py-4 group">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              What is Vibe Page?
            </summary>
            <p className="mt-3 text-muted-foreground text-sm">
              Vibe Page is a simple way to create one beautiful link that points
              to all your important links—social profiles, projects, or anything
              you want to share.
            </p>
          </details>
          <details className="border-border rounded-lg border bg-card px-6 py-4 group">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              Is there a free plan?
            </summary>
            <p className="mt-3 text-muted-foreground text-sm">
              Yes. The Free plan lets you create one page with basic
              customization. No credit card required.
            </p>
          </details>
          <details className="border-border rounded-lg border bg-card px-6 py-4 group">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              Can I use my own domain?
            </summary>
            <p className="mt-3 text-muted-foreground text-sm">
              Custom domains are available on the Pro plan. You can connect any
              domain you own in a few steps.
            </p>
          </details>
          <details className="border-border rounded-lg border bg-card px-6 py-4 group">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              How do I cancel?
            </summary>
            <p className="mt-3 text-muted-foreground text-sm">
              You can cancel your Pro subscription anytime from your account
              settings. You’ll keep Pro until the end of your billing period.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
