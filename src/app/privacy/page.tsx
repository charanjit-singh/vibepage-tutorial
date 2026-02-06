

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <header className="border-border border-b pb-8">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 5, 2026
          </p>
        </header>

        <div className="mt-10 space-y-10 text-foreground">
          <p className="text-muted-foreground leading-relaxed">
            Vibe Page (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our website and services.
          </p>

          {/* Data Collection */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              1. Data Collection
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We may collect information that you provide directly to us,
              including when you create an account, subscribe to our waitlist,
              contact us, or otherwise interact with our services. This may
              include:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
              <li>Name and email address</li>
              <li>Account credentials and profile information</li>
              <li>Communications you send to us</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We also automatically collect certain information when you visit
              our website, such as your IP address, browser type, device
              information, and usage data. We use this information to operate,
              maintain, and improve our services.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              2. Cookies
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small data files stored on
              your device that help us remember your preferences and understand
              how you use our services.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We may use session cookies, which expire when you close your
              browser, and persistent cookies, which remain until they expire or
              you delete them. You can control cookie settings through your
              browser preferences; however, disabling certain cookies may affect
              the functionality of our website.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              3. Contact
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our practices,
              please contact us at:
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vibe Page
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@vibepage.com"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                privacy@vibepage.com
              </a>
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We will respond to your inquiry as soon as reasonably practicable.
            </p>
          </section>

          <p className="pt-4 text-sm text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the updated policy on this
            page and updating the &quot;Last updated&quot; date.
          </p>
        </div>
      </article>

    </main>
  );
}
