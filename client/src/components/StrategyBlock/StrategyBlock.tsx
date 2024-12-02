import { strategyType } from "../../assets/data/strategiesData";
import style from "./StrategyBlock.module.scss";
import {InfoBlock} from "../InfoBlock/InfoBlock.tsx";

interface StrategyBlockProps {
  data: strategyType;
}

export function StrategyBlock({ data }: StrategyBlockProps) {
  const { id, name, link, minSum, risk, profit, chart } = data;
  return (
      <InfoBlock id={id} link={link} name={name} src={chart}>
          <>
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
      </>
    </InfoBlock>
  );
}