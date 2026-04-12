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
          <em>Hoshangabad Road, Bhopal</em>
        </h2>
      </div>
      <div className="loc-layout">
        <div className="loc-blocks reveal" ref={revealRef2}>
          <div className="loc-block">
            <h5>Address</h5>
            <p>
              Shop No. 3107, First Floor, C-Block, Surendra Landmark
              <br />
              Above Vijay Super Market, Near Aashima Mall
              <br />
              Hoshangabad Road, Bhopal, MP 462004
            </p>
          </div>
          <div className="loc-block">
            <h5>Our Specialists</h5>
            <p>
              Dr. Vivek Choudhary — MBBS, MD (Dermatology)
              <br />
              Consultant Dermatologist, Laser & Cosmetic Surgeon
            </p>
          </div>
          <div className="loc-block">
            <h5>Consultations</h5>
            <p>
              In-Clinic Consultations Available
              <br />
              Appointments Preferred · Walk-ins Welcome
            </p>
          </div>
          <div className="loc-block">
            <h5>Get Directions</h5>
            <p>
              <Link
                href="https://maps.google.com/?q=The+Derma+Clinic+Dr+Vivek+Choudhary+Bhopal"
                target="_blank"
              >
                {"Open in Google Maps →"}
              </Link>
            </p>
          </div>
        </div>
        <div className="loc-img reveal reveal-d2" ref={revealRef3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.715434270733!2d77.45432577536236!3d23.180583879063185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4357525730fd%3A0xad4b9e10c574247a!2sDr.%20Vivek%20Choudhary-%20The%20Derma%20Clinic%7C%20Dermatologist%20In%20Bhopal%7CLaser%7CSkin%7CHair%7CAcne%7CTreatment%7CBhopal!5e0!3m2!1sen!2sin!4v1775993703821!5m2!1sen!2sin"
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
