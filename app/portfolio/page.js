"use client";
import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* =============================== */}
      {/* HEADER */}
      {/* =============================== */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold mb-3">Portfolio</h1>
          <p className="text-lg opacity-90">A showcase of our finest work.</p>
        </div>
      </section>

      {/* =============================== */}
      {/* FEATURED PROJECTS */}
      {/* =============================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

  {/* APARTMENT 1 */}
  <a href="#modern-apartment">
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 
                    hover:border-white/40 transition group cursor-pointer">
      <img
        src="/images/interior-one.jpg"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Modern Apartment</h3>
        <p className="text-neutral-400 text-sm">Interior Visualization</p>
      </div>
    </div>
  </a>

  {/* VR OFFICE */}
  <a href="#vr-office-section">
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 
                    hover:border-white/40 transition group cursor-pointer">
      <img
        src="/images/vr-office.jpg"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">VR Office Experience</h3>
        <p className="text-neutral-400 text-sm">Virtual Reality Walkthrough</p>
      </div>
    </div>
  </a>

  {/* NEW THIRD PROJECT — APARTMENT COMPLEX */}
  <a href="#apartment-complex-section">
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 
                    hover:border-white/40 transition group cursor-pointer">
      <img
        src="/images/apartment-complex.jpg"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Apartment Complex</h3>
        <p className="text-neutral-400 text-sm">Exterior Visualization</p>
      </div>
    </div>
  </a>

</div>

      </section>

      {/* =============================== */}
{/* INTERIOR SHOWCASE — CINEMATIC GRID */}
{/* =============================== */}
<section id="interior-section" className="py-28">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-6 text-center">
      Interior Visualization Showcase
    </h2>

    <p className="text-neutral-300 text-center text-lg max-w-3xl mx-auto mb-16">
      Cinematic interior imagery focusing on warm lighting, material richness,
      and atmospheric storytelling — crafted for real-estate and interior design studios.
    </p>

    {/* CREATIVE CINEMATIC GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* WIDE IMAGE */}
      <div className="col-span-1 md:col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/interior-one.jpg"
          className="w-full h-[500px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* TALL LEFT */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src="/images/interior-two.jpg"
          className="w-full h-[640px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* STACKED RIGHT */}
      <div className="flex flex-col gap-8">
        <img
          src="/images/interior-three.jpg"
          className="w-full h-[300px] object-cover rounded-3xl hover:scale-105 transition-all duration-700"
        />
        <img
          src="/images/interior-four.jpg"
          className="w-full h-[300px] object-cover rounded-3xl hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* WIDE BOTTOM IMAGE */}
      <div className="col-span-1 md:col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/interior-five.jpg"
          className="w-full h-[450px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

    </div>

  </div>
</section>



{/* =============================== */}
{/* EXTERIOR SHOWCASE — CINEMATIC GRID */}
{/* =============================== */}
<section id="exterior-section" className="py-28 border-t border-neutral-800">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-10 text-center">
      Exterior Visualization Showcase
    </h2>

    <p className="text-neutral-300 text-center text-lg max-w-2xl mx-auto mb-16">
      High-end exterior renders focused on light, atmosphere, and architectural storytelling.
    </p>

    {/* CREATIVE CINEMATIC GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* FULL HEIGHT LEFT */}
      <div className="md:col-span-1 overflow-hidden rounded-3xl">
        <img
          src="/images/exterior-one.jpg"
          className="w-full h-[750px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* TWO STACKED CENTER IMAGES */}
      <div className="flex flex-col gap-8">
        <img
          src="/images/exterior-two.jpg"
          className="w-full h-[360px] object-cover rounded-3xl hover:scale-105 transition-all duration-700"
        />
        <img
          src="/images/exterior-three.jpg"
          className="w-full h-[360px] object-cover rounded-3xl hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* TALL RIGHT IMAGE */}
      <div className="md:col-span-1 overflow-hidden rounded-3xl">
        <img
          src="/images/exterior-four.jpg"
          className="w-full h-[750px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* FULL WIDTH SCENE */}
      <div className="col-span-1 md:col-span-3 overflow-hidden rounded-3xl">
        <img
          src="/images/exterior-five.jpg"
          className="w-full h-[500px] object-cover hover:scale-105 transition-all duration-700"
        />
      </div>

    </div>

  </div>
</section>


      {/* =============================== */}
      {/* VR OFFICE */}
      {/* =============================== */}
      <section id="vr-office-section" className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">VR Office Experience</h2>

        <div className="overflow-hidden rounded-2xl shadow-xl mb-12">
          <img
            src="/images/vr-office.jpg"
            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-neutral-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          An immersive virtual reality walkthrough allowing clients to explore office layouts
          with depth, scale, and realism — before construction begins. Built for architectural
          planning and experiential presentations.
        </p>
      </section>

    </main>
  );
}
