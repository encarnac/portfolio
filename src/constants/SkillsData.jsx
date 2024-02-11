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
      { name: "Python", logo: <SiPython className="size-7 xl:size-9" /> },
      {
        name: "Javascript",
        logo: <SiJavascript className="size-7 xl:size-9" />,
      },
      { name: "HTML", logo: <SiHtml5 className="size-7 xl:size-9" /> },
      { name: "CSS", logo: <SiCss3 className="size-7 xl:size-9" /> },
    ],
  },
  {
    category: "Front-End",
    image: "/frontend.svg",
    tools: [
      { name: "React", logo: <SiReact className="size-7 xl:size-9" /> },
      { name: "Next.js", logo: <SiNextdotjs className="size-7 xl:size-9" /> },
      { name: "Bootstrap", logo: <SiBootstrap className="size-7 xl:size-9" /> },
      {
        name: "Tailwind",
        logo: <SiTailwindcss className="size-7 xl:size-9" />,
      },
    ],
  },
  {
    category: "Back-End",
    image: "/backend.svg",
    tools: [
      { name: "Express", logo: <SiExpress className="size-7 xl:size-9" /> },
      { name: "MongoDB", logo: <SiMongodb className="size-7 xl:size-9" /> },
      { name: "MySQL", logo: <SiMysql className="size-7 xl:size-9" /> },
      { name: "GCP", logo: <SiGooglecloud className="size-7 xl:size-9" /> },
    ],
  },
  {
    category: "Dev Tools",
    image: "/dev-tools.svg",
    tools: [
      { name: "Git", logo: <SiGit className="size-7 xl:size-9" /> },
      { name: "Jira", logo: <SiJirasoftware className="size-7 xl:size-9" /> },
      { name: "Figma", logo: <SiFigma className="size-7 xl:size-9" /> },
      { name: "Postman", logo: <SiPostman className="size-7 xl:size-9" /> },
    ],
  },
];

export const SKILLS_DATA_UNSORTED = [
  { name: "HTML", logo: <SiHtml5 className="size-7 xl:size-9" /> },
  { name: "CSS", logo: <SiCss3 className="size-7 xl:size-9" /> },
  { name: "Javascript", logo: <SiJavascript className="size-7 xl:size-9" /> },
  { name: "React", logo: <SiReact className="size-7 xl:size-9" /> },
  { name: "Next.js", logo: <SiNextdotjs className="size-7 xl:size-9" /> },
  { name: "Bootstrap", logo: <SiBootstrap className="size-7 xl:size-9" /> },
  { name: "Tailwind", logo: <SiTailwindcss className="size-7 xl:size-9" /> },
  { name: "Python", logo: <SiPython className="size-7 xl:size-9" /> },
  { name: "Flask", logo: <SiFlask className="size-7 xl:size-9" /> },
  { name: "Express", logo: <SiExpress className="size-7 xl:size-9" /> },
  { name: "MongoDB", logo: <SiMongodb className="size-7 xl:size-9" /> },
  { name: "MySQL", logo: <SiMysql className="size-7 xl:size-9" /> },
  { name: "GCP", logo: <SiGooglecloud className="size-7 xl:size-9" /> },
  { name: "Git", logo: <SiGit className="size-7 xl:size-9" /> },
  { name: "Jira", logo: <SiJirasoftware className="size-7 xl:size-9" /> },
  { name: "Figma", logo: <SiFigma className="size-7 xl:size-9" /> },
  { name: "Postman", logo: <SiPostman className="size-7 xl:size-9" /> },
];
