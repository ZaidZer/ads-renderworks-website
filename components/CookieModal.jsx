"use client";
import React from "react";

export default function CookieModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[999]">
      <div className="bg-white text-black p-8 rounded-xl max-w-md shadow-xl relative">

        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>

        <p className="text-gray-700 mb-6">
          We use cookies to improve your browsing experience. Manage your preferences below.
        </p>

        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked readOnly />
            <span>Essential Cookies (required)</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Analytics Cookies</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Personalization Cookies</span>
          </label>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition"
        >
          Save Preferences
        </button>

      </div>
    </div>
  );
}
