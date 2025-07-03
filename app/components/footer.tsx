import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p className="text-gray-400">contact@example.com</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <p className="text-gray-400">123 Main Street, City, Country</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Phone</h4>
            <p className="text-gray-400">+1 (234) 567-890</p>
          </div>
          <div className="container mx-auto text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} KanhaDev. Built with React & Tailwind.
          </div>
        </div>
      </footer>

      {/* Minimal Footer Bottom */}
    </>
  );
};

export default Footer;
