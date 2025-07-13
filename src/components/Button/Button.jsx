import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variantClass = variant === "danger" ? styles.danger : styles.primary;

  return (
    <button
      type={type}
      className={`${styles.base} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
