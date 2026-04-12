const treatments = [
  "Chemical Peels",
  "Vitiligo Surgery",
  "Xanthelasma",
  "Skin Polishing",
  "Skin Tags",
  "Cryotherapy",
  "Phototherapy",
  "Nail Surgery",
  "Fungal Infections",
  "Scar Revision",
  "Rosacea",
  "Eczema · Psoriasis",
];

export function TreatmentStrip() {
  return (
    <div className="tstrip">
      <div className="tstrip-inner">
        <div className="tstrip-label">
          Also treating
          <br />
          &amp; removing:
        </div>
        <div className="tstrip-chips">
          {treatments.map((treatment) => (
            <span key={treatment} className="tstrip-chip">
              {treatment}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
