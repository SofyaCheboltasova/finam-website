import Button from "../../components/Button/Button";
import style from "./WelcomePage.module.scss";

export default function WelcomePage() {
  return (
    <section className={style.page}>
      <div className={style.content}>
        <div className={style.content__text}>
          <h1>РАЦИОНАЛЬНЫЙ ПОДХОД К ИНВЕСТИЦИЯМ</h1>
          <p>
            Мы посвятили 20 лет рынку ценных бумаг,
            <br />
            чтобы делиться опытом с вами
          </p>
        </div>
        <div className={style.content__buttons}>
          <Button
            text={"Открыть счет онлайн"}
            filled
            href="https://www.finam.ru/landing/otkrytie-scheta-new/?AgencyBAckofficeID=4%C2%A0425&amp;agent=2a48d454-1dae-%204115-885d-1f33a37d363d"
          />
          <Button text={"Узнать больше"} />
        </div>
      </div>

      <div className={style.image}> </div>
    </section>
  );
}
