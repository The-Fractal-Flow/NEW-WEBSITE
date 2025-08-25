"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Waves } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data.tsx';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

export function PageHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Waves className="text-primary" />
          <span>EVANS JOSEPH</span>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-10">
                <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                  <Waves className="text-primary" />
                  <span>EVANS JOSEPH</span>
                </a>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link href={link.href} className="text-lg font-medium hover:text-primary">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
