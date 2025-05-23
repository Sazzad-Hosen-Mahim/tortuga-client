import CommonWrapper from "@/common/CommonWrapper";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212a31] text-white py-8">
      <CommonWrapper>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                We are a team of passionate developers building amazing web
                applications with modern technologies.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/partners" className="hover:text-gray-300">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="/service" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full max-w-xl mx-auto px-4">
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to our newsletter to get the latest updates.
              </p>
              <form className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-md border border-white bg-transparent text-white focus:outline-none w-full sm:flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#124e66] text-[#d3d9d4]  lg:text-lg px-2 lg:px-4 py-2 rounded-md hover:bg-[#124e66]/50 w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Tortuga7. All rights reserved.
            </p>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
