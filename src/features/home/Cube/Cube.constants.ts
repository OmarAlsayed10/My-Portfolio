import { projects, scenes } from "../../../content";

export const cubeRotations = [
  { x: -5, y: -14 },
  { x: 0, y: -90 },
  { x: 0, y: -180 },
  { x: 0, y: -270 },
  { x: -90, y: 0 },
  { x: 90, y: 0 },
];

export const cubeFaceClassNames = [
  "face-front",
  "face-right",
  "face-back",
  "face-left",
  "face-top",
  "face-bottom",
];

const selectedProjectSlugs = ["avira-sports", "ikseer-health", "Hirfaya"];

export const selectedProjects = projects.filter((project) =>
  selectedProjectSlugs.includes(project.slug),
);

export const sceneRoutes = [
  "/projects",
  "/projects",
  "/skills",
  "/about",
  "/method",
  "/contact",
];

export const sceneActions = [
  { en: "View projects", ar: "شاهد المشاريع" },
  { en: "All projects", ar: "كل المشاريع" },
  { en: "Explore capabilities", ar: "اكتشف الخبرات" },
  { en: "Read about Omar", ar: "اعرف عمر أكتر" },
  { en: "See the method", ar: "شاهد المنهج" },
  { en: "Start a project", ar: "ابدأ مشروعك" },
];

export const adjacentSceneIndex = (currentIndex: number, direction: number) =>
  (currentIndex + direction + scenes.length) % scenes.length;
