export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">

      {/* ==================== */}
      {/* HERO SECTION */}
      {/* ==================== */}
      <section 
        className="relative h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-3">Our Services</h1>
          <p className="text-lg text-neutral-300">
            High-end visualization, animation, and immersive experiences.
          </p>
        </div>
      </section>


      {/* ============================ */}
      {/* SERVICE CATEGORY: VISUALIZATION */}
      {/* ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Service Category
          </p>

          <h2 className="text-4xl font-semibold mb-6">3D Visualization</h2>

          <p className="text-neutral-300 leading-relaxed mb-8">
            Photorealistic visualizations crafted for architecture, real estate 
            development, and interior spaces. Our renders help clients understand 
            space, emotion, materiality, and design intent with cinematic clarity.
          </p>

          <a 
            href="/portfolio#interior"
            className="inline-block mt-4 px-10 py-3 border border-white hover:bg-white hover:text-black transition uppercase tracking-wide"
          >
            View Visuals
          </a>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl">
          <img 
            src="/images/interior-one.jpg"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

      </section>



      {/* ============================ */}
      {/* SERVICE CATEGORY: ANIMATION */}
      {/* ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE LEFT */}
        <div className="overflow-hidden rounded-xl order-1 lg:order-none">
          <img 
            src="/images/hero-2.jpg"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Service Category
          </p>

          <h2 className="text-4xl font-semibold mb-6">3D Animation & Flythroughs</h2>

          <p className="text-neutral-300 leading-relaxed mb-8">
            Cinematic animations and architectural flythroughs that bring your designs 
            to life with motion, atmosphere, and smooth storytelling.
          </p>

          <a 
            href="/portfolio"
            className="inline-block mt-4 px-10 py-3 border border-white hover:bg-white hover:text-black transition uppercase tracking-wide"
          >
            View Animations
          </a>
        </div>

      </section>



      {/* ============================ */}
      {/* SERVICE CATEGORY: VR */}
      {/* ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Immersive Experiences
          </p>

          <h2 className="text-4xl font-semibold mb-6">Virtual Reality Walkthroughs</h2>

          <p className="text-neutral-300 leading-relaxed mb-8">
            Step inside your design before it’s built. Our VR environments give your 
            clients the power to explore every corner of their project in a fully 
            interactive, immersive world.
          </p>

          <a 
            href="/portfolio#vr"
            className="inline-block mt-4 px-10 py-3 border border-white hover:bg-white hover:text-black transition uppercase tracking-wide"
          >
            View VR Projects
          </a>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl">
          <img 
            src="/images/vr-office.jpg"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

      </section>

    </main>
  );
}
