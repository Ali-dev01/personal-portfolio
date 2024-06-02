export interface DATA_TYPE {
  img: string;
  url?: string;
  title: string;
  desc: string;
  tags: string[];
}

export const data: DATA_TYPE[] = [
  {
    img: "/images/portfolio/student-help.png",
    title: "Students Help Squad",
    url: "https://studenthelpsquad.co.uk/",
    desc: "Our mission is to empower students and businesses to achieve their professional goals by providing comprehensive and unparalleled service.",
    tags: ["React", "Next", "Redux", "TypeScript", "Ant Design", "Tailwind", "Node"],
  },
  {
    img: "/images/portfolio/identity-gram.png",
    title: "Identity Gram",
    url: "https://identitygram.co.uk/",
    desc: "AI-powered identity verification solution for identity fraud prevention, Know Your Customer compliance, and fast conversions of valuable customers with Identity Gram.",
    tags: ["Next js", "Redux", "MUI", "TypeScript", "Swiper", "Node", "Express"],
  },
  {
    img: "/images/portfolio/foster-app.png",
    title: "Foster App",
    url: "https://www.fosterapp.co.uk/home",
    desc: "Foster care constitutes a system wherein a minor is placed under the care of a state-certified caregiver, often referred to as a foster parent, residing in a ward, group home, treatment facility, or a private residence.",
    tags: ["React", "Redux", "TypeScript", "MUI", "Node", "MongoDb"],
  },
  {
    img: "/images/portfolio/care-library.png",
    title: "Care Library",
    url: "https://carelibrary.co.uk/",
    desc: "Care Library is a staffing firm that specialises in putting together a high quality, well trained and compassionate healthcare workforce.",
    tags: ["Angular", "Redux", "TypeScript", "SCSS", "Angular Material"],
  },
  {
    img: "/images/portfolio/nexa.png",
    title: "Nexa Packaging",
    url: "https://nexa-packaging.vercel.app/",
    desc: "One for all solution, for custom printed packaging. Design your own box and turn your imagination into reality with full customization.",
    tags: ["React js", "Next js", "TypeScript", "Material UI", "Swiper", "CMS"],
  },
  {
    img: "/images/portfolio/donation.png",
    title: "Family of Heart",
    url: "https://familyoftheheartproject.com/",
    desc: "Family Of The Heart Project is a non-profit organization that works to protect vulnerable children and single mothers in Kenya by empowering them with resources and opportunities to build a self-sufficient future.",
    tags: ["HTML", "CSS", "Bootstrap", "jQuery", "Wordpress", "CMS"],
  },
];
