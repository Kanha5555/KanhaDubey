import AboutMe from "~/components/about";
import type { Route } from "./+types/home";
import Hero from "~/components/hero";
import SkillsSection from "~/components/skill";
import ProjectsSection from "~/components/project";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
