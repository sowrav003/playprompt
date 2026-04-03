import HeroPreview from "@/components/layout/Hero-Preview";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground">
      <main className="flex flex-1 max-w-7xl flex-col items-center justify-center px-6 py-24">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <p className="text-sm text-primary">
            For fast moving engineering teams.
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Manage and simulate <br />
            <span className="text-primary ">agentic workflows</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            We empower developers and technical teams to create, simulate, and
            manage AI-driven workflows visually
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:opacity-90 px-6"
            >
              <Link href="/play-ground">Start building</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-accent px-6"
            >
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </main>
      <HeroPreview src="/dashboard.webp" alt="Dashboard Preview" />
    </div>
  );
}
