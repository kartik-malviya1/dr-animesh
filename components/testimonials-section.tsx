"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    text: "Their honest approach and the naturalness of the results genuinely impressed me. I've been to several clinics in Bhopal before — DermaGnathix is on a completely different level. No unnecessary upselling, just real results.",
    initials: "VD",
    name: "Vikram Desai",
  },
  {
    text: "The treatments are highly effective and Dr. Annu Priya takes the time to explain everything thoroughly. I always leave feeling genuinely informed and cared for — not just another patient number.",
    initials: "PS",
    name: "Priya Sharma",
    delay: "reveal-d1",
  },
  {
    text: "My acne was a persistent problem for years with no lasting results elsewhere. After starting treatment at DermaGnathix, the change has been remarkable. I only wish I had come sooner.",
    initials: "RS",
    name: "Rohit Sinha",
    delay: "reveal-d2",
  },
  {
    text: "The entire team is supportive and professional. I was nervous before my procedure but felt completely comfortable throughout. Truly compassionate and expert care from start to finish.",
    initials: "AM",
    name: "Anjali Mehta",
    delay: "reveal-d3",
  },
]

export function TestimonialsSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="testi-sec" id="testimonials">
      <div className="reveal" ref={revealRef}>
        <div className="s-label">Patient Stories</div>
        <h2 className="s-title">Heard it from<br /><em>our patients</em></h2>
      </div>
      <div className="testi-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  text: string
  initials: string
  name: string
  delay?: string
}

function TestimonialCard({ text, initials, name, delay = "" }: TestimonialCardProps) {
  const revealRef = useScrollReveal()

  return (
    <div className={`tcard reveal ${delay}`} ref={revealRef}>
      <div className="tcard-q">&quot;</div>
      <p className="tcard-text">{text}</p>
      <div className="tcard-meta">
        <div className="tcard-av">{initials}</div>
        <div>
          <div className="tcard-name">{name}</div>
          <div className="tcard-stars">★★★★★</div>
        </div>
      </div>
    </div>
  )
}
