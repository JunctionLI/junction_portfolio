"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-gray-700 dark:text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Name or Brand */}
          <p className="text-sm">
            © {new Date().getFullYear()} Junction Li. All rights reserved.
          </p>

          {/* Right: Social Icons */}
          <div className="flex gap-3">
            <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Image src="/assets/github.svg" alt="GitHub" className="w-5 h-5 hover:opacity-80" width={100} height={100}/>
            </a>
            <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-5 hover:opacity-80" width={100} height={100}/>
            </a>
            <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5 hover:opacity-80" width={100} height={100}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
