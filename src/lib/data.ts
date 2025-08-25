import { Award, Briefcase, Code, Star, Linkedin, Twitter, CalendarDays, Mail } from 'lucide-react';

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.13.14.103.21.24.23.38.04.27-.06.53-.2.71-.17.21-.43.41-.72.6-1.02.69-2.05 1.37-3.07 2.06-.52.35-.98.72-1.45 1.08-.2.15-.41.3-.61.45-.21.16-.42.31-.64.46-.33.23-.67.46-1.01.68-.32.21-.6.31-.82.32-.2-.01-.36-.08-.49-.21-.13-.13-.18-.29-.14-.46.03-.17.15-.35.34-.55.2-.21.4-.41.59-.61.18-.2.37-.39.55-.59.55-.6 1.1-1.2 1.65-1.8.18-.2.37-.39.55-.59.19-.2.38-.39.57-.58s.38-.39.57-.58c.19-.19.38-.39.57-.58l.57-.58.57-.58.57-.58.56-.58.28-.29c.19-.19.38-.38.57-.57.19-.19.38-.38.57-.57zm-4.44 4.54c-.1.08-.2.16-.31.24-.11.08-.22.16-.33.24-.11.08-.22.16-.33.24s-.22.16-.33.24c-.11.08-.22.16-.33.24-.11.08-.21.16-.32.24-.1.08-.2.16-.3.24l-.22.16c-.1.08-.2.16-.3.24-.1.08-.2.16-.3.24a.5.5 0 0 1-.29.12c-.1.01-.19-.01-.27-.05-.08-.04-.15-.1-.2-.18a.38.38 0 0 1-.06-.21c.01-.1.06-.19.14-.26.08-.07.18-.15.29-.23.11-.08.22-.16.33-.24.11-.08.22-.16.33-.24.11-.08.22-.16.33-.24.11-.08.22-.16.33-.24s.22-.16.33-.24.22-.16.33-.24.22-.16.33-.24.22-.16.33-.24.22-.16.33-.24c.22-.16.44-.32.66-.48.22-.16.44-.32.66-.48.11-.08.22-.16.33-.24.1-.08.2-.16.3-.24.1-.08.2-.16.3-.24.11-.08.22-.16.33-.24.08-.05.15-.09.21-.1a.2.2 0 0 1 .15.01.17.17 0 0 1 .1.15.2.2 0 0 1-.03.11.3.3 0 0 1-.1.1c-.06.05-.12.09-.19.14z"/>
    </svg>
)

export const portfolioData = {
  name: "Alex Doe",
  role: "Creative Full-Stack Developer",
  tagline: "Crafting digital experiences that are intuitive, beautiful, and performant.",
  contact: {
    email: "alex.doe@example.com",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/alex-doe",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/alex-doe",
        icon: Twitter,
      },
       {
        name: "Telegram",
        url: "https://t.me/alex-doe",
        icon: TelegramIcon,
      },
      {
        name: "Calendly",
        url: "https://calendly.com/alex-doe",
        icon: CalendarDays,
      }
    ],
  },
  about: {
    description: "I am a passionate developer with a knack for creating elegant solutions in the least amount of time. With a background in both design and engineering, I bridge the gap between aesthetics and functionality, delivering products that users love. My mission is to translate complex problems into simple, beautiful, and intuitive designs.",
    imageUrl: "https://placehold.co/400x400.png",
    aiHint: "profile portrait"
  },
  experience: [
    {
      title: "Senior Developer",
      company: "TechCorp",
      year: "2020 - Present",
      contributions: [
        "Led a team of 5 developers in the creation of a new flagship product.",
        "Architected and implemented a scalable microservices backend.",
        "Improved application performance by 40% through code optimization.",
      ],
      icon: Briefcase,
    },
    {
      title: "UI/UX Designer",
      company: "DesignHub",
      year: "2018 - 2020",
      contributions: [
        "Redesigned the main user interface, resulting in a 25% increase in user engagement.",
        "Conducted user research and usability testing to inform design decisions.",
        "Created a comprehensive design system to ensure brand consistency.",
      ],
      icon: Briefcase,
    },
    {
      title: "Web Dev Intern",
      company: "StartupX",
      year: "2017 - 2018",
      contributions: [
        "Developed and maintained the company's marketing website.",
        "Assisted in building new features for the primary web application.",
        "Gained hands-on experience with modern web technologies.",
      ],
      icon: Briefcase,
    },
  ],
  achievements: [
    {
      title: "Innovator of the Year",
      value: "Award",
      description: "TechCorp Annual Awards 2022",
      icon: Award,
    },
    {
      title: "Successful Projects",
      value: "15+",
      description: "Delivered on time and budget",
      icon: Code,
    },
    {
      title: "Client Satisfaction",
      value: "100%",
      description: "Based on project feedback",
      icon: Star,
    },
  ],
  projects: [
    {
      title: "Project Alpha",
      description: "A comprehensive project management tool designed to streamline team collaboration and productivity.",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "abstract tech",
      tags: ["React", "Node.js", "GraphQL"],
    },
    {
      title: "Project Beta",
      description: "An e-commerce platform with a focus on personalized user experiences and real-time inventory management.",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "modern storefront",
      tags: ["Next.js", "Firebase", "Stripe"],
    },
    {
      title: "Gamma Analytics",
      description: "A data visualization dashboard that helps businesses make sense of complex datasets through interactive charts.",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "data dashboard",
      tags: ["D3.js", "Python", "Flask"],
    },
  ],
  certifications: [
    {
      name: "Certified JavaScript Developer",
      issuer: "Code Academy",
      logoUrl: "https://placehold.co/150x150.png",
      aiHint: "certificate logo",
    },
    {
      name: "Cloud Practitioner",
      issuer: "AWS",
      logoUrl: "https://placehold.co/150x150.png",
      aiHint: "tech logo",
    },
    {
      name: "Advanced React",
      issuer: "Scripthall",
      logoUrl: "https://placehold.co/150x150.png",
      aiHint: "learning platform",
    },
  ],
  testimonials: [
    {
      quote: "Alex's attention to detail and creative problem-solving are unparalleled. They were a key asset to our team and instrumental in our project's success.",
      author: "Jane Smith",
      role: "Project Manager, TechCorp",
      imageUrl: "https://placehold.co/100x100.png",
      aiHint: "professional headshot",
    },
    {
      quote: "Working with Alex was a pleasure. Their ability to translate complex requirements into a user-friendly design is exceptional. I highly recommend them.",
      author: "John Franklin",
      role: "CEO, DesignHub",
      imageUrl: "https://placehold.co/100x100.png",
      aiHint: "corporate headshot",
    },
    {
      quote: "The passion Alex brings to their work is infectious. They are not only a talented developer but also a great collaborator and team player.",
      author: "Samantha Lee",
      role: "Lead Engineer, StartupX",
      imageUrl: "https://placehold.co/100x100.png",
      aiHint: "developer portrait",
    },
  ],
  employers: [
    { name: "TechCorp", logoUrl: "https://placehold.co/150x50.png", aiHint: "company logo" },
    { name: "DesignHub", logoUrl: "https://placehold.co/150x50.png", aiHint: "creative agency" },
    { name: "StartupX", logoUrl: "https://placehold.co/150x50.png", aiHint: "tech startup" },
    { name: "Innovate LLC", logoUrl: "https://placehold.co/150x50.png", aiHint: "innovation firm" },
  ],
  signOff: "Let's create something amazing together."
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
];
