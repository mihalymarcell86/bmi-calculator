import PropTypes from "prop-types";

import style from "../../styles/FormInput.module.scss";

export default function FormInput({ unit }) {
  return (
    <div className={style["nr-input"]}>
      <input
        type="number"
        inputMode="numeric"
        placeholder="0"
        className="heading-m bold"
      />
      <p className="heading-m bold">{unit}</p>
    </div>
  );
}

FormInput.propTypes = {
  unit: PropTypes.string.isRequired,
};
