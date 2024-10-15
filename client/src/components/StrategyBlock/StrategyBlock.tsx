import { strategyType } from "../../assets/data/strategiesData";
import Button from "../Button/Button";
import style from "./StrategyBlock.module.scss";

interface StrategyBlockProps {
  data: strategyType;
}

export function StrategyBlock({ data }: StrategyBlockProps) {
  const { id, name, link, minSum, risk, profit, chart } = data;

  function handleClick() {
    window.open(link, "_blanc");
  }

  return (
    <article className={style.block} key={id} onClick={handleClick}>
      <div className={style.header}>
        <h4 className={style.header__name}>{name}</h4>
      </div>

      <div className={style.content}>
        <div className={style.content__info}>
          <span>Риск:</span>
          <span>{risk}</span>
        </div>
        <div className={style.content__info}>
          <span>Минимальная сумма:</span>
          <span>{minSum.toLocaleString("ru-RU")}₽</span>
        </div>
        <div className={style.content__info}>
          <span>Среднегодовая доходность:</span>
          <span>{profit}%</span>
        </div>
      </div>
      <img className={style.image} src={chart} alt="Chart" />
      <Button text={"Узнать больше"} href={link}></Button>
    </article>
  );
}
