
import { ArrowUpRight } from "lucide-react";
import "./Button.css";

function Button({
  children,
  href,
  variant = "primary",
  size = "medium",
  icon = true,
  className = "",
  onClick,
  type = "button",
  target,
  rel,
}) {
  const buttonClasses = [
    "button",
    `button-${variant}`,
    `button-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
