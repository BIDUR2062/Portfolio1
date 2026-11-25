
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={`section-header ${className}`.trim()}
      style={{ textAlign: align }}
    >
      {eyebrow && (
        <span className="section-subtitle">{eyebrow}</span>
      )}

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
