import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/", "components/hero.tsx"),
  route("/projects", "components/project.tsx"),
  route("/about", "components/about.tsx"),
  route("/skill", "components/skill.tsx"),
] satisfies RouteConfig;
