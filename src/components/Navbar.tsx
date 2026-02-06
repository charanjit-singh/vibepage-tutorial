import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-border border-b bg-background px-6 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-foreground"
        >
          Vibe Page
        </Link>
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </nav>
    </header>
  );
}
