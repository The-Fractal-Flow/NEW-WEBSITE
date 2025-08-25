"use client";

import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { WavyDivider } from '../wavy-divider';
import { AnimateOnScroll } from '../animate-on-scroll';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-card py-0">
      <WavyDivider colorClassName="fill-background" />
      <div className="container pb-16 md:pb-24 lg:pb-32">
        <AnimateOnScroll>
          <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            What Others Say
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Recommendations from people I've worked with.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll className="mt-12">
            <Carousel
                opts={{
                align: "start",
                loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                {portfolioData.testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-full shadow-lg">
                        <CardContent className="flex flex-col items-center text-center p-6 h-full">
                            <Image
                                src={testimonial.imageUrl}
                                alt={testimonial.author}
                                width={80}
                                height={80}
                                className="rounded-full border-4 border-primary/20"
                                data-ai-hint={testimonial.aiHint}
                            />
                            <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-6">
                                <p className="font-semibold">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </AnimateOnScroll>
      </div>
      <WavyDivider colorClassName="fill-card" direction="down" />
    </section>
  );
}
