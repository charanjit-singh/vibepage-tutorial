import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
};

export function PricingCard({
  title,
  description,
  features,
  ctaText,
  ctaHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={
        highlighted
          ? "border-primary border-2 shadow-lg ring-2 ring-primary/20"
          : "border-border"
      }
    >
      <CardHeader>
        {highlighted && (
          <div className="mb-1 inline-block rounded-full bg-primary px-3 py-0.5 text-primary-foreground text-xs font-medium">
            Popular
          </div>
        )}
        <CardTitle className="text-foreground">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="space-y-2 text-muted-foreground text-sm">
        {features.map((feature) => (
          <p key={feature}>{feature}</p>
        ))}
      </CardContent>
      <CardFooter>
        <Button
          variant={highlighted ? "default" : "outline"}
          className="w-full"
          asChild
        >
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
