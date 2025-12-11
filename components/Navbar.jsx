"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-[14px]">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/ads-logo.png"
            alt="ADS Renderworks"
            width={115}
            height={45}
            className="opacity-90 hover:opacity-100 transition"
          />
        </Link>

        {/* NAV ITEMS */}
        <div className="flex items-center gap-12 text-[17px] font-semibold text-gray-800">

<div className="flex items-center gap-12 text-[17px] font-semibold text-gray-800">

  <HoverLink href="/about">About</HoverLink>
  <HoverLink href="/services">Services</HoverLink>
  <HoverLink href="/portfolio">Portfolio</HoverLink>
  <HoverLink href="/contact">Contact</HoverLink>

</div>


        </div>
      </div>

      {/* Hover underline animation */}
      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding-bottom: 3px;
          transition: transform 0.2s ease;
        }

        .nav-link:hover {
          transform: translateY(-1px);
          color: #c40000; /* brand red */
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0%;
          background: #c40000;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <Link href={href} className="nav-link">
      {label}
    </Link>
  );
}
function HoverLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative 
        group 
        transition-all 
        duration-300
      "
    >
      {/* Text */}
      <span className="group-hover:text-red-600 transition-colors duration-300">
        {children}
      </span>

      {/* Underline animation */}
      <span
        className="
          absolute
          left-0
          -bottom-1
          h-[2px]
          w-0
          bg-red-600
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}
