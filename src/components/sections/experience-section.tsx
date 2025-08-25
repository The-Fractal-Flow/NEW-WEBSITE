import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            My Journey
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            A timeline of my professional experience and growth.
          </p>
        </AnimateOnScroll>

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border"></div>

          {portfolioData.experience.map((item, index) => (
            <div key={index} className="relative mb-8 flex justify-center">
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <AnimateOnScroll delay={index * 200}>
                    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-grow">
                            <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                            <CardDescription className="text-md mt-1 font-semibold">{item.company}</CardDescription>
                            <p className="text-sm font-medium text-muted-foreground mt-1">{item.year}</p>
                          </div>
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src={item.logoUrl}
                              alt={`${item.company} logo`}
                              fill
                              className="rounded-full object-contain bg-card p-1"
                              data-ai-hint={item.aiHint}
                            />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.contributions.map((contribution, cIndex) => (
                            <li key={cIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 mt-1 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-full bg-primary border-4 border-card"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
