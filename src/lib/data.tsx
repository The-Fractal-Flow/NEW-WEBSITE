
import { Users, UserCheck, Video, Milestone, Handshake, BriefcaseBusiness, TrendingUp, GraduationCap, Bot, FileText, Linkedin, Twitter, CalendarDays, Rocket, Zap, BarChart, Target, MessageCircle, BrainCircuit } from 'lucide-react';

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 2L11 13"></path>
        <path d="M22 2L15 22L11 13L2 9L22 2z"></path>
    </svg>
);

export const portfolioData = {
  name: "EVANS JOSEPH",
  role: "Community Manager, Marketer, and Business Developer",
  tagline: "I help brands and startups grow by building strong communities, creating impactful marketing strategies, and driving partnerships that open doors to new opportunities. My focus is on connecting people, ideas, and businesses to deliver lasting results.",
  contact: {
    email: "evansobidiegwu@gmail.com",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evans-joseph/",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/thefractalflow",
        icon: Twitter,
      },
       {
        name: "Telegram",
        url: "https://t.me/nascencey",
        icon: TelegramIcon,
      },
      {
        name: "Calendly",
        url: "https://calendly.com/evansobidiegwu/3o-mins-with-evans",
        icon: CalendarDays,
      }
    ],
  },
  about: {
    description: [
        "I am a community-focused builder with a track record of driving growth for Web3 projects. My expertise lies at the intersection of community management, marketing, and business development, where I create and execute strategies that foster engagement, build brand affinity, and secure strategic partnerships.",
        "From scaling communities to over 100,000 members to leading successful go-to-market strategies, I thrive on turning ambitious goals into measurable outcomes. I have a deep understanding of what it takes to build and maintain a thriving, self-sustaining ecosystem in the fast-paced world of Web3.",
        "My hands-on approach involves everything from setting up and managing moderation bots to hosting AMAs that clarify a project's vision. I work closely with development and marketing teams to ensure a consistent brand voice and a strong feedback loop between users and the core team.",
        "Whether it's launching outreach campaigns to over 150 projects, organizing virtual events with 200k+ views, or providing detailed UX feedback to developers, my goal is always the same: to build trust, drive growth, and create lasting value for the projects and communities I serve."
    ],
    imageUrl: "https://i.imgur.com/t525Cj2.png",
    aiHint: "profile portrait"
  },
  experience: [
    {
      title: "Business Development",
      company: "Victus Global",
      year: "Dec 2024 - Jul 2025",
      logoUrl: "https://i.imgur.com/TVQTOTS.png",
      aiHint: "Victus Global logo",
      contributions: [
        "Researched promising Web3 protocols to identify potential growth opportunities and strategic fits for advisory services.",
        "Initiated conversations with founders to explain Victus Global's value proposition and support model for early-stage projects.",
        "Contributed to the maintenance of internal tracking sheets for deal flow and project evaluation.",
        "Assisted in preparing and updating investor outreach documents to help projects with their fundraising efforts.",
        "Gained valuable insight into the advisory and venture capital side of the Web3 ecosystem through a remote contract role.",
      ],
    },
    {
      title: "Chief Community Officer",
      company: "SubQuery",
      year: "Feb 2024 - Apr 2025",
      logoUrl: "https://i.imgur.com/zUEKcFF.png",
      aiHint: "SubQuery logo",
      contributions: [
        "Led community operations, managing day-to-day activity across Telegram and Discord for thousands of users.",
        "Enforced community guidelines with a focus on clear communication to maintain a professional and welcoming environment.",
        "Configured and managed automation tools like MEE6, Rose, and Carl-bot to streamline moderation and user onboarding.",
        "Acted as a crucial feedback loop between the community and the development and marketing teams.",
        "Delivered insights on user experience, flagged feature confusion, and helped shape a user-centric product roadmap.",
      ],
    },
    {
      title: "Business Development Manager",
      company: "ADAMANT Messenger",
      year: "Aug 2023 - Feb 2024",
      logoUrl: "https://i.imgur.com/HQPcwQT.png",
      aiHint: "ADAMANT Messenger logo",
      contributions: [
        "Led partnership outreach to Web3 projects and privacy-focused protocols to forge strategic collaborations.",
        "Managed the social media calendar, wrote daily content, and organized AMAs to boost engagement.",
        "Maintained the project's presence on data aggregators like CoinGecko and CoinMarketCap, ensuring accuracy.",
        "Conducted thorough testing of the messenger app on both mobile and desktop, providing detailed bug reports and UX feedback.",
        "Supported the go-to-market strategy for a new market-making bot service by creating materials and assisting early users.",
      ],
    },
     {
      title: "Community Associate",
      company: "STEPN by Find Satoshi Lab",
      year: "Jun 2023 - Nov 2023",
      logoUrl: "https://i.imgur.com/LsDQois.png",
      aiHint: "STEPN logo",
      contributions: [
        "Implemented engagement strategies on Telegram and Discord which led to increased user activity and retention.",
        "Handled daily moderation, answered user questions, and organized community events like quizzes and challenges.",
        "Tracked user sentiment and engagement patterns to provide actionable feedback to the core team.",
        "Helped clarify app functionality and flagged technical issues to ensure a smooth user experience during a key growth phase.",
        "Contributed to building a stronger sense of belonging within the community through proactive and supportive interactions.",
      ],
    },
    {
        title: "Ambassador",
        company: "dHealth - Blockchain for Healthcare",
        year: "Jul 2023 - Sep 2023",
        logoUrl: "https://i.imgur.com/FJ4GTf0.png",
        aiHint: "dHealth logo",
        contributions: [
            "Focused on raising awareness for a decentralized healthcare ecosystem through network and online platform promotion.",
            "Promoted the project and engaged with influencers and thought leaders on social media to amplify key updates.",
            "Helped new users understand the platform's vision by correcting misinformation and providing context in public forums.",
            "Initiated outreach to Web3 and health-focused communities to explore potential partnerships and collaborations.",
            "Shared content that explained dHealth's approach to privacy, access, and on-chain healthcare infrastructure.",
        ],
    },
    {
        title: "Ambassador",
        company: "FOUNDATION",
        year: "Dec 2022 - May 2023",
        logoUrl: "https://i.imgur.com/U1dHiAK.png",
        aiHint: "Foundation logo",
        contributions: [
            "Promoted the Foundation Passport hardware wallet to crypto users and privacy advocates.",
            "Created awareness around its security features, multi-asset support, and ease of use for new and experienced users.",
            "Conducted outreach through social media, community chats, and direct engagement with crypto enthusiasts.",
            "Answered basic support questions and helped position the wallet as a practical self-custody solution.",
            "Explained how the wallet worked to help users take control of their digital assets confidently.",
        ],
    },
    {
      title: "Marketing Collaborator",
      company: "Brickken",
      year: "Jan 2023 - Mar 2023",
      logoUrl: "https://i.imgur.com/Vg4sn6r.png",
      aiHint: "Brickken logo",
      contributions: [
        "Organized over 25 virtual events, attracting 200k+ views and 15k+ live attendees across multiple platforms.",
        "Launched an outreach campaign contacting over 150 Web3 projects for collaborations, AMAs, and cross-promotions.",
        "Grew the community to over 100,000 active members across social platforms through targeted campaigns.",
        "Managed Crew3-based quests and giveaways to support community growth and retention.",
        "Collaborated with influencers on Twitter, TikTok, and YouTube to increase reach and generate external interest.",
      ],
    },
     {
      title: "Head of Community",
      company: "Matrix Studios (Glizzy)",
      year: "May 2022 - Jan 2023",
      logoUrl: "https://i.imgur.com/RmlaLL1.png",
      aiHint: "Matrix Studios logo",
      contributions: [
        "Managed a 10,000+ member community with an 87% engagement rate through consistent moderation and support.",
        "Handled technical support, onboarding, and resolved wallet/access issues for users.",
        "Organized community calls, giveaways, and seasonal campaigns to maintain high levels of activity.",
        "Wrote announcements, social content, and presentation decks to explain the project vision.",
        "Worked closely with the core team to escalate bugs and product concerns, building trust within the community.",
      ],
    },
    {
      title: "Community & Marketing Advisor",
      company: "Robot Shib",
      year: "Feb 2022 - May 2022",
      logoUrl: "https://i.imgur.com/oTnoVQl.png",
      aiHint: "Robot Shib logo",
      contributions: [
        "Advised on the go-to-market strategy for a community-driven meme project with AI-powered utilities.",
        "Helped structure the initial community on Telegram and Discord, establishing moderation and engagement guidelines.",
        "Crafted key messaging and announcements to build initial hype and attract early supporters.",
        "Coordinated with the development team to align the product roadmap with community expectations.",
        "Assisted in creating a content strategy focused on showcasing the project's unique AI features.",
      ],
    },
    {
      title: "Senior Community Manager & Brand Ambassador",
      company: "Catcoin",
      year: "Nov 2021 - Jan 2023",
      logoUrl: "https://i.imgur.com/mcjfXPs.png",
      aiHint: "Catcoin logo",
      contributions: [
        "Oversaw a community of over 20,000 members with a 25% engagement rate.",
        "Executed a go-to-market strategy that resulted in a 12% increase in community growth.",
        "Hosted educational webinars with industry speakers, attracting at least 50 attendees per session.",
        "As an ambassador, introduced the project to over 2,000 people through grassroots outreach.",
        "Fostered a supportive community by hosting educational events on Twitter and Telegram.",
      ],
    },
    {
      title: "Community Manager",
      company: "Chirpley",
      year: "Jul 2022 - Sep 2022",
      logoUrl: "https://i.imgur.com/Eb0Vmnr.png",
      aiHint: "Chirpley logo",
      contributions: [
        "Grew community from under 5,000 to over 10,000 members with a 30% engagement rate.",
        "Secured strategic partnerships with launchpads and influencers for a successful IDO.",
        "Managed daily engagement, organized AMAs, and wrote content during the pre-launch phase.",
        "Helped introduce the project's unique influencer marketplace model to new audiences.",
        "Built a space where early adopters could understand the project and feel their input mattered.",
      ],
    },
  ],
  achievements: [
    {
        title: "Community Growth to 100k",
        value: "100k+",
        description: "Grew Brickken's community to over 100,000 active members across social platforms.",
        icon: Rocket,
    },
    {
        title: "High Engagement Rate",
        value: "87%",
        description: "Achieved an 87% engagement rate in a community of over 10,000 members at Matrix Studios.",
        icon: Zap,
    },
    {
        title: "Event Views",
        value: "200k+",
        description: "Generated over 200,000 views across 25+ virtual events for Brickken.",
        icon: Video,
    },
    {
        title: "Event Attendance",
        value: "15k+",
        description: "Attracted over 15,000 live attendees to virtual events for Brickken.",
        icon: Milestone,
    },
    {
        title: "Project Outreach",
        value: "150+",
        description: "Contacted over 150 Web3 projects in an outreach campaign for Brickken.",
        icon: Handshake,
    },
    {
        title: "Community Growth",
        value: "100%",
        description: "Doubled the Chirpley community from under 5,000 to over 10,000 active members.",
        icon: Users,
    },
    {
        title: "Successful IDO",
        value: "Funded",
        description: "Contributed to a successful fundraising round (IDO) for Chirpley through strategic partnerships.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Community Management",
        value: "20k+",
        description: "Managed and scaled the Catcoin community to over 20,000 members.",
        icon: UserCheck,
    },
    {
        title: "GTM Strategy Success",
        value: "12%",
        description: "Increased community growth by 12% with a new go-to-market strategy for Catcoin.",
        icon: TrendingUp,
    },
    {
        title: "Webinar Attendance",
        value: "50+",
        description: "Attracted a minimum of 50 attendees per educational webinar session for Catcoin.",
        icon: GraduationCap,
    },
  ],
  projects: [
    {
      title: "Web3 Community Engagement",
      description: "Hosted a successful Telegram call with over 150 participants, discussing the fundamentals and future of Cryptocurrency, Blockchain, and Web3.",
      icon: Users,
      tags: ["Community", "Web3", "Public Speaking"],
    },
    {
      title: "Crypto Crash Course",
      description: "Developed a free, comprehensive crypto crash course designed for beginners to help them make informed investment decisions. This course covers everything from basic terminology to advanced trading strategies, ensuring a solid foundation for new investors.",
      icon: GraduationCap,
      tags: ["Education", "Crypto", "Content"],
      link: "https://calendly.com/evansobidiegwu/3o-mins-with-evans",
    },
    {
      title: "Telegram Crypto Bot",
      description: "Created a user-friendly crypto bot for Telegram that allows traders to buy major cryptocurrencies directly and securely.",
      icon: Bot,
      tags: ["Development", "Telegram", "FinTech"],
    },
    {
      title: "Crypto Medium Blog",
      description: "Launched and authored a Medium blog focused on crypto topics, enhancing my writing skills while providing valuable insights to the community. The blog has reached over 10,000 readers.",
      icon: FileText,
      tags: ["Writing", "Content Creation", "Community"],
    },
    {
      title: "Personalized Crypto Consulting",
      description: "Offered personalized consulting on fundamental analysis for crypto assets, empowering individuals to make better investment decisions.",
      icon: BriefcaseBusiness,
      tags: ["Consulting", "Investing", "Analysis"],
      link: "https://calendly.com/evansobidiegwu/3o-mins-with-evans",
    },
  ],
  certifications: [
    {
        name: "Accenture Professional Program in Artificial Intelligence",
        issuer: "Accenture | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/eGS0VYx.png",
        aiHint: "Accenture logo",
    },
    {
        name: "Community Management",
        issuer: "Blockdoth Academy | Issued Oct 2023",
        logoUrl: "https://i.imgur.com/4HFm1WC.png",
        aiHint: "Blockdoth Academy logo",
    },
    {
        name: "Digital Marketing",
        issuer: "Accenture | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/eGS0VYx.png",
        aiHint: "Accenture logo",
    },
    {
        name: "Essentials of Computer Programming",
        issuer: "Institute of Coding | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/kmbuFxj.png",
        aiHint: "Institute of Coding logo",
    },
    {
        name: "Fundamentals of Digital Marketing",
        issuer: "Google | Issued Jun 2023",
        logoUrl: "https://i.imgur.com/wOgyCfJ.png",
        aiHint: "Google logo",
    },
    {
        name: "Mobile design and Developement",
        issuer: "Accenture | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/eGS0VYx.png",
        aiHint: "Accenture logo",
    },
    {
        name: "Social Media Management",
        issuer: "Accenture | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/eGS0VYx.png",
        aiHint: "Accenture logo",
    },
    {
        name: "User Experience (UX)",
        issuer: "Accenture | Issued Sep 2024",
        logoUrl: "https://i.imgur.com/eGS0VYx.png",
        aiHint: "Accenture logo",
    },
  ],
  testimonials: [
    {
      quote: "EVANS supported with SubQuery community moderation during a heavy growth period for us and was always calm under pressure. He was professional and diligent in his work always.",
      author: "Brittany Seales",
      role: "Head of Marketing at SubQuery",
      imageUrl: "https://i.imgur.com/4R80E0z.jpg",
      aiHint: "professional headshot",
    },
    {
      quote: "I wholeheartedly recommend EVANS for any project. With his exceptional talents and expertise, EVANS is the perfect fit for your needs. His unique approach and creativity bring a fresh perspective to every task. His commitment and dedication make him an invaluable asset to any team. Don't miss the opportunity to collaborate with this outstanding talent.",
      author: "Sami Sayegh",
      role: "Account Manager",
      imageUrl: "https://i.imgur.com/Htav3MA.jpg",
      aiHint: "corporate headshot",
    },
    {
      quote: "EVANS is a highly diligent, thorough intellectual, who leaves no stone unturned when it comes to knowing the business that he becomes involved in. His passion and continuous effort, regardless of market conditions, as well as his constant recommendations for community activity, will always be valued. He is a very highly valued team member and a good friend.",
      author: "Jack Economos",
      role: "CEO & Co-Founder @ Glizzy",
      imageUrl: "https://i.imgur.com/sDBqFCN.jpg",
      aiHint: "developer portrait",
    },
  ],
  clients: [
    { name: "SubQuery Network", logoUrl: "https://i.imgur.com/zUEKcFF.png", aiHint: "SubQuery Network logo" },
    { name: "Victus Global", logoUrl: "https://i.imgur.com/TVQTOTS.png", aiHint: "Victus Global logo" },
    { name: "ADAMANT Messenger", logoUrl: "https://i.imgur.com/HQPcwQT.png", aiHint: "ADAMANT Messenger logo" },
    { name: "STEPN", logoUrl: "https://i.imgur.com/LsDQois.png", aiHint: "STEPN logo" },
    { name: "Brickken", logoUrl: "https://i.imgur.com/Vg4sn6r.png", aiHint: "Brickken logo" },
    { name: "Matrix Studios", logoUrl: "https://i.imgur.com/RmlaLL1.png", aiHint: "Matrix Studios logo" },
    { name: "Catcoin", logoUrl: "https://i.imgur.com/mcjfXPs.png", aiHint: "Catcoin logo" },
    { name: "Chirpley", logoUrl: "https://i.imgur.com/Eb0Vmnr.png", aiHint: "Chirpley logo" },
  ],
  signOff: "Let's create something amazing together."
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
