import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import { AnimateOnScroll } from '../animate-on-scroll';

export function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Licenses & Certifications
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            My commitment to continuous learning and professional development.
          </p>
        </AnimateOnScroll>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            {portfolioData.certifications.map((cert, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                    <div className="flex flex-col items-center gap-2 text-center group w-60">
                        <div className="relative h-24 w-24">
                          <Image
                              src={cert.logoUrl}
                              alt={`${cert.issuer} logo`}
                              fill
                              className="object-contain rounded-md p-2 bg-card group-hover:scale-110 transition-transform"
                              data-ai-hint={cert.aiHint}
                          />
                        </div>
                        <p className="font-semibold text-balance">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
              </AnimateOnScroll>
            ))}
          </div>
      </div>
    </section>
  );
}
