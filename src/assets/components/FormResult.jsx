import PropTypes from "prop-types";
import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { convertImperial } from "../utilities/imperial-coverter";

import style from "../../styles/FormResult.module.scss";

export default function FormOutput({ isMetric }) {
  const [units] = useContext(InputContext);
  const BMI = units.kg / (units.cm / 100) ** 2;

  const healthy_min_metric = 18.5 * (units.cm / 100) ** 2;
  const healthy_max_metric = 24.9 * (units.cm / 100) ** 2;
  const healthy_min_imperial = convertImperial(
    (18.5 / 703) * (units.ft * 12 + +units.in) ** 2,
    "lbs"
  );
  const healthy_max_imperial = convertImperial(
    (24.9 / 703) * (units.ft * 12 + +units.in) ** 2,
    "lbs"
  );

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
      {(+units.kg === 0 || +units.cm === 0) && (
        <div>
          <h2 className="heading-m">Welcome!</h2>
          <p className="text-s">
            Enter your height and weight and you&apos;ll see your BMI result
            here
          </p>
        </div>
      )}
      {units.kg > 0 && units.cm > 0 && (
        <>
          <div>
            <p className={`text-m bold ${style["result-paragraph"]}`}>
              Your BMI is...
            </p>
            {isMetric ? (
              <output htmlFor="metric kg cm" className="heading-xl bold">
                {BMI.toFixed(1)}
              </output>
            ) : (
              <output
                htmlFor="imperial st lbs ft in"
                className="heading-xl bold"
              >
                {BMI.toFixed(1)}
              </output>
            )}
          </div>
          <div>
            <p className={`text-s ${style[`result-evaluation`]}`}>
              Your BMI suggests you&apos;re {classification}. Your ideal weight
              is between{" "}
              <strong className="bold">
                {isMetric
                  ? `${healthy_min_metric.toFixed(
                      1
                    )}kgs - ${healthy_max_metric.toFixed(1)}kgs.`
                  : `${
                      healthy_min_imperial[0] > 0
                        ? healthy_min_imperial[0].toFixed() + "st"
                        : ""
                    } ${
                      healthy_min_imperial[1] > 0
                        ? healthy_min_imperial[1].toFixed() + "lbs"
                        : ""
                    } - ${
                      healthy_max_imperial[0] > 0
                        ? healthy_max_imperial[0].toFixed() + "st"
                        : ""
                    } ${
                      healthy_max_imperial[1] > 0
                        ? healthy_max_imperial[1].toFixed() + "lbs"
                        : ""
                    }.`}
              </strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

FormOutput.propTypes = {
  isMetric: PropTypes.bool.isRequired,
};
