import style from "../../styles/Form.module.scss";

export default function Form() {
  return (
    <section className={style.container}>
      <h1 className={`heading-m ${style.heading}`}>Enter your details below</h1>
      <form className={style.form}>
        <div className={style["radio-group"]}>
          <div className={style.radio}>
            <input type="radio" name="unit" id="metric" value="metric" />
            <label htmlFor="metric" className="text-m bold">
              Metric
            </label>
          </div>
          <div className={style.radio}>
            <input type="radio" name="unit" id="imperial" value="imperial" />
            <label htmlFor="imperial" className="text-m bold">
              Imperial
            </label>
          </div>
        </div>
        <div className={style["input-group"]}>
          <div>
            <label htmlFor="height" className={"text-s"}>
              Height
            </label>
            <div className={style["imperial-group"]}>
              <div className={style["nr-input"]}>
                <input
                  type="number"
                  id="height"
                  inputMode="numeric"
                  placeholder="0"
                  className="heading-m bold"
                />
                <p className="heading-m bold">cm</p>
              </div>
              {/* second input field (conditional)*/}
            </div>
          </div>
          <div>
            <label htmlFor="weight" className={"text-s"}>
              Weight
            </label>
            <div className={style["imperial-group"]}>
              <div className={style["nr-input"]}>
                <input
                  type="number"
                  id="weight"
                  inputMode="numeric"
                  placeholder="0"
                  className="heading-m bold"
                />
                <p className="heading-m bold">kg</p>
              </div>
              {/* second input field (conditional)*/}
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
