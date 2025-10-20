import CV from "../../assets/Ogabek_Amonov_CV (1).pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" style={{ padding: "15px" }}>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" style={{ padding: "15px" }}>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
