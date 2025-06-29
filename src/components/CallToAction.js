import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-blue-800 text-white text-center py-16 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Optimize Your Fuel Management?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg leading-relaxed text-blue-100">
          Join forward-thinking businesses that rely on Nevloh Limited to power their growth with efficient and reliable fuel solutions.
        </p>
        {/* Changed to /contact as "Request a Demo" implies contacting */}
        <a
          href="/contact"
          className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Get a Free Quote Today
        </a>
      </div>
    </section>
  );
}
