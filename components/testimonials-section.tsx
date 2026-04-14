"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Highly professional and well-equipped dermatology center! I came here for a consultation regarding my hair loss, and the doctor provided a thorough explanation of the treatment options. The clinic is spotless, and they maintain great hygiene practices with sterilization and fogging machines. I also tried their laser hair removal, and the results have been amazing! Highly recommend for anyone with skin or hair issues",
    initials: "AY",
    name: "Ayush Yadav",
  },
  {
    text: "I was suffering from psoriasis since 30 years. Ibwas quite disappointed with so many dermatologists, then i came to Dr Animesh Saxena. I not only got relief but could get good results. Now i am living my normal life. Dr Saxena prescribed minimal medicines with efficacious results. I strongly recommend him.",
    initials: "AJ",
    name: "Amit Jain",
    delay: "reveal-d1",
  },
  {
    text: "Must say the best doctor for skin , and the way he talk to patient and the behaviour towards the patient and one more important thing staff of this clinic is very coperative and very polite in nature , recommend to all visit once if you guys suffering with any type of skin problem . Thanks sir.",
    initials: "SJ",
    name: "Sonal Jain",
    delay: "reveal-d2",
  },
  {
    text: "I consulted Dr. Animesh Saxena for a mole removal on my face and a small cyst on my back. He guided me honestly about the expectations and suggested the best treatment. I opted for laser mole removal, and I’m very happy with the results. It left no scar at all, and my skin looks fresh as if there was never anything there. His communication, guidance, and caring nature are excellent. I would definitely recommend Dr. Saxena to anyone looking for safe and effective dermatology treatment.",
    initials: "SA",
    name: "Sarfaraz Ansari",
    delay: "reveal-d3",
  },
];

export function TestimonialsSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="testi-sec" id="testimonials">
      <div className="reveal" ref={revealRef}>
        <div className="s-label">Patient Stories</div>
        <h2 className="s-title">
          Heard it from
          <br />
          <em>our patients</em>
        </h2>
      </div>
      <div className="testi-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  text: string;
  initials: string;
  name: string;
  delay?: string;
}

function TestimonialCard({
  text,
  initials,
  name,
  delay = "",
}: TestimonialCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`tcard reveal ${delay}`} ref={revealRef}>
      <div className="tcard-q">&quot;</div>
      <p className="tcard-text">{text}</p>
      <div className="tcard-meta">
        <div className="tcard-av">{initials}</div>
        <div>
          <div className="tcard-name">{name}</div>
          <div className="flex">
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
