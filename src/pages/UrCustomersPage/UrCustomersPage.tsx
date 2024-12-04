import Page from "../../components/Page/Page";
import {legalPoints} from "../../assets/data/customersData.ts";
import {IFormState, PointsBlock} from "../../components/PointsBlock/PointsBlock.tsx";

export function UrCustomersPage(props: IFormState) {
  return (
    <Page
      id="cases"
      header={"ЮРИДИЧЕСКИМ ЛИЦАМ"}
      subheader={"«ФИНАМ» открывает доступ к ведущим международным финансовым инструментам, помогая вашему бизнесу расти даже в условиях неопределенности."}
      color={"white"}
    >
        <PointsBlock points={legalPoints} link={'https://wa.me/79134489089'} form={props}/>
    </Page>
  );
}