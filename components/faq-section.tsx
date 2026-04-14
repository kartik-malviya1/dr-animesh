"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";

const faqs = [
  {
    question:
      "What are the consultation timings at Rejuva Clinic?",
    answer:
      "Dr. Animesh Saxena consults at Rejuva Clinic, Padmanabh Nagar, Bhopal from Monday to Saturday between 3:00 PM – 7:00/8:00 PM. The clinic is closed on Sundays. Walk-ins are welcome, though an appointment is preferred for shorter wait times.",
  },
  {
    question: "What is the consultation fee for Dr. Animesh Saxena?",
    answer:
      "The consultation fee at Rejuva Clinic is approximately ₹400, making it one of the most accessible and affordable expert dermatology consultations in Bhopal. You can also book an appointment online via Practo or Justdial.",
  },
  {
    question: "What conditions does Dr. Animesh Saxena treat?",
    answer:
      "Dr. Saxena treats a wide range of skin and hair conditions including acne, acne scars, pigmentation, melasma, eczema, psoriasis, vitiligo, seborrheic dermatitis, dandruff, hair fall, hair thinning, skin allergies, rashes, warts, moles, and more. He also specialises in Dermatovenereology (skin & STD conditions).",
  },
  {
    question: "Does Dr. Animesh Saxena perform hair transplant surgery?",
    answer:
      "Yes. Dr. Animesh Saxena is an experienced Hair Transplant Specialist performing FUE (Follicular Unit Extraction) procedures at Rejuva Clinic. FUE is a minimally invasive method that delivers natural-looking, permanent results with minimal downtime and no linear scarring.",
  },
  {
    question: "What are Dr. Animesh Saxena's qualifications?",
    answer:
      "Dr. Animesh Saxena holds an MBBS from Barkatullah University, Bhopal (2011), and an MD in Dermatology, Venereology & Leprosy from Ruxmaniben Deepchand Gardi Medical College (R.D. Gardi), Ujjain (2015). He is registered with the Madhya Pradesh Medical Council (Reg. No. 13130) and has over 12 years of clinical experience.",
  },
  {
    question: "How many sessions will I need for my skin/hair treatment?",
    answer:
      "The number of sessions depends on your specific condition and its severity. For example, PRP therapy for hair fall typically requires 3–6 monthly sessions, while acne scar treatments may need 4–6 sessions. Dr. Saxena provides a personalised treatment roadmap at your first consultation.",
  },
  {
    question: "Where is Rejuva Clinic located?",
    answer:
      "Rejuva Clinic is located at C-6, First Floor, Padmanabh Nagar, above Maruti Showroom, opposite Ondoor Store, near Prabhat Square, Subhash Nagar, Bhopal, Madhya Pradesh. You can find directions on Google Maps by searching 'Rejuva Clinic Dr Animesh Saxena Bhopal'.",
  },
];


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="faq-layout">
        <div className="faq-sticky reveal" ref={revealRef1}>
          <div className="s-label">Common Questions</div>
          <h2 className="s-title">
            Got <em>questions?</em>
          </h2>
          <p className="s-desc">
            We believe in full transparency. Here are the questions our patients
            ask most — answered clearly and honestly.
          </p>
          <br />
          <div className="faq-contact">
            <p>
              {
                "Still have something on your mind? We're happy to talk you through it before your consultation."
              }
            </p>
            <Link href="tel:+91" className="btn-sm">
              Call Us Directly
            </Link>
          </div>
        </div>
        <div className="faq-list reveal reveal-d1" ref={revealRef2}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-q" onClick={() => toggleFaq(index)}>
                <span className="faq-q-text">{faq.question}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-a">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
