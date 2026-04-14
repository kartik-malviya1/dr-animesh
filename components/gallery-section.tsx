"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

const galleryItems = [
  {
    image:
      "https://images.jdmagicbox.com/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-k22l6eqpdl.jpg",
    label: "Hair Transplant",
  },
  {
    image:
      "https://images.jdmagicbox.com/v2/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-h0qwmvpamh.jpg",
    label: "",
  },
  {
    image:
      "https://images.jdmagicbox.com/comp/service_catalogue/dermatologists-attr-hair-grafting-der1748-3.jpg",
    label: "",
  },
  {
    image:
      "https://images.jdmagicbox.com/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-lsehwedxm5.jpg",
    label: "",
  },
  {
    image:
      "https://images.jdmagicbox.com/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-m1ih3l02gn.jpg",
    label: "",
  },
  {
    image:
      "https://images.jdmagicbox.com/v2/comp/bhopal/d3/0755px755.x755.190704131014.b2d3/catalogue/dr-animesh-saxena-subhash-nagar-bhopal-dermatologists-fmdxkhhtst.jpg",
    label: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNZ0CvSCIlE5KKDq8L3ek4dwE4wHjgObM-PtYDq=s1360-w1360-h1020-rw",
    label: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMH102Kk4OG4cw7oPBz7GojXQfsv9kNOQFE7yYo=s1360-w1360-h1020-rw  ",
    label: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNntVyDpQ68SZ_jF8vtT8Fkm97GUS02d_fypeuR=s1360-w1360-h1020-rw ",
    label: "",
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
