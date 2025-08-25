import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import { AnimateOnScroll } from '../animate-on-scroll';

export function ClientsSection() {
  return (
    <section id="clients" className="relative overflow-hidden bg-gradient-to-b from-card to-background">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Glowing dots background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_hsl(var(--primary))_0%,_transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_hsl(var(--primary))_0%,_transparent_35%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(var(--primary))_0%,_transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,_hsl(var(--primary))_0%,_transparent_30%)]"></div>
      </div>
        <div className="container relative z-10">
            <AnimateOnScroll>
            <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Companies I've Helped Grow
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
                A selection of innovative brands I've partnered with.
            </p>
            </AnimateOnScroll>
            <AnimateOnScroll className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {portfolioData.clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center transition hover:scale-110 duration-300">
                    <Image
                        src={client.logoUrl}
                        alt={`${client.name} logo`}
                        width={150}
                        height={50}
                        className="object-contain"
                        data-ai-hint={client.aiHint}
                    />
                </div>
                ))}
            </div>
            </AnimateOnScroll>
        </div>
    </section>
  );
}
