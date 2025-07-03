import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 mb-12">
          Passionate about creating meaningful digital experiences that bridge
          the gap between design and technology.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
              With over 5 years of experience in design and development, I've
              had the privilege of working with startups and established
              companies to bring their visions to life.
            </p>
            <p className="text-gray-700 mb-8">
              I believe in the power of good design to solve real problems and
              create positive impact. Every project is an opportunity to learn,
              grow, and push creative boundaries.
            </p>

            <div className="flex space-x-8">
              <div>
                <span className="text-2xl font-bold text-indigo-600">50+</span>
                <p className="text-gray-600">Projects</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-indigo-600">5+</span>
                <p className="text-gray-600">Years</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-indigo-600">30+</span>
                <p className="text-gray-600">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col space-y-6">
            <div className="bg-gray-100 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                🎨 Design Philosophy
              </h4>
              <p className="text-gray-700">
                Creating intuitive and aesthetically pleasing designs that
                prioritize user experience.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                💻 Development Approach
              </h4>
              <p className="text-gray-700">
                Writing clean, maintainable code with modern technologies and
                best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
