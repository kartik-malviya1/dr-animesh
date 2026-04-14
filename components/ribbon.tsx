export function Ribbon() {
  const items = [
    "MBBS · MD (Dermatology)",
    "Laser & Cosmetic Surgeon",
    "Over 12 Years Experience",
    "In-Clinic Consultations",
    "Rejuva Clinic, Bhopal",
  ];

  return (
    <div className="ribbon">
      <div className="ribbon-track">
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="r-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
