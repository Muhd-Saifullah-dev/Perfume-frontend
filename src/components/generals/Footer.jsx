import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-gray-800 text-white py-8 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-semibold mb-3">Company</h1>
          <p className="text-sm text-gray-400">
            We are an independent niche fragrance house based in Karachi,
            Pakistan, specializing in handcrafted parfum extracts made with
            natural oils. Our fragrances are designed to last significantly
            longer on your skin compared to many popular fragrances in the
            industry
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">News Letter Sign Up</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter to receive the latest updates and
            offers.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
              required
            />
            <button
              type="submit"
              className="bg-white text-gray-800 py-2 px-4 rounded-lg text-sm transition duration-200 hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
