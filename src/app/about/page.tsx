
const values = [
  {
    title: "Speed",
    description:
      "Ship fast without sacrificing quality. We believe creators should spend time creating, not waiting.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Design",
    description:
      "Beautiful by default. Every template and component is crafted to help your page stand out.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "Grow together. Join creators who share feedback, ideas, and support every step of the way.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const teamPlaceholders = [
  { name: "Alex Chen", role: "Founder & CEO" },
  { name: "Jordan Lee", role: "Head of Design" },
  { name: "Sam Rivera", role: "Lead Engineer" },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">

      {/* Section 1: Our Mission */}
      <section className="border-border border-b px-6 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Our Mission
          </h1>
          <p className="mt-6 font-sans text-lg text-muted-foreground sm:text-xl md:text-2xl">
            To help creators vibe.
          </p>
        </div>
      </section>

      {/* Section 2: Values grid */}
      <section className="px-6 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  {value.icon}
                </div>
                <h2 className="mt-5 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                  {value.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <section className="border-border border-t bg-muted/20 px-6 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The people behind Vibe Page, building tools for creators like you.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamPlaceholders.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
              >
                <div className="size-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-2xl font-medium">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
