import style from "./PartnersPage.module.scss";
import Page from "../../components/Page/Page";
import { companies } from "../../assets/data/companiesData";
import { CompanyBlock } from "../../components/CompanyBlock/CompanyBlock";

export default function PartnersPage() {
  const header = "НАШИ ПАРТНЕРЫ";
  const subheader =
    "С 2012 года Цитадель-Инвест является официальным представительством в Хакасии ведущих инвестиционных компаний";
  return (
    <Page id={`partners`} header={header} subheader={subheader} color={"white"}>
      <div className={style.partners}>
        <ul className={style.description}>
          {companies.map((company) => {
            return <CompanyBlock key={company.id} data={company} />;
          })}
        </ul>
      </div>
    </Page>
  );
}