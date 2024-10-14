import { strategies } from "../../assets/data/strategiesData";
import Page from "../../components/Page/Page";
import { StrategyBlock } from "../../components/StrategyBlock/StrategyBlock";

export default function StrategiesPage() {
  const header = "ГОТОВЫЕ СТРАТЕГИИ";
  const subheader = "Получайте высокую доходность с проверенными стратегиями";

  return (
    <Page
      id="products"
      color={"black"}
      header={header}
      subheader={subheader}
      scrollType="horizontal"
    >
      {strategies.map((strategy) => {
        return <StrategyBlock data={strategy} />;
      })}
    </Page>
  );
}
