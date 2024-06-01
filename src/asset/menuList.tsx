import BlogIntro from "../component/BlogIntro";
import SsaongIntro from "../component/SsaongIntro";
import ProjectMain from "../component/ProjectLi/ProjectMain";

export const menuList = [
  { name: "About", path: "/", Component: BlogIntro },
  { name: "Tech", path: "/ssaong_intro", Component: SsaongIntro },
  { name: "Review", path: "/ssaong_intro", Component: SsaongIntro },
  { name: "Algorithm", path: "/ssaong_intro", Component: SsaongIntro },
  { name: "Project", path: "/project", Component: ProjectMain },
];
