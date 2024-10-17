import Button from "../../components/Button/Button";
import style from "./WelcomePage.module.scss";
import { id } from "../../assets/data/strategiesData";

export default function WelcomePage() {
  return (
    <section className={style.page} id="/">
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
            href={`https://www.finam.ru/landing/otkrytie-scheta-new/${id}`}
          />
          <Button text={"Узнать больше"} />
        </div>
      </div>

      <div className={style.image}> </div>
    </section>
  );
}
