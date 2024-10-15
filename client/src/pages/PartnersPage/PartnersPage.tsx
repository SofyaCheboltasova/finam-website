import style from "./PartnersPage.module.scss";
import Page from "../../components/Page/Page";
import { companies, points } from "../../assets/data/companiesData";
import { InfiniteCarousel } from "../../components/InfiniteCarousel/InfiniteCarousel";

export default function PartnersPage() {
  const header = "НАШИ ПАРТНЕРЫ";
  const subheader =
    "С 2012 года Цитадель-Инвест является официальным представительством ведущих инвестиционных компаний";

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
    <Page id={`partners`} header={header} subheader={subheader} color={"white"}>
      <div className={style.partners}>
        {getCarousel()}
        <ul className={style.description}>
          <h3>В рамках сотрудничества мы предоставляем:</h3>

          <div className={style.points}>
            {points.map((point) => {
              return <li className={style.point}>{point}</li>;
            })}
          </div>
        </ul>
      </div>
    </Page>
  );
}
