import Link from "next/link"

const specialities = [
  { label: "Skin Treatment", href: "#" },
  { label: "Hair Treatment", href: "#" },
  { label: "Dermatosurgery", href: "#" },
  { label: "Lasers", href: "#" },
  { label: "Anti-Ageing", href: "#" },
  { label: "Aesthetic Surgery", href: "#" },
]

const quickLinks = [
  { label: "Our Doctors", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Find Us", href: "#location" },
]

const contactLinks = [
  { label: "Instagram", href: "https://www.instagram.com/drvivekchoudharydermatologist/" },
  { label: "Facebook", href: "https://www.facebook.com/drvivekchoudharydermatologist/" },
  { label: "Eka.care", href: "https://www.eka.care/doctor/dr-vivek-choudhary-dermatologist-bhopal" },
  { label: "Justdial", href: "https://www.justdial.com/Bhopal/The-Derma-Clinic-Skin-Hair-Cosmetic-Laser-Centre-Dr-Vivek-Choudhary-Md-Near-Aashima-Mall-Above-Vijay-Super-Market-Hoshangabad-Road/0755PX755-X755-210721101032-I3L3_BZDET" },
  { label: "Google Maps", href: "https://maps.google.com/?q=The+Derma+Clinic+Dr+Vivek+Choudhary+Bhopal" },
]

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">The Derma Clinic</div>
          <div className="footer-sub">by Dr. Vivek Choudhary</div>
          <p className="footer-desc">
            {"Bhopal's premier skin, hair, laser & cosmetic clinic providing advanced clinical and aesthetic treatments by expert dermatologists."}
          </p>
        </div>
        <div className="fcol">
          <h5>Specialities</h5>
          <ul>
            {specialities.map((item) => (
              <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h5>Quick Links</h5>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h5>Contact</h5>
          <ul>
            {contactLinks.map((item) => (
              <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 The Derma Clinic by Dr. Vivek Choudhary · Hoshangabad Road, Bhopal · All rights reserved.</p>
      </div>
    </footer>
  )
}
