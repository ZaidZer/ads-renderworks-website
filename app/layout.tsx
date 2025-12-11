"use client";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieModal from "@/components/CookieModal";

export default function RootLayout({ children }) {
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* NAVBAR ALWAYS AT TOP */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

        {/* COOKIE MODAL */}
        <CookieModal 
          open={cookieOpen}
          onClose={() => setCookieOpen(false)}
        />

        {/* FOOTER WITH WORKING COOKIE BUTTON */}
        <Footer onOpenCookies={() => setCookieOpen(true)} />

      </body>
    </html>
  );
}
