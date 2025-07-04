import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern shopping experience with React and Ruby on Rails",
    tags: ["React", "Ruby on Rails", "PostgreSQL"],
    image: "/flexcar.png",
    url: "https://flexcar.com",
  },
  {
    id: 2,
    title: "Decision Making Tool",
    description:
      "Website for managing projects, processes, and decisions - all in one place.",
    tags: ["React", "Ruby on Rails", "UI/UX", "PostgreSQL"],
    image: "/fredbase.png",
    url: "https://fredbase.com",
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Professional business website with responsive design",
    tags: ["Next.js", "Tailwind", "Node.js"],
    image: "/website.png",
    url: "https://beaconresearch.com",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 mb-12">
          A showcase of my recent work across different industries and
          technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg shadow p-4 text-left flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.url} className="text-indigo-600 hover:underline">
                View Details
              </a>
              <div className="mt-auto flex space-x-3 pt-4 text-gray-400">
                <a href="#">
                  <span className="sr-only">Live Demo</span>
                  🔗
                </a>
                <a href="#">
                  <span className="sr-only">GitHub</span>
                  🐙
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
