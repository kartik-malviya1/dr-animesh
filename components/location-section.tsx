"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export function LocationSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <section className="loc-sec" id="location">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label" style={{ color: "var(--sage3)" }}>
          Visit Our Clinic
        </div>
        <h2 className="s-title w">
          Find us in
          <br />
          <em>Padmanabh Nagar, Bhopal</em>
        </h2>
      </div>
      <div className="loc-layout">
        <div className="loc-blocks reveal" ref={revealRef2}>
          <div className="loc-block">
            <h5>Address</h5>
            <p>
              C-6, First Floor, Padmanabh Nagar
              <br />
              Above Maruti Showroom, Opp. Ondoor Store
              <br />
              Near Prabhat Square, Bhopal, MP
            </p>
          </div>
          <div className="loc-block">
            <h5>Our Specialist</h5>
            <p>
              Dr. Animesh Saxena — MBBS, MD (Dermatology)
              <br />
              Dermatologist · Dermatosurgeon · Hair Transplant Specialist
            </p>
          </div>
          <div className="loc-block">
            <h5>Clinic Hours</h5>
            <p>
              Mon – Sat: 3:00 PM – 7:00/8:00 PM
              <br />
              Sunday: Closed · Fee: ₹400
            </p>
          </div>
          <div className="loc-block">
            <h5>Get Directions</h5>
            <p>
              <Link
                href="https://maps.google.com/?q=Rejuva+clinic+Dr+Animesh+Saxena+Bhopal"
                target="_blank"
              >
                {"Open in Google Maps →"}
              </Link>
            </p>
          </div>
        </div>
        <div className="loc-img reveal reveal-d2" ref={revealRef3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.6727117367277!2d77.431153!3d23.251289399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d67c09985d%3A0x6d5f8953ff35d7f1!2sDr.Animesh%20Saxena!5e1!3m2!1sen!2sin!4v1776196946408!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "24px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
