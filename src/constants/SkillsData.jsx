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
    category: "Languages",
    image: "/languages.svg",
    tools: [
      { name: "Python", logo: <SiPython className="size-6 lg:size-7" /> },
      {
        name: "Javascript",
        logo: <SiJavascript className="size-6 lg:size-7" />,
      },
      { name: "HTML", logo: <SiHtml5 className="size-6 lg:size-7" /> },
      { name: "CSS", logo: <SiCss3 className="size-6 lg:size-7" /> },
    ],
  },
  {
    category: "Front-End",
    image: "/frontend.svg",
    tools: [
      { name: "React", logo: <SiReact className="size-6 lg:size-7" /> },
      { name: "Next.js", logo: <SiNextdotjs className="size-6 lg:size-7" /> },
      { name: "Bootstrap", logo: <SiBootstrap className="size-6 lg:size-7" /> },
      {
        name: "Tailwind",
        logo: <SiTailwindcss className="size-6 lg:size-7" />,
      },
    ],
  },
  {
    category: "Back-End",
    image: "/backend.svg",
    tools: [
      { name: "Express", logo: <SiExpress className="size-6 lg:size-7" /> },
      { name: "MongoDB", logo: <SiMongodb className="size-6 lg:size-7" /> },
      { name: "MySQL", logo: <SiMysql className="size-6 lg:size-7" /> },
      { name: "GCP", logo: <SiGooglecloud className="size-6 lg:size-7" /> },
    ],
  },
  {
    category: "Dev Tools",
    image: "/dev-tools.svg",
    tools: [
      { name: "Git", logo: <SiGit className="size-6 lg:size-7" /> },
      { name: "Jira", logo: <SiJirasoftware className="size-6 lg:size-7" /> },
      { name: "Figma", logo: <SiFigma className="size-6 lg:size-7" /> },
      { name: "Postman", logo: <SiPostman className="size-6 lg:size-7" /> },
    ],
  },
];

export const SKILLS_DATA_UNSORTED = [
  { name: "HTML", logo: <SiHtml5 className="size-6 lg:size-7" /> },
  { name: "CSS", logo: <SiCss3 className="size-6 lg:size-7" /> },
  { name: "Javascript", logo: <SiJavascript className="size-6 lg:size-7" /> },
  { name: "React", logo: <SiReact className="size-6 lg:size-7" /> },
  { name: "Next.js", logo: <SiNextdotjs className="size-6 lg:size-7" /> },
  { name: "Bootstrap", logo: <SiBootstrap className="size-6 lg:size-7" /> },
  { name: "Tailwind", logo: <SiTailwindcss className="size-6 lg:size-7" /> },
  { name: "Python", logo: <SiPython className="size-6 lg:size-7" /> },
  { name: "Flask", logo: <SiFlask className="size-6 lg:size-7" /> },
  { name: "Express", logo: <SiExpress className="size-6 lg:size-7" /> },
  { name: "MongoDB", logo: <SiMongodb className="size-6 lg:size-7" /> },
  { name: "MySQL", logo: <SiMysql className="size-6 lg:size-7" /> },
  { name: "GCP", logo: <SiGooglecloud className="size-6 lg:size-7" /> },
  { name: "Git", logo: <SiGit className="size-6 lg:size-7" /> },
  { name: "Jira", logo: <SiJirasoftware className="size-6 lg:size-7" /> },
  { name: "Figma", logo: <SiFigma className="size-6 lg:size-7" /> },
  { name: "Postman", logo: <SiPostman className="size-6 lg:size-7" /> },
];
