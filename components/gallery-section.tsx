"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=800&q=80",
    label: "Clinic Reception",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80",
    label: "Vitiligo Surgery",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&q=80",
    label: "Laser Procedure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80",
    label: "Treatment Chamber",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
    label: "Hair Transplant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=80",
    label: "DPN Removal",
  },
];

export function GallerySection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="gallery-sec">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label">Clinical Gallery</div>
        <h2 className="s-title">
          Outcomes that
          <br />
          <em>speak for themselves</em>
        </h2>
      </div>
      <div className="gal-grid reveal" ref={revealRef2}>
        {galleryItems.map((item, index) => (
          <div key={index} className="gi">
            <img
              src={item.image}
              alt={item.label}
              width={index === 0 ? 800 : 500}
              height={index === 0 ? 454 : 220}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="gi-ov">
              <span className="gi-lbl">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
