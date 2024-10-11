import style from "./PartnersPage.module.scss";
import Page from "../../components/Page/Page";
import { companies } from "../../assets/data/companiesData";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";

export default function PartnersPage() {
  const header = "НАШИ ПАРТНЕРЫ";
  const subheader =
    "С 2012 года Цитадель-Инвест является официальным представительством различных инвестиционных компаний";
  return (
    <Page header={header} subheader={subheader} color={"white"}>
      <div className={style.partners}>
        {companies.map((company) => (
          <InfoBlock key={company.id} data={company} />
        ))}
      </div>
    </Page>
  );
}
