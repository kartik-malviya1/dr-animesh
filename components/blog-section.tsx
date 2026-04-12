"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80",
    date: "Dec 2024",
    title: "Chemical Peels for Face: Your Complete Guide",
    excerpt:
      "Understanding how peels work, what to expect, and how to prepare for optimal results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605497787368-8a7e7c80a88d?w=500&q=80",
    date: "Dec 2024",
    title: "Hair Transplant in Bhopal: Your Guide",
    excerpt:
      "FUE vs FUT, what to expect, and choosing the right surgeon for lasting results.",
    delay: "reveal-d1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500&q=80",
    date: "Dec 2024",
    title: "Facial Pigmentation Treatment Options",
    excerpt:
      "Melasma, sun damage, and post-inflammatory hyperpigmentation — a treatment overview.",
    delay: "reveal-d2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563897539633-7374c276c212?w=500&q=80",
    date: "Dec 2024",
    title: "Acne Scar Treatment in Bhopal",
    excerpt:
      "Laser resurfacing to subcision — a clinical overview of acne scar reduction options.",
    delay: "reveal-d3",
  },
];

export function BlogSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="blog-sec" id="blog">
      <div className="reveal" ref={revealRef}>
        <div className="s-label">Patient Education</div>
        <h2 className="s-title">
          Insights &amp; <em>Clinical Reads</em>
        </h2>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  delay?: string;
}

function BlogCard({ image, date, title, excerpt, delay = "" }: BlogCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`bcard reveal ${delay}`} ref={revealRef}>
      <div className="bcard-img-wrap">
        <img
          src={image}
          alt={title}
          width={500}
          height={160}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="bcard-body">
        <div className="bcard-date">{date}</div>
        <div className="bcard-title">{title}</div>
        <div className="bcard-exc">{excerpt}</div>
        <Link href="#" className="bcard-link">
          {"Read more →"}
        </Link>
      </div>
    </div>
  );
}
