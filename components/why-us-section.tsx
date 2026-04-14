"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    num: "01",
    title: "Experienced Dermatologist",
    description:
      "Over 12 years of clinical expertise in medical, surgical, and cosmetic dermatology.",
  },
  {
    num: "02",
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives a tailored approach — no generic prescriptions, just care that truly fits.",
  },
  {
    num: "03",
    title: "Hair Transplant Expertise",
    description:
      "Advanced FUE hair transplant surgery with proven, natural-looking results for hair loss patients.",
  },
  {
    num: "04",
    title: "Patient-Friendly Approach",
    description:
      "Known for a soft-spoken, empathetic style — patients consistently praise his calm and thorough consultations.",
  },
  {
    num: "05",
    title: "High Patient Satisfaction",
    description:
      "4.8★ rating with 400+ reviews — a trusted name for skin and hair care in Bhopal.",
  },
];

const stats = [
  { num: "12+", label: "Years of clinical experience" },
  { num: "4.8★", label: "Patient rating on Google" },
  { num: "400+", label: "Verified patient reviews" },
  { num: "₹400", label: "Consultation fee" },
];

export function WhyUsSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <section className="why-sec">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label">Why Dr. Animesh Saxena</div>
        <h2 className="s-title">
          Built on trust,
          <br />
          <em>driven by results</em>
        </h2>
      </div>
      <div className="why-layout">
        <div className="reveal" ref={revealRef2}>
          <p className="s-desc" style={{ marginBottom: 40 }}>
            Dr. Animesh Saxena believes every patient deserves more than a
            prescription — accurate diagnosis, a clear explanation, and a plan
            that delivers lasting results.
          </p>
          <div className="pillars">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="pillar">
                <div className="pil-n">{pillar.num}</div>
                <div>
                  <div className="pil-h">{pillar.title}</div>
                  <div className="pil-p">{pillar.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-d2" ref={revealRef3}>
          <div className="why-card">
            <div className="why-card-glow"></div>
            <div className="why-card-badge">
              Rejuva Clinic · Padmanabh Nagar, Bhopal
            </div>
            <div className="why-card-h">
              Expert Care —<br />
              <em>For Your Skin & Hair</em>
            </div>
            <div className="why-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="wstat">
                  <div className="wstat-n">{stat.num}</div>
                  <div className="wstat-l">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
