import logo from "./assets/images/logo.svg";
import image from "./assets/images/image-man-eating.webp";
import icon_eating from "./assets/images/icon-eating.svg";
import icon_exercise from "./assets/images/icon-exercise.svg";
import icon_sleep from "./assets/images/icon-sleep.svg";
import icon_gender from "./assets/images/icon-gender.svg";
import icon_age from "./assets/images/icon-age.svg";
import icon_muscle from "./assets/images/icon-muscle.svg";
import icon_pregnancy from "./assets/images/icon-pregnancy.svg";
import icon_race from "./assets/images/icon-race.svg";

import style from "../src/styles/App.module.scss";

import Form from "./assets/components/Form";

function App() {
  return (
    <>
      <header className={style.header}>
        <img src={logo} alt="logo" className={style["header-logo"]} />
        <h1 className={`heading-xl ${style["header-heading"]}`}>
          Body Mass Index Calculator
        </h1>
        <p className="text-m">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </header>
      <main>
        <Form />
        <div className={style[`block-meaning`]}>
          <img src={image} alt="a man eating sushi" className={style.image} />
          <section className={style["section-meaning"]}>
            <h2 className={`heading-l bold ${style.subheading}`}>
              What your BMI result means
            </h2>
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
        <section className={style["section-factors"]}>
          <div className={style.factor}>
            <img src={icon_eating} alt="" />
            <div>
              <h3 className="heading-m">Healthy eating</h3>
              <p className="text-m">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </div>
          <div className={style.factor}>
            <img src={icon_exercise} alt="" />
            <div>
              <h3 className="heading-m">Regular exercise</h3>
              <p className="text-m">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </div>
          <div className={style.factor}>
            <img src={icon_sleep} alt="" />
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
            <h2 className={`heading-l ${style.subheading}`}>
              Limitations of BMI
            </h2>
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
                <img src={icon_gender} alt="" />
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
                <img src={icon_age} alt="" />
                <h3 className="heading-s">Age</h3>
              </div>
              <p className="text-m">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={icon_muscle} alt="" />
                <h3 className="heading-s">Muscle</h3>
              </div>
              <p className="text-m">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
            <div className={style["limitation-card"]}>
              <div>
                <img src={icon_pregnancy} alt="" />
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
                <img src={icon_race} alt="" />
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
