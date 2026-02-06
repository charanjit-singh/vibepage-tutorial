import { PricingCard } from "@/components/PricingCard";

export function Pricing() {
  return (
    <section className="border-border border-t bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
          Simple pricing
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:mx-auto lg:max-w-3xl">
          <PricingCard
            title="Free"
            description="Perfect for trying things out"
            features={["1 page", "Basic customization", "Vibe Page branding"]}
            ctaText="Start free"
            ctaHref="/signup?plan=free"
          />
          <PricingCard
            title="Pro"
            description="For creators who mean it"
            features={[
              "Unlimited pages",
              "Custom domain & themes",
              "Remove branding",
              "Analytics",
            ]}
            ctaText="Go Pro"
            ctaHref="/signup?plan=pro"
            highlighted
          />
        </div>
      </div>
    </section>
  );
}
