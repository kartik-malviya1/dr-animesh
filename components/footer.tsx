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
  { label: "Call: +91 99269 23745", href: "tel:+919926923745" },
  { label: "Practo Profile", href: "https://www.practo.com/bhopal/doctor/animesh-saxena-general-practitioner" },
  { label: "Docindia Profile", href: "https://www.docindia.org/doctors/bhopal/dr-animesh-saxena-dermatology" },
  { label: "Google Maps", href: "https://maps.google.com/?q=Rejuva+clinic+Dr+Animesh+Saxena+Bhopal" },
]

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Rejuva Clinic</div>
          <div className="footer-sub">by Dr. Animesh Saxena</div>
          <p className="footer-desc">
            {"Bhopal's trusted skin, hair & cosmetic clinic. Expert dermatology, hair transplant (FUE), PRP therapy, and personalized treatment by Dr. Animesh Saxena, MD Dermatologist."}
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
        <p>© 2025 Rejuva Clinic by Dr. Animesh Saxena · Padmanabh Nagar, Bhopal · All rights reserved.</p>
      </div>
    </footer>
  )
}
