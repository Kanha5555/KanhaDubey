import React from "react";
import { useNavigate } from "react-router-dom";
const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#7A5FFF] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Creative
            <br />
            Developer &<br />
            Designer
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            I craft beautiful digital experiences with clean code and thoughtful
            design. Let&apos;s build something amazing together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="bg-white text-[#7A5FFF] font-semibold py-3 px-6 rounded-md shadow hover:bg-white/90 transition sm:w-auto w-full"
              onClick={() => navigate("/projects")}
            >
              View My Work
            </button>
            <button
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-[#7A5FFF] transition sm:w-auto w-full mt-4 sm:mt-0"
              onClick={() => navigate("/about")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="w-72 h-72 rounded-full border-8 border-[#a090ff] overflow-hidden">
            <img
              src="public/kanha.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
