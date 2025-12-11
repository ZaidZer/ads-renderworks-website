"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSlider() {
  const SLIDES = [
    {
      type: "video",
      src: "/videos/hero-1.mp4",
      title: "About ADS Renderworks",
      subtitle: "High-end visualization, rendering, and immersive experiences.",
      buttonText1: "About Us",
      buttonLink1: "/about",
      buttonText2: "Contact",
      buttonLink2: "/contact",
    },

    {
      type: "image",
      src: "/images/hero-1.jpeg",
      title: "Explore Our Work",
      subtitle: "Discover our latest architectural visualization projects.",
      buttonText1: "Portfolio",
      buttonLink1: "/portfolio",
    },

    {
      type: "image",
      src: "/images/hero-2.jpg",
      title: "Precision Meets Creativity",
      subtitle: "We transform concepts into photorealistic visuals.",
      buttonText1: "Our Services",
      buttonLink1: "/services",
    },

    {
      type: "image",
      src: "/images/hero-3.jpg",
      title: "Immersive VR Experiences",
      subtitle: "Step inside your project before it's built.",
      buttonText1: "Try VR",
      buttonLink1: "/services#vr",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // Change slide safely
  const goTo = (i) => {
    const total = SLIDES.length;
    const next = ((i % total) + total) % total;
    setCurrent(next);
  };

  const nextSlide = () => goTo(current + 1);
  const prevSlide = () => goTo(current - 1);

  // Auto-slide timer logic
  useEffect(() => {
    const slide = SLIDES[current];

    if (slide.type === "video" && videoRef.current) {
      const duration = videoRef.current.duration;
      if (!isNaN(duration) && duration > 0) {
        const timeout = setTimeout(nextSlide, duration * 1000);
        return () => clearTimeout(timeout);
      }
    }

    // Image slides: 6 seconds
    const timer = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Slide content */}
      <div className="absolute inset-0">
        {SLIDES[current].type === "video" ? (
          <video
            ref={videoRef}
            src={SLIDES[current].src}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={SLIDES[current].src}
            className="w-full h-full object-cover"
            alt=""
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- TEXT BLOCK (Genesis sized) --- */}
      <div className="absolute left-[4rem] bottom-[18%] z-10 
                      max-w-md sm:max-w-lg text-white space-y-4">

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight drop-shadow-lg">
          {SLIDES[current].title}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed opacity-90 drop-shadow-md">
          {SLIDES[current].subtitle}
        </p>

        <div className="flex gap-4 pt-2">
          {SLIDES[current].buttonText1 && (
            <a
              href={SLIDES[current].buttonLink1}
              className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-md shadow hover:bg-gray-200 transition"
            >
              {SLIDES[current].buttonText1}
            </a>
          )}

          {SLIDES[current].buttonText2 && (
            <a
              href={SLIDES[current].buttonLink2}
              className="px-6 py-3 bg-transparent border border-white text-white text-sm font-semibold rounded-md shadow hover:bg-white hover:text-black transition"
            >
              {SLIDES[current].buttonText2}
            </a>
          )}
        </div>

      </div>

      {/* --- Slider Navigation (bottom right) --- */}
      <div className="absolute bottom-8 right-8 flex items-center gap-6 z-20 text-white">

        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="text-2xl px-2 hover:text-brand-red transition"
        >
          ‹
        </button>

        {/* Dots (with white bar animation) */}
        <div className="flex gap-3 items-center">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition 
                ${i === current ? "bg-white" : "bg-white/50 hover:bg-white"}
              `}
            ></div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="text-2xl px-2 hover:text-brand-red transition"
        >
          ›
        </button>

      </div>
    </section>
  );
}
