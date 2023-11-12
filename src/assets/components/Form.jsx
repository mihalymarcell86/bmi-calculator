import { useState } from "react";
import FormInput from "./FormInput";

import style from "../../styles/Form.module.scss";

export default function Form() {
  const [isMetric, setIsMetric] = useState(true);

  function handleRadio() {
    setIsMetric((prev) => !prev);
  }

  return (
    <section className={style.container}>
      <h1 className={`heading-m ${style.heading}`}>Enter your details below</h1>
      <form className={style.form}>
        <div className={style["radio-group"]}>
          <div className={style.radio}>
            <input
              type="radio"
              name="unit"
              id="metric"
              checked={isMetric}
              onChange={handleRadio}
            />
            <label htmlFor="metric" className="text-m bold">
              Metric
            </label>
          </div>
          <div className={style.radio}>
            <input
              type="radio"
              name="unit"
              id="imperial"
              checked={!isMetric}
              onChange={handleRadio}
            />
            <label htmlFor="imperial" className="text-m bold">
              Imperial
            </label>
          </div>
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
      <div className={style.result}>
        <div>
          <p className={`text-m bold ${style["result-paragraph"]}`}>
            Your BMI is...
          </p>
          <output
            htmlFor="metric imperial height weight"
            className="heading-xl bold"
          >
            23.4 {/* dummy */}
            {/* <!-- add score --> */}
          </output>
        </div>
        <div>
          <p className={`text-s ${style[`result-evaluation`]}`}>
            Your BMI suggests you&apos;re a healthy weight
            {/* <!-- add classification -->*/}. Your ideal weight is between{" "}
            <strong className="bold">
              63.3kgs - 85.2kgs{/* <!-- add range --> */}.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
