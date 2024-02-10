import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiJirasoftware,
  SiFigma,
  SiPostman,
} from "react-icons/si";

export const SKILLS_DATA_SORTED = [
  {
    category: "Front-End",
    image: "/frontend.svg",
    tools: [
      { name: "HTML", logo: <SiHtml5 className="col-span-1" /> },
      { name: "CSS", logo: <SiCss3 className="col-span-1" /> },
      { name: "Javascript", logo: <SiJavascript className="col-span-1" /> },
      { name: "React", logo: <SiReact className="col-span-1" /> },
      { name: "Next.js", logo: <SiNextdotjs className="col-span-1" /> },
      { name: "Bootstrap", logo: <SiBootstrap className="col-span-1" /> },
      { name: "Tailwind", logo: <SiTailwindcss className="col-span-1" /> },
    ],
  },
  {
    category: "Back-End",
    image: "/backend.svg",
    tools: [
      { name: "Python", logo: <SiPython className="col-span-1" /> },
      { name: "Flask", logo: <SiFlask className="col-span-1" /> },
      { name: "Express", logo: <SiExpress className="col-span-1" /> },
      { name: "MongoDB", logo: <SiMongodb className="col-span-1" /> },
      { name: "MySQL", logo: <SiMysql className="col-span-1" /> },
      { name: "GCP", logo: <SiGooglecloud className="col-span-1" /> },
    ],
  },
  {
    category: "Dev Tools",
    image: "/dev-tools.svg",
    tools: [
      { name: "Git", logo: <SiGit className="col-span-1" /> },
      { name: "GitHub", logo: <SiGithub className="col-span-1" /> },
      { name: "Jira", logo: <SiJirasoftware className="col-span-1" /> },
      { name: "Figma", logo: <SiFigma className="col-span-1" /> },
      { name: "Postman", logo: <SiPostman className="col-span-1" /> },
    ],
  },
];

export const SKILLS_DATA_UNSORTED = [
  { name: "HTML", logo: <SiHtml5 className="size-6" /> },
  { name: "CSS", logo: <SiCss3 className="size-6" /> },
  { name: "Javascript", logo: <SiJavascript className="size-6" /> },
  { name: "React", logo: <SiReact className="size-6" /> },
  { name: "Next.js", logo: <SiNextdotjs className="size-6" /> },
  { name: "Bootstrap", logo: <SiBootstrap className="size-6" /> },
  { name: "Tailwind", logo: <SiTailwindcss className="size-6" /> },
  { name: "Python", logo: <SiPython className="size-6" /> },
  { name: "Flask", logo: <SiFlask className="size-6" /> },
  { name: "Express", logo: <SiExpress className="size-6" /> },
  { name: "MongoDB", logo: <SiMongodb className="size-6" /> },
  { name: "MySQL", logo: <SiMysql className="size-6" /> },
  { name: "GCP", logo: <SiGooglecloud className="size-6" /> },
  { name: "Git", logo: <SiGit className="size-6" /> },
  { name: "GitHub", logo: <SiGithub className="size-6" /> },
  { name: "Jira", logo: <SiJirasoftware className="size-6" /> },
  { name: "Figma", logo: <SiFigma className="size-6" /> },
  { name: "Postman", logo: <SiPostman className="size-6" /> },
];