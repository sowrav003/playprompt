"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];
  return (
    <header className="w-full sticky top-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-50">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Logo className="h-6 w-auto text-black dark:text-white" />
          </div>
          <h1 className="text-sm font-semibold tracking-tight text-black dark:text-white">
            Play<span className="text-blue-500 dark:text-blue-400">PROMPT</span>
          </h1>
        </Link>
          <div className="hidden md:flex items-center gap-8">
            {navlinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm ${isActive ? 'text-black dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'} hover:text-black dark:hover:text-white transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex bg-black text-white dark:bg-white dark:text-black border-0 hover:bg-gray-900 dark:hover:bg-gray-100"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu from right */}
          <div className="fixed right-0 top-16 h-[calc(100vh-64px)] w-full bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 md:hidden z-50 overflow-y-auto">
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {navlinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-sm transition-colors ${isActive ? 'bg-muted text-black dark:text-white font-medium border-l-2 border-blue-500 pl-2' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-6 bg-black text-white dark:bg-white dark:text-black border-0 hover:bg-gray-900 dark:hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
