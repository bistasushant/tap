"use client";
import Image from "next/image";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Blog Section */}
        <div className="bg-gray-100 p-4 md:p-8 rounded-2xl shadow-md">
          {/* Blog Header */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold">Blog</h2>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm font-normal text-gray-600 hover:text-gray-800 hover:underline"
              >
                View all
              </a>
              <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                <ArrowRightIcon className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 px-4 md:px-12 mt-8">
            {/* Blog Post 1 */}
            <div className="flex flex-col w-full">
              
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={blog1}
                  alt="Blog 1"
                  width={650}
                  height={400}
                  className="rounded-2xl transition-transform duration-300 hover:scale-105 w-full h-auto"
                />
              </div>
              <h1 className="text-xl md:text-3xl font-semibold leading-relaxed mb-2 mt-4">
                Which Industries Can Benefit from Digital Business Cards
              </h1>
            </div>

            {/* Blog Post 2 */}
            <div className="flex flex-col w-full">
            
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={blog2}
                  alt="Blog 2"
                  width={650}
                  height={400}
                  className="rounded-2xl transition-transform duration-300 hover:scale-105 w-full h-auto"
                />
              </div>
              <h1 className="text-xl md:text-3xl font-semibold leading-relaxed mb-2 mt-4">
                Explore Tap Card Benefits: Sleek, Convenient Payment Solution
              </h1>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0 mt-16 md:mt-28">
          {/* About Section */}
          <div className="flex-1">
            <h2 className="text-sm font-semibold mb-4">About Tap</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              At tap - Digital Business Card, we redefine networking
              <br />
              with our innovative NFC and QR code technology.
              <br />
              We empower professionals to connect instantly and
              <br />
              memorably. Embrace the future of networking with us.
            </p>
            <div className="flex space-x-4 mt-8 md:mt-28 text-gray-900">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a href="#" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Menu and Legal Sections */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            {/* Shop Menu Section */}
            <div className="flex-1">
              <h2 className="text-sm font-semibold mb-4">Shop Menu</h2>
              <ul className="text-gray-500 text-xs space-y-2 leading-relaxed">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="flex-1 md:mr-12">
              <h2 className="text-sm font-semibold mb-4">Legal</h2>
              <ul className="text-gray-500 text-xs space-y-2 leading-relaxed">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Copyright Declaration
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Sign up for new updates and offers.
            </h2>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full md:w-2/4">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-xs text-gray-700 bg-white focus:outline-none"
              />
              <button className="p-2 bg-gray-100 hover:bg-gray-200">
                <EnvelopeIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between text-xs text-gray-500">
          <p>© 2024, Tap. Powered by Shopify</p>
          <p className="mt-4 md:mt-0">
            English <span className="text-gray-900">▼</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
