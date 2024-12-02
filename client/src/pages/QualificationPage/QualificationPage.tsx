import { InfiniteCarousel } from "../../components/InfiniteCarousel/InfiniteCarousel";
import Page from "../../components/Page/Page";
import style from "./QualificationPage.module.scss";

export default function QualificationPage() {
  const header = "КВАЛИФИКАЦИЯ";
  const subheader =
    "Директор обладает 20-летним опытом практической работы на фондовом рынке, аттестованный специалист по рынку ценных бумаг:";

  function getCarousel() {
    const items = [];
    for (let i = 1; i < 4; i++) {
      const src = `public/images/docs/${i}.jpg`;
      const className = style.image__rect;
      const doc = <img src={src} alt="Document" className={className} />;
      items.push(doc);
    }
    return <InfiniteCarousel items={items} />;
  }

  // TDOD: замазать данные паспорта
  return (
    <Page id="team" header={header} subheader={subheader} color={"white"}>
      <div className={style.images}>
        <div className={style.team}>
          <img
            src="public/images/team/1.jpg"
            alt=""
            className={style.img__square}
          />
          <img
            src="public/images/team/2.jpg"
            alt=""
            className={style.img__square}
          />
        </div>

        {getCarousel()}
      </div>
    </Page>
  );
}
