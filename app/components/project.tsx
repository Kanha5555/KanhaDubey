import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern shopping experience with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/ecommerce.png", // Replace with your image path
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts and progress",
    tags: ["React Native", "Firebase", "UI/UX"],
    image: "/images/fitness-tracker.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Professional business website with CMS integration",
    tags: ["Next.js", "Tailwind", "CMS"],
    image: "/images/corporate-website.png", // Replace with your image path
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
                className="rounded-lg mb-4 object-cover"
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
              <a href="#" className="text-indigo-600 text-sm font-medium">
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
