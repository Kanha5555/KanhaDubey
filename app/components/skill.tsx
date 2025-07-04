import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-600 mb-12">
          A comprehensive toolkit for creating exceptional digital experiences
          from concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">💻</span>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                React / Next.js
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Advanced
                </span>
              </li>
              <li className="flex justify-between items-center">
                JavaScript / TypeScript
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Advanced
                </span>
              </li>
              <li className="flex justify-between items-center">
                Tailwind CSS
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Expert
                </span>
              </li>
            </ul>
          </div>

          {/* Backend / Database Card */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🗄️</span>
              <h3 className="text-xl font-semibold">Backend & Database</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                Ruby on Rails
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Expert
                </span>
              </li>
              <li className="flex justify-between items-center">
                Node.js
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Intermediate
                </span>
              </li>
              <li className="flex justify-between items-center">
                SQL Databases
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Intermediate
                </span>
              </li>
            </ul>
          </div>

          {/* Cloud & Project Management Card */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">☁️</span>
              <h3 className="text-xl font-semibold">
                Cloud & Project Management
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                AWS / Cloud Platforms
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Intermediate
                </span>
              </li>
              <li className="flex justify-between items-center">
                Git / GitHub
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Expert
                </span>
              </li>
              <li className="flex justify-between items-center">
                Agile / Scrum
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                  Advanced
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
