import HeroPreview from "@/components/layout/Hero-Preview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Database,History,MousePointerClick } from "lucide-react";
import FeatureCard from "@/components/layout/Feature-Card";

export default function Home() {
  const companies = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];
  const features = [
    {
      icon: Database,
      title: "Smart Variables",
      description: "Inject dynamic data into your prompts with simple syntax. Manage contexts effortlessly."
    },
    {
      icon: History,
      title: "Version History",
      description: "Never lose a breakthrough. Every tweak is saved and versioned for instant rollbacks."
    },
    {
      icon: MousePointerClick,
      title: "One-Click Simulation",
      description: "Test your prompts with a single click and see the results instantly."
    }

  ];
  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground">
      <main className="flex flex-1 max-w-7xl flex-col items-center justify-center px-6 py-24">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <p className="text-sm text-primary">
            For fast moving engineering teams.
          </p>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight">
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
      <div  className="flex flex-col items-center text-center gap-2 mt-12">
        <p className="text-md text-foreground text-bold mt-4">
          Trusted by Prompt Engineers at
        </p>
        <div className="flex items-center gap-8 flex-wrap justify-center mt-4 px-4">
          {companies.map((company) => (
            <span
              key={company}
              className="text-2xl font-semibold text-muted-foreground/80 hover:text-muted-foreground transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
        {features.map((feature) => {
          return <FeatureCard key={feature.title} {...feature} />;
        })}
      </div>
    </div>
  );
}
