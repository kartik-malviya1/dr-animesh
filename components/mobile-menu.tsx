"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
      <Link href="#about" onClick={onClose}>
        About
      </Link>
      <Link href="#services" onClick={onClose}>
        Services
      </Link>
      <Link href="#results" onClick={onClose}>
        Results
      </Link>
      <Link href="#testimonials" onClick={onClose}>
        Reviews
      </Link>
      <Link href="#faq" onClick={onClose}>
        FAQ
      </Link>
      <Link href="#location" onClick={onClose}>
        Find Us
      </Link>
      <Link href="tel:+91" className="mobile-menu-cta" onClick={onClose}>
        Book Consultation
      </Link>
    </div>
  );
}
