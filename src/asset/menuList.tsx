import PageModule from "../component/pageModule";
import ProjectMain from "../component/ProjectMain";
import { list2023 } from "./retrospect/list2023";

import { csList } from "./tech/csList";
import { nextList } from "./tech/nextList";
import { reactList } from "./tech/reactList";

export const menuList = [
  {
    name: "About",
    path: "/blogInro/markdown/introMd/undefined",
    Component: () => <PageModule />,
  },
  {
    name: "Tech",
    path: "/tech/*",
    Component: () => <ProjectMain subMenuList={textMenuList} />,
  },
  {
    name: "Review",
    path: "/review/*",
    Component: () => <ProjectMain subMenuList={reviewMenuList} />,
  },
  {
    name: "Algorithm",
    path: "/algorithm/*",
    Component: () => <ProjectMain subMenuList={algorithmMenuList} />,
  },
  {
    name: "Retrospect",
    path: "/retrospect/*",
    Component: () => <ProjectMain subMenuList={retrospectMenuList} />,
  },
  {
    name: "Project",
    path: "/project/*",
    Component: () => <ProjectMain subMenuList={projectMenuList} />,
  },
];
export const textMenuList = [
  { name: "Computer Science", path: "/tech/cs/*", list: csList },
  { name: "React", path: "/tech/react/*", list: reactList },
  { name: "Next.js", path: "/tech/next/*", list: nextList },
  { name: "Web", path: "/tech/web/*", list: csList },
  { name: "Node.js", path: "/tech/node/*", list: csList },
];
export const reviewMenuList = [
  { name: "Book", path: "/review/book/*", list: csList },
  { name: "Book1", path: "/review/book1/*", list: csList },
  { name: "Book2", path: "/review/book2/*", list: csList },
  { name: "Book3", path: "/review/book3/*", list: csList },
];
export const algorithmMenuList = [
  { name: "Baekjoon", path: "/algorithm/baekjoon/*", list: csList },
  { name: "Programmers", path: "/algorithm/programmers/*", list: csList },
];
export const retrospectMenuList = [
  { name: "2022", path: "/retrospect/2022/*", list: list2023 },
  { name: "2023", path: "/retrospect/2023/*", list: list2023 },
  { name: "2024", path: "/retrospect/2024/*", list: list2023 },
];
export const projectMenuList = [
  { name: "Project1", path: "/project/project1/*", list: csList },
  { name: "Project2", path: "/project/project2/*", list: csList },
  { name: "Project3", path: "/project/project3/*", list: csList },
];
