import style from "./PartnersPage.module.scss";
import Page from "../../components/Page/Page";
import { companies } from "../../assets/data/companiesData";
import { InfiniteCarousel } from "../../components/InfiniteCarousel/InfiniteCarousel";
import { CompanyBlock } from "../../components/CompanyBlock/CompanyBlock";

export default function PartnersPage() {
  const header = "НАШИ ПАРТНЕРЫ";
  const subheader =
    "С 2012 года Цитадель-Инвест является официальным представительством в Хакасии ведущих инвестиционных компаний";

  function getCarousel() {
    const items: React.ReactNode[] = [];
    companies.map((company) => {
      const item = (
        <div className={style.company}>
          <img src={company.logo} alt="" />
          {/* <div>{company.description}</div> */}
        </div>
      );
      items.push(item);
    });
    return <InfiniteCarousel items={items} />;
  }

  return (
    <Page id={`partners`} header={header} subheader={subheader} color={"black"}>
      <div className={style.partners}>
        {/* {getCarousel()} */}
        <ul className={style.description}>
          {companies.map((company) => {
            return <CompanyBlock data={company} />;
          })}

          {/* <div className={style.points_column}>
              <h4>Для физических лиц:</h4>
              <div className={style.points}>
                {points.map((point) => {
                  return <li className={style.point}>{point}</li>;
                })}
              </div>
            </div>
            <div className={style.points_column}>
            <h4>Для юридических лиц:</h4>
              <div className={style.points}>
                {points.map((point) => {
                  return <li className={style.point}>{point}</li>;
                })}
              </div>
            </div> */}
        </ul>
      </div>
    </Page>
  );
}
