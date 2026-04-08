import "./Button.css";

function Button({ children, outline, className = "", ...props }) {
  const classes = "btn" + ` ${className}` + (outline ? " btn-outline" : "");

  return (
    <button className={classes} {...props}>
      <span className="btn-text">{children}</span>
    </button>
  );
}

export default Button;
