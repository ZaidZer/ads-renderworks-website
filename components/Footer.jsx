export default function Footer({ onOpenCookies }) {
  return (
    <footer className="bg-black text-white w-full">

      {/* SOCIAL FOLLOW BAR */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <span className="tracking-widest text-sm">FOLLOW US</span>

        <div className="flex gap-6 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      {/* LINKS */}
      <div className="px-8 py-6 text-xs flex flex-wrap gap-8 opacity-90">
        <a href="/about" className="hover:text-brand-red transition">ABOUT US</a>
        <a href="/contact" className="hover:text-brand-red transition">CONTACT</a>
        <a href="/services" className="hover:text-brand-red transition">SERVICES</a>
        <a href="/portfolio" className="hover:text-brand-red transition">PORTFOLIO</a>

        {/* COOKIE BUTTON NOW OPENS MODAL */}
        <button
          onClick={onOpenCookies}
          className="hover:text-brand-red transition"
        >
          COOKIE PREFERENCES
        </button>
      </div>

      {/* COPYRIGHT */}
      <div className="px-8 pb-6 text-xs opacity-60">
        © {new Date().getFullYear()} ADS Renderworks. All rights reserved.
      </div>
    </footer>
  );
}
