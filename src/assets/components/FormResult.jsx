import PropTypes from "prop-types";
import { useContext } from "react";
import { InputContext } from "../context/InputContext";

import style from "../../styles/FormOutput.module.scss";

export default function FormOutput({ isMetric }) {
  const [units] = useContext(InputContext);
  const BMI = units.kg / (units.cm / 100) ** 2;

  let classification = "";

  if (BMI < 18.5) classification = "underweight";
  else {
    if (BMI < 25) classification = "a healthy weight";
    else {
      if (BMI < 30) classification = "overweight";
      else classification = "obese";
    }
  }

  return (
    <div className={style.result}>
      <div>
        <p className={`text-m bold ${style["result-paragraph"]}`}>
          Your BMI is...
        </p>
        <output
          htmlFor="metric imperial height weight"
          className="heading-xl bold"
        >
          {BMI.toFixed(1)}
        </output>
      </div>
      <div>
        <p className={`text-s ${style[`result-evaluation`]}`}>
          Your BMI suggests you&apos;re {classification}. Your ideal weight is
          between{" "}
          <strong className="bold">
            {/*Write utility function to convert quantities */}
            {isMetric
              ? `${(18.5 * (units.cm / 100) ** 2).toFixed(1)}kgs - ${(
                  24.9 *
                  (units.cm / 100) ** 2
                ).toFixed(1)}kgs.`
              : `${((18.5 / 703) * (units.ft * 12 + +units.in) ** 2).toFixed(
                  1
                )}lbs - ${(
                  (24.9 / 703) *
                  (units.ft * 12 + +units.in) ** 2
                ).toFixed(1)}lbs.`}
          </strong>
        </p>
      </div>
    </div>
  );
}

FormOutput.propTypes = {
  isMetric: PropTypes.bool.isRequired,
};
