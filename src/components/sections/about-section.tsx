import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import { WavyDivider } from '../wavy-divider';
import { AnimateOnScroll } from '../animate-on-scroll';

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-0">
        <WavyDivider colorClassName="fill-background" />
        <div className="container pb-16 md:pb-24 lg:pb-32">
            <AnimateOnScroll>
                <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    About Me
                </h2>
            </AnimateOnScroll>
            <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
                <AnimateOnScroll className="order-2 md:order-1">
                    <div className="space-y-6">
                        {Array.isArray(portfolioData.about.description) ? (
                            portfolioData.about.description.map((paragraph, index) => (
                                <p key={index} className="text-lg text-muted-foreground leading-relaxed text-balance">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                {portfolioData.about.description}
                            </p>
                        )}
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll className="order-1 md:order-2" delay={200}>
                    <div className="relative aspect-square w-full max-w-sm mx-auto">
                        <Image
                            src={portfolioData.about.imageUrl}
                            alt={portfolioData.name}
                            fill
                            className="rounded-full object-cover shadow-lg border-4 border-card"
                            data-ai-hint={portfolioData.about.aiHint}
                        />
                        <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-card animate-pulse"></div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    </section>
  );
}
