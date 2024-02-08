import PropTypes from "prop-types";
import styles from "./InputBox.module.css";

const InputBox = ({ type, placeholder, value, onChange, className }) => {
  const inputClasses = `${styles.input} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClasses}
    />
  );
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string, // Define className prop
};

export default InputBox;
