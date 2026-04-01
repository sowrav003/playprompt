"use client"
import { ArrowRight, CirclePile } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const navlinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="w-full sticky top-0 border-b border-dashed border-muted-foreground/50 backdrop-blur-xl bg-white dark:bg-black/80 z-50">
      <nav className="w-full h-16 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-ring/40 p-1 rounded-full">
            <CirclePile />
          </div>
          <h2 className="text-md font-bold">
            Play<span className="text-blue-500 dark:text-blue-400">PROMPT</span>
          </h2>
        </Link>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            className="bg-muted flex items-center justify-between"
          >
            <h2 className="text-sm">Get Started</h2>
            <ArrowRight />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
