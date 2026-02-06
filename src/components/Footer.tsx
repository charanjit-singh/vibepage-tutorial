import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-border border-t bg-muted/30 px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Vibe Page. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link
            href="/privacy"
            className="text-muted-foreground text-sm hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground text-sm hover:text-foreground"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
