import Link from 'next/link';
import { portfolioData } from '@/lib/data.tsx';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';

export function LandingSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background">
        <AnimateOnScroll>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            👋 Hi, I’m {portfolioData.name}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-4 font-headline text-xl font-bold text-primary sm:text-2xl md:text-3xl">
            {portfolioData.role.split(',').map((part, index, arr) => 
              index < arr.length - 1 ? part + ' | ' : part
            )}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            {portfolioData.tagline}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={600}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {portfolioData.contact.socials.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild>
                        <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <social.icon className="h-5 w-5"/>
                        </Link>
                    </Button>
                ))}
            </div>
        </AnimateOnScroll>
    </section>
  );
}
