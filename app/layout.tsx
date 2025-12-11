"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieModal from "@/components/CookieModal";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />

        {children}

        <CookieModal open={cookieOpen} onClose={() => setCookieOpen(false)} />
        <Footer onOpenCookies={() => setCookieOpen(true)} />
      </body>
    </html>
  );
}
