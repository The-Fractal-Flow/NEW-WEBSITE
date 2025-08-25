import Image from 'next/image';
import { portfolioData } from '@/lib/data.tsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Side Projects
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            A glimpse into my passion for building and learning.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <AnimateOnScroll key={index} delay={index * 200}>
                <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative flex justify-center items-center bg-primary/10 text-primary p-8 aspect-video">
                        {project.imageUrl ? (
                          <Image 
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-contain"
                            data-ai-hint={project.aiHint}
                          />
                        ) : (
                          <project.icon className="h-24 w-24" />
                        )}
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                        <CardDescription className="flex-grow">{project.description}</CardDescription>
                    </CardContent>
                    {project.link && (
                      <CardFooter>
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ArrowRight className='ml-2 h-4 w-4' />
                          </Link>
                        </Button>
                      </CardFooter>
                    )}
                </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
