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

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <h1>Body Mass Index Calculator</h1>{" "}
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
        <div>
          <h2>Enter your details below</h2>{" "}
          <form>Metric Imperial Height Weight </form>
          <div>
            <div>
              <p>Your BMI is...</p>
              <output>{/* <!-- add score --> */}</output>
            </div>
            <div>
              Your BMI suggests you&apos;re {/* <!-- add classification -->*/}.
              Your ideal weight is between {/* <!-- add range --> */}.
            </div>
          </div>
        </div>
        <section>
          <img src={image} alt="a man eating sushi" />
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a <q>healthy weight.</q>{" "}
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </section>
        <section>
          <img src={icon_eating} alt="" />
          <h3>Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
          <img src={icon_exercise} alt="" />
          <h3>Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
          <img src={icon_sleep} alt="" />
          <h3>Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </section>
        <section>
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
          <div>
            <img src={icon_gender} alt="" />
            <h3>Gender</h3>The development and body fat composition of girls and
            boys vary with age. Consequently, a child&apos;s age and gender are
            considered when evaluating their BMI.
          </div>
          <div>
            <img src={icon_age} alt="" />
            <h3>Age</h3>In aging individuals, increased body fat and muscle loss
            may cause BMI to underestimate body fat content.{" "}
          </div>
          <div>
            <img src={icon_muscle} alt="" />
            <h3>Muscle</h3>BMI may misclassify muscular individuals as
            overweight or obese, as it doesn&apos;t differentiate muscle from
            fat.
          </div>
          <div>
            <img src={icon_pregnancy} alt="" />
            <h3>Pregnancy</h3>Expectant mothers experience weight gain due to
            their growing baby. Maintaining a healthy pre-pregnancy BMI is
            advisable to minimise health risks for both mother and child.
          </div>
          <div>
            <img src={icon_race} alt="" />
            <h3>Race</h3>Certain health concerns may affect individuals of some
            Black and Asian origins at lower BMIs than others. To learn more, it
            is advised to discuss this with your GP or practice nurse.
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
