import { portfolioData } from '@/lib/data.tsx';
import { Card, CardContent } from '@/components/ui/card';
import { WavyDivider } from '../wavy-divider';
import { AnimateOnScroll } from '../animate-on-scroll';

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-card py-0">
        <WavyDivider colorClassName="fill-background" />
        <div className="container pb-16 md:pb-24 lg:pb-32">
            <AnimateOnScroll>
                <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    Milestones & Achievements
                </h2>
                <p className="mt-4 text-center text-lg text-muted-foreground">
                    Celebrating the moments that mark my journey.
                </p>
            </AnimateOnScroll>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {portfolioData.achievements.map((achievement, index) => (
                    <AnimateOnScroll key={index} delay={index * 150}>
                        <Card className="text-center shadow-lg hover:scale-105 transition-transform duration-300 h-full">
                            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <achievement.icon className="h-8 w-8" />
                                </div>
                                <p className="mt-4 text-4xl font-bold text-primary">{achievement.value}</p>
                                <h3 className="mt-2 text-xl font-semibold">{achievement.title}</h3>
                                <p className="mt-1 text-muted-foreground text-balance">{achievement.description}</p>
                            </CardContent>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
         <WavyDivider colorClassName="fill-card" direction="down" />
    </section>
  );
}
