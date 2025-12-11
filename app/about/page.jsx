export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center text-white px-4 animate-fadein">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">
            About ADS Renderworks
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95 drop-shadow-md">
            Turning architectural ideas into powerful visual and immersive experiences.
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* MISSION + VISION */}
      {/* ============================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to transform architectural concepts into impactful visual experiences
              through high-quality 2D/3D rendering, real-time workflows, and immersive VR, MR, and AR technologies.
            </p>

            <h2 className="text-4xl font-bold mt-12 mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our vision is to become a leading global provider of visualization and immersive solutions,
              constantly innovating and shaping the future of architectural communication.
            </p>
          </div>

          <img
            src="/images/exterior-five.jpg"
            alt="Mission Visual"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ============================== */}
      {/* EXPERTISE */}
      {/* ============================== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12">Our Expertise</h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">3D Architectural Visualization</h3>
              <p className="text-gray-700">Photorealistic renders and detailed 3D modeling for architecture and interiors.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">Animations & Flythroughs</h3>
              <p className="text-gray-700">Cinematic movement, storytelling, and polished animated presentations.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">Immersive VR / AR / MR</h3>
              <p className="text-gray-700">Real-time interactive experiences for presentations and design exploration.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* VALUE PROPOSITION */}
      {/* ============================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• High-quality visualization at competitive pricing</li>
              <li>• Faster turnaround than large studios</li>
              <li>• VR / MR / AR capabilities</li>
              <li>• Clear communication & fast revisions</li>
              <li>• Experience across architecture, real estate & design</li>
              <li>• Real-time pipeline for maximum efficiency</li>
            </ul>
          </div>

          <img
            src="/images/exterior-two.jpg.jpg"
            alt="Client Value"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

{/* ============================== */}
{/* HOW WE WORK (IMPROVED LAYOUT) */}
{/* ============================== */}

<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <img
      src="/images/interior-five.jpeg"
      alt="Workflow Visual"
      className="w-full h-[450px] object-cover rounded-xl shadow-lg"
    />

    {/* RIGHT CONTENT */}
    <div className="space-y-8">

      {/* BLOCK 1 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-bold mb-4">Our Workflow</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          • Project briefing & consultation <br />
          • Concept development & initial modeling <br />
          • Rendering & iterative revisions <br />
          • Final delivery <br />
          • Long-term support
        </p>
      </div>

      {/* BLOCK 2 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-lg text-gray-700 leading-relaxed">
          We follow a modern, optimized production pipeline focused on speed,
          quality, and efficiency—ensuring every project receives dedicated
          attention from concept to final delivery.
        </p>
      </div>

    </div>

  </div>
</section>


    </div>
  );
}
