import { useState } from "react";
import FormInput from "./FormInput";
import FormResult from "./FormResult";
import PropTypes from "prop-types";

import style from "../../styles/Form.module.scss";

export default function Form() {
  const [isMetric, setIsMetric] = useState(true);

  function handleRadio() {
    setIsMetric((prev) => !prev);
  }

  function RadioButton({ label, checked }) {
    return (
      <div className={style.radio}>
        <input
          type="radio"
          name="unit"
          id={label.toLowerCase()}
          checked={checked}
          onChange={handleRadio}
        />
        <label htmlFor={label.toLowerCase()} className="text-m bold">
          {label}
        </label>
      </div>
    );
  }

  RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  };

  return (
    <section className={style.container}>
      <h1 className={`heading-m ${style.heading}`}>Enter your details below</h1>
      <form className={style.form}>
        <div className={style["radio-group"]}>
          <RadioButton label="Metric" checked={isMetric} />
          <RadioButton label="Imperial" checked={!isMetric} />
        </div>
        <div
          className={`${style["input-group"]} ${
            isMetric ? style["input-group--metric"] : ""
          }`}
        >
          <div>
            <p className={`${style["input-label"]} text-s`}>Height</p>
            <div className={style["imperial-group"]}>
              {isMetric ? (
                <FormInput unit="cm" />
              ) : (
                <>
                  <FormInput unit="ft" />
                  <FormInput unit="in" />
                </>
              )}
            </div>
          </div>
          <div>
            <p className={`${style["input-label"]} text-s`}>Weight</p>
            <div className={style["imperial-group"]}>
              {isMetric ? (
                <FormInput unit="kg" />
              ) : (
                <>
                  <FormInput unit="st" />
                  <FormInput unit="lbs" />
                </>
              )}
            </div>
          </div>
        </div>
      </form>
      <FormResult isMetric={isMetric} />
    </section>
  );
}
