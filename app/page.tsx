import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white w-full overflow-x-hidden">

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* ========================= */}
      {/* INTRO SECTION */}
      {/* ========================= */}
      <section className="bg-gradient-to-r from-neutral-950 to-neutral-900 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">

          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
            About ADS Renderworks
          </h1>

          <p className="text-lg text-neutral-300 max-w-3xl leading-relaxed mb-10">
            High-end visualization, rendering, and immersive experiences that
            transform architectural concepts into atmospheric, cinematic worlds.
          </p>

          <div className="flex gap-6">
            <a
              href="/about"
              className="px-14 py-5 bg-white text-neutral-900 border border-white uppercase tracking-wide font-semibold hover:bg-neutral-200 transition"
            >
              About Us
            </a>

            <a
              href="/contact"
              className="px-14 py-5 border border-white text-white uppercase tracking-wide font-semibold hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </div>

        </div>
      </section>

      {/* ========================= */}
{/* SERVICES — BLACK THEME, FULL-BLEED IMAGE */}
{/* ========================= */}

<section className="bg-black text-white py-32">
  <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE */}
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
        Our Capabilities
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Services Tailored for<br />Visual Excellence
      </h2>

      <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-14">
        From concept to final frame, we create hyper-realistic imagery,
        immersive VR environments, and cinematic animations using
        industry-leading tools and next-generation rendering technology.
      </p>

      <div className="space-y-6">
        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-white transition">
          <h3 className="text-lg font-semibold mb-2">3D Architectural Visualization</h3>
          <p className="text-neutral-400 text-sm">
            Interior and exterior imagery crafted with cinematic lighting, depth, and detail.
          </p>
        </div>

        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-white transition">
          <h3 className="text-lg font-semibold mb-2">Virtual Reality Walkthroughs</h3>
          <p className="text-neutral-400 text-sm">
            Fully immersive VR experiences that allow clients to explore spaces before construction.
          </p>
        </div>

        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-white transition">
          <h3 className="text-lg font-semibold mb-2">3D Animation & Flythroughs</h3>
          <p className="text-neutral-400 text-sm">
            Cinematic animations that bring architectural stories to life.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE — MASSIVE CINEMATIC IMAGE */}
    <div className="relative w-full h-[750px] lg:h-[850px] overflow-hidden rounded-2xl">
      <img
        src="/images/hero-1.jpeg"
        alt="Services Visual"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.15]"
      />
    </div>

  </div>
</section>


      {/* ========================= */}
      {/* PROJECTS */}
      {/* ========================= */}
      <section className="bg-neutral-50 text-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase text-center mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold text-center mb-6">
            Recent Projects
          </h2>

          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-14">
            A selection of our immersive, photoreal environments crafted for architecture,
            real estate, and design studios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectCard
              title="Modern Luxury Villa"
              image="/images/villa.jpg"
              category="Exterior Visualization"
            />

            <ProjectCard
              title="Contemporary Living Space"
              image="/images/apartment.jpg"
              category="Interior Visualization"
            />

            <ProjectCard
              title="Corporate VR Experience"
              image="/images/vr-office.jpg"
              category="Immersive VR"
            />
          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* TESTIMONIALS */}
      {/* ========================= */}
      <section className="bg-neutral-950 text-white border-t border-neutral-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase text-center mb-4">
            Client Voices
          </p>

          <h2 className="text-4xl font-semibold text-center mb-12">
            What Our Partners Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl">
              <p className="italic text-neutral-300 mb-6">
                “ADS Renderworks transformed our proposal. Investors approved instantly.”
              </p>
              <p className="text-sm tracking-wide uppercase text-neutral-400">Eva Jansen</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl">
              <p className="italic text-neutral-300 mb-6">
                “The VR walkthrough blew us away — clients understood everything immediately.”
              </p>
              <p className="text-sm tracking-wide uppercase text-neutral-400">Marcus de Vries</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl">
              <p className="italic text-neutral-300 mb-6">
                “High-quality animations delivered fast. Amazing collaboration.”
              </p>
              <p className="text-sm tracking-wide uppercase text-neutral-400">Sofia Martins</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* NEWSLETTER */}
      {/* ========================= */}
      <section className="bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-900 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-3">
            Get The Latest
          </h3>

          <h2 className="text-3xl font-semibold mb-8">
            Never Miss an Update from ADS Renderworks
          </h2>

          <a
            href="/contact"
            className="px-12 py-3.5 border border-neutral-900 text-neutral-900 uppercase tracking-wide font-semibold hover:bg-neutral-900 hover:text-white transition"
          >
            Stay Informed
          </a>

        </div>
      </section>

    </main>
  );
}
