import Page from "../../components/Page/Page";
import {legalPoints} from "../../assets/data/strategiesData.ts";
import style from './CasesPage.module.scss'
import Button from "../../components/Button/Button.tsx";

export function CasesPage() {
  return (
    <Page
      id="cases"
      header={"ЮРИДИЧЕСКИМ ЛИЦАМ"}
      subheader={"«ФИНАМ» откроет вашему бизнесу доступ к зарубежным финансовым инструментам"}
      color={"black"}
    >
        <div className={style.block}>
            <div className={style.points}>
            {legalPoints.map(point => {
                const {id, name, description} = point;
                return (
                    <div key={id} className={style.point}>
                        <h4 className={style.header}>{name}</h4>
                        <p className={style.description}>{description}</p>
                    </div>
                )
            })}
            </div>
            <Button text={"Узнать больше"} href={'https://wa.me/79134489089'}></Button>
        </div>
    </Page>
  );
}