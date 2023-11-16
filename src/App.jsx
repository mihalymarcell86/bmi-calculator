import style from "../src/styles/App.module.scss";

import Form from "./assets/components/Form";
import InputContextProvider from "./assets/context/InputContext";

const imgURL = "./assets/images";
const images = import.meta.glob("./assets/images/*.*", {
  as: "url",
  eager: true,
});

function App() {
  return (
    <>
      <header className={style.header}>
        <img
          src={images[`${imgURL}/logo.svg`]}
          alt="logo"
          className={style["header-logo"]}
        />
      </header>
      <main>
        <div className={style["main-top"]}>
          <div className={style["block-intro"]}>
            <h1 className="heading-xl">
              Body Mass
              <br />
              Index Calculator
            </h1>
            <p className="text-m">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <InputContextProvider>
            <Form />
          </InputContextProvider>
        </div>
        <div className={style[`block-meaning`]}>
          <div className={style["image-container"]}>
            <img
              src={images[`${imgURL}/image-man-eating-removebg.webp`]}
              alt="a man eating sushi"
              className={style.image}
            />
          </div>
          <section className={style["section-meaning"]}>
            <h2 className="heading-l">What your BMI result means</h2>
            <p className="text-m">
              A BMI range of 18.5 to 24.9 is considered a &#39;healthy
              weight.&#39; Maintaining a healthy weight may lower your chances
              of experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </section>
        </div>
        <section className={style["section-tips"]}>
          <div className={style.tip}>
            <img src={images[`${imgURL}/icon-eating.svg`]} alt="" />
            <div>
              <h3 className="heading-m">Healthy eating</h3>
              <p className="text-m">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </div>
          <div className={style.tip}>
            <img src={images[`${imgURL}/icon-exercise.svg`]} alt="" />
            <div>
              <h3 className="heading-m">Regular exercise</h3>
              <p className="text-m">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </div>
          <div className={style.tip}>
            <img src={images[`${imgURL}/icon-sleep.svg`]} alt="" />
            <div>
              <h3 className="heading-m">Adequate sleep</h3>
              <p className="text-m">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </div>
        </section>
        <section className={style["section-limitations"]}>
          <div className={style["limitations-intro"]}>
            <h2 className="heading-l">Limitations of BMI</h2>
            <p className="text-m">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className={style["limitations-list"]}>
            <div className={style["limitation-card"]}>
              <div>
                <img src={images[`${imgURL}/icon-gender.svg`]} alt="" />
                <h3 className="heading-s">Gender</h3>
              </div>
              <p className="text-m">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child&apos;s age and gender are
                considered when evaluating their BMI.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={images[`${imgURL}/icon-age.svg`]} alt="" />
                <h3 className="heading-s">Age</h3>
              </div>
              <p className="text-m">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={images[`${imgURL}/icon-muscle.svg`]} alt="" />
                <h3 className="heading-s">Muscle</h3>
              </div>
              <p className="text-m">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={images[`${imgURL}/icon-pregnancy.svg`]} alt="" />
                <h3 className="heading-s">Pregnancy</h3>
              </div>
              <p className="text-m">
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={images[`${imgURL}/icon-race.svg`]} alt="" />
                <h3 className="heading-s">Race</h3>
              </div>
              <p className="text-m">
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
