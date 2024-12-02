import { useState } from "react";
import { strategies } from "../../assets/data/strategiesData";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";
import { StrategyBlock } from "../../components/StrategyBlock/StrategyBlock";
import style from "./StrategiesPage.module.scss";

export default function StrategiesPage() {
  const header = "ФИЗИЧЕСКИМ ЛИЦАМ";
  const subheader = "Получайте высокую доходность с проверенными стратегиями автоследования";
  const risks = new Map<number, string>();
  risks.set(1, "Консервативный");
  risks.set(2, "Умеренный");
  risks.set(3, "Агрессивный");

  const [riskSelected, setRiskSelected] = useState<number>(1);

  return (
    <Page id="products" color={"white"} header={header} subheader={subheader}>
      <div className={style.selector}>
        <span>Уровень риска:</span>
        <div className={style.buttons}>
          {[...risks.entries()].map(([id, name]) => (
            <Button
              text={name}
              key={id}
              filled={riskSelected === id}
              onClick={() => setRiskSelected(id)}
            />
          ))}
        </div>
      </div>

      <div className={style.strategies}>
        {strategies
          .filter((strategy) => strategy.risk === risks.get(riskSelected))
          .map((strategy) => {
            return <StrategyBlock data={strategy} />;
          })}
      </div>
    </Page>
  );
}
