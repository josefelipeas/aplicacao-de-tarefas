import "./Input.css";

function Input(props) {
  const { placeholder, className, required, type = "text", ...rest } = props;
  const classes = "input" + (className ? ` ${className}` : "");

  return (
    <label className="label">
      {placeholder}
      {required && <span className="required">*</span>}
      <div>
        <input
          className={classes}
          placeholder={placeholder}
          required={required}
          type={type}
          {...rest}
        ></input>
      </div>
    </label>
  );
}

export default Input;
