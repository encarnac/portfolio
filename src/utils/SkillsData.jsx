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
  SiJirasoftware,
  SiFigma,
  SiPostman,
} from "react-icons/si";

export const SKILLS_DATA = [
  {
    category: "Languages",
    image: "/languages.svg",
    skills: [
      {
        skill: "Python",
        percentage: "85%",
        logo: <SiPython classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Javascript",
        percentage: "65%",
        logo: <SiJavascript classskill="size-7 xl:size-9" />,
      },
      {
        skill: "HTML",
        percentage: "85%",
        logo: <SiHtml5 classskill="size-7 xl:size-9" />,
      },
      {
        skill: "CSS",
        percentage: "70%",
        logo: <SiCss3 classskill="size-7 xl:size-9" />,
      },
    ],
  },
  {
    category: "Front-End",
    image: "/frontend.svg",
    skills: [
      {
        skill: "React",
        percentage: "70%",
        logo: <SiReact classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Next.js",
        percentage: "50%",
        logo: <SiNextdotjs classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Bootstrap",
        percentage: "75%",
        logo: <SiBootstrap classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Tailwind",
        percentage: "75%",
        logo: <SiTailwindcss classskill="size-7 xl:size-9" />,
      },
    ],
  },
  {
    category: "Back-End",
    image: "/backend.svg",
    skills: [
      {
        skill: "Express",
        percentage: "60%",
        logo: <SiExpress classskill="size-7 xl:size-9" />,
      },
      {
        skill: "MongoDB",
        percentage: "80%",
        logo: <SiMongodb classskill="size-7 xl:size-9" />,
      },
      {
        skill: "MySQL",
        percentage: "80%",
        logo: <SiMysql classskill="size-7 xl:size-9" />,
      },
      {
        skill: "GCP",
        percentage: "50%",
        logo: <SiGooglecloud classskill="size-7 xl:size-9" />,
      },
    ],
  },
  {
    category: "Dev Tools",
    image: "/dev-tools.svg",
    skills: [
      {
        skill: "Git / GitHub",
        percentage: "75%",
        logo: <SiGit classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Jira",
        percentage: "70%",
        logo: <SiJirasoftware classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Figma",
        percentage: "75%",
        logo: <SiFigma classskill="size-7 xl:size-9" />,
      },
      {
        skill: "Postman",
        percentage: "70%",
        logo: <SiPostman classskill="size-7 xl:size-9" />,
      },
    ],
  },
];

export const SKILLS_DATA_UNSORTED = [
  { skill: "HTML", logo: <SiHtml5 classskill="size-7 xl:size-9" /> },
  { skill: "CSS", logo: <SiCss3 classskill="size-7 xl:size-9" /> },
  { skill: "Javascript", logo: <SiJavascript classskill="size-7 xl:size-9" /> },
  { skill: "React", logo: <SiReact classskill="size-7 xl:size-9" /> },
  { skill: "Next.js", logo: <SiNextdotjs classskill="size-7 xl:size-9" /> },
  { skill: "Bootstrap", logo: <SiBootstrap classskill="size-7 xl:size-9" /> },
  { skill: "Tailwind", logo: <SiTailwindcss classskill="size-7 xl:size-9" /> },
  { skill: "Python", logo: <SiPython classskill="size-7 xl:size-9" /> },
  { skill: "Flask", logo: <SiFlask classskill="size-7 xl:size-9" /> },
  { skill: "Express", logo: <SiExpress classskill="size-7 xl:size-9" /> },
  { skill: "MongoDB", logo: <SiMongodb classskill="size-7 xl:size-9" /> },
  { skill: "MySQL", logo: <SiMysql classskill="size-7 xl:size-9" /> },
  { skill: "GCP", logo: <SiGooglecloud classskill="size-7 xl:size-9" /> },
  { skill: "Git", logo: <SiGit classskill="size-7 xl:size-9" /> },
  { skill: "Jira", logo: <SiJirasoftware classskill="size-7 xl:size-9" /> },
  { skill: "Figma", logo: <SiFigma classskill="size-7 xl:size-9" /> },
  { skill: "Postman", logo: <SiPostman classskill="size-7 xl:size-9" /> },
];
