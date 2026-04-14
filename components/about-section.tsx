"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="about-sec" id="about">
      <div className="lg:about-intro  reveal hidden">
        <div className="s-label">Our Specialist</div>
        <h2 className="s-title">
          Expert care. <em>Lasting results.</em>
        </h2>
        <p className="s-desc">
          Rejuva Clinic is led by Dr. Animesh Saxena, a highly experienced
          Dermatologist, Dermatosurgeon, and Hair Transplant Specialist
          combining clinical excellence with personalized care to help you look
          and feel your absolute best.
        </p>
      </div>

      {/* Desktop Integrated Layout (Reference Style) */}
      <div className="about-grid reveal" ref={revealRef}>
        <div className="about-portrait-side">
          <div className="badge-rating">
            <div className="stars">★★★★★</div>
            <div className="count">400+ REVIEWS</div>
          </div>
          <img
            src="/drsaxena.png"
            alt="Dr. Animesh Saxena"
            className="about-img-main"
          />
          <div className="badge-exp">
            <h4>12+</h4>
            <p>Years of Clinical</p>
          </div>
        </div>

        <div className="about-content-side">
          <div className="s-label">Meet the Doctor</div>
          <h2 className="s-title">
            Expertise You
            <br />
            <em>Can Trust</em>
          </h2>
          <p className="s-desc" style={{ maxWidth: "100%" }}>
            Dr. Animesh Saxena is a leading dermatologist in Bhopal specializing
            in skin, hair, and cosmetic treatments. With over a decade of
            experience, he offers advanced solutions for acne, pigmentation,
            hair fall, and hair transplant procedures — ensuring safe,
            effective, and personalized care for every patient.
          </p>

          <div className="quals-v2">
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>MBBS — Barkatullah University, Bhopal (2011)</h5>
                <p>Strong medical foundation from a premier university</p>
              </div>
            </div>
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>
                  MD (Dermatology, Venereology & Leprosy) — R.D. Gardi Medical
                  College, Ujjain (2015)
                </h5>
                <p>
                  Specialized postgraduate training in dermatology & venereology
                </p>
              </div>
            </div>
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>Dermatosurgeon & Hair Transplant Specialist</h5>
                <p>
                  Expert in FUE hair transplant, scar revision & cosmetic
                  procedures
                </p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <a
              href="tel:+919926923745"
              className="nav-cta"
              style={{ position: "static", padding: "14px 32px" }}
            >
              Book a Consultation
            </a>
            <a href="#services" className="btn-about-secondary">
              View Treatments
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div
        className="doctors-wrap desktop-hidden"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <DoctorCard
          image="/drsaxena.png"
          badge="Dermatologist & Hair Transplant Specialist"
          name="Dr. Animesh Saxena"
          role="MBBS · MD (Dermatology, Venereology & Leprosy)"
          description="Dr. Animesh Saxena is a trusted dermatologist in Bhopal with over 12 years of clinical experience. Known for his patient-friendly approach, accurate diagnosis, and long-term solutions for skin, hair, and cosmetic concerns of all age groups."
          qualifications={[
            "MBBS — Barkatullah University, Bhopal (2011)",
            "MD in Dermatology, Venereology & Leprosy — R.D. Gardi Medical College, Ujjain (2015)",
            "Expertise in Hair Transplant (FUE), Dermatosurgery & Cosmetology",
            "12+ Years of Clinical Practice",
          ]}
          pubTitle="Specialisations"
          pubText="Acne & Scars · Pigmentation · Hair Transplant (FUE) · PRP Therapy · Keloids · Eczema · Psoriasis · Dermatovenereology"
        />
      </div>
    </section>
  );
}

interface DoctorCardProps {
  image: string;
  badge: string;
  name: string;
  role: string;
  description: string;
  qualifications: string[];
  pubTitle: string;
  pubText: string;
  delay?: string;
}

function DoctorCard({
  image,
  badge,
  name,
  role,
  description,
  qualifications,
  pubTitle,
  pubText,
  delay = "",
}: DoctorCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`doc reveal ${delay}`} ref={revealRef}>
      <div className="doc-img-wrap">
        <img src={image} alt={name} width={700} height={380} />
        <div className="doc-img-badge glass-dark">{badge}</div>
      </div>
      <div className="doc-body">
        <div className="doc-name">{name}</div>
        <div className="doc-role">{role}</div>
        <div className="doc-divider"></div>
        <p className="doc-desc">{description}</p>
        <div className="doc-quals">
          {qualifications.map((qual, index) => (
            <div key={index} className="doc-qual">
              {qual}
            </div>
          ))}
        </div>
        <div className="doc-pub">
          <div className="doc-pub-title">{pubTitle}</div>
          <div className="doc-pub-text">{pubText}</div>
        </div>
      </div>
    </div>
  );
}
