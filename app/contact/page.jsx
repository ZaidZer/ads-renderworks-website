export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* =============================== */}
      {/* HEADER */}
      {/* =============================== */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg opacity-90">Let’s bring your ideas to life.</p>
        </div>
      </section>

      {/* =============================== */}
      {/* CONTACT SECTION */}
      {/* =============================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>

            <p className="text-gray-700 mb-8 text-lg">
              Whether you're planning a new project, need architectural visuals,
              or want an immersive VR experience — we’re here to help.
            </p>

            <div className="space-y-6 text-gray-800 text-lg">
              <p>
                <span className="font-bold text-red-600">Phone:</span><br />
                +31 6 28900166
              </p>

              <p>
                <span className="font-bold text-red-600">Email:</span><br />
                adsrenderworks@gmail.com
              </p>

              <p>
                <span className="font-bold text-red-600">Location:</span><br />
                3034 ES Rotterdam<br />Netherlands
              </p>

              <p>
                <span className="font-bold text-red-600">Availability:</span><br />
                Mon — 09:00 – 18:00 <br />
                Tue — 09:00 – 18:00 <br />
                Wed — 09:00 – 18:00 <br />
                Thu — 09:00 – 18:00 <br />
                Fri — 09:00 – 18:00
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="group w-12 h-12 flex items-center justify-center rounded-lg 
                           bg-neutral-900 text-white transition-all duration-300
                           hover:bg-[#0A66C2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.99H4.7V24H.22V8.99zM8.48 8.99h4.27v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.48 0 5.31 2.95 5.31 6.79V24H17.8v-7.64c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24H8.48V8.99z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="group w-12 h-12 flex items-center justify-center rounded-lg 
                           bg-neutral-900 text-white transition-all duration-300
                           hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] 
                           hover:to-[#515bd4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm4.3-10.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORM (Formsubmit) */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">Send a Message</h2>

            <form
              action="https://formsubmit.co/zerhanez@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect after success – vervang met je echte URL als je die hebt */}
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/contact?sent=success"
              />

              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border rounded-none focus:outline-none focus:border-red-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border rounded-none focus:outline-none focus:border-red-600"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full p-3 border rounded-none focus:outline-none focus:border-red-600"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-none
                           hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* NEWSLETTER */}
      {/* =============================== */}
      <section className="bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-900 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xs tracking-[0.3em] text-neutral-600 uppercase mb-3">
            Get The Latest
          </h3>

          <h2 className="text-3xl font-semibold mb-6">
            Never Miss an Update from ADS Renderworks
          </h2>

          <a
            href="/contact"
            className="px-12 py-3.5 border border-neutral-900 text-neutral-900 uppercase 
                       tracking-wide font-semibold hover:bg-neutral-900 hover:text-white transition"
          >
            Stay Informed
          </a>
        </div>
      </section>

    </div>
  );
}
