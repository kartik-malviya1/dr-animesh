"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Skin Treatments",
    image:
      "https://images.jdmagicbox.com/v2/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-6s2lebj6eo.jpg",
    description:
      "Expert treatment for acne, acne scars, pigmentation, melasma, skin allergies, eczema, psoriasis, dermatitis, and keloid management.",
    chips: ["Acne & Scars", "Melasma", "Pigmentation", "Eczema"],
  },
  {
    num: "02",
    title: "Hair Treatments",
    image:
      "https://images.jdmagicbox.com/v2/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-3rwnrbu39k.jpg",
    description:
      "Comprehensive hair fall management, dandruff & scalp disorders, PRP therapy, and advanced hair growth treatments.",
    chips: ["Hair Fall", "PRP Therapy", "Dandruff", "Scalp Disorders"],
    delay: "reveal-d1",
  },
  {
    num: "03",
    title: "Hair Transplant",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNyhKIrIBC-pkSfxqaM6L9_pnnLvagEBNuv48Dj=s1360-w1360-h1020-rw",
    description:
      "Advanced FUE (Follicular Unit Extraction) hair transplant surgery delivering natural, permanent results for hair loss and baldness.",
    chips: ["FUE Technique", "Permanent Results", "Natural Look", "Alopecia"],
    delay: "reveal-d2",
  },
  {
    num: "04",
    title: "Alopecia Treatment",
    image:
      "https://lh3.googleusercontent.com/geougc/AF1QipMF7tXIP6YGR6rY3DxiMkfSzApy2-2k7pNATZJR=h305-no",
    description:
      "Targeted treatment for all types of alopecia including androgenetic alopecia, alopecia areata, and traction alopecia using medical and procedural approaches.",
    chips: [
      "Androgenetic Alopecia",
      "Alopecia Areata",
      "Traction Alopecia",
      "Hair Growth",
    ],
  },
  {
    num: "05",
    title: "Acne Treatement",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-kzieh4yjaz.jpg",
    description:
      "Effective treatment for acne, acne scars, pigmentation, melasma, skin allergies, eczema, psoriasis, dermatitis, and keloid management.",
    chips: ["Acne", "Acne Scars", "Pigmentation", "Melasma"],
    delay: "reveal-d1",
  },
  {
    num: "06",
    title: "Hair Treatment",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMd7Hbuxr-Z8B0UwowX7OuA50nEC_7q2ZCR4_-s=s1360-w1360-h1020-rw",
    description:
      "Comprehensive hair fall management, dandruff & scalp disorders, PRP therapy, and advanced hair growth treatments.",
    chips: ["Hair Fall", "PRP Therapy", "Dandruff", "Scalp Disorders"],
    delay: "reveal-d2",
  },
];

export function ServicesSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="services-sec" id="services">
      <div className="services-head">
        <div className="reveal" ref={revealRef1}>
          <div className="s-label">Core Specialities</div>
          <h2 className="s-title">
            Everything your skin
            <br />
            <em>needs, in one place</em>
          </h2>
        </div>
        <p className="s-desc reveal reveal-d1" ref={revealRef2}>
          From everyday dermatology to advanced aesthetic and laser procedures —
          each treatment is personalised, evidence-based, and delivered with
          genuine care.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} {...service} />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  num: string;
  title: string;
  image: string;
  description: string;
  chips: string[];
  delay?: string;
}

function ServiceCard({
  num,
  title,
  image,
  description,
  chips,
  delay = "",
}: ServiceCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`svc reveal ${delay}`} ref={revealRef}>
      <div className="svc-img">
        <img
          src={image}
          alt={title}
          width={600}
          height={190}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="svc-num">{num}</div>
      </div>
      <div className="svc-body">
        <div className="svc-title">{title}</div>
        <div className="svc-desc">{description}</div>
        <div className="svc-chips">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
