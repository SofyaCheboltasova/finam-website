import Page from "../../components/Page/Page";
import {legalPoints} from "../../assets/data/customersData.ts";
import {PointsBlock} from "../../components/PointsBlock/PointsBlock.tsx";

export function UrCustomersPage() {
  return (
    <Page
      id="cases"
      header={"ЮРИДИЧЕСКИМ ЛИЦАМ"}
      // subheader={"«ФИНАМ» откроет вашему бизнесу доступ к зарубежным финансовым инструментам"}
      subheader={"Защитите свой бизнес в нестабильные времена. «ФИНАМ» откроет вашему бизнесу доступ к зарубежным финансовым инструментам"}
      color={"black"}
    >
        <PointsBlock points={legalPoints} link={'https://wa.me/79134489089'}/>
    </Page>
  );
}