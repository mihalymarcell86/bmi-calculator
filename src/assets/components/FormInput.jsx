import PropTypes from "prop-types";

import { useContext } from "react";
import { InputContext } from "../context/InputContext";

import style from "../../styles/FormInput.module.scss";

export default function FormInput({ unit }) {
  const [state, dispatch] = useContext(InputContext);

  function handleChange({ target: { value } }) {
    dispatch({
      type: "UPDATE",
      payload: {
        value: isNaN(value) ? 0 : value,
        unit: unit,
      },
    });
  }

  function handleBlur({ target: { value } }) {
    if ((unit === "in" && value > 11) || (unit === "lbs" && value > 13))
      dispatch({ type: "CONVERT", payload: { value: value, unit: unit } });
  }

  return (
    <div className={style["nr-input"]}>
      <input
        inputMode="numeric"
        placeholder="0"
        className="heading-m bold"
        id={unit}
        onChange={handleChange}
        onBlur={handleBlur}
        value={state[unit] > 0 ? Number(state[unit]).toFixed() : ""}
      />
      <p className="heading-m bold">{unit}</p>
    </div>
  );
}

FormInput.propTypes = {
  unit: PropTypes.string.isRequired,
};
