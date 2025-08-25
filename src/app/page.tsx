import { LandingSection } from '@/components/sections/landing-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { PageHeader } from '@/components/page-header';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ClientsSection } from '@/components/sections/clients-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <LandingSection />
        <AboutSection />
        <ClientsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
