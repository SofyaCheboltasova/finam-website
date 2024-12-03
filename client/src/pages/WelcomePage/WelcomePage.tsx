import Button from "../../components/Button/Button";
import style from "./WelcomePage.module.scss";
import { id } from "../../assets/data/customersData.ts";

export default function WelcomePage() {
  return (
    <section className={style.page} id="/">
      <div className={style.content}>
        <div className={style.content__text}>
          <h1>РАЦИОНАЛЬНЫЙ ПОДХОД К ИНВЕСТИЦИЯМ</h1>
          <p className={style.text__description}>
            «Цитадель-Инвест» — официальный представитель <br/>«ФИНАМ Инвестиции» в республике Хакасия
            <br/>
            <br/>
            Более 1000 клиентов за 12 лет работы
          </p>
        </div>
        <div className={style.content__buttons}>
          <Button
            text={"Открыть счет онлайн"}
            filled
            href={`https://www.finam.ru/landing/otkrytie-scheta-new/${id}`}
          />
        </div>
      </div>

      <div className={style.image}> </div>
    </section>
  );
}