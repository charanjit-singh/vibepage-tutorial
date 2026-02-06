import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { WaitlistHero } from "@/components/ui/waitlist-hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <WaitlistHero />
      <Pricing />
      <FAQ />
    </main>
  );
}
