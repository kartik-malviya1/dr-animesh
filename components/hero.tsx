"use client";

import { Star } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-eyebrow backdrop-blur-2xl border border-amber-50/10 bg-[gold]/5 text-sm ">
          <div className="hero-eyebrow-pulse"></div>
          Hoshangabad Road · Bhopal
        </div>
        <h1 style={{ fontWeight: "400" }}>
          Where Skin Finds
          <br />
          <em>Its Finest Care</em>
        </h1>
        <p className="hero-sub">
          {
            "Bhopal's premier destination for advanced clinical, aesthetic, and laser dermatology. Expert care for your skin, hair, and nails."
          }
        </p>
        <div className="hero-actions">
          <Link href="tel:+91" className="btn-glass btn-glass-solid">
            Book Consultation
          </Link>
          <Link href="#services" className="btn-glass">
            {"Explore Treatments →"}
          </Link>
        </div>

        {/* Stats */}
        <div className="md:col-span-3 grid grid-cols-3 gap-4 mt-12">
          <div className="flex flex-col items-center px-4">
            <div className="font-serif text-3xl md:text-4xl text-gold mb-1">
              12+
            </div>
            <div className="text-[9px] uppercase tracking-widest text-white/40 font-medium">
              Years Expert
            </div>
          </div>
          <div className="flex flex-col items-center px-4 border-x border-white/10">
            <div className="font-serif text-3xl md:text-4xl text-gold mb-1">
              10k+
            </div>
            <div className="text-[9px] uppercase tracking-widest text-white/40 font-medium">
              Happy Patients
            </div>
          </div>
          <div className="flex flex-col items-center px-4">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-serif text-3xl md:text-4xl text-gold">
                4.9
              </span>
              <Star
                size={20}
                fill="#b8924a"
                color="#b8924a"
                className=" items-center"
              />
            </div>
            <div className="text-[9px] uppercase tracking-widest text-white/40 font-medium">
              Review Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
