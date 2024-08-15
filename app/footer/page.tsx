"use client"; // Ensure this is included if using any React hooks

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
           <h1>AbdulBaseer</h1>
            <p className="mt-4 text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                {/* Your Instagram SVG path here */}
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                {/* Your Twitter SVG path here */}
              </svg>
            </Link>
            <Link href="#" aria-label="GitHub" className="text-gray-400 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                {/* Your GitHub SVG path here */}
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-400 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                {/* Your YouTube SVG path here */}
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    API Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Claim
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
