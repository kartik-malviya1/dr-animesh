"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function CtaSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="cta-sec">
      <div className="cta-overlay"></div>
      <div className="cta-content reveal" ref={revealRef}>
        <h2>Your skin deserves<br /><em>expert, honest care</em></h2>
        <p>
          {"Take the first step. Book an in-clinic consultation and receive a personalised treatment plan at The Derma Clinic, Bhopal."}
        </p>
        <div className="cta-btns">
          <Link href="tel:+91" className="btn-glass btn-glass-solid">Book Consultation</Link>
          <Link href="#services" className="btn-glass">View All Services</Link>
        </div>
        <div className="cta-badges">
          <span className="cta-badge">No commitment required</span>
          <span className="cta-badge">Personalised plan</span>
          <span className="cta-badge">Walk-ins welcome</span>
        </div>
      </div>
    </section>
  )
}
